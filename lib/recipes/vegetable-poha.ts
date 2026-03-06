import { Recipe } from "../recipe-types";

export const vegetablePoha: Recipe = {
    slug: "vegetable-poha",
    title: "Vegetable Poha",
    titleEmphasis: "₹10 Breakfast",
    category: "Indian Budget",
    subcategory: "Under ₹40",
    date: "Mar 2026",
    views: "3.2k",
    emoji: "🍛",
    image: "/images/recipes/vegetable-poha.png",
    savingsBadgeAmount: "₹120",
    savingsBadgeSub: "vs resto",
    initialLikes: 245,

    stats: [
        { icon: "💰", value: "₹40", label: "Total Cost" },
        { icon: "🍽️", value: "₹10", label: "Per Serving" },
        { icon: "⏱️", value: "15 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "Mild", label: "Spice Level" },
    ],

    intro: {
        lead: "The legendary Indian breakfast — light, fluffy flattened rice tossed with crunchy peanuts and vibrant veggies for just ₹10 a plate.",
        body: [
            "Poha is more than just a meal; it's the <strong>ultimate budget fuel</strong>. Made from flattened rice, it's gluten-free, rich in iron, and digests easily. The beauty of Poha lies in its simplicity — it takes just 15 minutes to go from 'nothing in the kitchen' to a hot, satisfying meal.",
            "This <strong>Vegetable Poha</strong> is packed with potatoes, onions, and peas, providing a balanced start to your day without the heavy price tag of a café breakfast."
        ],
        highlights: [
            "Feeds 4 for ₹40",
            "Rich in Iron & Carbohydrates",
            "Gluten-free & Vegan",
            "Ready in 15 minutes",
            "No cooking skills required",
            "Perfect for busy weekday mornings"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Udupi Restaurant",
        headingIcon: "₹",
        ingredients: [
            { name: "Poha (Thick)", qty: "2 cups", cost: "₹15" },
            { name: "Peanuts", qty: "handful", cost: "₹5" },
            { name: "Onion & Potato", qty: "1 small each", cost: "₹10" },
            { name: "Spices, Chilli, Curry Leaves", qty: "minimal", cost: "₹5" },
            { name: "Lemon & Oil", qty: "as needed", cost: "₹5" },
        ],
        totalServings: "4 Servings",
        totalCost: "₹40",
        perServing: "~₹10",
        restaurantCost: "₹160",
        saving: "₹120!",
    },

    ingredients: [
        {
            groupName: "Main",
            items: [
                "🍚 2 cups thick poha (flattened rice)",
                "🥜 2 tbsp raw peanuts",
                "🥔 1 small potato — finely diced",
                "🧅 1 onion — finely chopped",
                "🌶️ 2 green chillies — slit",
                "🌿 8-10 curry leaves (Kadi Patta)"
            ],
        },
        {
            groupName: "Tempering & Flavor",
            items: [
                "🟡 1/2 tsp mustard seeds",
                "🟡 1/2 tsp turmeric powder",
                "🧂 Salt to taste",
                "🍋 1 tsp lemon juice",
                "🫒 1 tbsp oil",
                "🌿 1 tbsp coriander leaves — for garnish"
            ],
        },
    ],

    steps: [
        {
            title: "Prep the Poha — 2 min",
            paras: [
                "Place poha in a colander/strainer. Rinse quickly under running water. Do not soak! The poha should be just moist, not dripping.",
                "Leave it to rest in the strainer while you prep the veggies. Toss with turmeric and salt so it coats evenly."
            ],
            tip: { type: "gold", icon: "⭐", label: "Secret Tip", text: "Mixing salt and turmeric directly with the damp poha ensures every grain is flavored and colored without bruising them in the pan." },
        },
        {
            title: "The Tadka & Potatoes — 8 min",
            paras: [
                "Heat oil in a pan. Add peanuts and fry until they turn deep brown. Remove and keep aside for extra crunch.",
                "In the same oil, add mustard seeds and curry leaves. Add diced potatoes and onions. Cover and cook on medium heat for 5-6 minutes until potatoes are soft."
            ],
        },
        {
            title: "Toss & Steam — 5 min",
            paras: [
                "Add the prepared poha to the pan. Toss gently. If it looks dry, sprinkle a tiny bit of water. Cover and steam on the lowest heat for 2 minutes.",
                "Turn off the heat. Add lemon juice, fried peanuts, and coriander. Fluff with a fork and serve hot."
            ],
            tip: { type: "green", icon: "💡", label: "Fluffy Poha", text: "The 2-minute steam is what makes poha soft and fluffy. Don't skip the lid!" },
        },
    ],

    tips: [
        { bold: "Use 'Thick Poha'.", text: "Thin poha will turn into a paste when washed. Thick poha holds its shape." },
        { bold: "Wash, don't soak.", text: "The rice grains only need to absorb enough moisture to soften. Soaking makes them mushy." },
        { bold: "Peanuts are essential.", text: "They provide the necessary protein and a classic crunch." }
    ],

    substitutions: [
        { original: "Potato", swap: "Green Peas (Matar)", saves: "₹0" },
        { original: "Peanuts", swap: "Roasted Chana Dal", saves: "₹2" },
        { original: "Sugar", swap: "Skip (optional but recommended)", saves: "₹0" },
    ],

    variations: [
        { name: "Indori Poha", desc: "Top with lots of 'Farsan' or 'Sev' and skip the potatoes.", price: "+₹10", full: false },
        { name: "Batata Poha", desc: "Increase the potato quantity for a heartier meal.", price: "Same", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Daily breakfast (30 days)", restCost: "₹1,200", homeCost: "₹300" },
            { scenario: "Office snack run", restCost: "₹40", homeCost: "₹10" },
        ],
        tip: "Poha is the most economical breakfast in India. A 500g pack (₹30) can make 10-12 servings!",
    },

    nutrition: [
        { value: "245", label: "Calories" },
        { value: "48g", label: "Carbs" },
        { value: "5g", label: "Protein" },
        { value: "6g", label: "Fat" },
    ],

    faq: [
        { q: "Why is my poha dry?", a: "You might have used 'Thin Poha' or didn't rinse it well enough. Sprinkle some water while steaming." },
        { q: "Can I add ginger?", a: "Yes, finely chopped ginger adds a lovely warmth, especially in winters." }
    ],

    related: [
        { emoji: "🥘", title: "Masala Omelette", price: "Under ₹49", href: "/recipes/masala-omelette" },
        { emoji: "🌽", title: "Masala Corn", price: "Under ₹50", href: "/recipes/masala-corn" },
    ],

    seedComments: [
        { name: "Arjun K.", color1: "#8e44ad", color2: "#9b59b6", stars: 5, text: "The tip to add turmeric to the poha while it's in the strainer is life-changing. No more yellow hands!", date: "1 week ago" },
    ],
};
