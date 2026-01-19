export type DiaSemana = "SEG" | "TER" | "QUA" | "QUI" | "SEX";

export interface Slot {
  dia: DiaSemana;
  fases: number[];
}
