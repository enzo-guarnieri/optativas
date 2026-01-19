import { Slot } from "./Slot";

export interface Optativa {
  id: number;
  nome: string;
  professor: string;
  turno: "Manhã" | "Noite";
  slots: Slot[];
}
