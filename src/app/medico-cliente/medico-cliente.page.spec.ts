import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicoClientePage } from './medico-cliente.page';

describe('MedicoClientePage', () => {
  let component: MedicoClientePage;
  let fixture: ComponentFixture<MedicoClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicoClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
