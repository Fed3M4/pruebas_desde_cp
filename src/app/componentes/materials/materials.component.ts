import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { EditarCursosDialogComponent } from '../editar-cursos-dialog/editar-cursos-dialog.component';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent {
  filtro!: string;
  cursos: Curso[] = [
    {
    nombre: 'Angular',
    comision: '49533',
    profesor: { nombre: 'Federico', correo: 'fede@mail.com', fechaRegistro: new Date(1998,2,31) },
    inscripcionAbierta: true,
    fechaInicio: new Date(2023,11,1,11,0),
    fechaFin: new Date(2024,11,1,20,0)
    },
    {
      nombre: 'Vue',
      comision: '49543',
      profesor: { nombre: 'Romina', correo: 'darkwitch@mail.com', fechaRegistro: new Date(1999, 10, 8)},
      inscripcionAbierta: true,
      fechaInicio: new Date(2023,11,15,11,0),
      fechaFin: new Date(2024,11,1,20,0)
    },
    {
      nombre: 'NodeJS',
      comision: '49333',
      profesor: { nombre: 'Christian', correo: 'cfroca@mail.com', fechaRegistro: new Date(1998, 5, 21)},
      inscripcionAbierta: false,
      fechaInicio: new Date(2021, 10, 5, 8, 0),
      fechaFin: new Date(2023, 0, 10, 17, 0)
    },
    {
      nombre: 'React',
      comision: '49133',
      profesor: {nombre: 'Leandro', correo: 'lramis@mail.com', fechaRegistro: new Date(1996, 7, 23)},
      inscripcionAbierta: false,
      fechaInicio: new Date(2022,0,1,11,0),
      fechaFin: new Date(2023,1,20,20,0)
    },
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones'];

  constructor(
    private dialog: MatDialog
  ) {

  }

  abrirModal(curso: Curso) {
    const dialogRef = this.dialog.open(EditarCursosDialogComponent, {
      data: curso
    })
  }
}
