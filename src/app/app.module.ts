import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsComponent } from './componentes/materials/materials.component';
import { MaterialModule } from './material.module';
import { EditarCursosDialogComponent } from './componentes/editar-cursos-dialog/editar-cursos-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatoHoraPipe } from './pipes/formato-hora.pipe';
import { BooleanoATextoPipe } from './pipes/booleano-a-texto.pipe';
import { BooleanoEstiloDirective } from './directivas/booleano-estilo.directive';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MaterialsComponent,
    EditarCursosDialogComponent,
    FormatoHoraPipe,
    BooleanoATextoPipe,
    BooleanoEstiloDirective,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
