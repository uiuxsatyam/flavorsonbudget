import { Recipe } from "../recipe-types";

export const crunchyFrenchFries: Recipe = {
    slug: "crunchy-french-fries",
    title: "Crunchy French Fries",
    titleEmphasis: "Under ₹40",
    category: "Continental",
    subcategory: "Under ₹40",
    date: "Mar 2026",
    views: "4.5k",
    emoji: "🍟",
    image: "/images/recipes/crunchy-french-fries.png",
    savingsBadgeAmount: "₹160",
    savingsBadgeSub: "vs Mac",
    initialLikes: 312,

    stats: [
        { icon: "💰", value: "₹40", label: "Total Cost" },
        { icon: "🍽️", value: "₹10", label: "Per Serving" },
        { icon: "⏱️", value: "30 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "Mild", label: "Spice Level" },
    ],

    intro: {
        lead: "Skip the frozen bags and the fast-food drive-thru — perfectly golden, double-fried crispy potatoes for just ₹10 per platter.",
        body: [
            "We've spent years believing that perfect French Fries only come from a factory. But the truth is, with the right potato and a double-fry technique, you can make <strong>better-than-fast-food fries</strong> at home for less than ₹40 per kg.",
            "This <strong>Crunchy French Fries</strong> recipe focuses on removing the starch to get that elite snap. It's the ultimate budget comfort food that everyone loves."
        ],
        highlights: [
            "1kg of fries for under ₹40",
            "Better than frozen store-bought",
            "Uses only 3 simple ingredients",
            "Professional double-fry technique",
            "Perfect for parties or late-night",
            "Zero preservatives"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Big Brand",
        headingIcon: "₹",
        ingredients: [
            { name: "Potatoes (Russet or local firm)", qty: "1 kg", cost: "₹25" },
            { name: "Oil (for frying - reuse logic)", qty: "150ml loss", cost: "₹10" },
            { name: "Salt", qty: "to taste", cost: "₹5" },
        ],
        totalServings: "4 Large Platter portions",
        totalCost: "₹40",
        perServing: "~₹10",
        restaurantCost: "₹200",
        saving: "₹160!",
    },

    ingredients: [
        {
            groupName: "Main",
            items: [
                "🥔 1 kg potatoes — large, long ones are best",
                "🫒 Oil for deep frying (Sun-flower or Rice Bran)",
                "🧂 1 tsp fine salt"
            ],
        },
        {
            groupName: "Optional Seasonings",
            items: [
                "🌶️ Peri Peri powder",
                "🧄 Garlic powder",
                "🌿 Dried oregano & salt"
            ],
        },
    ],

    steps: [
        {
            title: "Cut & Soak — 10 min",
            paras: [
                "Peel potatoes and cut them into 1cm thick sticks (batonnet).",
                "Soak the cut potatoes in ICE COLD water for 20-30 minutes. This is critical to remove excess starch. The water will turn cloudy."
            ],
            tip: { type: "gold", icon: "⭐", label: "Secret Step", text: "Adding 1 tsp of vinegar to the soaking water helps the potatoes hold their shape and prevents them from breaking during the first fry." },
        },
        {
            title: "Dry & Blach (Fry 1) — 10 min",
            paras: [
                "Drain the water and pat the potatoes COMPLTETELY dry with a clean cloth. Moisture is the enemy of crunch.",
                "Heat oil to 160°C (medium heat). Fry the potatoes for 5-6 minutes. They should be soft and pale, NOT brown. Drain on a tray and let them cool for 10 minutes."
            ],
        },
        {
            title: "The Golden Crunch (Fry 2) — 5 min",
            paras: [
                "Turn the heat up to HIGH (190°C). Fry the blanched potatoes again for 2-3 minutes until they turn a deep, golden brown and sound 'hollow' when tapped.",
                "Toss immediately with salt while they are still hot so it sticks. Serve fresh!"
            ],
            tip: { type: "red", icon: "⚠️", label: "Hot Oil", text: "Be careful! The high-heat second fry is what gives the fries their snap, but it also means the oil can splatter if the potatoes aren't dry." },
        },
    ],

    tips: [
        { bold: "Use 'Mature' potatoes.", text: "New potatoes have too much sugar and will burn before they get crispy." },
        { bold: "Dry them well.", text: "Any water on the potato will lower the oil temp and make them soggy." },
        { bold: "Salt at the end.", text: "Salt pulls out moisture. If you salt too early, the fries will go soft." }
    ],

    substitutions: [
        { original: "Oil", swap: "Air fryer (toss with 1 tbsp oil)", saves: "₹10" },
        { original: "Fine Salt", swap: "Black Salt (Kala Namak)", saves: "₹0" },
    ],

    variations: [
        { name: "🔥 Peri Peri Fries", desc: "Toss with spicy Peri Peri mix immediately after frying.", price: "+₹5", full: false },
        { name: "🧀 Cheesy Loaded Fries", desc: "Top with cheese sauce and spring onions.", price: "+₹40", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Weekly family snack", restCost: "₹800", homeCost: "₹160" },
            { scenario: "Hosting a group of 10", restCost: "₹1,000", homeCost: "₹200" },
        ],
        tip: "Fast food chains sell potatoes for 10x the cost of raw material. Frying them at home is the easiest way to slash your 'fun food' budget.",
    },

    nutrition: [
        { value: "310", label: "Calories" },
        { value: "42g", label: "Carbs" },
        { value: "3g", label: "Protein" },
        { value: "15g", label: "Fat" },
    ],

    faq: [
        { q: "Can I freeze these?", a: "Yes! After the first fry (blanching) and cooling, put them in a zip-lock bag. Fry straight from frozen for the second fry!" },
        { q: "Why are my fries brown but soft?", a: "The oil wasn't hot enough for the second fry, or you didn't soak them long enough to remove starch." }
    ],

    related: [
        { emoji: "🍛", title: "Vegetable Poha", price: "Under ₹40", href: "/recipes/vegetable-poha" },
        { emoji: "🥟", title: "Cabbage Pakoras", price: "Under ₹45", href: "/recipes/cabbage-pakoras" },
    ],

    seedComments: [
        { name: "Vikram S.", color1: "#c0392b", color2: "#e74c3c", stars: 5, text: "I did the vinegar soak and the double fry. These are LITERALLY better than McDonald's.", date: "2 days ago" },
    ],
};
