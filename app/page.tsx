import React from "react";
import Hero from "@/components/Hero";
import RecipeList from "@/components/RecipeList";
import { fetchRecipes } from "./action";
import { RecipeProp } from "@/components/RecipeCard";

export default async function Home() {
  const data: RecipeProp[] = await fetchRecipes();

  return (
    <>
      <Hero />
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Recipes</h2>
        <RecipeList initialData={data} />
      </main>
    </>
  );
}
