import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('elements')
  items: User[] = [];

  @Output()
  onSelect: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(item: User, i: number): void {
    this.onSelect.emit(item);
  }
}
