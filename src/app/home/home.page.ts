import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormularioTareaComponent} from './formulario-tarea/formulario-tarea.component';
import {TodolistService} from './todolist.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public titulo = 'Hola Estudiantes!';
  // Formato JSON
  public tareas = [

  ];
  constructor(public modalC: ModalController, protected todoService: TodolistService) {
    this.todoService.getToDoList().subscribe(resp =>
     this.tareas = resp
    );
  }


  /**
   * Este metodo abrira la modal
   */
  async clicBoton() {
    const modal = await this.modalC.create({
      component: FormularioTareaComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
