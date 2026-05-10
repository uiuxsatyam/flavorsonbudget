import { MetadataRoute } from 'next';
import { getAllRecipes } from '@/lib/recipes-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://flavorsonbudget.vercel.app';

    const recipes = getAllRecipes();

    return recipes.map((recipe) => ({
        url: `${baseUrl}/recipes/${recipe.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));
}
