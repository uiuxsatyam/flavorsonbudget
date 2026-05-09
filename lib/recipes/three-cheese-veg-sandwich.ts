import { Recipe } from "../recipe-types";

export const threeCheeseVegSandwich: Recipe = {
    slug: "three-cheese-veg-sandwich",
    title: "Three Cheese Veg Sandwich",
    titleEmphasis: "Under ₹80",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹80",
    date: "Feb 2026",
    views: "1.8k",
    emoji: "🥪",
    image: "/images/recipes/three-cheese-veg-sandwich.png",
    savingsBadgeAmount: "₹170",
    savingsBadgeSub: "vs cafe",
    initialLikes: 132,

    stats: [
        { icon: "💰", value: "₹80", label: "Total Cost" },
        { icon: "🍽️", value: "₹40", label: "Per Serving" },
        { icon: "⏱️", value: "20 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Mild", label: "Spice Level" },
    ],

    intro: {
        lead: "Cheesy outside, creamy inside & loaded with veggies! Perfect for breakfast, lunchbox or evening snack!",
        body: [
            "This <strong>Three Cheese Veg Sandwich</strong> brings café style taste right to your home.",
            "Crispy on the outside with a gooey, cheesy center, it's the ultimate comfort food for under ₹80."
        ],
        highlights: [
            "Café Style Taste",
            "3 Cheese Goodness",
            "Budget Friendly"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "Bread & Butter", qty: "4 Slices", cost: "₹15" },
            { name: "Veggies (Capsicum, Onion, Tomato, Corn)", qty: "Mixed", cost: "₹20" },
            { name: "Cheese (Mozzarella, Cheddar, Processed)", qty: "Mixed", cost: "₹35" },
            { name: "Mayonnaise & Pizza Sauce", qty: "2 tbsp", cost: "₹10" }
        ],
        totalServings: "2 Servings",
        totalCost: "₹80",
        perServing: "₹40",
        restaurantCost: "₹250",
        saving: "₹170!",
    },

    ingredients: [
        {
            groupName: "Bread & Spreads",
            items: [
                "🍞 4 Bread Slices",
                "🧈 2 tbsp Butter",
                "🥛 1 tbsp Mayonnaise",
                "🍅 1 tbsp Pizza Sauce"
            ],
        },
        {
            groupName: "Veggies & Cheese",
            items: [
                "🫑 1/4 cup Capsicum (chopped)",
                "🧅 1/4 cup Onion (chopped)",
                "🍅 1/4 cup Tomato (chopped)",
                "🌽 1/4 cup Sweet Corn",
                "🧀 1/4 cup Mozzarella Cheese",
                "🧀 1/4 cup Cheddar Cheese",
                "🧀 1/4 cup Processed Cheese"
            ],
        },
        {
            groupName: "Seasonings",
            items: [
                "🌶️ 1/4 tsp Black Pepper",
                "🌿 1/4 tsp Oregano",
                "🧂 Salt to taste"
            ],
        }
    ],

    steps: [
        {
            title: "Prepare Veggie Mix",
            paras: [
                "In a bowl, mix capsicum, onion, tomato, corn, black pepper, oregano and salt."
            ]
        },
        {
            title: "Apply Spreads",
            paras: [
                "Spread mayonnaise on one side of the bread and pizza sauce on the other side."
            ]
        },
        {
            title: "Add Filling",
            paras: [
                "Add the veggie mixture and top with mozzarella, cheddar & processed cheese."
            ]
        },
        {
            title: "Grill Sandwich",
            paras: [
                "Cover with another slice. Spread butter and grill until golden & crispy."
            ],
            tip: { type: "gold", icon: "💡", label: "Tips", text: "Use a mix of cheeses for best melt & amazing taste!" }
        },
        {
            title: "Serve",
            paras: [
                "Cut into halves and serve hot with ketchup or green chutney."
            ]
        }
    ],

    tips: [
        { bold: "Cheese Mix:", text: "Use a mix of cheeses for best melt & amazing taste!" }
    ],

    substitutions: [
        { original: "3 Cheeses", swap: "Just use processed cheese slices", saves: "₹10" },
        { original: "Pizza Sauce", swap: "Tomato Ketchup", saves: "₹5" }
    ],

    variations: [
        { name: "Paneer Sandwich", desc: "Add grated paneer to the veggie mix.", price: "+₹20", full: false },
        { name: "Spicy Sandwich", desc: "Add green chilies and red chili flakes.", price: "Same ₹80", full: false }
    ],

    savingsTable: {
        rows: [
            { scenario: "Dining out", restCost: "₹250", homeCost: "₹80" }
        ],
        tip: "Make it at home for a fraction of the price!"
    },

    nutrition: [
        { value: "320", label: "Calories" },
        { value: "35g", label: "Carbs" },
        { value: "12g", label: "Protein" },
        { value: "15g", label: "Fat" }
    ],

    faq: [
        { q: "Can I use brown bread?", a: "Yes, brown bread works perfectly and is healthier!" }
    ],

    related: [
        { emoji: "🍝", title: "Pink Sauce Pasta", price: "Under ₹120", href: "/recipes/pink-sauce-pasta" },
        { emoji: "🥪", title: "Veg Grilled Sandwich", price: "Under ₹60", href: "/recipes/veg-grilled-sandwich" }
    ],

    seedComments: [
        { name: "Pooja", color1: "#27ae60", color2: "#2ecc71", stars: 5, text: "The three cheese blend is magical!", date: "1 week ago" }
    ]
};
