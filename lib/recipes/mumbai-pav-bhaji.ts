import { Recipe } from "../recipe-types";

export const mumbaiPavBhaji: Recipe = {
    slug: "mumbai-pav-bhaji",
    title: "Mumbai-Style Pav Bhaji",
    titleEmphasis: "Street-Style for ₹100",
    category: "Indian Budget",
    subcategory: "Under ₹149",
    date: "Mar 2026",
    views: "3.3k",
    emoji: "🥘",
    image: "/images/recipes/pav-bhaji.png",
    savingsBadgeAmount: "₹200",
    savingsBadgeSub: "vs resto",
    initialLikes: 215,

    stats: [
        { icon: "💰", value: "₹100", label: "Total Cost" },
        { icon: "🍽️", value: "₹25", label: "Per Plate" },
        { icon: "⏱️", value: "30 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "Medium", label: "Spice Level" },
    ],

    intro: {
        lead: "The heart of Mumbai's street food scene — a buttery, spicy mash of vibrant vegetables served with pillow-soft, toasted pav.",
        body: [
            "We've all paid ₹250+ for a plate of <strong>Pav Bhaji</strong> at a fancy restaurant, but the real soul of this dish lives on the streets and in your kitchen. This budget-friendly version uses simple seasonal veggies but achieves that deep, buttery red color without artificial dyes.",
            "This recipe feeds a family of four for ₹100. It's the perfect 'clean out the fridge' meal that everyone will think you spent hours on."
        ],
        highlights: [
            "Feeds 4 for ₹100",
            "Better than restaurant versions",
            "Hidden veggies (kids love it)",
            "Rich in fiber & vitamins",
            "Ready in 30 minutes",
            "Endless butter potential"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Famous Mumbai Stall",
        headingIcon: "₹",
        ingredients: [
            { name: "Potato & Cauliflower", qty: "2 cups each", cost: "₹30" },
            { name: "Onion, Tomato, Peas", qty: "1 cup each", cost: "₹25" },
            { name: "Pav (Bread Rolls)", qty: "1 packet (8 pieces)", cost: "₹25" },
            { name: "Butter & Spices", qty: "as needed", cost: "₹20" },
        ],
        totalServings: "4 Full Plates",
        totalCost: "₹100",
        perServing: "~₹25",
        restaurantCost: "₹300",
        saving: "₹200!",
    },

    ingredients: [
        {
            groupName: "The Bhaji (Mash)",
            items: [
                "🥔 2 medium potatoes — peeled & diced",
                "🥦 1 cup cauliflower — chopped",
                "🫛 1/2 cup peas — fresh or frozen",
                "🥕 1 small carrot — chopped (optional for color)"
            ],
        },
        {
            groupName: "The Masala",
            items: [
                "🧅 1 large onion — finely chopped",
                "🍅 2 large tomatoes — finely chopped",
                "🫑 1/2 capsicum — finely chopped",
                "🧄 1 tbsp ginger-garlic paste",
                "🧈 2 tbsp Butter + more for pav",
                "🌶️ 2 tbsp Pav Bhaji Masala",
                "🌶️ 1 tsp Kashmiri Red Chilli powder (for color)",
                "🧂 Salt & Lemon juice"
            ],
        },
    ],

    steps: [
        {
            title: "Pressure Cook & Mash — 10 min",
            paras: [
                "Pressure cook the potatoes, cauliflower, peas, and carrots with 1.5 cups water for 3-4 whistles until very soft.",
                "Drain the excess water (save it!) and mash the vegetables into a smooth, thick consistency with a potato masher."
            ],
        },
        {
            title: "The Sizzling Masala — 10 min",
            paras: [
                "In a large pan, melt 1 tbsp butter. Add onions and sauté until translucent. Add ginger-garlic paste and capsicum. Sauté for 2 minutes.",
                "Add tomatoes, salt, and half the pav bhaji masala. Cook until tomatoes are mushy and oil starts to separate."
            ],
            tip: { type: "gold", icon: "⭐", label: "Color Secret", text: "Don't use food color! Boil a small piece of beetroot with the veggies to get that iconic deep red restaurant color naturally." },
        },
        {
            title: "Combine & Simmer — 8 min",
            paras: [
                "Add the mashed veggies to the pan. Add the remaining pav bhaji masala, butter, and a splash of the saved veggie water.",
                "Mash everything together IN THE PAN. Simmer on low heat for 5-7 minutes. Finish with a squeeze of lemon and fresh coriander."
            ],
            tip: { type: "green", icon: "💡", label: "Butter Tip", text: "Add the butter in stages — once while cooking the masala and once at the very end. This creates a much richer flavor without using too much overall." },
        },
        {
            title: "The Golden Pav — 2 min",
            paras: [
                "Slit the pavs in half. Melt butter on a tawa, sprinkle a little pav bhaji masala and coriander, and toast the pavs until golden and warm."
            ],
        },
    ],

    tips: [
        { bold: "Mash while HOT.", text: "Veggies mash much smoother when they are fresh out of the cooker." },
        { bold: "The 'Tawa' method.", text: "If you have a large flat iron tawa, use it! The iron adds a subtle street flavor." },
        { bold: "Rest the Bhaji.", text: "Like all Indian curries, the bhaji tastes even better after resting for 10 minutes." }
    ],

    substitutions: [
        { original: "Pav", swap: "Regular white bread slices", saves: "₹10" },
        { original: "Butter", swap: "Oil (less authentic but cheaper/healthier)", saves: "₹10" },
    ],

    variations: [
        { name: "🧀 Cheese Pav Bhaji", desc: "Top the bhaji with lots of grated cheese before serving.", price: "+₹25", full: false },
        { name: "🥬 Paneer Pav Bhaji", desc: "Add crumbled paneer to the bhaji mix during the simmer.", price: "+₹40", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Weekend family treat", restCost: "₹1,200", homeCost: "₹100" },
            { scenario: "Birthday party for 10", restCost: "₹3,000", homeCost: "₹250" },
        ],
        tip: "Pav Bhaji is the ultimate budget party food. You can feed a whole group for the price of one single pizza.",
    },

    nutrition: [
        { value: "540", label: "Calories" },
        { value: "78g", label: "Carbs" },
        { value: "11g", label: "Protein" },
        { value: "22g", label: "Fat" },
    ],

    faq: [
        { q: "Can I use frozen veggies?", a: "Yes, frozen peas and cauliflower work perfectly. They might actually cook faster." },
        { q: "Why is my bhaji yellow?", a: "You probably didn't use enough ripe tomatoes or beetroot for color. Kashmiri chilli powder also helps." }
    ],

    related: [
        { emoji: "🥘", title: "Paneer Bhurji", price: "Under ₹149", href: "/recipes/dhaba-style-paneer-bhurji" },
        { emoji: "🥚", title: "Anda Bhurji Pav", price: "Under ₹59", href: "/recipes/anda-bhurji-pav" },
    ],

    seedComments: [
        { name: "Manoj T.", color1: "#e74c3c", color2: "#c0392b", stars: 5, text: "The beetroot tip made my bhaji look exactly like Juhu Chowpatty pav bhaji!", date: "2 days ago" },
    ],
};
