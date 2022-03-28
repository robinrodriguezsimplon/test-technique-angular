import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSort } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { TranslatePipe } from "src/app/pipes/translate.pipe";
import { Person } from "../person";
import { PersonGeneratorComponent } from "../person-generator/person-generator.component";
import { PersonListComponent } from "./person-list.component";

describe("PersonListComponent", () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;

  let PERSONS: Person[];

  const DEFAULT_CONFIG = {
    count: 3,
    male: true,
    female: true,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PersonListComponent,
        PersonGeneratorComponent,
        TranslatePipe,
      ],
      imports: [
        MatTableModule,
        MatCheckboxModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.sort = { active: "id", direction: "asc" } as MatSort;
    PERSONS = [
      {
        id: 1,
        firstName: "John",
        lastName: "REESE",
        email: "john@reese.com",
        gender: "Male",
      },
      {
        id: 2,
        firstName: "Harold",
        lastName: "FINCH",
        email: "harold@finch.com",
        gender: "Male",
      },
      {
        id: 3,
        firstName: "Joss",
        lastName: "CARTER",
        email: "joss@carter.com",
        gender: "Female",
      },
    ];
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  describe("applyGenderFilter", () => {
    it("should return filtered values by gender", () => {
      DEFAULT_CONFIG.male = false;
      expect(
        component
          .applyGenderFilter(PERSONS, DEFAULT_CONFIG)
          .map((p) => p.gender)
      ).toEqual(["Female"]);
    });
  });
  describe("applyLengthFilter", () => {
    it("should return filtered values by length", () => {
      DEFAULT_CONFIG.count = 1;
      expect(component.applyLengthFilter(PERSONS, DEFAULT_CONFIG).length).toBe(
        1
      );
    });
  });
  describe("setDataSource", () => {
    it("should set data in dataSource ", () => {
      component.dataSource.data = [];
      component.setDataSource(PERSONS);
      expect(component.dataSource.data.length).toBe(3);
    });
  });
});
