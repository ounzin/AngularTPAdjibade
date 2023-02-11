import { Ticket } from "../models/ticket";

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: "Manzor Paris U Arena",
    description: "",
    date: dateToday,
    student: "Paul",
    major: "Informatique",
    archived: false,
  },
  {
    title: "Damso place de l'amazone",
    description: "Description du voyage",
    date: dateToday,
    student: "Anakin",
    major: "Electronique",
    archived: false,
  },
  {
    title: "Nekfeu Canopée",
    description: "Description du voyage",
    date: dateToday,
    student: "Anakin",
    major: "Informatique",
    archived: true,
  },
];
