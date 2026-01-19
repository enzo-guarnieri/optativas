import { useState } from "react";
import { Optativa } from "../domain/Optativa";

interface Props {
  optativas: Optativa[];
  selecionadas: Optativa[]; // <- novo
  onAdd: (opt: Optativa) => void;
}

export default function ListaDisponiveis({
  optativas,
  selecionadas,
  onAdd,
}: Props) {
  const [turnoFiltro, setTurnoFiltro] = useState<"Todos" | "Manhã" | "Noite">(
    "Todos",
  );

  const filtradas =
    turnoFiltro === "Todos"
      ? optativas
      : optativas.filter((o) => o.turno === turnoFiltro);

  // Filtra também as já selecionadas
  const disponiveis = filtradas.filter(
    (opt) => !selecionadas.some((s) => s.id === opt.id),
  );

  return (
    <section className="bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-lg font-bold mb-3">Optativas Disponíveis</h2>

      {/* Filtro de turno */}
      <select
        value={turnoFiltro}
        onChange={(e) => setTurnoFiltro(e.target.value as any)}
        className="border p-1 rounded mb-3"
      >
        <option value="Todos">Todos</option>
        <option value="Manhã">Manhã</option>
        <option value="Noite">Noite</option>
      </select>

      <ul>
        {disponiveis.map((opt) => (
          <li key={opt.id} className="mb-2 flex justify-between items-center">
            <span>
              {opt.nome} - {opt.professor} ({opt.turno})
            </span>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => onAdd(opt)}
            >
              Adicionar
            </button>
          </li>
        ))}
      </ul>

      {disponiveis.length === 0 && <p>Nenhuma optativa disponível</p>}
    </section>
  );
}
