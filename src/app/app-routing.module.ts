import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketWrapperComponent } from "./tickets/ticket-wrapper/ticket-wrapper.component";
import { UserWrapperComponent } from "./users/user-wrapper/user-wrapper.component";

const routes: Routes = [
  { path: "tickets", component: TicketWrapperComponent },
  { path: "users", component: UserWrapperComponent },
  { path: "", redirectTo: "/tickets", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
