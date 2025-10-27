import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/articles")({
  component: RouteComponent,
  loader: async () => {
    const res = await fetch("http://localhost:1337/api/articles?populate=category");
    const data = await res.json();
    return { articles: data.data };
  },
});

function RouteComponent() {
  const { articles } = Route.useLoaderData();
  console.log("articles:", articles);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300 p-4">
      <div>
        {articles.map((article: any) => (
          <Link
            className="flex items-center group"
            to={`/articles/$slug`}
            params={{ slug: article.slug }}
          >
            <h4 className="group-hover:text-gray-400">{article.title}</h4>
            <span className="bg-gray-300 text-slate-800 rounded-full px-2 py-1 text-xs ml-1">
              {article.category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
