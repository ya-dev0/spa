import { fetchRecipes } from "@/app/action";
import Image from "next/image";
import { RecipeProp, MeasurementKeys, IngredientKeys, DirectionStepKeys } from "@/components/RecipeCard";

interface RecipeDetailProps {
  params: {
    id: string;
  };
}

async function RecipeDetail({ params }: RecipeDetailProps) {
  const data: RecipeProp[] = await fetchRecipes();

  const recipe = data.find((item) => item.id.toString() === params.id);

  if (!recipe) {
    return <p className="text-white">Recipe not found.</p>;
  }

  // Extract ingredients and directions
  const ingredients = [];
  for (let i = 1; i <= 10; i++) {
    const measurementKey = `measurement_${i}` as MeasurementKeys;
    const ingredientKey = `ingredient_${i}` as IngredientKeys;

    const measurement = recipe[measurementKey];
    const ingredient = recipe[ingredientKey];

    if (ingredient) {
      ingredients.push(`${measurement || ""} ${ingredient}`);
    }
  }

  const directions = [];
  for (let i = 1; i <= 10; i++) {
    const stepKey = `directions_step_${i}` as DirectionStepKeys;
    const step = recipe[stepKey];

    if (step) {
      directions.push(step);
    }
  }

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h1 className="text-4xl text-white font-bold">{recipe.recipe}</h1>

      <div className="relative w-full h-[50vh]">
        <Image
          src={recipe.image}
          alt={recipe.recipe}
          fill
          className="rounded-xl object-cover"
        />
      </div>

      <div className="text-white">
        <h2 className="text-2xl font-bold mt-8 mb-4">Ingredients</h2>
        <ul className="list-disc list-inside">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="mb-2">
              {ingredient}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Directions</h2>
        <ol className="list-decimal list-inside">
          {directions.map((step, index) => (
            <li key={index} className="mb-4">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}

export default RecipeDetail;
