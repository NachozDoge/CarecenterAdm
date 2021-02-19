import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicoExamesPage } from './medico-exames.page';

describe('MedicoExamesPage', () => {
  let component: MedicoExamesPage;
  let fixture: ComponentFixture<MedicoExamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoExamesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicoExamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
