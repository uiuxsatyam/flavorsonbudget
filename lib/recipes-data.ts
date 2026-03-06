import { Recipe } from "./recipe-types";
import { creamyGarlicPasta } from "./recipes/creamy-garlic-pasta";
import { chickenBiryani } from "./recipes/chicken-biryani";
import { andaBhurjiPav } from "./recipes/anda-bhurji-pav";
import { masalaOmelette } from "./recipes/masala-omelette";
import { chickenHakkaNoodles } from "./recipes/chicken-hakka-noodles";
import { choleBhature } from "./recipes/chole-bhature";
import { cabbageParatha } from "./recipes/cabbage-paratha";
import { cabbagePakoras } from "./recipes/cabbage-pakoras";
import { cabbageFriedRice } from "./recipes/cabbage-fried-rice";
import { masalaCorn } from "./recipes/masala-corn";
import { vegetablePoha } from "./recipes/vegetable-poha";
import { crunchyFrenchFries } from "./recipes/crunchy-french-fries";
import { bruschetta } from "./recipes/bruschetta";

export type { Recipe };

const allRecipes: Recipe[] = [
    creamyGarlicPasta,
    chickenBiryani,
    andaBhurjiPav,
    masalaOmelette,
    chickenHakkaNoodles,
    choleBhature,
    bruschetta,
    cabbageParatha,
    cabbagePakoras,
    cabbageFriedRice,
    masalaCorn,
    vegetablePoha,
    crunchyFrenchFries,
];

export function getAllRecipes(): Recipe[] {
    return allRecipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
    return allRecipes.find((r) => r.slug === slug);
}

export function getRecipeCategories(): string[] {
    const cats = new Set(allRecipes.map((r) => r.category));
    return ["All", ...Array.from(cats)];
}
