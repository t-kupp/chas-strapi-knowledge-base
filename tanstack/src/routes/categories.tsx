import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/categories")({
  component: RouteComponent,
  loader: async () => {
    const res = await fetch("http://localhost:1337/api/categories");
    const data = await res.json();
    return { categories: data.data };
  },
});

function RouteComponent() {
  const { categories } = Route.useLoaderData();
  console.log("categories:", categories);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300 p-4">
      {categories.map((category: any) => (
        <Link
          className="flex items-center group"
          to={`/categories/$slug`}
          params={{ slug: category.slug }}
        >
          <h4 className="group-hover:text-gray-400">{category.name}</h4>
        </Link>
      ))}
    </div>
  );
}
