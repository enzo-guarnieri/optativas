import { Optativa } from "../domain/Optativa";

interface Props {
  selecionadas: Optativa[];
  onRemove: (id: number) => void;
}

export default function Selecionadas({ selecionadas, onRemove }: Props) {
  return (
    <section className="bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-lg font-semibold mb-4">
        Selecionadas ({selecionadas.length}/3)
      </h2>

      {selecionadas.length === 0 && (
        <p className="text-sm text-slate-400">Nenhuma optativa selecionada</p>
      )}

      <div className="space-y-3">
        {selecionadas.map((opt) => (
          <div
            key={opt.id}
            className="flex justify-between items-center border rounded-xl p-3 bg-slate-50"
          >
            <span className="text-sm font-medium">{opt.nome}</span>

            <button
              onClick={() => onRemove(opt.id)}
              className="text-xs px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
