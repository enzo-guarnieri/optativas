import { Optativa } from "../domain/Optativa";
import { DiaSemana } from "../domain/Slot";

const DIAS: { key: DiaSemana; label: string }[] = [
  { key: "SEG", label: "Seg" },
  { key: "TER", label: "Ter" },
  { key: "QUA", label: "Qua" },
  { key: "QUI", label: "Qui" },
  { key: "SEX", label: "Sex" },
];

const HORARIOS: Record<number, string> = {
  1: "07:30",
  2: "08:20",
  3: "09:20",
  4: "10:10",
  12: "19:20",
  13: "20:10",
  14: "21:10",
  15: "22:00",
};

interface Props {
  selecionadas: Optativa[];
}

export default function GradeCalendario({ selecionadas }: Props) {
  function ocupada(dia: DiaSemana, fase: number): Optativa | undefined {
    return selecionadas.find((opt) =>
      opt.slots.some((slot) => slot.dia === dia && slot.fases.includes(fase)),
    );
  }

  return (
    <section className="bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-lg font-semibold mb-4">Grade Horária</h2>

      <div className="grid grid-cols-6 gap-px bg-slate-300 text-sm">
        {/* Cabeçalho */}
        <div className="bg-white"></div>
        {DIAS.map((d) => (
          <div key={d.key} className="bg-white font-semibold text-center p-2">
            {d.label}
          </div>
        ))}

        {/* Linhas */}
        {Object.entries(HORARIOS).map(([fase, label]) => (
          <div key={fase} className="contents">
            {/* Horário */}
            <div className="bg-white p-2 font-medium text-xs">
              {fase}
              <br />
              {label}
            </div>

            {/* Células */}
            {DIAS.map((dia) => {
              const opt = ocupada(dia.key, Number(fase));

              return (
                <div
                  key={dia.key}
                  className={`h-16 flex items-center justify-center text-xs text-center
                    ${
                      opt
                        ? "bg-blue-200 font-semibold text-blue-900"
                        : "bg-white"
                    }`}
                >
                  {opt?.nome}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
