import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  loader: async () => {
    const res = await fetch("http://localhost:1337/api/home-page");
    const data = await res.json();
    return { content: data.data };
  },
});

function App() {
  const { content } = Route.useLoaderData();
  console.log("content:", content);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300 p-4">
      <BlocksRenderer content={content.content} />
    </div>
  );
}
