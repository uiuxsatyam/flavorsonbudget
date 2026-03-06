import { Recipe } from "../recipe-types";

export const cabbageParatha: Recipe = {
    slug: "cabbage-paratha",
    title: "Cabbage Paratha",
    titleEmphasis: "Under ₹60",
    category: "Indian Budget",
    subcategory: "Under ₹60",
    date: "Mar 2026",
    views: "1.2k",
    emoji: "🫓",
    image: "/images/recipes/cabbage-paratha.png",
    savingsBadgeAmount: "₹140",
    savingsBadgeSub: "vs resto",
    initialLikes: 85,

    stats: [
        { icon: "💰", value: "₹60", label: "Total Cost" },
        { icon: "🍽️", value: "₹15", label: "Per Serving" },
        { icon: "⏱️", value: "25 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "Mild", label: "Spice Level" },
    ],

    intro: {
        lead: "A healthy, fiber-rich lunchbox favorite — crisp whole wheat flatbreads stuffed with spicy shredded cabbage for just ₹15 per person.",
        body: [
            "Cabbage is one of the most underrated budget vegetables. When shredded thin and sautéed with basic spices, it creates a juicy, flavorful stuffing that rivals the classic aloo paratha.",
            "This <strong>Cabbage Paratha</strong> is perfect for breakfast or packing in school/office lunches. It stays soft for hours and costs less than ₹60 to feed a family of four."
        ],
        highlights: [
            "Feeds 4 for under ₹60",
            "High in fiber & protein",
            "Stays soft in lunchboxes",
            "Budget-friendly vegetable",
            "Ready in 25 minutes",
            "Pairs perfectly with curd"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Local Eatery",
        headingIcon: "₹",
        ingredients: [
            { name: "Whole Wheat Flour (Atta)", qty: "2 cups", cost: "₹15" },
            { name: "Cabbage", qty: "1/2 small (250g)", cost: "₹10" },
            { name: "Onion", qty: "1 small", cost: "₹5" },
            { name: "Spices & Green Chillies", qty: "as needed", cost: "₹10" },
            { name: "Oil/Ghee", qty: "2 tbsp", cost: "₹10" },
            { name: "Curd (for serving)", qty: "1 small bowl", cost: "₹10" },
        ],
        totalServings: "4 Servings (8 parathas)",
        totalCost: "₹60",
        perServing: "~₹15",
        restaurantCost: "₹200",
        saving: "₹140!",
    },

    ingredients: [
        {
            groupName: "For the Dough",
            items: [
                "🌾 2 cups whole wheat flour (atta)",
                "🧂 1/2 tsp salt",
                "💧 Water as needed for a soft dough",
                "🫒 1 tsp oil"
            ],
        },
        {
            groupName: "For the Stuffing",
            items: [
                "🥬 2 cups cabbage — finely shredded",
                "🧅 1 onion — finely chopped",
                "🌶️ 2 green chillies — finely chopped",
                "🌿 1/2 tsp carom seeds (ajwain)",
                "🫚 1 tsp ginger-garlic paste",
                "🧂 Salt, turmeric, and red chilli powder to taste",
                "🌿 1/2 tsp amchoor (dry mango powder)"
            ],
        },
    ],

    steps: [
        {
            title: "Prepare the Dough — 5 min",
            paras: [
                "Mix flour and salt. Add water gradually to knead into a soft, pliable dough. Brush with a little oil and rest for 10 minutes."
            ],
        },
        {
            title: "Make the Cabbage Stuffing — 8 min",
            paras: [
                "Squeeze any excess water from the shredded cabbage. In a pan, heat 1 tsp oil, add ajwain, then sauté onions and ginger-garlic paste.",
                "Add cabbage and all spices. Sauté on high heat for 3-4 minutes until the moisture evaporates but the cabbage stays crunchy. Let it cool completely."
            ],
            tip: { type: "gold", icon: "⭐", label: "Pro Tip", text: "Don't add salt to the cabbage stuffing while cooking, or it will release water. Add it just before stuffing the parathas." },
        },
        {
            title: "Stuff & Roll — 5 min",
            paras: [
                "Divide dough and stuffing into 8 equal parts. Flatten a dough ball, place stuffing in center, seal the edges, and roll out gently into a 6-inch circle using dry flour."
            ],
        },
        {
            title: "Cook to Crispy Perfection — 7 min",
            paras: [
                "Heat a tawa (griddle). Place paratha and cook both sides with a little ghee or oil until golden brown spots appear. Press gently with a spatula for even browning.",
                "Serve hot with a dollop of curd or pickle."
            ],
        },
    ],

    tips: [
        { bold: "Shred cabbage very thin.", text: "This ensures the paratha doesn't tear while rolling." },
        { bold: "Squeeze out moisture.", text: "If the cabbage is watery, the paratha will be soggy. Squeeze it well before stuffing." },
        { bold: "Stuffing should be cool.", text: "Warm stuffing will soften the dough and make it hard to roll." }
    ],

    substitutions: [
        { original: "Cabbage", swap: "Grated Radish (Mooli)", saves: "₹0" },
        { original: "Whole Wheat Flour", swap: "Multigrain Atta", saves: "₹2" },
        { original: "Oil", swap: "Butter", saves: "-₹5" },
    ],

    variations: [
        { name: "🧀 Cheesy Cabbage", desc: "Add a little grated cheese to the stuffing for a kid-friendly version.", price: "+₹20", full: false },
        { name: "🥔 Cabbage & Aloo", desc: "Mix in one boiled potato to make the stuffing easier to handle.", price: "+₹5", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Weekly family breakfast", restCost: "₹800", homeCost: "₹240" },
            { scenario: "Office lunch (20 days/month)", restCost: "₹1,200", homeCost: "₹300" },
        ],
        tip: "Switching from restaurant parathas to home-made ones for your daily lunch can save you almost ₹900 a month!",
    },

    nutrition: [
        { value: "210", label: "Calories" },
        { value: "32g", label: "Carbs" },
        { value: "6g", label: "Protein" },
        { value: "7g", label: "Fat" },
    ],

    faq: [
        { q: "Can I use raw cabbage stuffing?", a: "Yes, but sautéing it slightly removes the raw smell and extra moisture, making it easier to roll." },
        { q: "How to keep parathas soft?", a: "Store them in an insulated container wrapped in a clean cloth while they are still warm." }
    ],

    related: [
        { emoji: "🫓", title: "Chole Bhature", price: "Under ₹149", href: "/recipes/chole-bhature" },
        { emoji: "🥚", title: "Anda Bhurji Pav", price: "Under ₹59", href: "/recipes/anda-bhurji-pav" },
    ],

    seedComments: [
        { name: "Preeti S.", color1: "#9b59b6", color2: "#8e44ad", stars: 5, text: "My kids didn't even know there was cabbage inside! They loved it.", date: "2 days ago" },
    ],
};
