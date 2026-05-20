import { Recipe } from "../recipe-types";

export const loadedVegPizzaToast: Recipe = {
    slug: "loaded-veg-pizza-toast",
    title: "Loaded Veg Pizza Toast",
    titleEmphasis: "Under ₹50",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹50",
    date: "May 2026",
    views: "2.1k",
    emoji: "🍕",
    image: "/images/recipes/loaded-veg-pizza-toast.png",
    savingsBadgeAmount: "₹150",
    savingsBadgeSub: "vs cafe",
    initialLikes: 184,

    stats: [
        { icon: "💰", value: "₹50", label: "Total Cost" },
        { icon: "🍽️", value: "₹25", label: "Per Toast" },
        { icon: "⏱️", value: "5 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Mild", label: "Spice Level" },
    ],

    intro: {
        lead: "Crispy bread, saucy veggies & loads of melted cheese! A 5-minute cafe-style snack under ₹50!",
        body: [
            "Craving pizza but don't want to wait for delivery or spend ₹200+? This <strong>Loaded Veg Pizza Toast</strong> is the ultimate hack. It's cheesy, loaded, and absolutely irresistible.",
            "Made with simple pantry ingredients like bread, pizza sauce, cheese, and veggies, it cooks in just 5 minutes on a simple pan. Perfect for quick cravings!"
        ],
        highlights: [
            "Ready in 5 minutes",
            "Cost under ₹50 for two",
            "Double cheese goodness",
            "No oven required (made on pan)"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "Bread Slices", qty: "2 pcs", cost: "₹6" },
            { name: "Pizza Sauce", qty: "2 tbsp", cost: "₹8" },
            { name: "Mixed Veggies & Olives", qty: "Mixed", cost: "₹12" },
            { name: "Mozzarella Cheese", qty: "1 cup", cost: "₹20" },
            { name: "Butter & Seasonings", qty: "Mixed", cost: "₹4" }
        ],
        totalServings: "2 Slices",
        totalCost: "₹50",
        perServing: "₹25",
        restaurantCost: "₹200",
        saving: "₹150!",
    },

    ingredients: [
        {
            groupName: "Main Ingredients",
            items: [
                "🍞 2 Bread Slices",
                "🍅 2 tbsp Pizza Sauce",
                "🫑 1/4 cup Capsicum (chopped)",
                "🧅 1/4 cup Onion (chopped)",
                "🍅 1/4 cup Tomato (chopped)",
                "🌽 1/4 cup Sweet Corn (boiled)",
                "🫒 2 tbsp Black Olives (sliced)",
                "🧀 1 cup Mozzarella Cheese (grated)",
                "🧈 1 tsp Butter"
            ],
        },
        {
            groupName: "Seasoning",
            items: [
                "🌿 1/2 tsp Oregano",
                "🌶️ 1/2 tsp Chilli Flakes",
                "🧂 Salt to taste"
            ]
        }
    ],

    steps: [
        {
            title: "Apply Sauce",
            paras: [
                "Spread pizza sauce evenly on both bread slices."
            ]
        },
        {
            title: "Add Veggies",
            paras: [
                "Top with chopped capsicum, onion, tomato, corn & olives."
            ]
        },
        {
            title: "Add Cheese",
            paras: [
                "Add grated mozzarella cheese on top."
            ]
        },
        {
            title: "Seasoning",
            paras: [
                "Sprinkle oregano, chilli flakes & a pinch of salt."
            ]
        },
        {
            title: "Pan Cook",
            paras: [
                "Heat a pan, add butter. Place the toasts and cook on low flame.",
                "Cover & cook for 2-3 mins until cheese melts & bread turns crispy. Serve hot!"
            ],
            tip: { type: "gold", icon: "💡", label: "Secret Tip", text: "You can add jalapenos, mushrooms or paneer for extra delicious flavor!" }
        }
    ],

    tips: [
        { bold: "Low Flame:", text: "Always cook on a low flame when making toast on a pan so the cheese melts completely before the bottom of the bread burns." },
        { bold: "Covering the Pan:", text: "Make sure to cover the pan with a lid; this traps the heat and steam, melting the cheese perfectly." }
    ],

    substitutions: [
        { original: "Mozzarella Cheese", swap: "Processed Cheese Slices", saves: "₹5" },
        { original: "Pizza Sauce", swap: "Tomato Ketchup + Chilli Sauce mix", saves: "₹4" }
    ],

    variations: [
        { name: "Paneer Pizza Toast", desc: "Add small paneer cubes to the veggie mix.", price: "+₹15", full: false },
        { name: "Spicy Jalapeno Toast", desc: "Top with sliced jalapenos and extra chili flakes.", price: "Same ₹50", full: false }
    ],

    savingsTable: {
        rows: [
            { scenario: "Ordering from pizza chain", restCost: "₹200", homeCost: "₹50" }
        ],
        tip: "Enjoy cafe style pizza toast at a fraction of the cost."
    },

    nutrition: [
        { value: "280", label: "Calories" },
        { value: "26g", label: "Carbs" },
        { value: "10g", label: "Protein" },
        { value: "14g", label: "Fat" }
    ],

    faq: [
        { q: "Can I make this in an oven?", a: "Yes, bake in a preheated oven at 180°C for 5-7 minutes until the cheese is melted and bubbly." },
        { q: "How do I make the crust extra crispy?", a: "Lightly toast the bottom side of the bread with butter before applying pizza sauce." }
    ],

    related: [
        { emoji: "🥪", title: "Three Cheese Veg Sandwich", price: "Under ₹80", href: "/recipes/three-cheese-veg-sandwich" },
        { emoji: "🥪", title: "Veg Grilled Sandwich", price: "Under ₹60", href: "/recipes/veg-grilled-sandwich" }
    ],

    seedComments: [
        { name: "Aman S.", color1: "#27ae60", color2: "#2ecc71", stars: 5, text: "Extremely quick and tastes just like cafe pizza toast!", date: "2 days ago" }
    ]
};
