import { Component, OnInit } from "@angular/core";
import { Student } from "src/models/student";
import { StudentService } from "src/services/student/student.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  public userList: Student[] = [];
  constructor(public studentService: StudentService) {
    this.studentService.getStudents();
    this.studentService.students$.subscribe(
      (students) => (this.userList = students)
    );
  }

  ngOnInit() {}

  deleteUser(user: Student) {
    this.studentService.deleteStudent(user);
  }
}
