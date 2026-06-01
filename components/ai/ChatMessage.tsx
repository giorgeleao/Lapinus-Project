import Card from "../ui/Card";

interface Props {
  message: string;
}

export default function ChatMessage({
  message,
}: Props) {
  return (
    <Card className="p-6">
      <p className="leading-7">
        {message}
      </p>
    </Card>
  );
}