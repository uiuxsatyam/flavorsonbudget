export interface RecipeStat {
    icon: string;
    value: string;
    label: string;
}

export interface RecipeTip {
    type: "gold" | "red" | "green";
    icon: string;
    label: string;
    text: string;
}

export interface RecipeStep {
    title: string;
    paras: string[];
    tip?: RecipeTip;
}

export interface Recipe {
    slug: string;
    title: string;
    titleEmphasis: string;
    category: string;
    subcategory: string;
    date: string;
    views: string;
    emoji: string;
    image: string;
    savingsBadgeTop?: string;
    savingsBadgeAmount: string;
    savingsBadgeSub: string;
    initialLikes: number;

    stats: RecipeStat[];

    intro: {
        lead: string;
        body: string[];
        highlights: string[];
    };

    costTable: {
        heading: string;
        headingIcon: string;
        tip?: RecipeTip;
        ingredients: { name: string; qty: string; cost: string }[];
        totalServings: string;
        totalCost: string;
        perServing: string;
        restaurantCost: string;
        saving: string;
    };

    ingredients: {
        groupName: string;
        items: string[];
    }[];

    steps: RecipeStep[];

    tips: { bold: string; text: string }[];

    substitutions: { original: string; swap: string; saves: string }[];

    variations: {
        name: string;
        desc: string;
        price: string;
        full: boolean;
    }[];

    savingsTable: {
        rows: { scenario: string; restCost: string; homeCost: string }[];
        tip: string;
    };

    nutrition: { value: string; label: string }[];

    faq: { q: string; a: string }[];

    related: {
        emoji: string;
        title: string;
        price: string;
        href: string;
    }[];

    seedComments: {
        name: string;
        color1: string;
        color2: string;
        stars: number;
        text: string;
        date: string;
    }[];
}
