import { Recipe } from "../recipe-types";

export const andaBhurjiPav: Recipe = {
    slug: "anda-bhurji-pav",
    title: "Anda Bhurji Pav",
    titleEmphasis: "Under ₹59",
    category: "Street Food",
    subcategory: "Under ₹59",
    date: "Feb 2026",
    views: "3.1k",
    emoji: "🥚",
    image: "/images/recipes/anda-bhurji-pav.png",
    savingsBadgeAmount: "₹91",
    savingsBadgeSub: "vs resto",
    initialLikes: 178,

    stats: [
        { icon: "💰", value: "₹59", label: "Total Cost" },
        { icon: "🍽️", value: "₹30", label: "Per Serving" },
        { icon: "⏱️", value: "12 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Medium", label: "Spice Level" },
    ],

    intro: {
        lead: "Mumbai's favourite street food — spicy scrambled eggs with buttery pav — for less than the cost of a chai!",
        body: [
            "This <strong>anda bhurji pav</strong> is the ultimate budget protein bomb. 4 eggs, basic spices, and fresh pav — that's all you need for the most satisfying meal under ₹60.",
            "<strong>12 minutes</strong> from start to plate. Perfect for a quick breakfast, late-night snack, or hostel dinner when you're running low on cash and time.",
        ],
        highlights: [
            "Ready in 12 minutes flat",
            "Only ₹59 for 2 servings",
            "High protein — 24g per serving",
            "5 pantry ingredients",
            "Mumbai street food classic",
            "Perfect hostel/bachelor meal",
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Street Stall",
        headingIcon: "₹",
        ingredients: [
            { name: "Eggs", qty: "4", cost: "₹28" },
            { name: "Pav (bread rolls)", qty: "4", cost: "₹12" },
            { name: "Onion", qty: "1 medium", cost: "₹5" },
            { name: "Tomato", qty: "1 small", cost: "₹5" },
            { name: "Green chillies, coriander, spices", qty: "as needed", cost: "₹5" },
            { name: "Butter / oil", qty: "1 tbsp", cost: "₹4" },
        ],
        totalServings: "2 Servings",
        totalCost: "₹59",
        perServing: "~₹30",
        restaurantCost: "₹150",
        saving: "₹91!",
    },

    ingredients: [
        {
            groupName: "Main Ingredients",
            items: [
                "🥚 4 eggs — lightly beaten",
                "🍞 4 pav (ladi pav) — lightly toasted with butter",
                "🧅 1 medium onion — finely chopped",
                "🍅 1 small tomato — finely chopped",
                "🌶️ 2 green chillies — finely chopped",
            ],
        },
        {
            groupName: "Spices & Garnish",
            items: [
                "🧈 1 tbsp butter or oil",
                "🌿 Fresh coriander — chopped",
                "🧂 Salt to taste",
                "🌶️ 1/4 tsp turmeric + 1/2 tsp red chilli powder",
                "🫚 1/2 tsp cumin seeds (optional)",
            ],
        },
    ],

    steps: [
        {
            title: "Prep the Base — 3 min",
            paras: [
                "Heat butter in a pan. Add cumin seeds (if using), then chopped onions. Sauté until translucent.",
                "Add green chillies and tomatoes. Cook until tomatoes soften, about 2 minutes.",
            ],
        },
        {
            title: "Cook the Bhurji — 5 min",
            paras: [
                "Add turmeric, red chilli powder, and salt. Stir well.",
                "Pour in beaten eggs. Stir continuously with a spatula, breaking into small curds. Cook until just set — don't overcook!",
            ],
            tip: { type: "gold", icon: "⭐", label: "Key Step", text: "Keep the bhurji slightly wet. It continues cooking off the heat and you want it creamy, not rubbery." },
        },
        {
            title: "Toast Pav & Serve — 3 min",
            paras: [
                "Slice pav horizontally. Toast on a hot tawa with butter until golden and crispy on the cut side.",
                "Garnish bhurji with fresh coriander. Serve hot alongside toasted pav. Add a squeeze of lemon for extra zing!",
            ],
            tip: { type: "green", icon: "💡", label: "Pro Tip", text: "For Mumbai-style, add a pinch of pav bhaji masala to the eggs — game changer!" },
        },
    ],

    tips: [
        { bold: "Don't overbeat the eggs.", text: "A light beating keeps texture interesting. Over-beating makes it too uniform." },
        { bold: "Low-medium heat always.", text: "High heat = dry, rubbery eggs. Low heat = creamy, soft curds." },
        { bold: "Pull off heat slightly early.", text: "Carryover heat finishes the job. Better slightly underdone than overdone." },
        { bold: "Fresh pav makes ALL the difference.", text: "Soft, fresh ladi pav from a bakery vs packaged — night and day." },
    ],

    substitutions: [
        { original: "Butter", swap: "Oil / margarine", saves: "~₹3" },
        { original: "Pav", swap: "Bread slices (toasted)", saves: "~₹5" },
        { original: "Green chillies", swap: "Red chilli flakes", saves: "₹0" },
    ],

    variations: [
        { name: "🧀 Cheese Bhurji", desc: "Add 2 cubes grated cheese while eggs are still wet. Melty and rich!", price: "+₹15 → ₹74", full: false },
        { name: "🧅 Masala Bhurji", desc: "Add 1 tsp pav bhaji masala + extra butter for Mumbai tapri style.", price: "Same ₹59", full: false },
        { name: "🌯 Bhurji Roll", desc: "Skip the pav. Roll bhurji in a roti or paratha with green chutney.", price: "Same ₹59", full: false },
        { name: "🥬 Paneer Bhurji", desc: "Replace eggs with crumbled paneer for a vegetarian version.", price: "+₹20 → ₹79", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Quick dinner 3×/week (12×/month)", restCost: "₹1,800", homeCost: "₹708" },
            { scenario: "Hostel dinner daily (30×/month)", restCost: "₹4,500", homeCost: "₹1,770" },
        ],
        tip: "At ₹30 per plate, anda bhurji pav is one of the cheapest high-protein meals you can make. Perfect for students!",
    },

    nutrition: [
        { value: "320", label: "Calories" },
        { value: "28g", label: "Carbs" },
        { value: "24g", label: "Protein" },
        { value: "14g", label: "Fat" },
    ],

    faq: [
        { q: "How many eggs per person?", a: "2 eggs per person is perfect with pav. For a bigger appetite, go with 3." },
        { q: "Can I add vegetables?", a: "Absolutely! Capsicum, mushrooms, or spinach work great. Add them with the onions." },
        { q: "Is this healthy?", a: "Eggs are one of the cheapest sources of complete protein. Paired with pav it's a balanced meal." },
    ],

    related: [
        { emoji: "🍝", title: "Creamy Garlic Pasta", price: "Under ₹149", href: "/recipes/creamy-garlic-pasta" },
        { emoji: "🍚", title: "Chicken Biryani", price: "Under ₹199", href: "/recipes/chicken-biryani" },
        { emoji: "🥘", title: "Masala Omelette", price: "Under ₹49", href: "/recipes/masala-omelette" },
    ],

    seedComments: [
        { name: "Rohan K.", color1: "#f39c12", color2: "#e67e22", stars: 5, text: "This is my go-to hostel dinner. 12 minutes and I have a proper meal. Genius!", date: "2 days ago" },
        { name: "Meera J.", color1: "#9b59b6", color2: "#8e44ad", stars: 5, text: "Added cheese — incredible! My kids love this for breakfast.", date: "4 days ago" },
    ],
};
