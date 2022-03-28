import { Component, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource, Sort } from "@angular/material";
import { MatPaginator } from "@angular/material/paginator";
import { Subscription } from "rxjs";
import { GenerationConfig } from "../generation-config";
import { Person } from "../person";
import { PersonService } from "../person.service";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.scss"],
})
export class PersonListComponent {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  subscription: Subscription;
  displayedColumns: string[] = [
    "id",
    "firstName",
    "lastName",
    "gender",
    "email",
  ];
  dataSource: MatTableDataSource<Person> = new MatTableDataSource();

  constructor(private personService: PersonService) {}

  /**
   * Generated datas for Mat Table with filtered values
   * @param {GenerationConfig} config
   */
  generate(config: GenerationConfig) {
    this.personService.getPersons().subscribe((persons) => {
      let data: Person[];
      data = this.applyGenderFilter(persons, config);
      data = this.applyLengthFilter(data, config);
      this.setDataSource(data);
      this.applySortAndPaginator();
    });
  }

  /**
   * Applies gender filter
   * @param {Person} person
   * @param {GenerationConfig} config
   * @returns {Person}
   */
  applyGenderFilter(persons: Person[], config: GenerationConfig): Person[] {
    return persons.filter(function (person) {
      for (const key in config) {
        if (config[key] === true && person.gender.toLocaleLowerCase() === key) {
          return person;
        }
      }
    });
  }

  /**
   * Applies length filter if necessary
   * @param {Person[]} data
   * @param {GenerationConfig} config
   * @returns {Person[]}
   */
  applyLengthFilter(
    filteredData: Person[],
    config: GenerationConfig
  ): Person[] {
    if (filteredData.length > config.count) {
      filteredData.length = config.count;
    }
    return filteredData;
  }

  /**
   * Set dataSource with filtered values
   * @param {Person[]} data
   */
  setDataSource(data: Person[]): void {
    this.dataSource = new MatTableDataSource(data);
  }

  /**
   * Applies sort and paginator to Mat Table
   */
  applySortAndPaginator() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    const sortState: Sort = { active: "id", direction: "asc" };
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
  }
}
