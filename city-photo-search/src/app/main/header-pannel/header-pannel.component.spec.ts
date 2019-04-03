import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPannelComponent } from './header-pannel.component';

describe('HeaderPannelComponent', () => {
  let component: HeaderPannelComponent;
  let fixture: ComponentFixture<HeaderPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
