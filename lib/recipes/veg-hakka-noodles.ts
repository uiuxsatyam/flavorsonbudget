import { Recipe } from "../recipe-types";

export const vegHakkaNoodles: Recipe = {
    slug: "veg-hakka-noodles",
    title: "Veg Hakka Noodles",
    titleEmphasis: "Street-Style for ₹75",
    category: "Indo-Chinese",
    subcategory: "Under ₹99",
    date: "Mar 2026",
    views: "8.9k",
    emoji: "🍜",
    image: "/images/recipes/veg-hakka-noodles.png",
    savingsBadgeAmount: "₹175",
    savingsBadgeSub: "vs resto",
    initialLikes: 245,

    stats: [
        { icon: "💰", value: "₹75", label: "Total Cost" },
        { icon: "🍽️", value: "₹18", label: "Per Plate" },
        { icon: "⏱️", value: "15 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "Medium", label: "Spice Level" },
    ],

    intro: {
        lead: "The quintessential Indian street food — long, springy noodles tossed with crunchy vegetables in a high-heat wok for that authentic smoky flavor.",
        body: [
            "Forget the expensive takeout! Making <strong>Street-Style Veg Hakka Noodles</strong> at home is absurdly cheap and surprisingly fast. The secret to the street taste is not the MSG, but the <strong>extremely high heat</strong> and the sequence of adding sauces.",
            "This recipe feeds a family of four for less than ₹80, which is cheaper than a single plate at most Indo-Chinese restaurants."
        ],
        highlights: [
            "Costs under ₹20 per serving",
            "Ready in 15 minutes",
            "Loaded with 4 types of veggies",
            "Authentic smoky 'Wok Hei' flavor",
            "Better & healthier than takeout",
            "A hit with kids and adults alike"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Fine Dining",
        headingIcon: "₹",
        ingredients: [
            { name: "Hakka Noodles (Pack)", qty: "1 pack (300g)", cost: "₹35" },
            { name: "Cabbage & Carrots", qty: "1 cup each", cost: "₹15" },
            { name: "Onion & Capsicum", qty: "1 small each", cost: "₹10" },
            { name: "Soy Sauce & Vinegar", qty: "pantry staples", cost: "₹5" },
            { name: "Oil & Spices", qty: "minimal", cost: "₹10" },
        ],
        totalServings: "4 Large Plates",
        totalCost: "₹75",
        perServing: "~₹18",
        restaurantCost: "₹250",
        saving: "₹175!",
    },

    ingredients: [
        {
            groupName: "The Noodles",
            items: [
                "🍜 300g Hakka Noodles — boiled al-dente",
                "🫒 1 tsp oil — to coat after boiling"
            ],
        },
        {
            groupName: "The Veggies",
            items: [
                "🥬 1 cup cabbage — shredded",
                "🥕 1/2 cup carrots — julienned",
                "🫑 1/2 capsicum — thinly sliced",
                "🧅 1 small onion — sliced",
                "🧄 1 tbsp garlic — finely chopped",
                "🌶️ 2 green chillies — slit"
            ],
        },
        {
            groupName: "The Sauces",
            items: [
                "🍱 1 tbsp Soy Sauce",
                "🧪 1 tsp Vinegar",
                "🌶️ 1 tbsp Red Chilli Sauce (optional)",
                "🧂 Salt & white pepper to taste"
            ],
        },
    ],

    steps: [
        {
            title: "Prep the Noodles — 5 min",
            paras: [
                "Boil noodles in plenty of salted water until they are almost cooked (al-dente). Drain and rinse with cold water immediately to stop cooking.",
                "Toss with 1 tsp oil to prevent sticking. Set aside."
            ],
        },
        {
            title: "The High-Heat Toss — 5 min",
            paras: [
                "Heat oil in a wok or large pan on HIGH heat until smoking. Add garlic and green chillies. Sauté for 30 seconds.",
                "Add onions, cabbage, carrots, and capsicum. Stir-fry mission-style (fast and hot) for 2 minutes. The veggies should be slightly charred but still crunchy."
            ],
            tip: { type: "gold", icon: "⭐", label: "Flavor Secret", text: "Don't overcrowd the pan. If making a double batch, cook in two rounds to maintain high heat." },
        },
        {
            title: "Finish & Serve — 5 min",
            paras: [
                "Add the noodles, soy sauce, vinegar, chilli sauce, salt, and pepper.",
                "Toss vigorously for 1-2 minutes until everything is well combined and smoky. Serve hot!"
            ],
        },
    ],

    tips: [
        { bold: "Cold water rinse.", text: "Rinsing noodles in ice-cold water immediately after boiling is the only way to keep them non-sticky." },
        { bold: "Slice thin.", text: "Thinly julienned veggies cook faster and integrate better with the noodles." },
        { bold: "Wok on fire.", text: "High heat is the soul of Hakka noodles. Keep your burner on the highest setting." }
    ],

    substitutions: [
        { original: "Hakka Noodles", swap: "Spaghetti (boiled with pinch of soda)", saves: "₹10" },
        { original: "Soy Sauce", swap: "Salt + pinch of sugar", saves: "₹2" },
    ],

    variations: [
        { name: "🔥 Schezwan Noodles", desc: "Add 2 tbsp Schezwan sauce for a fiery red version.", price: "+₹15", full: false },
        { name: "🥚 Egg Hakka", desc: "Scramble 2 eggs in the center before adding noodles.", price: "+₹15", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Family dinner (4 people)", restCost: "₹1,000", homeCost: "₹75" },
            { scenario: "Hostel late-night meal", restCost: "₹150", homeCost: "₹20" },
        ],
        tip: "Noodles are almost 90% profit for restaurants. Making them at home isn't just cheaper; it's practically free in comparison.",
    },

    nutrition: [
        { value: "380", label: "Calories" },
        { value: "62g", label: "Carbs" },
        { value: "8g", label: "Protein" },
        { value: "11g", label: "Fat" },
    ],

    faq: [
        { q: "Why are my noodles mushy?", a: "You probably overboiled them. Aim for 80% cooked before draining." },
        { q: "Can I use whole wheat noodles?", a: "Yes, but they take slightly longer to boil and have a heartier texture." }
    ],

    related: [
        { emoji: "🍜", title: "Chicken Hakka Noodles", price: "Under ₹129", href: "/recipes/chicken-hakka-noodles" },
        { emoji: "🥟", title: "Cabbage Pakoras", price: "Under ₹45", href: "/recipes/cabbage-pakoras" },
    ],

    seedComments: [
        { name: "Neha R.", color1: "#3498db", color2: "#2980b9", stars: 5, text: "The first time my home noodles actually tasted like the street ones!", date: "2 days ago" },
    ],
};
