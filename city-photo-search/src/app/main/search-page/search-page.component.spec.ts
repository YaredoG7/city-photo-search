import { fakeAsync, tick, async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPageComponent } from './search-page.component';
import { CityRepository } from '../../model/city.repository';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
import { Observable,  of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

class MockService {

  mockData = [
    {
      country: 'testCountry1',
      city: 'Capital1'
    },
    {
      country: 'testCountry2',
      city: 'Capital2'
    },
    {
      country: 'testCountry3',
      city: 'Capital3'
    }
  ]

  getData(): Observable<any[]> {
  return of(this.mockData);
  }
}

class MockNotification extends NotificationService {
  // test on this service could be mocked in here
}

// f prifix to test only this component

fdescribe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let debugElement: DebugElement;
  let bindingElement: HTMLSpanElement;
  let service: MockService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ],
      providers: [{provide: CityRepository, useClass: MockService},
                  {provide: NotificationService},
                  {provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }}],
      schemas:     [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    bindingElement = debugElement.query(By.css('.input-filed button')).nativeElement;
    fixture.detectChanges();
  });

  beforeEach(() => {service = new MockService()});

 it('should create', () => {
  expect(component).toBeTruthy();
});

  // checking text on tempalte

  it('should check search text exists in the template', () => {
    fixture.detectChanges();
    expect(bindingElement.textContent).toContain('Search')
  });

 // checks user event related tasks

 it('should check user input binds to variable in component ', fakeAsync(() => {
  setInputValue('.input-filed input', 'Chagni');
 //  expect(component.getImageForCity).toBe('Chagni'); // --> uncomment after setting proper event in the template
 }));


 // must be called from within fakeAsync due to use of tick()

 function setInputValue(selector: string, value: string) {
  fixture.detectChanges();
  tick();
  const input = fixture.debugElement.query(By.css(selector)).nativeElement;
  input.value = value;
  input.dispatchEvent(new Event('keydown'));
  tick();
}

it('should check search function returns filtered values', fakeAsync(() => {
  tick();
  expect(component.searchCity('1')).toBe(service.mockData[0].city.toLocaleUpperCase())
  console.log(component.searchCity('1'))
}))

it('should check subscription returns values from service', fakeAsync(() => {
  tick();
   component.subscribeToCitiesData().filter( (city, idx) => {
     expect(city === service.mockData[idx].city.toLocaleUpperCase()).toBe(true);
   })
}))

});
