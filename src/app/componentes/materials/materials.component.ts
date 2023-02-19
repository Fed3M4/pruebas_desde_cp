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
  cursos: Curso[] = [
    {nombre: 'Angular', comision: '49533', profesor: 'Federico'},
    {nombre: 'Vue', comision: '49543', profesor: 'Romina'},
    {nombre: 'NodeJS', comision: '49333', profesor: 'Christian'},
    {nombre: 'Reacr', comision: '49133', profesor: 'Leandro'},
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  columnas: string[] = ['nombre', 'comision', 'profesor', 'acciones'];

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
