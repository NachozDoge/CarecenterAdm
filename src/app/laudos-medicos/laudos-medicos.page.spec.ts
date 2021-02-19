import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaudosMedicosPage } from './laudos-medicos.page';

describe('LaudosMedicosPage', () => {
  let component: LaudosMedicosPage;
  let fixture: ComponentFixture<LaudosMedicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaudosMedicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaudosMedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
