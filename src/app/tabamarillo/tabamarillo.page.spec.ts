import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TabamarilloPage } from './tabamarillo.page';

describe('TabamarilloPage', () => {
  let component: TabamarilloPage;
  let fixture: ComponentFixture<TabamarilloPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabamarilloPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabamarilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
