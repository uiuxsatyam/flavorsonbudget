import { Recipe } from "../recipe-types";

export const pinkSaucePasta: Recipe = {
    slug: "pink-sauce-pasta",
    title: "Pink Sauce Pasta",
    titleEmphasis: "Under ₹120",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹120",
    date: "Feb 2026",
    views: "2.1k",
    emoji: "🍝",
    image: "/images/recipes/pink-sauce-pasta.png",
    savingsBadgeAmount: "₹230",
    savingsBadgeSub: "vs cafe",
    initialLikes: 156,

    stats: [
        { icon: "💰", value: "₹120", label: "Total Cost" },
        { icon: "🍽️", value: "₹60", label: "Per Serving" },
        { icon: "⏱️", value: "20 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Mild", label: "Spice Level" },
    ],

    intro: {
        lead: "Rich, creamy & full of flavor - just like your favorite café! Creamy, cheesy & absolutely irresistible! Perfect for any mood.",
        body: [
            "This <strong>pink sauce pasta</strong> brings restaurant style at home for under ₹120.",
            "A perfect blend of tangy tomato and rich cream, it’s guaranteed to satisfy your pasta cravings without breaking the bank."
        ],
        highlights: [
            "Café Style Taste",
            "Creamy & Cheesy",
            "Budget Friendly",
            "Ready in 20 Mins"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "Pasta (penne)", qty: "1 cup", cost: "₹20" },
            { name: "Tomato Puree & Veggies", qty: "Mixed", cost: "₹30" },
            { name: "Fresh Cream", qty: "1/4 cup", cost: "₹25" },
            { name: "Mozzarella Cheese & Butter", qty: "Mixed", cost: "₹35" },
            { name: "Seasonings & Herbs", qty: "To taste", cost: "₹10" },
        ],
        totalServings: "2 Servings",
        totalCost: "₹120",
        perServing: "₹60",
        restaurantCost: "₹350",
        saving: "₹230!",
    },

    ingredients: [
        {
            groupName: "Main Ingredients",
            items: [
                "🍝 1 cup Pasta (penne)",
                "🧈 1 tbsp Butter",
                "🧄 3 cloves Garlic (chopped)",
                "🧅 1/4 cup Onion (chopped)",
                "🍅 1/2 cup Tomato Puree",
                "🥛 1/4 cup Fresh Cream",
                "🧀 1/4 cup Mozzarella Cheese"
            ],
        },
        {
            groupName: "Seasonings",
            items: [
                "🌶️ 1/2 tsp Red Chili Flakes",
                "🌿 1/2 tsp Oregano",
                "🧂 Salt & Black Pepper to taste"
            ]
        }
    ],

    steps: [
        {
            title: "Boil Pasta",
            paras: [
                "Boil pasta in salted water until al dente. Drain & set aside."
            ]
        },
        {
            title: "Sauté Aromatics",
            paras: [
                "In a pan, melt butter. Add garlic & onion. Sauté until fragrant."
            ]
        },
        {
            title: "Prepare Sauce",
            paras: [
                "Add tomato puree and cook for 2 mins. Pour in fresh cream & mix well."
            ],
            tip: { type: "gold", icon: "💡", label: "Tips", text: "Add a little pasta water for a smooth & creamy sauce!" }
        },
        {
            title: "Mix Pasta",
            paras: [
                "Add boiled pasta. Season with salt, pepper & oregano. Mix everything well."
            ]
        },
        {
            title: "Garnish & Serve",
            paras: [
                "Add mozzarella cheese, garnish with chili flakes & herbs. Serve hot!"
            ]
        }
    ],

    tips: [
        { bold: "Pasta Water:", text: "Add a little pasta water for a smooth & creamy sauce!" }
    ],

    substitutions: [
        { original: "Fresh Cream", swap: "Milk with cornflour", saves: "₹10" },
        { original: "Mozzarella", swap: "Processed Cheese", saves: "₹15" }
    ],

    variations: [
        { name: "Chicken Pink Sauce", desc: "Add grilled chicken pieces.", price: "+₹50", full: false },
        { name: "Spicy Pink Sauce", desc: "Add extra chili flakes and paprika.", price: "Same ₹120", full: false }
    ],

    savingsTable: {
        rows: [
            { scenario: "Dining out", restCost: "₹350", homeCost: "₹120" }
        ],
        tip: "Enjoy café style pasta at a fraction of the cost."
    },

    nutrition: [
        { value: "350", label: "Calories" },
        { value: "45g", label: "Carbs" },
        { value: "10g", label: "Protein" },
        { value: "15g", label: "Fat" }
    ],

    faq: [
        { q: "Can I use any pasta shape?", a: "Yes, fusilli or macaroni works great too." }
    ],

    related: [
        { emoji: "🥪", title: "Three Cheese Veg Sandwich", price: "Under ₹80", href: "/recipes/three-cheese-veg-sandwich" },
        { emoji: "🍝", title: "Creamy Garlic Pasta", price: "Under ₹149", href: "/recipes/creamy-garlic-pasta" }
    ],

    seedComments: [
        { name: "Aman", color1: "#e67e22", color2: "#f39c12", stars: 5, text: "Loved the creamy texture!", date: "2 days ago" }
    ]
};
