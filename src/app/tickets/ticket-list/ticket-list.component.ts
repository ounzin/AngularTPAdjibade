import { Component, OnInit } from "@angular/core";
import { TicketService } from "../../../services/ticket/ticket.service";
import { Ticket } from "../../../models/ticket";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { StudentService } from "src/services/student/student.service";
import { Student } from "src/models/student";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.scss"],
})
export class TicketListComponent implements OnInit {
  public ticketList: Ticket[] = [];
  public studentList: Student[] = [];
  public displayTicketArchived: boolean = true;

  constructor(
    public ticketService: TicketService,
    public studentService: StudentService
  ) {
    this.ticketService.tickets$.subscribe(
      (tickets) => (this.ticketList = tickets)
    );
    // this.studentService.students$.subscribe(
    //   (students) => (this.studentList = students)
    // );
    this.studentService.getStudents();
  }

  ngOnInit() {
    this.ticketService.displayOrHideArchivedTickets(this.displayTicketArchived);
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log("ticket has been clicked:", hasBeenSelected);
  }

  deleteTicket(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket);
  }

  archiveTicket(ticket: Ticket) {
    this.ticketService.archiveTicket(ticket);
  }

  showArchivedTickets() {
    this.displayTicketArchived = true;
    this.ticketService.displayOrHideArchivedTickets(this.displayTicketArchived);
  }

  hideArchivedTickets() {
    this.displayTicketArchived = false;
    this.ticketService.displayOrHideArchivedTickets(this.displayTicketArchived);
  }
}
