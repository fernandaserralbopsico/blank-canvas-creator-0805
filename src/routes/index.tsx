import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projeto em branco" },
      { name: "description", content: "Um projeto em branco para começar do zero." },
      { property: "og:title", content: "Projeto em branco" },
      { property: "og:description", content: "Um projeto em branco para começar do zero." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-foreground">Projeto em branco</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Comece a construir aqui.
        </p>
      </div>
    </div>
  );
}
