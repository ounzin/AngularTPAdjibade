import { Injectable } from "@angular/core";
import { Ticket } from "../../models/ticket";
import { TICKETS_MOCKED } from "../../mocks/tickets.mock";
import { BehaviorSubject } from "rxjs/index";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(
    this.ticketList
  );

  constructor() {}

  addTicket(ticket: Ticket) {
    this.ticketList.push(ticket);
    this.tickets$.next(this.ticketList);
  }

  deleteTicket(ticket: Ticket) {
    this.ticketList = this.ticketList.filter((t) => t !== ticket);
    this.tickets$.next(this.ticketList);
  }

  archiveTicket(ticket: Ticket) {
    this.ticketList.forEach((t) => {
      if (t === ticket) {
        t.archived = true;
      }
    });
    this.tickets$.next(this.ticketList);
    console.log(this.ticketList);
  }

  displayOrHideArchivedTickets(displayArchives) {
    if (displayArchives) {
      this.tickets$.next(this.ticketList);
    } else {
      this.tickets$.next(this.ticketList.filter((t) => t.archived === false));
    }
  }
}
