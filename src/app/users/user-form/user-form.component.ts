import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Student } from "src/models/student";
import { StudentService } from "src/services/student/student.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public studentService: StudentService
  ) {
    this.userForm = this.formBuilder.group({
      nom: [""],
      prenom: [""],
    });
  }

  ngOnInit() {}

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  addUser() {
    this.studentService.buildAlreadyUsedIds();
    const alreadyUsedIds = this.studentService.alreadyUsedIds$.value;
    const id = this.getRandomInt(10000);
    while (alreadyUsedIds.includes(id)) {
      this.getRandomInt(10000);
    }
    const userToCreate: Student = {
      id: id,
      nom: this.userForm.get("nom").value,
      prenom: this.userForm.get("prenom").value,
    };
    this.studentService.addStudent(userToCreate);
    this.userForm.reset();
  }
}
