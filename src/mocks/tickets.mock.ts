import { Ticket } from "../models/ticket";

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: "Manzor Paris U Arena",
    description: "",
    date: dateToday,
    student: "Paul",
    major: "Informatique",
  },
  {
    title: "Damso place de l'amazone",
    description: "Description du voyage",
    date: dateToday,
    student: "Anakin",
    major: "Informatique",
  },
];
