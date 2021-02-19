import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendarExamePage } from './agendar-exame.page';

describe('AgendarExamePage', () => {
  let component: AgendarExamePage;
  let fixture: ComponentFixture<AgendarExamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendarExamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendarExamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
