import { Recipe } from "../recipe-types";

export const mochaFrappe: Recipe = {
    slug: "mocha-frappe",
    title: "Mocha Frappe",
    titleEmphasis: "Under ₹70",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹70",
    date: "May 2026",
    views: "2.8k",
    emoji: "🥤",
    image: "/images/recipes/mocha-frappe.png",
    savingsBadgeAmount: "₹180",
    savingsBadgeSub: "vs cafe",
    initialLikes: 210,

    stats: [
        { icon: "💰", value: "₹70", label: "Total Cost" },
        { icon: "🍽️", value: "₹70", label: "Per Glass" },
        { icon: "⏱️", value: "5 min", label: "Total Time" },
        { icon: "👥", value: "1", label: "Servings" },
        { icon: "🌶️", value: "Sweet", label: "Spice Level" },
    ],

    intro: {
        lead: "Creamy, chocolatey & perfectly refreshing coffee treat! Coffee shop style Mocha Frappe at home for under ₹70!",
        body: [
            "Why spend ₹250+ at Starbucks or a premium cafe for a Mocha Frappe? This recipe gives you the same rich, frothy, and chocolate-loaded flavor in just 5 minutes using simple home ingredients.",
            "Blending instant coffee, cold milk, cocoa powder, and chocolate syrup with ice creates a thick, creamy consistency that is perfectly refreshing on a hot day."
        ],
        highlights: [
            "Thick & Creamy Texture",
            "Rich Coffee & Chocolate Blend",
            "Ready in 5 minutes",
            "Costs under ₹70"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "Cold Milk", qty: "1 cup", cost: "₹15" },
            { name: "Instant Coffee", qty: "1 tsp", cost: "₹5" },
            { name: "Cocoa Powder", qty: "1 tbsp", cost: "₹10" },
            { name: "Chocolate Syrup & Chips", qty: "2 tbsp & topping", cost: "₹25" },
            { name: "Sugar, Ice & Whipped Cream", qty: "Mixed", cost: "₹15" }
        ],
        totalServings: "1 Large Glass",
        totalCost: "₹70",
        perServing: "₹70",
        restaurantCost: "₹250",
        saving: "₹180!",
    },

    ingredients: [
        {
            groupName: "Frappe Base",
            items: [
                "🥛 1 cup Cold Milk",
                "☕ 1 tsp Instant Coffee",
                "🍫 1 tbsp Cocoa Powder",
                "🍬 1-2 tsp Sugar (to taste)",
                "🧊 6-8 Ice Cubes"
            ],
        },
        {
            groupName: "Topping & Decoration",
            items: [
                "🍫 2 tbsp Chocolate Syrup",
                "🍦 Whipped Cream",
                "🍫 Chocolate Chips"
            ],
        }
    ],

    steps: [
        {
            title: "Add Base Ingredients",
            paras: [
                "Add cold milk, instant coffee, cocoa powder, and sugar to a blender."
            ]
        },
        {
            title: "Blend until Frothy",
            paras: [
                "Blend on high speed until frothy, smooth, and creamy."
            ]
        },
        {
            title: "Prepare Glass",
            paras: [
                "Drizzle chocolate syrup inside the serving glass to create a decorative pattern."
            ]
        },
        {
            title: "Add Ice",
            paras: [
                "Add 6-8 ice cubes into the decorated glass."
            ]
        },
        {
            title: "Pour & Garnish",
            paras: [
                "Pour the blended mocha frappe over the ice.",
                "Top with whipped cream, chocolate chips, and an extra drizzle of chocolate syrup if desired. Serve immediately!"
            ],
            tip: { type: "gold", icon: "💡", label: "Tips", text: "Use chilled milk & strong coffee for the best flavor!" }
        }
    ],

    tips: [
        { bold: "Strong Coffee:", text: "If you like a stronger coffee taste, dissolve 1.5 tsp of instant coffee in 1 tbsp of warm water before adding it to the blender." },
        { bold: "Thicker Texture:", text: "Use full-cream milk, or blend in 1 scoop of vanilla ice cream instead of whipped cream topping for an extra thick shake texture." }
    ],

    substitutions: [
        { original: "Whipped Cream", swap: "Skip topping or use a scoop of vanilla ice cream", saves: "₹10" },
        { original: "Cocoa Powder", swap: "Extra chocolate syrup", saves: "₹5" }
    ],

    variations: [
        { name: "Vanilla Mocha Frappe", desc: "Add 1/2 tsp vanilla extract to the blender.", price: "Same ₹70", full: false },
        { name: "Mint Mocha Frappe", desc: "Add a drop of peppermint extract for a refreshing twist.", price: "+₹5", full: false }
    ],

    savingsTable: {
        rows: [
            { scenario: "Ordering from premium cafe", restCost: "₹250", homeCost: "₹70" }
        ],
        tip: "Save ₹180 per serving by preparing this café style beverage at home!"
    },

    nutrition: [
        { value: "310", label: "Calories" },
        { value: "42g", label: "Carbs" },
        { value: "6g", label: "Protein" },
        { value: "14g", label: "Fat" }
    ],

    faq: [
        { q: "Can I make this dairy-free?", a: "Yes, swap cold milk with soy milk, almond milk, or oat milk. They all blend beautifully." },
        { q: "What coffee works best?", a: "Any standard instant coffee powder works well. You can also use a shot of cooled espresso." }
    ],

    related: [
        { emoji: "☕", title: "Cold Coffee", price: "Under ₹60", href: "/recipes/cold-coffee" },
        { emoji: "🍫", title: "Chocolate Brownie", price: "Under ₹80", href: "/recipes/chocolate-brownie" }
    ],

    seedComments: [
        { name: "Rahul V.", color1: "#ff9800", color2: "#ff5722", stars: 5, text: "The drizzle of chocolate syrup on the glass makes it feel exactly like a cafe. Tastes awesome!", date: "1 day ago" }
    ]
};
