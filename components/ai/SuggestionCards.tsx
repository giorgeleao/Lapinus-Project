import Card from "../ui/Card";

const suggestions = [
  "Meu coelho não está comendo",
  "Posso dar banana?",
  "Meu coelho está espirrando",
  "Mudança de comportamento",
  "Preparação para consulta"
];

export default function SuggestionCards() {
  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-5
      gap-4
      "
    >
      {suggestions.map((item) => (
        <Card
          key={item}
          className="
          p-5
          cursor-pointer
          hover:shadow-lg
          transition
          "
        >
          <p className="font-medium">
            {item}
          </p>
        </Card>
      ))}
    </div>
  );
}