export interface Guide {
    slug: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    category: "Challenge" | "Cooking 101" | "Comparison";
    date: string;
    views: string;
    author: string;

    intro: {
        lead: string;
        body: string[];
        keyTakeaways: string[];
    };

    sections: {
        title: string;
        content: string[];
        list?: string[];
        type: "text" | "stats" | "comparison" | "checklist";
    }[];

    faqs: { q: string; a: string }[];

    relatedRecipes: {
        title: string;
        price: string;
        emoji: string;
        slug: string;
    }[];
}
