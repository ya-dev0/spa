"use server";

import { RecipeProp } from "@/components/RecipeCard";

export async function fetchRecipes(): Promise<RecipeProp[]> {
  const url = 'https://keto-diet.p.rapidapi.com/?protein_in_grams__lt=15&protein_in_grams__gt=5';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '48cdfd658fmsh5eaf69f5f14797bp17ba54jsndf41e084a797',
      'x-rapidapi-host': 'keto-diet.p.rapidapi.com',
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Error fetching data');
  }

  const data = await response.json();
  return data;
}
