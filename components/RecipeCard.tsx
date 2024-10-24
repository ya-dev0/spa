import Image from "next/image";
import Link from "next/link";

export interface RecipeProp {
  id: number;
  recipe: string;
  image: string;
  difficulty: string;
  calories: number;
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
