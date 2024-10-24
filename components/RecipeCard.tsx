// components/RecipeCard.tsx

import Image from "next/image";
import Link from "next/link";

export interface RecipeProp {
  id: number;
  recipe: string;
  image: string;
  difficulty: string;
  calories: number;

  measurement_1?: number | null;
  measurement_2?: number | null;
  measurement_3?: number | null;
  measurement_4?: number | null;
  measurement_5?: number | null;
  measurement_6?: number | null;
  measurement_7?: number | null;
  measurement_8?: number | null;
  measurement_9?: number | null;
  measurement_10?: number | null;
  ingredient_1?: string | null;
  ingredient_2?: string | null;
  ingredient_3?: string | null;
  ingredient_4?: string | null;
  ingredient_5?: string | null;
  ingredient_6?: string | null;
  ingredient_7?: string | null;
  ingredient_8?: string | null;
  ingredient_9?: string | null;
  ingredient_10?: string | null;
  directions_step_1?: string | null;
  directions_step_2?: string | null;
  directions_step_3?: string | null;
  directions_step_4?: string | null;
  directions_step_5?: string | null;
  directions_step_6?: string | null;
  directions_step_7?: string | null;
  directions_step_8?: string | null;
  directions_step_9?: string | null;
  directions_step_10?: string | null;
}

interface Prop {
  recipeData: RecipeProp;
}

function RecipeCard({ recipeData }: Prop) {
  return (
    <div className="max-w-sm rounded relative w-full">
      <Link href={`/recipe/${recipeData.id}`}>
        <div className="relative w-full h-[37vh] cursor-pointer">
          <Image
            src={recipeData.image}
            alt={recipeData.recipe}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </Link>
      <div className="py-4 flex flex-col gap-2">
        <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
          {recipeData.recipe}
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-white text-sm font-bold">
            Difficulty: {recipeData.difficulty}
          </p>
          <p className="text-base font-bold text-[#FFAD49]">
            Calories: {recipeData.calories}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
