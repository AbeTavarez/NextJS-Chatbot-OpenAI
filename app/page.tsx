import Chatbot from "@/components/Chatbot/chatbot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="mb-40 text-center">
        <h1 className="text-5xl mb-10 text-blue-400">
          AI-Powered Chatbot: A Next-Gen Virtual Assistant
        </h1>

        <p className="text-xl">
          Welcome to my AI-powered chatbot project, designed to deliver
          intelligent, real-time assistance across various domains. Built with a
          powerful stack—Next.js, TypeScript, Tailwind CSS, and OpenAI&apos;s
          API—this chatbot showcases my proficiency in developing cutting-edge,
          AI-driven applications.
        </p>
      </section>

      <section className="mb-20 w-full">
        <h2 className="text-4xl mb-10 text-blue-400">Core Features</h2>

        <ul className="text-xl list-disc">
          <li>
            Real-Time AI Responses: Leveraging OpenAI to deliver smart,
            context-aware responses.
          </li>
          <li>
            Scalable Architecture: Built with Next.js for optimal performance
            and scalability, ensuring smooth operation even under high user
            loads.
          </li>
          <li>
            Type-Safe Codebase: Ensured robust, error-free development through
            TypeScript, promoting high-quality, maintainable code.
          </li>
          <li>
            Tailored UI/UX: Crafted a modern, responsive interface with Tailwind
            CSS for an exceptional user experience across devices.
          </li>
        </ul>
      </section>

      <section className="mb-20 w-full">
        <h2 className="text-4xl mb-10 text-blue-400">Tech Stack</h2>

        <ul className="text-xl list-disc">
          <li>
            Next.js: A flexible framework enabling server-side rendering and
            seamless user interactions.
          </li>
          <li>
            TypeScript: Type-safe JavaScript for cleaner, more reliable code.
          </li>
          <li>
            Tailwind CSS: Utility-first CSS framework to rapidly design
            responsive, custom UIs.
          </li>
          <li>
            OpenAI API: Harnessing advanced AI to enable dynamic, conversational
            experiences.
          </li>
        </ul>
      </section>

      <Chatbot />
    </main>
  );
}
