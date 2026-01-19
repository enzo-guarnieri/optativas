import { Optativa } from "../domain/Optativa";

export const OPTATIVAS: Optativa[] = [
  {
    id: 1,
    nome: "Web Mobile",
    professor: "Joaquim / Paula",
    turno: "Manhã",
    slots: [
      { dia: "QUA", fases: [1, 2] },
      { dia: "QUI", fases: [1, 2] },
      { dia: "SEX", fases: [3, 4] },
    ],
  },
  {
    id: 2,
    nome: "Administração de Negócios",
    professor: "Rinaldo",
    turno: "Manhã",
    slots: [
      { dia: "SEG", fases: [3, 4] },
      { dia: "TER", fases: [3, 4] },
    ],
  },
  {
    id: 3,
    nome: "Jogos Digitais",
    professor: "Luiz Lozano / Leandro Pupo",
    turno: "Manhã",
    slots: [
      { dia: "TER", fases: [1, 2] },
      { dia: "QUA", fases: [3, 4] },
    ],
  },
  {
    id: 4,
    nome: "TESTE DE SOFTWARE",
    professor: "Kassya /Gustavo Calixto",
    turno: "Manhã",
    slots: [
      { dia: "SEG", fases: [3, 4] },
      { dia: "QUA", fases: [3, 4] },
    ],
  },
  {
    id: 5,
    nome: "TÓPICOS DE BANCO DE DADOS",
    professor: "Jamilson",
    turno: "Manhã",
    slots: [
      { dia: "TER", fases: [1, 2] },
      { dia: "QUA", fases: [1, 2] },
    ],
  },
  {
    id: 6,
    nome: "CIÊNCIA DE DADOS",
    professor: "Carolina",
    turno: "Manhã",
    slots: [{ dia: "TER", fases: [1, 2] }],
  },
  {
    id: 7,
    nome: "PROJETOS E INOVAÇÃO EM TI ",
    professor: "Paula",
    turno: "Manhã",
    slots: [
      { dia: "QUA", fases: [3, 4] },
      { dia: "QUI", fases: [3, 4] },
    ],
  },
  {
    id: 8,
    nome: "SISTEMAS INTEGRADOS DE GESTÃO",
    professor: "Renata Nogueira",
    turno: "Manhã",
    slots: [
      { dia: "SEG", fases: [1, 2] },
      { dia: "QUA", fases: [1, 2] },
    ],
  },

  {
    id: 9,
    nome: "Web Mobile",
    professor: "Joaquim / Paula",
    turno: "Noite",
    slots: [
      { dia: "TER", fases: [12, 13] },
      { dia: "QUA", fases: [12, 13] },
      { dia: "QUI", fases: [14, 15] },
    ],
  },
  {
    id: 10,
    nome: "Administração de Negócios",
    professor: "Dirceu",
    turno: "Noite",
    slots: [
      { dia: "TER", fases: [14, 15] },
      { dia: "QUA", fases: [14, 15] },
    ],
  },
  {
    id: 11,
    nome: "Jogos Digitais",
    professor: "Luiz Lozano / Leandro Pupo",
    turno: "Noite",
    slots: [
      { dia: "SEG", fases: [14, 15] },
      { dia: "TER", fases: [14, 15] },
    ],
  },
  {
    id: 12,
    nome: "TESTE DE SOFTWARE",
    professor: "Kassya / Lozano",
    turno: "Noite",
    slots: [
      { dia: "SEG", fases: [14, 15] },
      { dia: "QUA", fases: [14, 15] },
    ],
  },
  {
    id: 13,
    nome: "TÓPICOS DE BANCO DE DADOS",
    professor: "Jamilson",
    turno: "Noite",
    slots: [
      { dia: "TER", fases: [14, 15] },
      { dia: "QUI", fases: [14, 15] },
    ],
  },
  {
    id: 14,
    nome: "CIÊNCIA DE DADOS INGLÊS",
    professor: "Arnaldo Vallim",
    turno: "Noite",
    slots: [{ dia: "TER", fases: [12, 13] }],
  },
  {
    id: 15,
    nome: "PROJETOS E INOVAÇÃO EM TI ",
    professor: " Renata Mendes",
    turno: "Noite",
    slots: [
      { dia: "QUA", fases: [12, 13] },
      { dia: "QUI", fases: [12, 13] },
    ],
  },
  {
    id: 16,
    nome: "SISTEMAS INTEGRADOS DE GESTÃO",
    professor: "Renata Nogueira",
    turno: "Noite",
    slots: [
      { dia: "SEG", fases: [14, 15] },
      { dia: "TER", fases: [14, 15] },
    ],
  },
  {
    id: 17,
    nome: "CIÊNCIA DE DADOS",
    professor: " Lucas Cerqueira",
    turno: "Noite",
    slots: [{ dia: "SEG", fases: [12, 13] }],
  },
];
