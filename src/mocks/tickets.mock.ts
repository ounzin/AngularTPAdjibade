import { Ticket } from "../models/ticket";
import { Student } from "../models/student";

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: "Manzor Paris U Arena",
    description: "",
    date: dateToday,
    student: { nom: "Paul", prenom: "Dupont" } as Student,
    major: "Informatique",
    archived: false,
  },
  {
    title: "Damso place de l'amazone",
    description: "Description du voyage",
    date: dateToday,
    student: { nom: "Marc", prenom: "Lozes" } as Student,
    major: "Electronique",
    archived: false,
  },
  {
    title: "Nekfeu Canopée",
    description: "Description du voyage",
    date: dateToday,
    student: { nom: "Frederic", prenom: "Maggioli" } as Student,
    major: "Informatique",
    archived: true,
  },
];
