import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamesMarcadosPage } from './exames-marcados.page';

describe('ExamesMarcadosPage', () => {
  let component: ExamesMarcadosPage;
  let fixture: ComponentFixture<ExamesMarcadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamesMarcadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamesMarcadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
