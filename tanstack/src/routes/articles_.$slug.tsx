import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/articles_/$slug")({
  component: RouteComponent,
  loader: async ({ params }) => {
    console.log(params);
    const res = await fetch(`http://localhost:1337/api/articles?filters[slug][$eq]=${params.slug}`);
    const data = await res.json();
    return { article: data.data };
  },
});

function RouteComponent() {
  const router = useRouter();

  const { article } = Route.useLoaderData();
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300 p-4">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => router.history.back()}
          className="cursor-pointer inline-flex items-center gap-1 hover:bg-slate-700 text-xl font-medium border border-gray-300 rounded-full pl-2 pr-4 py-1 my-6"
        >
          <ArrowLeft size={20} /> Back
        </button>
        <BlocksRenderer content={article[0].content} />
      </div>
    </div>
  );
}
