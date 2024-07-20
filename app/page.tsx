import Chatbot from "@/components/Chatbot/chatbot";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Chatbot with OpenAI</h1>

      <Chatbot />
    </main>
  );
}
