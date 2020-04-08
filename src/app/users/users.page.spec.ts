import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { usersPage } from './users.page';

describe('usersPage', () => {
  let component: usersPage;
  let fixture: ComponentFixture<usersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [usersPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(usersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
