import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamesPage } from './exames.page';

describe('ExamesPage', () => {
  let component: ExamesPage;
  let fixture: ComponentFixture<ExamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
