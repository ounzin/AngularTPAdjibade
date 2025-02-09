import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TicketService } from "../../../services/ticket/ticket.service";
import { Ticket } from "../../../models/ticket";
import { Student } from "src/models/student";
import "src/services/student/student.service";
import { STUDENTS_MOCKED } from "src/mocks/students.mock";

@Component({
  selector: "app-ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.scss"],
})
export class TicketFormComponent implements OnInit {
  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;
  public majors: string[] = ["Informatique", "Electronique"];
  public students: Student[] = STUDENTS_MOCKED;

  constructor(
    public formBuilder: FormBuilder,
    public ticketService: TicketService
  ) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [""],
      description: [""],
      student: 0,
      major: [""],
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {}

  addTicket() {
    const selectedStudent: Student =
      this.students[this.ticketForm.get("student").value];
    const ticketToCreate: Ticket = {
      title: this.ticketForm.get("title").value,
      description: this.ticketForm.get("description").value,
      date: new Date(),
      student: selectedStudent,
      major: this.ticketForm.get("major").value,
    };
    this.ticketService.addTicket(ticketToCreate);
    this.ticketForm.reset();
  }
}
