import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  // 1)Inyectar en el Constructor la libreria AngularFireStore
  constructor(protected firestore: AngularFirestore) {}
  // 2) Definir el metodo que buscara la lista de cosas para hacer
  getToDoList() {
    return this.firestore.collection('tareas').
    snapshotChanges().
    pipe( map(changes => this.filterData(changes)  ));
  }

  filterData(data){
    return data.map( item => ({
      key: item.payload.doc.id,
      data: item.payload.doc.data()
    }));
  }

  sendData(data){
    this.firestore.collection('clientes').add(data);

  }

}
