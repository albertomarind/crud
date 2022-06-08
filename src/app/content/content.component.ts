import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  tituloModal: string = 'Soy un titulo';
  mostrarModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.mostrarModal = true;
  }

}
