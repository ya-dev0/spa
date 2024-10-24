"use server";

import { RecipeProp } from "@/components/RecipeCard";

export async function fetchRecipes(): Promise<RecipeProp[]> {
  const url = 'https://keto-diet.p.rapidapi.com/?protein_in_grams__lt=15&protein_in_grams__gt=5';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
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
