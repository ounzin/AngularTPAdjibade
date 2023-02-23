import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Student } from "src/models/student";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  @Input()
  user: Student;

  @Output()
  userHasBeenDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}
  ngOnInit() {}

  deleteUser() {
    this.userHasBeenDeleted.emit(true);
  }
}
