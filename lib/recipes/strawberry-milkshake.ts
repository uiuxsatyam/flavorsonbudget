import { Recipe } from "../recipe-types";

export const strawberryMilkshake: Recipe = {
    slug: "strawberry-milkshake",
    title: "Strawberry Milkshake",
    titleEmphasis: "Under ₹60",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹60",
    date: "May 2026",
    views: "2.5k",
    emoji: "🍓",
    image: "/images/recipes/strawberry-milkshake.png",
    savingsBadgeAmount: "₹140",
    savingsBadgeSub: "vs cafe",
    initialLikes: 210,

    stats: [
        { icon: "💰", value: "₹60", label: "Total Cost" },
        { icon: "⏱️", value: "5 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Sweet", label: "Spice Level" },
    ],

    intro: {
        lead: "Better Than Café Shakes! Thick • Creamy • Refreshing. Real strawberry goodness.",
        body: [
            "This <strong>thick and creamy strawberry milkshake</strong> is the perfect summer drink for kids and adults!",
            "Whip it up in just 5 minutes with real strawberries and vanilla ice cream for that ultimate café-style treat at home."
        ],
        highlights: [
            "Café Style at Home",
            "Thick & Creamy",
            "Budget Friendly",
            "Real Strawberry Goodness"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "Strawberries (fresh or frozen)", qty: "1 cup", cost: "₹25" },
            { name: "Cold Milk", qty: "1 cup", cost: "₹10" },
            { name: "Vanilla Ice Cream", qty: "2 scoops", cost: "₹15" },
            { name: "Sugar & Strawberry Syrup", qty: "3 tbsp total", cost: "₹10" },
        ],
        totalServings: "2 Servings",
        totalCost: "₹60",
        perServing: "₹30",
        restaurantCost: "₹200",
        saving: "₹140!",
    },

    ingredients: [
        {
            groupName: "Main Ingredients",
            items: [
                "🍓 1 cup Strawberries (fresh or frozen)",
                "🥛 1 cup Cold Milk",
                "🧊 4-5 Ice Cubes",
                "🍨 2 scoops Vanilla Ice Cream",
                "🥄 2 tbsp Sugar (or to taste)",
                "🍯 1 tbsp Strawberry Syrup",
                "🌼 1/2 tsp Vanilla Extract"
            ],
        },
        {
            groupName: "For Topping (Optional)",
            items: [
                "🧁 Whipped Cream",
                "🍯 Strawberry Syrup",
                "✨ Sprinkles"
            ]
        }
    ],

    steps: [
        {
            title: "Prep Strawberries",
            paras: [
                "Wash and hull strawberries. Slice them if using fresh."
            ]
        },
        {
            title: "Add to Blender",
            paras: [
                "Add strawberries, ice cream, ice cubes, sugar and milk to a blender."
            ]
        },
        {
            title: "Blend",
            paras: [
                "Blend until smooth and creamy. (20-30 seconds)"
            ],
            tip: { type: "gold", icon: "💡", label: "Tips", text: "Use frozen strawberries for extra thickness & chill factor!" }
        },
        {
            title: "Prep Glass",
            paras: [
                "Drizzle strawberry syrup inside the glass."
            ]
        },
        {
            title: "Pour",
            paras: [
                "Pour the milkshake into the glass."
            ]
        },
        {
            title: "Garnish & Serve",
            paras: [
                "Top with whipped cream, syrup and sprinkles. Serve chilled!"
            ]
        }
    ],

    tips: [
        { bold: "Pro Tip:", text: "Use frozen strawberries for extra thickness & chill factor!" }
    ],

    substitutions: [
        { original: "Vanilla Ice Cream", swap: "Strawberry Ice Cream", saves: "Same Cost" },
    ],

    variations: [
        { name: "Chocolate Strawberry Shake", desc: "Add chocolate syrup instead of strawberry.", price: "+₹10", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Cafe", restCost: "₹200", homeCost: "₹60" }
        ],
        tip: "Enjoy the perfect summer drink at a fraction of the cost."
    },

    nutrition: [
        { value: "280", label: "Calories" },
        { value: "35g", label: "Carbs" },
        { value: "6g", label: "Protein" },
        { value: "12g", label: "Fat" }
    ],

    faq: [
        { q: "Can I make this without ice cream?", a: "Yes, you can substitute it with more frozen strawberries and a little extra milk or yogurt." }
    ],

    related: [
        { emoji: "☕", title: "Cold Coffee", price: "Under ₹60", href: "/recipes/cold-coffee" },
        { emoji: "🍫", title: "Chocolate Brownie", price: "Under ₹80", href: "/recipes/chocolate-brownie" }
    ],

    seedComments: [
        { name: "Neha", color1: "#e91e63", color2: "#c2185b", stars: 5, text: "So thick and delicious!", date: "1 day ago" }
    ]
};
