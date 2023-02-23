import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {
  TicketComponent,
  TicketFormComponent,
  TicketListComponent,
} from "./tickets";
import { TicketService } from "../services/ticket/ticket.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { UserListComponent } from "./users/user-list/user-list.component";
import { UserComponent } from "./users/user/user.component";
import { TicketWrapperComponent } from "./tickets/ticket-wrapper/ticket-wrapper.component";
import { UserWrapperComponent } from "./users/user-wrapper/user-wrapper.component";
import { UserFormComponent } from "./users/user-form/user-form.component";

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    TicketWrapperComponent,
    HeaderComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    UserWrapperComponent,

    // All the components needs to be declared
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Import all dependencies
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [TicketService], // All the services need to be provided
  bootstrap: [AppComponent],
})
export class AppModule {}
