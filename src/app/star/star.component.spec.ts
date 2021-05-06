import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarComponent ],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('',()=>{
    const stars = fixture.debugElement.query(By.css('div.crop'));
    stars.triggerEventHandler('click',{});
  });
});
