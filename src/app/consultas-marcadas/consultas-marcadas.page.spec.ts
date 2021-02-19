import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultasMarcadasPage } from './consultas-marcadas.page';

describe('ConsultasMarcadasPage', () => {
  let component: ConsultasMarcadasPage;
  let fixture: ComponentFixture<ConsultasMarcadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasMarcadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultasMarcadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
