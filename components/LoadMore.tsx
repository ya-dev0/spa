"use client";

import { useState } from "react";
import RecipeCard, { RecipeProp } from "./RecipeCard";

interface LoadMoreProps {
  data: RecipeProp[];
}

function LoadMore({ data }: LoadMoreProps) {
  const [visibleData, setVisibleData] = useState<RecipeProp[]>(data.slice(0, 10));

  const handleLoadMore = () => {
    const newLength = visibleData.length + 10;
    setVisibleData(data.slice(0, newLength));
  };

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {visibleData.map((recipeData) => (
          <RecipeCard key={recipeData.id} recipeData={recipeData} />
        ))}
      </section>
      {visibleData.length < data.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default LoadMore;
