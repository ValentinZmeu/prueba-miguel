import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointsListComponent } from './endpoints-list.component';

describe('EndpointsListComponent', () => {
  let component: EndpointsListComponent;
  let fixture: ComponentFixture<EndpointsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndpointsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndpointsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
