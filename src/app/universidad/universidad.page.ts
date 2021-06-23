import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.page.html',
  styleUrls: ['./universidad.page.scss'],
})
export class UniversidadPage implements OnInit {

  constructor() { }

  private Universidades = [
    {
      id: '1',
      nombre: 'Uniandes',
      direccio: 'Ambato',
      dir_web: 'www.uniandes.edu.ec',
      foto: 'https://uniandes.edu.ec/wp-content/uploads/2021/01/contactos-ambato.png',
      carreras: ['Odontología','Software','Turismo','Derecho','Contabilidad']
    },
    {
      id: '2',
      nombre: 'UTN',
      direccio: 'Ibarra',
      dir_web: 'www.utn.edu.ec',
      foto: 'https://uniandes.edu.ec/wp-content/uploads/2021/01/contactos-ambato.png',
      carreras: ['Odontología','Software','Turismo','Derecho','Contabilidad']
    },
    {
      id: '3',
      nombre: 'Otavalo',
      direccio: 'Otavalo',
      dir_web: 'www.Otavalo.edu.ec',
      foto: 'https://uniandes.edu.ec/wp-content/uploads/2021/01/contactos-ambato.png',
      carreras: ['Odontología','Software','Turismo','Derecho','Contabilidad']
    }
  ]

  ngOnInit() {
  }

}
