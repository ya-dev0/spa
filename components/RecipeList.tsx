"use client";

import React, { useState } from "react";
import RecipeCard, { RecipeProp } from "@/components/RecipeCard";

interface RecipeListProps {
  initialData: RecipeProp[];
}

function RecipeList({ initialData }: RecipeListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredData = initialData.filter((recipe) =>
    recipe.recipe.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOption === "difficulty") {
      return a.difficulty.localeCompare(b.difficulty);
    } else if (sortOption === "calories") {
      return a.calories - b.calories;
    }
    return 0;
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <input
          type="text"
          placeholder="Search by recipe name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 w-full md:w-64"
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 rounded border border-gray-600 bg-gray-800 text-white w-full md:w-64"
        >
          <option value="">No sorting</option>
          <option value="difficulty">Sort by Difficulty</option>
          <option value="calories">Sort by Calories</option>
        </select>
      </div>

      {sortedData.length === 0 ? (
        <p className="text-white">No recipes found.</p>
      ) : (
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {sortedData.map((recipeData) => (
            <RecipeCard key={recipeData.id} recipeData={recipeData} />
          ))}
        </section>
      )}
    </div>
  );
}

export default RecipeList;
