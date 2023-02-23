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
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(
    this.studentList
  );

  public API_URL = "http://localhost:9428/api/students";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStudents();
  }

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
}
