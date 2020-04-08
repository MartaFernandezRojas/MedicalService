import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { viewUserPage } from './viewUser.page';

describe('viewUserPage', () => {
  let component: viewUserPage;
  let fixture: ComponentFixture<viewUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [viewUserPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(viewUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
