import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssinaturasPage } from './assinaturas.page';

describe('AssinaturasPage', () => {
  let component: AssinaturasPage;
  let fixture: ComponentFixture<AssinaturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssinaturasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssinaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
