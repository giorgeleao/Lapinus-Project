import ChatInput from "../../../components/ai/ChatInput";
import ChatMessage from "../../../components/ai/ChatMessage";

export default function LapiIA() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Lapi IA
      </h1>

      <div className="space-y-4 mb-6">
        <ChatMessage message="Olá! Sou a Lapi IA. Como posso ajudar você e seu coelho hoje?" />

        <ChatMessage message="Posso ajudar com alimentação, saúde, comportamento e manejo." />
      </div>

      <ChatInput />
    </main>
  );
}