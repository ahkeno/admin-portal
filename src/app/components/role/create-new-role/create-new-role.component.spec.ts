import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewRoleComponent } from './create-new-role.component';

describe('CreateNewRoleComponent', () => {
  let component: CreateNewRoleComponent;
  let fixture: ComponentFixture<CreateNewRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewRoleComponent]
    });
    fixture = TestBed.createComponent(CreateNewRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
