import { Recipe } from "../recipe-types";

export const periPeriFries: Recipe = {
    slug: "peri-peri-fries",
    title: "Peri Peri Fries",
    titleEmphasis: "Under ₹80",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹80",
    date: "May 2026",
    views: "1.2k",
    emoji: "🍟",
    image: "/images/recipes/peri-peri-fries.png",
    savingsBadgeAmount: "₹120",
    savingsBadgeSub: "vs cafe",
    initialLikes: 215,

    stats: [
        { icon: "💰", value: "₹80", label: "Total Cost" },
        { icon: "🍽️", value: "₹40", label: "Per Serving" },
        { icon: "⏱️", value: "25 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Spicy", label: "Spice Level" },
    ],

    intro: {
        lead: "Crispy on the outside, bursting with peri peri flavour! Perfect for evening snacks, parties or movie nights!",
        body: [
            "This <strong>Peri Peri Fries</strong> recipe will give you the ultimate café style snack right at home.",
            "Bold, spicy, and perfectly crispy, these fries are budget-friendly and irresistible."
        ],
        highlights: [
            "Café Style Snack",
            "Bold & Spicy",
            "Budget Friendly"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "3 Potatoes (medium)", qty: "500g", cost: "₹20" },
            { name: "Cornflour & Maida", qty: "3 tbsp", cost: "₹10" },
            { name: "Peri Peri & Spices", qty: "Mixed", cost: "₹20" },
            { name: "Oil for frying", qty: "100ml loss", cost: "₹30" }
        ],
        totalServings: "2 Servings",
        totalCost: "₹80",
        perServing: "₹40",
        restaurantCost: "₹200",
        saving: "₹120!",
    },

    ingredients: [
        {
            groupName: "Main",
            items: [
                "🥔 3 Potatoes (medium)",
                "🌻 Oil for frying"
            ],
        },
        {
            groupName: "Coating & Seasonings",
            items: [
                "🌽 2 tbsp Cornflour",
                "🌾 1 tbsp Maida (all purpose flour)",
                "🌶️ 1 tsp Red Chilli Powder",
                "🌶️ 1 tsp Peri Peri Seasoning",
                "🧄 1/2 tsp Garlic Powder",
                "🧅 1/2 tsp Onion Powder",
                "🌿 1/2 tsp Oregano",
                "🧂 Salt to taste"
            ],
        }
    ],

    steps: [
        {
            title: "Prep Potatoes",
            paras: [
                "Peel & cut potatoes into thick fries. Wash & soak in water for 20 mins."
            ]
        },
        {
            title: "Boil & Dry",
            paras: [
                "Boil for 3-4 mins. Drain and pat completely dry."
            ]
        },
        {
            title: "Coat",
            paras: [
                "Add cornflour, maida & all spices. Mix well to coat."
            ]
        },
        {
            title: "Fry",
            paras: [
                "Fry in hot oil on medium-high heat until golden & crispy."
            ],
            tip: { type: "gold", icon: "💡", label: "Tips", text: "For extra crispiness, double fry the fries!" }
        },
        {
            title: "Season & Serve",
            paras: [
                "Sprinkle peri peri seasoning & toss well. Serve hot!"
            ]
        }
    ],

    tips: [
        { bold: "Double Fry:", text: "For extra crispiness, double fry the fries!" }
    ],

    substitutions: [
        { original: "Maida", swap: "Rice flour", saves: "₹0" },
        { original: "Deep Frying", swap: "Air Frying (toss in oil)", saves: "₹20" }
    ],

    variations: [
        { name: "Cheesy Peri Peri", desc: "Top with melted cheese or cheese sauce.", price: "+₹30", full: false },
        { name: "Peri Peri Wedges", desc: "Cut potatoes into wedges and bake them.", price: "Same ₹80", full: false }
    ],

    savingsTable: {
        rows: [
            { scenario: "Cafe visit", restCost: "₹200", homeCost: "₹80" }
        ],
        tip: "Enjoy café style fries anytime at a fraction of the cost."
    },

    nutrition: [
        { value: "320", label: "Calories" },
        { value: "45g", label: "Carbs" },
        { value: "4g", label: "Protein" },
        { value: "14g", label: "Fat" }
    ],

    faq: [
        { q: "Can I use frozen fries?", a: "Yes, you can just fry them and toss with the peri peri seasoning mix." }
    ],

    related: [
        { emoji: "🥪", title: "Three Cheese Veg Sandwich", price: "Under ₹80", href: "/recipes/three-cheese-veg-sandwich" },
        { emoji: "🍝", title: "Pink Sauce Pasta", price: "Under ₹120", href: "/recipes/pink-sauce-pasta" }
    ],

    seedComments: [
        { name: "Rahul", color1: "#e74c3c", color2: "#c0392b", stars: 5, text: "So spicy and crispy! The spice mix is on point.", date: "1 day ago" }
    ]
};
