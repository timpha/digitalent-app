import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Person} from './person';

import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {TableDataSource, ValidatorService} from 'angular4-material-table';
import {PersonValidatorService} from '../../service/person-validator.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    {provide: ValidatorService, useClass: PersonValidatorService }
  ],
})
export class TableComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;

  displayedColumns = ['name', 'age', 'email', 'address', 'curreq', 'actionsColumn'];

  @Input() personList = [
    { name: 'Lollo Andersson', age: 32, email: 'lollo.andersson@gmail.com', address: 'Pippi Långstrumpgata 4', curreq: 'Contact' },
    { name: 'Putte Planka', age: 45, email: 'putte.planka@gmail.com', address: 'Ölandstigen 34', curreq: 'Interview' },
    { name: 'Johanna Ros', age: 43, email: 'johanna.ros@gmail.com', address: 'Tystgränd 12', curreq: 'Dialogue' },
    { name: 'Rutger Rak', age: 39, email: 'rutger.rak@gmail.com', address: 'Hälsogatan 89', curreq: 'Finished' }

  ];
  @Output() personListChange = new EventEmitter<Person[]>();
  dataSource: TableDataSource<Person>;


  constructor(private personValidator: ValidatorService) { }
  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList, Person, this.personValidator);

    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }

}
