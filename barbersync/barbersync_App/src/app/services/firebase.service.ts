import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference  } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { InterBarberia } from './../interfaces/inter-barberia';
import { Ibarberia } from '../interfaces/ibarberia';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {}

  listarBarberias(): Observable<InterBarberia[]> {
    return this.firestore.collection<InterBarberia>('barberias').valueChanges({ idField: 'id' });
  }

  crearBarberia(newBarberia: Ibarberia): Promise<DocumentReference<Ibarberia>> { // Cambia el tipo de retorno a DocumentReference
    return this.firestore.collection<Ibarberia>('barberias').add(newBarberia); // Aquí se devuelve DocumentReference
  }

  getBarberiaByID(id: string): Observable<InterBarberia> {
    return this.firestore.doc<InterBarberia>(`barberias/${id}`).valueChanges({ idField: 'id' });
  }

  actualizarBarberia(barberia: InterBarberia): Promise<void> {
    const id = barberia.id;
    delete barberia.id;
    return this.firestore.doc<InterBarberia>(`barberias/${id}`).update(barberia);
  }

  eliminarBarberia(id: string): Promise<void> {
    return this.firestore.doc(`barberias/${id}`).delete();
  }
}