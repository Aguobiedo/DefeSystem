// personasData.ts

export interface Persona {
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    fechaNacimiento: string;
    condicion: string;
    deporte: string;
  }
  
  // Datos simulados de personas (simula la base de datos)
  export const personasDB: Persona[] = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', dni: '12345678', fechaNacimiento: '1990-01-01', condicion: 'Activo', deporte: 'Fútbol' },
    { id: 2, nombre: 'María', apellido: 'González', dni: '23456789', fechaNacimiento: '1985-05-15', condicion: 'Activo', deporte: 'Tenis' },
    { id: 3, nombre: 'Carlos', apellido: 'Lopez', dni: '34567890', fechaNacimiento: '2000-03-20', condicion: 'Inactivo', deporte: 'Basketball' },
    // Agrega más personas si es necesario
  ]
  