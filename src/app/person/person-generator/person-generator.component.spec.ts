import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { PersonGeneratorComponent } from "./person-generator.component";

describe("PersonGeneratorComponent", () => {
  let component: PersonGeneratorComponent;
  let fixture: ComponentFixture<PersonGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonGeneratorComponent],
      imports: [
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("checkValidation", () => {
    it("should return true if none of the gender values are selected", () => {
      component.generator.setValue({
        count: [1000],
        male: false,
        female: false,
      });
      expect(component.checkValidation()).toBeTruthy();
    });
    it("should return false if at least one of the gender values are selected", () => {
      component.generator.setValue({
        count: [1000],
        male: true,
        female: false,
      });
      expect(component.checkValidation()).toBeFalsy();
    });
  });
});
