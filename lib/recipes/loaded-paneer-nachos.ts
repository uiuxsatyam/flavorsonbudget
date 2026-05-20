import { Recipe } from "../recipe-types";

export const loadedPaneerNachos: Recipe = {
    slug: "loaded-paneer-nachos",
    title: "Loaded Paneer Nachos",
    titleEmphasis: "Under ₹120",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹120",
    date: "May 2026",
    views: "3.2k",
    emoji: "🌮",
    image: "/images/recipes/loaded-paneer-nachos.png",
    savingsBadgeAmount: "₹230",
    savingsBadgeSub: "vs cafe",
    initialLikes: 294,

    stats: [
        { icon: "💰", value: "₹120", label: "Total Cost" },
        { icon: "🍽️", value: "₹60", label: "Per Serving" },
        { icon: "⏱️", value: "15 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Medium", label: "Spice Level" },
    ],

    intro: {
        lead: "Crispy, cheesy, spicy & totally irresistible! Loaded Paneer Nachos at home for under ₹120!",
        body: [
            "Nachos are the ultimate party snack, but restaurant portions are often expensive and soggy. This <strong>Loaded Paneer Nachos</strong> recipe solves both problems. It's packed with protein-rich paneer, fresh crunchy veggies, and a double layer of cheese.",
            "Baking them for just 5 minutes gets the mozzarella perfectly melted and bubbly while keeping the tortilla chips super crispy. Drizzle with salsa and cheese sauce for that authentic café presentation."
        ],
        highlights: [
            "Crispy & Fresh Texture",
            "Cheesy & Loaded Goodness",
            "Perfect Party Snack",
            "Protein-packed with Paneer"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "Nacho Chips", qty: "2 cups", cost: "₹25" },
            { name: "Paneer (Cubes)", qty: "1 cup / 150g", cost: "₹45" },
            { name: "Veggies & Jalapenos", qty: "Mixed", cost: "₹15" },
            { name: "Mozzarella & Cheese Sauce", qty: "1 cup & 1/4 cup", cost: "₹25" },
            { name: "Salsa & Seasoning", qty: "Mixed", cost: "₹10" }
        ],
        totalServings: "2 Servings",
        totalCost: "₹120",
        perServing: "₹60",
        restaurantCost: "₹350",
        saving: "₹230!",
    },

    ingredients: [
        {
            groupName: "Nachos & Protein",
            items: [
                "🌽 2 cups Nacho Chips",
                "🧀 1 cup Paneer (cubes)"
            ],
        },
        {
            groupName: "Veggies & Toppings",
            items: [
                "🫑 1/4 cup Capsicum (chopped)",
                "🧅 1/4 cup Onion (chopped)",
                "🌽 1/4 cup Sweet Corn (boiled)",
                "🌶️ 2 tbsp Jalapenos (sliced)"
            ],
        },
        {
            groupName: "Sauces & Seasonings",
            items: [
                "🧀 1 cup Mozzarella Cheese (grated)",
                "🧀 1/4 cup Cheese Sauce",
                "🌶️ 1 tsp Peri Peri Seasoning",
                "🍅 1/4 cup Salsa",
                "🌿 Fresh Coriander (for garnish)"
            ],
        }
    ],

    steps: [
        {
            title: "Spread Nachos",
            paras: [
                "Spread nacho chips evenly on a baking tray lined with parchment paper."
            ]
        },
        {
            title: "Add Toppings",
            paras: [
                "Add paneer cubes and chopped capsicum, onion, and sweet corn evenly over the chips."
            ]
        },
        {
            title: "Add Cheese & Sauce",
            paras: [
                "Sprinkle grated mozzarella cheese and drizzle cheese sauce generously over the toppings."
            ]
        },
        {
            title: "Bake",
            paras: [
                "Bake at 180°C in a preheated oven (or cook in a covered pan on low flame) for 5-7 minutes until the mozzarella cheese melts and turns bubbly."
            ]
        },
        {
            title: "Finish & Serve",
            paras: [
                "Drizzle fresh salsa over the hot nachos.",
                "Sprinkle peri peri seasoning and garnish with fresh coriander. Serve immediately while hot and crispy!"
            ],
            tip: { type: "gold", icon: "💡", label: "Tips", text: "Add extra jalapenos or olives for more kick & flavor!" }
        }
    ],

    tips: [
        { bold: "Avoid Sogginess:", text: "Pour the cold salsa and sauces right before serving to prevent the chips from becoming soggy." },
        { bold: "Paneer Prep:", text: "Toss the paneer cubes in a pinch of peri peri seasoning and pan-sear them for 2 minutes before assembling for extra flavor." }
    ],

    substitutions: [
        { original: "Cheese Sauce", swap: "Spicy eggless mayonnaise", saves: "₹5" },
        { original: "Peri Peri Seasoning", swap: "Chaat masala or red chili flakes", saves: "₹2" }
    ],

    variations: [
        { name: "Mexican Bean Nachos", desc: "Add 1/2 cup boiled kidney beans (rajma) tossed in taco seasoning.", price: "+₹10", full: false },
        { name: "Chicken Nachos", desc: "Swap paneer for shredded cooked chicken.", price: "+₹15", full: false }
    ],

    savingsTable: {
        rows: [
            { scenario: "Ordering at a pub or café", restCost: "₹350", homeCost: "₹120" }
        ],
        tip: "Perfect for movie nights! Save ₹230 and get double the toppings."
    },

    nutrition: [
        { value: "450", label: "Calories" },
        { value: "38g", label: "Carbs" },
        { value: "18g", label: "Protein" },
        { value: "24g", label: "Fat" }
    ],

    faq: [
        { q: "Can I make this in a microwave?", a: "Yes, microwave on high for 1-2 minutes until the cheese melts. However, baking in an oven or air-fryer keeps them much crispier." },
        { q: "How to make homemade cheese sauce?", a: "Melt 1 tbsp butter, whisk in 1 tbsp flour, add 1/2 cup milk gradually, then stir in 1/2 cup processed cheese until smooth." }
    ],

    related: [
        { emoji: "🍕", title: "Loaded Veg Pizza Toast", price: "Under ₹50", href: "/recipes/loaded-veg-pizza-toast" },
        { emoji: "🍟", title: "Peri Peri Fries", price: "Under ₹50", href: "/recipes/peri-peri-fries" }
    ],

    seedComments: [
        { name: "Vikram K.", color1: "#9c27b0", color2: "#e91e63", stars: 5, text: "The paneer gets nice and warm, and the combination of salsa and cheese sauce is incredible.", date: "3 days ago" }
    ]
};
