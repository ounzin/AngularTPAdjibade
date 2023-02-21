import { Injectable } from "@angular/core";
import { Student } from "../../models/student";
import { STUDENTS_MOCKED } from "../../mocks/students.mock";
import { BehaviorSubject } from "rxjs/index";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  private studentList: Student[] = STUDENTS_MOCKED;
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(
    this.studentList
  );

  constructor() {}
}
