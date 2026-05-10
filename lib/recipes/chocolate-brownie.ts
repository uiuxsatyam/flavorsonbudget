import { Recipe } from "../recipe-types";

export const chocolateBrownie: Recipe = {
    slug: "chocolate-brownie",
    title: "Chocolate Brownie",
    titleEmphasis: "Under ₹80",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹80",
    date: "May 2026",
    views: "4.1k",
    emoji: "🍫",
    image: "/images/recipes/chocolate-brownie.png",
    savingsBadgeAmount: "₹220",
    savingsBadgeSub: "vs cafe",
    initialLikes: 340,

    stats: [
        { icon: "💰", value: "₹80", label: "Total Cost" },
        { icon: "🍽️", value: "₹13", label: "Per Serving" },
        { icon: "⏱️", value: "35 min", label: "Total Time" },
        { icon: "👥", value: "6", label: "Servings" },
        { icon: "🌶️", value: "Sweet", label: "Spice Level" },
    ],

    intro: {
        lead: "Fudgy • Rich • Irresistible. Perfectly fudgy brownies just like café!",
        body: [
            "This <strong>chocolate brownie</strong> recipe is incredibly easy and yields the most amazing fudgy, rich squares of happiness.",
            "Best enjoyed warm with a scoop of vanilla ice cream or your favorite coffee!"
        ],
        highlights: [
            "Rich Chocolatey Flavor",
            "Perfectly Fudgy & Soft",
            "Budget Friendly",
            "Makes 6 Servings"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "Dark Chocolate", qty: "1/2 cup", cost: "₹30" },
            { name: "Butter & Eggs", qty: "1/2 cup & 2", cost: "₹30" },
            { name: "Flour, Sugar, Cocoa & Others", qty: "Mixed", cost: "₹20" },
        ],
        totalServings: "6 Servings",
        totalCost: "₹80",
        perServing: "₹13",
        restaurantCost: "₹300",
        saving: "₹220!",
    },

    ingredients: [
        {
            groupName: "Main Ingredients",
            items: [
                "🍫 1/2 cup Dark Chocolate (chopped)",
                "🧈 1/2 cup Butter",
                "🥄 3/4 cup Sugar",
                "🥚 2 Eggs",
                "🌼 1 tsp Vanilla Extract",
                "🌾 3/4 cup All Purpose Flour (maida)",
                "🍫 1/4 cup Cocoa Powder",
                "🥄 1/4 tsp Baking Powder",
                "🧂 Pinch of Salt"
            ],
        },
        {
            groupName: "Optional Add-ins",
            items: [
                "🍫 1/2 cup Chocolate Chips",
                "🥜 Chopped Walnuts"
            ]
        }
    ],

    steps: [
        {
            title: "Melt Chocolate",
            paras: [
                "Melt dark chocolate and butter together. Let it cool slightly."
            ]
        },
        {
            title: "Whisk Eggs & Sugar",
            paras: [
                "Whisk eggs and sugar until light and foamy."
            ]
        },
        {
            title: "Combine Wets",
            paras: [
                "Add melted chocolate and vanilla extract. Mix well."
            ]
        },
        {
            title: "Add Dry Ingredients",
            paras: [
                "Sift in flour, cocoa powder, baking powder and salt. Mix gently."
            ]
        },
        {
            title: "Fold in Mix-ins",
            paras: [
                "Fold in chocolate chips and walnuts (if using)."
            ]
        },
        {
            title: "Bake",
            paras: [
                "Pour into a lined pan. Bake at 180°C for 25 mins. Cool before cutting."
            ],
            tip: { type: "gold", icon: "💡", label: "Tips", text: "Do not overbake for perfect fudgy texture. Cool completely for clean cuts!" }
        }
    ],

    tips: [
        { bold: "Baking Tip:", text: "Do not overbake for perfect fudgy texture. Cool completely for clean cuts!" }
    ],

    substitutions: [
        { original: "Dark Chocolate", swap: "Compound Chocolate", saves: "₹10" },
    ],

    variations: [
        { name: "Walnut Brownie", desc: "Top generously with chopped walnuts.", price: "+₹20", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Cafe", restCost: "₹300", homeCost: "₹80" }
        ],
        tip: "Enjoy café style brownies at a fraction of the cost."
    },

    nutrition: [
        { value: "250", label: "Calories" },
        { value: "32g", label: "Carbs" },
        { value: "4g", label: "Protein" },
        { value: "14g", label: "Fat" }
    ],

    faq: [
        { q: "Can I use oil instead of butter?", a: "Yes, you can use neutral oil, but butter gives a much richer flavor." }
    ],

    related: [
        { emoji: "☕", title: "Cold Coffee", price: "Under ₹60", href: "/recipes/cold-coffee" },
        { emoji: "🍓", title: "Strawberry Milkshake", price: "Under ₹60", href: "/recipes/strawberry-milkshake" }
    ],

    seedComments: [
        { name: "Priya", color1: "#607d8b", color2: "#455a64", stars: 5, text: "Best fudgy brownies ever!", date: "5 days ago" }
    ]
};
