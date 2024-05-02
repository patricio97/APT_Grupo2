

  
  export interface Barbero {
    username: string;
    password: string;
    correo: string;
  }

export interface Horario {
  id: string;
  barberoId: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  reservado: boolean;
  clienteId?: string;
  servicio: string;
  precio: number;
}
