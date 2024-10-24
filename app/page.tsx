import { fetchRecipes } from "./action";
import RecipeList from "../components/RecipeList";

async function Home() {
  const data = await fetchRecipes();


  const recipes = data.map((item) => ({
    id: item.id,
    recipe: item.recipe,
    image: item.image,
    difficulty: item.difficulty,
    calories: item.calories,
  }));

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Recipes</h2>

      <RecipeList initialData={recipes} />
    </main>
  );
}

export default Home;
