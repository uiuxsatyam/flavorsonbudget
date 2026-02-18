import { Recipe } from "../recipe-types";

export const creamyGarlicPasta: Recipe = {
    slug: "creamy-garlic-pasta",
    title: "Creamy Garlic Pasta",
    titleEmphasis: "in 20 Minutes",
    category: "Quick Meals",
    subcategory: "Under ₹149",
    date: "Feb 2026",
    views: "4.2k",
    emoji: "🍝",
    image: "/images/recipes/creamy-garlic-pasta.png",
    savingsBadgeTop: "SAVE",
    savingsBadgeAmount: "₹251",
    savingsBadgeSub: "vs resto",
    initialLikes: 241,

    stats: [
        { icon: "💰", value: "₹149", label: "Total Cost" },
        { icon: "🍽️", value: "₹78", label: "Per Serving" },
        { icon: "⏱️", value: "20 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Mild", label: "Spice Level" },
    ],

    intro: {
        lead: "You just got home from a long day. Tired, hungry — and a ₹400 restaurant bill is the last thing you need.",
        body: [
            "This <strong>creamy garlic pasta recipe</strong> is your answer. Rich, velvety, restaurant-quality pasta at home in just 20 minutes for under ₹149. Made twice a week, you save over <strong>₹2,000 a month</strong>.",
            "I developed this recipe to prove one thing: <strong>budget cooking doesn't mean boring cooking.</strong> Seven simple ingredients, 3 easy steps, and the kind of result that makes you wonder why you ever ordered out.",
        ],
        highlights: [
            "Ready in 20 min — faster than delivery",
            "Costs ₹149 home vs ₹400 restaurant",
            "Only 7 ingredients",
            "3 simple steps — total beginner friendly",
            "Mild creamy flavor everyone loves",
            "Perfect office dinner solution",
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Restaurant",
        headingIcon: "₹",
        tip: { type: "gold", icon: "💡", label: "Budget Tip", text: "Buy Amul cream in the small 100ml tetra pack — exactly the right amount, ₹25–30 at any kirana store. No specialty store needed!" },
        ingredients: [
            { name: "Pasta (penne/spaghetti/fettuccine)", qty: "200g", cost: "₹40" },
            { name: "Fresh cream (Amul)", qty: "1/2 cup", cost: "₹50" },
            { name: "Parmesan / Amul processed cheese", qty: "1/4 cup", cost: "₹30" },
            { name: "Fresh garlic cloves", qty: "6 cloves", cost: "₹10" },
            { name: "Olive oil", qty: "2 tbsp", cost: "₹15" },
            { name: "Italian herbs (dried)", qty: "1 tsp", cost: "₹8" },
            { name: "Salt & pepper", qty: "to taste", cost: "₹4" },
        ],
        totalServings: "2 Servings",
        totalCost: "₹157",
        perServing: "~₹78",
        restaurantCost: "₹400",
        saving: "₹322!",
    },

    ingredients: [
        {
            groupName: "Pasta & Sauce",
            items: [
                "🍝 200g pasta — penne, spaghetti, or fettuccine (any shape)",
                "🥛 1/2 cup (100ml) fresh cream — Amul, Milky Mist, or any brand",
                "🧀 1/4 cup grated Parmesan or 2 cubes Amul processed cheese",
                "🫒 2 tbsp olive oil (or butter for richer taste)",
            ],
        },
        {
            groupName: "Aromatics & Seasoning",
            items: [
                "🧄 6 cloves fresh garlic, finely minced",
                "🌿 1 tsp Italian herbs (or dried basil + oregano mix)",
                "🧂 Salt & freshly cracked black pepper to taste",
                "🌱 Fresh parsley or coriander for garnish (optional)",
            ],
        },
    ],

    steps: [
        {
            title: "Boil the Pasta — 10 min",
            paras: [
                "Bring a large pot of water to a rolling boil. Add a generous pinch of salt — the water should taste like the sea.",
                "Cook pasta to <strong>al dente</strong> (firm to the bite) as per the packet instructions, usually 8–10 minutes.",
            ],
            tip: { type: "gold", icon: "⭐", label: "Key Step", text: "Save 1/2 cup of pasta cooking water before draining. This starchy water makes your sauce silky and glossy — liquid gold!" },
        },
        {
            title: "Sauté the Garlic — 3 min",
            paras: [
                "Heat olive oil in a large pan over <strong>medium heat</strong>. Once hot (not smoking!), add the minced garlic. Sauté for 1–2 minutes, stirring continuously, until light golden and fragrant.",
            ],
            tip: { type: "red", icon: "⚠️", label: "Watch Carefully", text: "Garlic goes from golden to burnt in seconds. Burnt garlic tastes bitter and ruins the whole dish. Medium heat, keep stirring!" },
        },
        {
            title: "Make Cream Sauce & Combine — 5 min",
            paras: [
                "Reduce heat to <strong>low</strong>. Pour in the cream and stir gently. Simmer 1–2 minutes until it thickens slightly.",
                "Add Italian herbs, salt, and pepper. Add the drained pasta and toss until every strand is coated.",
                "Sprinkle Parmesan, give a final toss, plate immediately, and garnish with parsley. <strong>Serve hot!</strong>",
            ],
            tip: { type: "green", icon: "💡", label: "Pro Tip", text: "Serve immediately — cream pasta sauce thickens as it cools. Plate it and bring it to the table right away!" },
        },
    ],

    tips: [
        { bold: "Salt your pasta water generously.", text: "Properly seasoned pasta water seasons the pasta from the inside out." },
        { bold: "Always save pasta water.", text: "That cloudy, starchy water is a secret weapon. Add tablespoons at a time to loosen a thick sauce." },
        { bold: "Don't overcook the garlic.", text: "Low-medium heat, constant stirring, 1–2 minutes max. Golden = good. Brown = bitter." },
        { bold: "Use cold cream — not boiling.", text: "Add cream to the pan off high heat. High heat + cream = curdled mess." },
        { bold: "Cook pasta to al dente, not soft.", text: "The pasta continues cooking in the hot sauce. Pull it 1 minute before the packet says." },
        { bold: "Toss, don't just mix.", text: "Use tongs and toss the pasta in the sauce for restaurant-quality results." },
    ],

    substitutions: [
        { original: "Fresh cream", swap: "Milk + 1 tsp cornflour", saves: "~₹20" },
        { original: "Parmesan cheese", swap: "Amul processed cheese cubes", saves: "~₹15" },
        { original: "Olive oil", swap: "Vegetable / sunflower oil", saves: "~₹10" },
        { original: "Italian herbs", swap: "Dried basil + oregano", saves: "~₹5" },
        { original: "Fresh parsley", swap: "Fresh coriander (dhaniya)", saves: "₹0" },
    ],

    variations: [
        { name: "🌶️ Spicy Arrabbiata", desc: "Add 1/2 tsp red chilli flakes + 2 tbsp tomato paste while sautéing garlic.", price: "Same ₹149", full: false },
        { name: "🍗 Chicken Garlic Pasta", desc: "Sear 150g sliced chicken breast in same pan before garlic.", price: "+₹50 → ₹199", full: false },
        { name: "🍄 Mushroom Garlic", desc: "Sauté 100g sliced button mushrooms with garlic until golden.", price: "+₹30 → ₹179", full: false },
        { name: "🍋 Lemon Garlic", desc: "Add 1 tbsp lemon juice + 1 tsp zest to cream sauce.", price: "+₹5 → ₹154", full: false },
        { name: "🇮🇳 Indian-Fusion Style", desc: "Add 1/4 tsp turmeric + a pinch of garam masala to the cream sauce.", price: "Same ₹149", full: true },
    ],

    savingsTable: {
        rows: [
            { scenario: "Make pasta once a week (4×/month)", restCost: "₹1,600", homeCost: "₹628" },
            { scenario: "Make pasta twice a week (8×/month)", restCost: "₹3,200", homeCost: "₹1,256" },
            { scenario: "Office lunch 5 days/week (20×/month)", restCost: "₹8,000", homeCost: "₹3,140" },
        ],
        tip: "Making this pasta instead of ordering out just 4 times a month saves you nearly ₹1,000. That's a new outfit, a fun outing, or a month of your internet bill.",
    },

    nutrition: [
        { value: "480", label: "Calories" },
        { value: "58g", label: "Carbs" },
        { value: "12g", label: "Protein" },
        { value: "22g", label: "Fat" },
    ],

    faq: [
        { q: "Can I make this without fresh cream?", a: "Yes! Mix 3 tbsp of full-fat milk with 1 tsp cornflour until smooth. The sauce will be slightly lighter but still delicious." },
        { q: "Which pasta shape works best?", a: "Fettuccine and penne are classic choices. Honestly, any pasta works — even broken spaghetti!" },
        { q: "My sauce is too thick. How do I fix it?", a: "Add the reserved pasta water one tablespoon at a time. The starch emulsifies the sauce perfectly." },
        { q: "Can I make this for 4 people?", a: "Absolutely! Double all ingredients. Total cost will be ~₹290–310 — still less than ONE restaurant serving." },
        { q: "How do I store and reheat leftovers?", a: "Store in an airtight container for up to 2 days. Reheat in a pan with 2–3 tbsp milk over low heat." },
    ],

    related: [
        { emoji: "🍗", title: "Chicken Biryani", price: "Under ₹199", href: "/recipes/chicken-biryani" },
        { emoji: "🥚", title: "Anda Bhurji Pav", price: "Under ₹59", href: "/recipes/anda-bhurji-pav" },
        { emoji: "🍜", title: "Chicken Hakka Noodles", price: "Under ₹129", href: "/recipes/chicken-hakka-noodles" },
    ],

    seedComments: [
        { name: "Priya M.", color1: "#e67e22", color2: "#f39c12", stars: 5, text: "Made this last night and it was absolutely amazing! My family couldn't believe it cost less than ₹150.", date: "3 days ago" },
        { name: "Rahul S.", color1: "#27ae60", color2: "#2ecc71", stars: 5, text: "Perfect office dinner! I've already saved over ₹3,000 this month!", date: "1 week ago" },
        { name: "Anjali K.", color1: "#8e44ad", color2: "#9b59b6", stars: 4, text: "Tried the Indian fusion variation with garam masala — absolutely brilliant idea!", date: "2 weeks ago" },
    ],
};
