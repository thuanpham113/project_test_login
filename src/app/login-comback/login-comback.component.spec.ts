import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCombackComponent } from './login-comback.component';

describe('LoginCombackComponent', () => {
  let component: LoginCombackComponent;
  let fixture: ComponentFixture<LoginCombackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCombackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCombackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
