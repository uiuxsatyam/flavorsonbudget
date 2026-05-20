import { Recipe } from "../recipe-types";

export const chocoChipCookies: Recipe = {
    slug: "choco-chip-cookies",
    title: "Choco Chip Cookies",
    titleEmphasis: "Under ₹90",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹90",
    date: "May 2026",
    views: "3.4k",
    emoji: "🍪",
    image: "/images/recipes/choco-chip-cookies.png",
    savingsBadgeAmount: "₹210",
    savingsBadgeSub: "vs cafe",
    initialLikes: 258,

    stats: [
        { icon: "💰", value: "₹90", label: "Total Cost" },
        { icon: "🍽️", value: "₹15", label: "Per Cookie" },
        { icon: "⏱️", value: "25 min", label: "Total Time" },
        { icon: "👥", value: "6", label: "Servings" },
        { icon: "🌶️", value: "Sweet", label: "Spice Level" },
    ],

    intro: {
        lead: "Soft, gooey & bakery-style cookies loaded with chocolate chips, made at home for under ₹90!",
        body: [
            "Nothing beats the aroma of freshly baked cookies. These <strong>Choco Chip Cookies</strong> are soft and chewy in the center, slightly golden-crispy on the edges, and loaded with gooey melted chocolate.",
            "While a single premium cafe cookie can easily cost ₹50+, you can bake a whole batch of 6 large premium cookies at home for under ₹90. No fancy equipment needed, just a bowl and a whisk!"
        ],
        highlights: [
            "Bakery Style at Home!",
            "Soft, Gooey & Rich",
            "Budget Friendly (under ₹90)",
            "Bakes in 15 minutes"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "All Purpose Flour", qty: "1 cup", cost: "₹10" },
            { name: "Unsalted Butter", qty: "1/2 cup", cost: "₹40" },
            { name: "Brown & White Sugar", qty: "3/4 cup", cost: "₹15" },
            { name: "Chocolate Chips", qty: "3/4 cup", cost: "₹20" },
            { name: "Milk, Vanilla & Baking Soda", qty: "Mixed", cost: "₹5" }
        ],
        totalServings: "6 Large Cookies",
        totalCost: "₹90",
        perServing: "₹15",
        restaurantCost: "₹300",
        saving: "₹210!",
    },

    ingredients: [
        {
            groupName: "Wet Ingredients",
            items: [
                "🧈 1/2 cup Unsalted Butter (softened)",
                "🍬 1/2 cup Brown Sugar",
                "🍬 1/4 cup Sugar",
                "🌼 1 tsp Vanilla Extract",
                "🥛 1-2 tbsp Milk"
            ],
        },
        {
            groupName: "Dry Ingredients",
            items: [
                "🌾 1 cup All Purpose Flour (maida)",
                "🥄 1/4 tsp Baking Soda",
                "🧂 1/4 tsp Salt"
            ],
        },
        {
            groupName: "Mix-ins",
            items: [
                "🍫 3/4 cup Chocolate Chips"
            ]
        }
    ],

    steps: [
        {
            title: "Cream Butter & Sugar",
            paras: [
                "Cream butter, brown sugar & sugar until light & fluffy."
            ]
        },
        {
            title: "Add Wets",
            paras: [
                "Add vanilla extract and milk. Mix well."
            ]
        },
        {
            title: "Combine Dry Ingredients",
            paras: [
                "Add flour, baking soda & salt. Mix until just combined."
            ]
        },
        {
            title: "Fold Chocolate Chips",
            paras: [
                "Fold in chocolate chips. Do not overmix."
            ]
        },
        {
            title: "Bake",
            paras: [
                "Bake at 180°C for 12-15 mins. Cool slightly & enjoy!"
            ],
            tip: { type: "gold", icon: "💡", label: "Tips", text: "Do not overbake! Cookies will firm up as they cool." }
        }
    ],

    tips: [
        { bold: "Do Not Overbake:", text: "Remove the cookies when the edges are lightly golden but the center is still soft. They will firm up as they cool." },
        { bold: "Butter Temperature:", text: "Make sure the butter is softened to room temperature, not completely melted, to prevent cookies from spreading too flat." }
    ],

    substitutions: [
        { original: "Brown Sugar", swap: "Regular powdered white sugar", saves: "₹5 (but less chewy)" },
        { original: "Chocolate Chips", swap: "Chopped dark chocolate compound", saves: "₹10" }
    ],

    variations: [
        { name: "Double Chocolate Cookies", desc: "Add 2 tbsp cocoa powder to the flour mix.", price: "+₹5", full: false },
        { name: "Walnut Choco Chip", desc: "Fold in 1/4 cup chopped walnuts.", price: "+₹15", full: false }
    ],

    savingsTable: {
        rows: [
            { scenario: "Buying 6 cookies at a premium cafe", restCost: "₹300", homeCost: "₹90" }
        ],
        tip: "Freshly baked cookies taste 10x better and cost 70% less when made at home!"
    },

    nutrition: [
        { value: "240", label: "Calories" },
        { value: "30g", label: "Carbs" },
        { value: "3g", label: "Protein" },
        { value: "12g", label: "Fat" }
    ],

    faq: [
        { q: "Why did my cookies spread too much?", a: "Your butter might have been too warm/melted. Chill the cookie dough in the fridge for 30 minutes before baking." },
        { q: "Can I make these eggless?", a: "This recipe is already eggless! The milk acts as the binding agent." }
    ],

    related: [
        { emoji: "🍫", title: "Chocolate Brownie", price: "Under ₹80", href: "/recipes/chocolate-brownie" },
        { emoji: "☕", title: "Cold Coffee", price: "Under ₹60", href: "/recipes/cold-coffee" }
    ],

    seedComments: [
        { name: "Neha R.", color1: "#607d8b", color2: "#455a64", stars: 5, text: "Unbelievably soft and chocolatey! Will never buy store-bought cookies again.", date: "4 days ago" }
    ]
};
