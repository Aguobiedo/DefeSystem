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
  { id: 1, nombre: 'Lautaro', apellido: 'Achava', dni: '48.066.602', fechaNacimiento: '2007-04-27', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 2, nombre: 'Facundo', apellido: 'Altuna', dni: '41.501.603', fechaNacimiento: '1997-11-14', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 3, nombre: 'Fabio', apellido: 'Altuna', dni: '45.813.427', fechaNacimiento: '2004-08-09', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 4, nombre: 'Fabricio', apellido: 'Arias', dni: '40.116.482', fechaNacimiento: '1997-09-16', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 5, nombre: 'Emanuel', apellido: 'Benitez', dni: '41.975.451', fechaNacimiento: '1999-06-14', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 6, nombre: 'Hector', apellido: 'Benitez', dni: '46.042.096', fechaNacimiento: '2004-11-08', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 7, nombre: 'Kevin', apellido: 'Bulacio', dni: '46.042.149', fechaNacimiento: '2004-08-20', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 8, nombre: 'Uriel', apellido: 'Cabral', dni: '41.637.073', fechaNacimiento: '2005-11-12', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 9, nombre: 'Dario', apellido: 'Castro', dni: '38.135.517', fechaNacimiento: '1994-07-09', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 10, nombre: 'Nicolas', apellido: 'Claverol', dni: '45.489.739', fechaNacimiento: '2003-12-01', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 11, nombre: 'Jesus', apellido: 'Fared', dni: '38.086.270', fechaNacimiento: '1994-03-25', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 12, nombre: 'Agustin', apellido: 'Farias', dni: '45.413.932', fechaNacimiento: '2004-01-19', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 13, nombre: 'Geronimo', apellido: 'Farias', dni: '46.879.477', fechaNacimiento: '2006-01-11', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 14, nombre: 'Lautaro', apellido: 'Farias', dni: '46.879.473', fechaNacimiento: '2005-10-27', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 15, nombre: 'Ariel', apellido: 'Fernandez', dni: '34.033.186', fechaNacimiento: '1989-06-08', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 16, nombre: 'Lautaro', apellido: 'Ferrero', dni: '38.815.987', fechaNacimiento: '1995-07-10', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 17, nombre: 'Gino', apellido: 'Francescangelis', dni: '40.920.638', fechaNacimiento: '1998-07-27', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 18, nombre: 'Rodrigo', apellido: 'Garnica', dni: '38.815.961', fechaNacimiento: '1996-12-01', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 19, nombre: 'Joan', apellido: 'Ghirardelo', dni: '35.182.551', fechaNacimiento: '1990-02-27', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 20, nombre: 'Hernan', apellido: 'Giordano', dni: '35.289.417', fechaNacimiento: '1990-08-16', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 21, nombre: 'Agustin', apellido: 'Godoy', dni: '40.038.847', fechaNacimiento: '1998-08-06', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 22, nombre: 'Leonardo', apellido: 'Gonzalez', dni: '46.880.032', fechaNacimiento: '2006-01-13', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 23, nombre: 'Ian', apellido: 'Lambertucci', dni: '41.975.430', fechaNacimiento: '2000-01-01', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 24, nombre: 'Marcos', apellido: 'Lucentini', dni: '42.933.1974', fechaNacimiento: '2000-07-05', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 25, nombre: 'Alejandro', apellido: 'Mansilla', dni: '44.525.585', fechaNacimiento: '2003-02-25', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 26, nombre: 'Santiago', apellido: 'Moyano', dni: '44.045.716', fechaNacimiento: '2002-03-26', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 27, nombre: 'Brian', apellido: 'Nuñez', dni: '37.049.956', fechaNacimiento: '1992-07-18', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 28, nombre: 'Claudio', apellido: 'Orona', dni: '35.294.078', fechaNacimiento: '1990-04-17', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 29, nombre: 'Miguel', apellido: 'Pagan', dni: '41.976.577', fechaNacimiento: '1998-01-05', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 30, nombre: 'Agustin', apellido: 'Pasaragua', dni: '41.601.509', fechaNacimiento: '1998-12-10', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 31, nombre: 'Sergio', apellido: 'Pereyra', dni: '47.209.525', fechaNacimiento: '2006-08-02', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 32, nombre: 'Lisandro', apellido: 'Pérez', dni: '48.886.856', fechaNacimiento: '2008-09-26', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 33, nombre: 'Ramiro', apellido: 'Potassa', dni: '45.508.911', fechaNacimiento: '2006-06-04', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 34, nombre: 'Jose', apellido: 'Pozzo', dni: '44.773.203', fechaNacimiento: '2003-03-25', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 35, nombre: 'Mariano Damian', apellido: 'Talamonti', dni: '38.451.482', fechaNacimiento: '1995-09-25', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 36, nombre: 'Ramiro', apellido: 'Valdez', dni: '43.956.342', fechaNacimiento: '2002-04-11', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 37, nombre: 'Rodrigo', apellido: 'Varela', dni: '40.116.483', fechaNacimiento: '1997-09-22', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 38, nombre: 'Nicolas', apellido: 'Vazquez', dni: '44.525.566', fechaNacimiento: '2003-01-26', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 39, nombre: 'Gabriel', apellido: 'Lopez', dni: '49.200.511', fechaNacimiento: '2007-07-24', condicion: 'Deportista', deporte: 'Futbol Mayor' },
  { id: 40, nombre: 'Luciano', apellido: 'Collodi', dni: '41.673.073', fechaNacimiento: '1997-12-12', condicion: 'Deportista', deporte: 'Futbol Mayor' }
]
