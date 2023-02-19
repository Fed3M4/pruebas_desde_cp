import { createInjectableType } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-editar-cursos-dialog',
  templateUrl: './editar-cursos-dialog.component.html',
  styleUrls: ['./editar-cursos-dialog.component.css']
})
export class EditarCursosDialogComponent {
  formulario: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<EditarCursosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(data.nombre),
      comision: new FormControl(data.comision),
      profesor: new FormControl(data.profesor)
    })
  }
}