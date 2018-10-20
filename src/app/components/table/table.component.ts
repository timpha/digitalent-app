import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, combineLatest} from 'rxjs';

import {columnNames, people} from './data';

import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  private people$ = new BehaviorSubject(people);

  // Public observable for table
  dataSource$ = new BehaviorSubject<any[]>([]);

  // Array of column names
  columns = columnNames;

  // Pagination data
  currentPage$ = new BehaviorSubject(1);
  // Will react to changes in the datasource observable and also the current page
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  pageSize$ = new BehaviorSubject<number>(5);

  searchFormControl = new FormControl();
  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');


  constructor() { }

  ngOnInit() {
    // map source to people observable
    // this.dataSource$ = this.people$.pipe(map(v => Object.values(v)));

    // Sliced data for pagination
    combineLatest(this.dataSource$, this.currentPage$, this.pageSize$)
      .subscribe(([allSources, currentPage, pageSize]) => {
        const startingIndex = (currentPage - 1) * pageSize;
        const onPage = allSources.slice(startingIndex, startingIndex + pageSize);
        this.dataOnPage$.next(onPage);
      });

    combineLatest(this.people$, this.searchFormControl.valueChanges, this.sortKey$, this.sortDirection$)
      .subscribe(([changedPersonData, searchTerm, sortKey, sortDirection]) => {
        const personArray = Object.values(changedPersonData);
        let filterdPersons: any[];

        if (!searchTerm) {
          filterdPersons = personArray;
        } else {
          const filteredResults = personArray.filter(person => {
            return Object.values(person)
              .reduce((prev, curr) => {
                return prev || curr.toString().toLowerCase().includes(searchTerm.toLowerCase());
              }, false);
          });
          filterdPersons = filteredResults;
        }

        const sortedPersons = filterdPersons.sort((a, b) => {
          if(a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1;
          if(a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1;
          return 0;
        });

        this.dataSource$.next(sortedPersons);
      });

    this.searchFormControl.setValue('');
  }

  adjustSort(key: string) {
    if (this.sortKey$.value === key) {
      if (this.sortDirection$.value === 'asc') {
        this.sortDirection$.next('desc');
      } else {
        this.sortDirection$.next('asc');
      }
      return;
    }

    this.sortKey$.next(key);
    this.sortDirection$.next('asc');
  }

  addToList(peopleName: string) {
    const updatePeople = this.people$.value[peopleName];

    updatePeople.attack++;

    const newPeopleData = { ... this.people$.value, [peopleName]: updatePeople };

    this.people$.next(newPeopleData);

  }

}
