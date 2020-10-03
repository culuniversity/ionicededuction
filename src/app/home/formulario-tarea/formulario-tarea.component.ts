import { Component, OnInit } from '@angular/core';
import {TodolistService} from '../todolist.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.scss'],
})
export class FormularioTareaComponent implements OnInit {
  // 1) Defino Propiedad
  public formTareas: FormGroup;
  // Inyectar Servicio por el Constructor
  constructor(protected todoService: TodolistService, protected fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formTareas = this.fb.group({
      actividad: '',
      hora: ''
    });
  }

  guardar(datos){
   this.todoService.sendData(datos);
  }

}
