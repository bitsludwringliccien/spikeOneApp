import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsumosPage } from './consumos.page';

describe('ConsumosPage', () => {
  let component: ConsumosPage;
  let fixture: ComponentFixture<ConsumosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
