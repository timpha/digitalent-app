import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { faCoffee, faAddressCard, faCheck, faComments, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drag-list',
  templateUrl: './drag-list.component.html',
  styleUrls: ['./drag-list.component.css']
})
export class DragListComponent implements OnInit {
  faCoffee = faCoffee;
  faAddressCard = faAddressCard;
  faCheck = faCheck;
  faComments = faComments;
  faMoneyCheckAlt = faMoneyCheckAlt;

  contact = [
    'Lollo Andersson',
    'Putte Planka',
    'Görgen Kristoffersson',
    'Ivar Johansson'
  ];

  dialog = [];
  interview = [];
  offer = [];
  finished = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
