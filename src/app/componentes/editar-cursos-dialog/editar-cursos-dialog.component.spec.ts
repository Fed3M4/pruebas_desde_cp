import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCursosDialogComponent } from './editar-cursos-dialog.component';

describe('EditarCursosDialogComponent', () => {
  let component: EditarCursosDialogComponent;
  let fixture: ComponentFixture<EditarCursosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCursosDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCursosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
