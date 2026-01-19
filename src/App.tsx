import { useState } from "react";

import { OPTATIVAS } from "./data/optativas";
import { Optativa } from "./domain/Optativa";

import ListaDisponiveis from "./components/ListaDisponiveis";
import Selecionadas from "./components/Selecionadas";
import GradeCalendario from "./components/GradeCalendario";

export default function App() {
  const [selecionadas, setSelecionadas] = useState<Optativa[]>([]);

  function adicionar(opt: Optativa) {
    if (selecionadas.length >= 3) return;
    if (selecionadas.some((o) => o.id === opt.id)) return;

    setSelecionadas((prev) => [...prev, opt]);
  }

  function remover(id: number) {
    setSelecionadas((prev) => prev.filter((o) => o.id !== id));
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Optativas – 8º Semestre</h1>

        {/* Linha superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ListaDisponiveis
            optativas={OPTATIVAS}
            onAdd={adicionar}
            selecionadas={selecionadas}
          />

          <Selecionadas selecionadas={selecionadas} onRemove={remover} />
        </div>

        {/* Grade */}
        <GradeCalendario selecionadas={selecionadas} />
      </div>
    </div>
  );
}
