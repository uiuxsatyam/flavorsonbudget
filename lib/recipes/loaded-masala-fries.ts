import { Recipe } from "../recipe-types";

export const loadedMasalaFries: Recipe = {
    slug: "loaded-masala-fries",
    title: "Loaded Masala Fries",
    titleEmphasis: "Under ₹100",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹100",
    date: "May 2026",
    views: "4.2k",
    emoji: "🍟",
    image: "/images/recipes/loaded-masala-fries.png",
    savingsBadgeAmount: "₹200",
    savingsBadgeSub: "vs cafe",
    initialLikes: 312,

    stats: [
        { icon: "💰", value: "₹100", label: "Total Cost" },
        { icon: "🍽️", value: "₹50", label: "Per Serving" },
        { icon: "⏱️", value: "20 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "High", label: "Spice Level" },
    ],

    intro: {
        lead: "Crispy fries loaded with spice, cheese & flavor in every bite! Street-style Loaded Masala Fries at home under ₹100!",
        body: [
            "Why pay ₹300+ at high-end cafes for a plate of loaded fries when you can create a far superior, fresher, and crisper version at home? This <strong>Loaded Masala Fries</strong> recipe is the ultimate crowd-pleaser.",
            "By air-frying or deep-frying french fries until golden brown, tossing them with a fiery peri peri seasoning, and loading them up with crunchy veggies, melted mozzarella, and cheese sauce, you get the perfect combination of heat, crunch, and creaminess."
        ],
        highlights: [
            "Extra Crispy & Cheesy",
            "Fiery Peri Peri Heat",
            "Loaded with Veggies",
            "Costs under ₹100 for two"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "French Fries (Frozen or Fresh)", qty: "2 cups", cost: "₹35" },
            { name: "Mozzarella & Cheese Sauce", qty: "1/2 cup & 1/4 cup", cost: "₹30" },
            { name: "Veggies (Onion, Capsicum, Corn, Jalapenos)", qty: "Mixed", cost: "₹15" },
            { name: "Mayonnaise & Spices", qty: "Mixed", cost: "₹20" }
        ],
        totalServings: "2 Servings",
        totalCost: "₹100",
        perServing: "₹50",
        restaurantCost: "₹300",
        saving: "₹200!",
    },

    ingredients: [
        {
            groupName: "Fries & Seasoning",
            items: [
                "🍟 2 cups French Fries",
                "🌶️ 1 tsp Peri Peri Seasoning",
                "🌶️ 1/2 tsp Chili Flakes"
            ],
        },
        {
            groupName: "Veggies",
            items: [
                "🧅 1/4 cup Onion (chopped)",
                "🫑 1/4 cup Capsicum (chopped)",
                "🌶️ 2 tbsp Jalapenos (sliced)",
                "🌽 1/4 cup Sweet Corn (boiled)"
            ],
        },
        {
            groupName: "Cheese & Sauces",
            items: [
                "🧀 1/2 cup Mozzarella Cheese (grated)",
                "🧀 1/4 cup Cheese Sauce",
                "🥛 2 tbsp Mayonnaise"
            ],
        }
    ],

    steps: [
        {
            title: "Cook the Fries",
            paras: [
                "Cook french fries until they are crispy and golden. You can either deep fry them or air-fry them at 200°C for 15-18 minutes for a healthier version."
            ]
        },
        {
            title: "Layer the Veggies",
            paras: [
                "Place the hot fries evenly on a baking tray or heatproof serving dish.",
                "Top them immediately with chopped onion, capsicum, sweet corn, and sliced jalapenos."
            ]
        },
        {
            title: "Drizzle Sauces",
            paras: [
                "Drizzle cheese sauce and mayonnaise generously over the loaded fries."
            ]
        },
        {
            title: "Season & Cheese",
            paras: [
                "Sprinkle grated mozzarella cheese, peri peri seasoning, and chili flakes over the sauces."
            ],
            tip: { type: "gold", icon: "💡", label: "Tips", text: "Add extra jalapenos or cheese sauce for more kick & creaminess!" }
        },
        {
            title: "Bake & Serve",
            paras: [
                "Bake in a preheated oven at 180°C for 5 minutes, or use a kitchen torch, until the mozzarella cheese is melted and bubbling. Serve immediately while hot and crispy!"
            ]
        }
    ],

    tips: [
        { bold: "Keep it Crispy:", text: "To avoid soggy fries, ensure your fries are cooked extra crispy before adding toppings, and serve immediately after melting the cheese." },
        { bold: "Homemade Fries:", text: "If making fries from scratch, soak cut potatoes in ice water for 30 minutes, dry completely, and double-fry them for the ultimate crunch." }
    ],

    substitutions: [
        { original: "Cheese Sauce", swap: "Tandoori mayonnaise or chipotle sauce", saves: "₹5" },
        { original: "Mozzarella Cheese", swap: "Processed cheddar cheese blend", saves: "₹3" }
    ],

    variations: [
        { name: "Tandoori Masala Fries", desc: "Swap cheese sauce with tandoori mayonnaise and add paneer cubes.", price: "+₹15", full: false },
        { name: "Pizza Fries", desc: "Add pizza sauce, black olives, and Italian seasoning toppings.", price: "+₹10", full: false }
    ],

    savingsTable: {
        rows: [
            { scenario: "Ordering at a sports bar or cafe", restCost: "₹300", homeCost: "₹100" }
        ],
        tip: "Save ₹200 and get control over the oil quality by preparing it at home!"
    },

    nutrition: [
        { value: "390", label: "Calories" },
        { value: "45g", label: "Carbs" },
        { value: "8g", label: "Protein" },
        { value: "20g", label: "Fat" }
    ],

    faq: [
        { q: "Can I make this on a pan?", a: "Yes, assemble the fries in a non-stick pan, cover with a tight lid, and heat on very low flame for 3-4 minutes until the cheese melts." },
        { q: "Is this gluten-free?", a: "Yes, as long as the frozen fries and sauces used are certified gluten-free." }
    ],

    related: [
        { emoji: "🍟", title: "Peri Peri Fries", price: "Under ₹50", href: "/recipes/peri-peri-fries" },
        { emoji: "🍟", title: "Crunchy French Fries", price: "Under ₹40", href: "/recipes/crunchy-french-fries" }
    ],

    seedComments: [
        { name: "Aditya S.", color1: "#e91e63", color2: "#9c27b0", stars: 5, text: "Fries remain super crispy even under all that cheese. Best party snack!", date: "1 week ago" }
    ]
};
