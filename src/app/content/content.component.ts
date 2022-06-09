import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  tituloModal: string = 'Soy un titulo';
  mostrarModal: boolean = false;
  users: User[] = [
    {
      id: 1,
      nombre: 'pedro',
      edad: 15
    },
    {
      id: 2,
      nombre: 'jose',
      edad: 16
    },
    {
      id: 3,
      nombre: 'maria',
      edad: 17
    },
    {
      id: 4,
      nombre: 'jesus',
      edad: 18
    }
  ];

  userSelected!: User;


  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.mostrarModal = true;
  }

  selectUser(user: User) {
    console.log('El usuario que se eliminará es el siguiente: ', user);
    this.userSelected = user;
    this.openModal();
  }

}
