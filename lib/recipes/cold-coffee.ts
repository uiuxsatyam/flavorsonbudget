import { Recipe } from "../recipe-types";

export const coldCoffee: Recipe = {
    slug: "cold-coffee",
    title: "Cold Coffee",
    titleEmphasis: "Under ₹60",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹60",
    date: "May 2026",
    views: "3.2k",
    emoji: "☕",
    image: "/images/recipes/cold-coffee.png",
    savingsBadgeAmount: "₹120",
    savingsBadgeSub: "vs cafe",
    initialLikes: 250,

    stats: [
        { icon: "💰", value: "₹60", label: "Total Cost" },
        { icon: "⏱️", value: "7 min", label: "Total Time" },
        { icon: "👥", value: "1", label: "Servings" },
        { icon: "🌶️", value: "Sweet", label: "Spice Level" },
    ],

    intro: {
        lead: "Better Than Café Coffee! Rich, Creamy & Delicious. Café Style at Home.",
        body: [
            "This <strong>thick and creamy cold coffee</strong> is exactly what you need to beat the heat or kickstart your day.",
            "Made with simple ingredients, it offers that rich chocolatey and coffee flavor right in your kitchen!"
        ],
        highlights: [
            "Rich & Creamy",
            "Café Style Flavor",
            "Budget Friendly",
            "Ready in 7 Mins"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "Cold Milk", qty: "1 cup", cost: "₹10" },
            { name: "Instant Coffee", qty: "2 tsp", cost: "₹15" },
            { name: "Sugar", qty: "2 tsp", cost: "₹5" },
            { name: "Chocolate Syrup & Shavings", qty: "2 tbsp + topping", cost: "₹30" },
        ],
        totalServings: "1 Serving",
        totalCost: "₹60",
        perServing: "₹60",
        restaurantCost: "₹180",
        saving: "₹120!",
    },

    ingredients: [
        {
            groupName: "Main Ingredients",
            items: [
                "🥛 1 cup Cold Milk",
                "☕ 2 tsp Instant Coffee",
                "🥄 2 tsp Sugar",
                "🍫 2 tbsp Chocolate Syrup",
                "🧊 Ice Cubes",
                "🍫 Chocolate Shavings (for topping)"
            ],
        }
    ],

    steps: [
        {
            title: "Add Milk",
            paras: [
                "Take 1 cup cold milk in a blender."
            ]
        },
        {
            title: "Add Coffee & Sugar",
            paras: [
                "Add 2 tsp instant coffee & 2 tsp sugar."
            ]
        },
        {
            title: "Blend",
            paras: [
                "Blend for 1-2 minutes until frothy & creamy."
            ],
            tip: { type: "gold", icon: "💡", label: "Tips", text: "Use very cold milk & blend well for a thick texture!" }
        },
        {
            title: "Prep Glass",
            paras: [
                "Drizzle chocolate syrup in a glass. Add ice cubes."
            ]
        },
        {
            title: "Pour & Serve",
            paras: [
                "Pour the coffee. Top with chocolate shavings & enjoy!"
            ]
        }
    ],

    tips: [
        { bold: "Thick Texture:", text: "Use very cold milk & blend well for a thick texture!" }
    ],

    substitutions: [
        { original: "Chocolate Syrup", swap: "Cocoa Powder & Sugar", saves: "₹10" },
    ],

    variations: [
        { name: "Mocha Frappe", desc: "Add a scoop of chocolate ice cream.", price: "+₹20", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Cafe", restCost: "₹180", homeCost: "₹60" }
        ],
        tip: "Enjoy café style coffee at a fraction of the cost."
    },

    nutrition: [
        { value: "210", label: "Calories" },
        { value: "30g", label: "Carbs" },
        { value: "8g", label: "Protein" },
        { value: "5g", label: "Fat" }
    ],

    faq: [
        { q: "Can I make this without a blender?", a: "Yes, you can shake the ingredients vigorously in a tightly sealed jar, but a blender gives the best frothy texture." }
    ],

    related: [
        { emoji: "🍓", title: "Strawberry Milkshake", price: "Under ₹60", href: "/recipes/strawberry-milkshake" },
        { emoji: "🍫", title: "Chocolate Brownie", price: "Under ₹80", href: "/recipes/chocolate-brownie" }
    ],

    seedComments: [
        { name: "Karan", color1: "#795548", color2: "#5d4037", stars: 5, text: "My go-to summer drink!", date: "3 days ago" }
    ]
};
