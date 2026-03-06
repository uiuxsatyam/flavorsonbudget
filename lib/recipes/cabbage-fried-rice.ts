import { Recipe } from "../recipe-types";

export const cabbageFriedRice: Recipe = {
    slug: "cabbage-fried-rice",
    title: "Cabbage Fried Rice",
    titleEmphasis: "Under ₹80",
    category: "Indian Budget",
    subcategory: "Under ₹80",
    date: "Mar 2026",
    views: "2.5k",
    emoji: "🍚",
    image: "/images/recipes/cabbage-fried-rice.png",
    savingsBadgeAmount: "₹160",
    savingsBadgeSub: "vs resto",
    initialLikes: 145,

    stats: [
        { icon: "💰", value: "₹80", label: "Total Cost" },
        { icon: "🍽️", value: "₹20", label: "Per Serving" },
        { icon: "⏱️", value: "15 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "Medium", label: "Spice Level" },
    ],

    intro: {
        lead: "Crunchy, smoky, and dangerously addictive — the fastest way to turn a humble cabbage into a restaurant-style meal for your whole family.",
        body: [
            "We call this <strong>The Emergency Stir-Fry</strong>. It's what you make when there's nothing in the fridge but a head of cabbage and some leftover rice. The high heat of the wok char-grills the cabbage, giving it a smoky depth that pairs perfectly with soy sauce.",
            "This <strong>Cabbage Fried Rice</strong> rivals any Indo-Chinese street stall version. It's fast, filling, and costs just ₹20 per plate."
        ],
        highlights: [
            "Feeds 4 for under ₹80",
            "Great use for leftover rice",
            "Ready in 15 minutes",
            "Restaurant-style 'smoky' flavor",
            "Customizable with any veggies",
            "Goes great with Cabbage Pakoras"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Indo-Chinese Stall",
        headingIcon: "₹",
        ingredients: [
            { name: "Rice (Leftover or fresh)", qty: "3 cups cooked", cost: "₹30" },
            { name: "Cabbage", qty: "2 cups (shredded)", cost: "₹10" },
            { name: "Onion & Carrot", qty: "1 small each", cost: "₹15" },
            { name: "Soy Sauce, Chilli Sauce, Vinegar", qty: "pantry basic", cost: "₹10" },
            { name: "Ginger, Garlic, Green Chillies", qty: "as needed", cost: "₹10" },
            { name: "Oil", qty: "2 tbsp", cost: "₹5" },
        ],
        totalServings: "4 Servings",
        totalCost: "₹80",
        perServing: "~₹20",
        restaurantCost: "₹240",
        saving: "₹160!",
    },

    ingredients: [
        {
            groupName: "The Aromatics",
            items: [
                "🧄 1 tbsp garlic — very finely chopped",
                "🫚 1 tsp ginger — finely chopped",
                "🌶️ 2 green chillies — finely chopped",
                "🧅 1 onion — sliced or chopped"
            ],
        },
        {
            groupName: "The Veggies & Rice",
            items: [
                "🥬 2 cups cabbage — finely shredded",
                "🥕 1/2 carrot — julienned",
                "🍚 3 cups cooked rice — preferably day-old & cold",
                "🧂 Salt & black pepper to taste"
            ],
        },
        {
            groupName: "The Sauce",
            items: [
                "🍱 1 tbsp soy sauce",
                "🌶️ 1 tbsp red chilli sauce",
                "🧪 1 tsp vinegar"
            ],
        },
    ],

    steps: [
        {
            title: "The Sizzle — 3 min",
            paras: [
                "Heat oil in a wok or large pan on HIGH heat until it's barely smoking. Add garlic, ginger, and green chillies. Sauté for 30 seconds until fragrant but not brown."
            ],
        },
        {
            title: "Stir-Fry the Veggies — 4 min",
            paras: [
                "Add onions and stir-fry for 1 minute. Add cabbage and carrots. Stir-fry on the highest heat for 3 minutes.",
                "The goal is to let the cabbage wilt slightly but keep its crunch. Do not add salt yet!"
            ],
            tip: { type: "gold", icon: "⭐", label: "Wok Hei", text: "The secret to restaurant taste is high heat. Keep the veggies moving so they char but don't steam." },
        },
        {
            title: "Combine & Season — 5 min",
            paras: [
                "Add the cold rice to the pan. Break up any clumps with your spatula.",
                "Drizzle soy sauce, chilli sauce, vinegar, salt, and pepper over the rice. Toss everything together for 3-4 minutes until the rice is heated through. Garnish with spring onions if you have them."
            ],
            tip: { type: "green", icon: "💡", label: "Rice Quality", text: "Day-old cold rice is best for fried rice because the grains are dry and separate easily. If using fresh rice, spread it on a tray to cool completely first." },
        },
    ],

    tips: [
        { bold: "High heat is mandatory.", text: "If you cook on low heat, the cabbage will release water and make the rice mushy." },
        { bold: "Add salt at the end.", text: "Salt draws out moisture. Adding it last keeps the cabbage crunchy." },
        { bold: "Toss, don't stir.", text: "Be gentle with the rice grains so they don't break." }
    ],

    substitutions: [
        { original: "Carrot", swap: "Capsicum or Green Beans", saves: "₹0" },
        { original: "Soy Sauce", swap: "Salt + pinch of sugar + pinch of MSG", saves: "₹2" },
        { original: "Vinegar", swap: "Lemon juice", saves: "₹0" },
    ],

    variations: [
        { name: "🥚 Egg Fried Rice", desc: "Push veggies to the side, scramble 2 eggs in the center, then mix with rice.", price: "+₹15", full: false },
        { name: "🔥 Schezwan Style", desc: "Add 1 tbsp Schezwan sauce for a spicier, redder version.", price: "+₹10", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Mid-week dinner (4×/month)", restCost: "₹960", homeCost: "₹320" },
            { scenario: "Late-night craving order", restCost: "₹250", homeCost: "₹20" },
        ],
        tip: "Fried rice is the king of budget meals. One head of cabbage (₹20) can make enough fried rice for 8 people!",
    },

    nutrition: [
        { value: "340", label: "Calories" },
        { value: "58g", label: "Carbs" },
        { value: "6g", label: "Protein" },
        { value: "9g", label: "Fat" },
    ],

    faq: [
        { q: "Can I use brown rice?", a: "Yes, but it will have a nuttier texture. Ensure it's very dry before frying." },
        { q: "Is MSG safe?", a: "Yes, in moderation. Street stalls use it for that specific 'Chinese' taste. You can skip it for a healthier home version." }
    ],

    related: [
        { emoji: "🍜", title: "Chicken Hakka Noodles", price: "Under ₹129", href: "/recipes/chicken-hakka-noodles" },
        { emoji: "🥟", title: "Cabbage Pakoras", price: "Under ₹45", href: "/recipes/cabbage-pakoras" },
    ],

    seedComments: [
        { name: "Sameer K.", color1: "#27ae60", color2: "#2ecc71", stars: 5, text: "Made this with leftover rice from yesterday. Honestly better than the delivery I had last week.", date: "1 week ago" },
    ],
};
