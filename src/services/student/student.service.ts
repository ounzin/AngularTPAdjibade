import { Injectable } from "@angular/core";
import { Student } from "../../models/student";
import { STUDENTS_MOCKED } from "../../mocks/students.mock";
import { BehaviorSubject } from "rxjs/index";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  private studentList: Student[] = STUDENTS_MOCKED;
  private alreadyUsedIds: number[] = [];

  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(
    this.studentList
  );
  public alreadyUsedIds$: BehaviorSubject<number[]> = new BehaviorSubject(
    this.alreadyUsedIds
  );

  public API_URL = "http://localhost:9428/api/students";

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  public async getStudents() {
    const stds: Student[] = [];
    const response = await this.http
      .get(this.API_URL, { observe: "response" })
      .toPromise();
    const fetchedStudent = response.body as any[];
    fetchedStudent.forEach((fs) => {
      const student: Student = {
        id: fs.studentId,
        nom: fs.LastName,
        prenom: fs.FrstName,
      };
      stds.push(student);
    });

    stds.forEach((s) => {
      if (!this.studentList.find((std) => std.id === s.id)) {
        this.studentList.push(s);
      }
    });

    this.students$.next(this.studentList);
  }

  public buildAlreadyUsedIds() {
    this.studentList.forEach((student) => {
      this.alreadyUsedIds.push(student.id);
    });
    this.alreadyUsedIds$.next(this.alreadyUsedIds);
  }

  public addStudent(student: Student) {
    this.studentList.push(student);
    this.students$.next(this.studentList);
  }

  public deleteStudent(student: Student) {
    this.studentList = this.studentList.filter((s) => s !== student);
    this.students$.next(this.studentList);
  }
}
