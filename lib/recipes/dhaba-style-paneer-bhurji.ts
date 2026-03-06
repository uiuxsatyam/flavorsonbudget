import { Recipe } from "../recipe-types";

export const dhabaPaneerBhurji: Recipe = {
    slug: "dhaba-style-paneer-bhurji",
    title: "Paneer Bhurji",
    titleEmphasis: "Dhaba-Style for ₹120",
    category: "Indian Budget",
    subcategory: "Under ₹149",
    date: "Mar 2026",
    views: "5.1k",
    emoji: "🥘",
    image: "/images/recipes/paneer-bhurji.png",
    savingsBadgeAmount: "₹180",
    savingsBadgeSub: "vs dhaba",
    initialLikes: 142,

    stats: [
        { icon: "💰", value: "₹120", label: "Total Cost" },
        { icon: "🍽️", value: "₹40", label: "Per Serving" },
        { icon: "⏱️", value: "15 min", label: "Total Time" },
        { icon: "👥", value: "3", label: "Servings" },
        { icon: "🌶️", value: "Medium", label: "Spice Level" },
    ],

    intro: {
        lead: "A rich, spicy scramble of fresh malai paneer with buttery onions and tomatoes — the ultimate quick-fix dinner that feels like a feast.",
        body: [
            "We've all seen <strong>Paneer Bhurji</strong> on the menu for ₹300+, but at home, it's one of the most economical high-protein meals you can make. The secret to that 'Dhaba' taste is the <strong>Besan (Gram Flour)</strong> and the <strong>Pav Bhaji Masala</strong> added to the spice mix.",
            "This recipe feeds three people generously for ₹120. It's fast, healthy, and pairs perfectly with hot buttered pav or rotis."
        ],
        highlights: [
            "Feeds 3 for the price of 1 resto dish",
            "Ready in 15 minutes",
            "High protein (18g per serving)",
            "One-pan wonder",
            "Better than restaurant butter masala",
            "Kids' favorite lunchbox meal"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Highway Dhaba",
        headingIcon: "₹",
        ingredients: [
            { name: "Fresh Paneer", qty: "200g", cost: "₹80" },
            { name: "Onions & Tomatoes", qty: "2 large each", cost: "₹20" },
            { name: "Ginger, Garlic & Chillies", qty: "as needed", cost: "₹5" },
            { name: "Butter & Oil", qty: "2 tbsp", cost: "₹10" },
            { name: "Spices & Besan", qty: "minimal", cost: "₹5" },
        ],
        totalServings: "3 Servings",
        totalCost: "₹120",
        perServing: "~₹40",
        restaurantCost: "₹300",
        saving: "₹180!",
    },

    ingredients: [
        {
            groupName: "The Core",
            items: [
                "🧀 200g Fresh Paneer — crumbled by hand",
                "🧅 2 Medium onions — finely chopped",
                "🍅 2 Medium tomatoes — finely chopped",
                "🌶️ 2 Green chillies — finely chopped",
                "🧄 1 tbsp Ginger-garlic paste"
            ],
        },
        {
            groupName: "The Secret Mix",
            items: [
                "🥣 1 tsp Besan (Gram flour) — to prevent water separation",
                "🧈 1 tbsp Butter",
                "🧂 Salt, Turmeric, Cumin powder",
                "🌶️ 1 tsp Kashmiri red chilli powder",
                "🥨 1/2 tsp Pav Bhaji masala (The Secret!)",
                "🌿 Handful of fresh coriander"
            ],
        },
    ],

    steps: [
        {
            title: "The Tadka — 3 min",
            paras: [
                "Heat a mix of oil and butter in a pan. Add cumin seeds and onions. Sauté until onions are translucent and light brown.",
                "Add ginger-garlic paste and green chillies. Sauté for another minute until the raw smell is gone."
            ],
        },
        {
            title: "The Spice Base — 5 min",
            paras: [
                "Add tomatoes and salt. Cook until they turn mushy and release oil.",
                "Now, add the <strong>besan</strong> and all the dry spices (turmeric, chilli powder, pav bhaji masala). Sauté for 2 minutes. The besan will absorb any excess moisture and give a creamy texture."
            ],
            tip: { type: "gold", icon: "⭐", label: "Dhaba Secret", text: "Adding a teaspoon of besan prevents the 'watery paneer' problem and creates a thick, restaurant-style masala coating." },
        },
        {
            title: "Finish & Fold — 5 min",
            paras: [
                "Add the crumbled paneer and a splash of water (2-3 tbsp). Toss gently to coat the paneer in the masala.",
                "Do not overcook! Just 3-4 minutes on medium heat is enough. Finish with a small cube of butter and lots of fresh coriander."
            ],
            tip: { type: "green", icon: "💡", label: "Texture Hack", text: "Always crumble paneer with your hands instead of grating it. The irregular pieces hold more masala and taste much better." },
        },
    ],

    tips: [
        { bold: "Use Fresh Paneer.", text: "Frozen paneer can become chewy. If using frozen, soak in hot water for 15 min first." },
        { bold: "Don't overmix.", text: "Keep the paneer pieces distinct; don't turn them into a paste." },
        { bold: "The 'Secret' Masala.", text: "Pav Bhaji masala gives it that unique 'street' kick that regular garam masala lacks." }
    ],

    substitutions: [
        { original: "Paneer", swap: "Tofu or Scrambled Eggs", saves: "₹20" },
        { original: "Butter", swap: "Cream or thick curd", saves: "₹5" },
    ],

    variations: [
        { name: "🧀 Cheesy Bhurji", desc: "Top with grated cheese and serve with toasted bread.", price: "+₹20", full: false },
        { name: "🥗 Veggie Mix", desc: "Add finely chopped capsicum and peas for extra volume.", price: "+₹10", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Quick weekday dinner", restCost: "₹300", homeCost: "₹120" },
            { scenario: "Guest dinner for 6", restCost: "₹600", homeCost: "₹240" },
        ],
        tip: "Paneer is often the most expensive item on a budget menu. But at ₹80 for a slab, it's actually cheaper than ordering a chicken dish.",
    },

    nutrition: [
        { value: "290", label: "Calories" },
        { value: "12g", label: "Carbs" },
        { value: "18g", label: "Protein" },
        { value: "20g", label: "Fat" },
    ],

    faq: [
        { q: "Why is my bhurji dry?", a: "Add 2-3 tbsp of milk or cream at the very end to make it moist and creamy." },
        { q: "Can I use malai?", a: "Absolutely! 1 tbsp of fresh malai (cream) will make it taste exactly like fine-dining paneer." }
    ],

    related: [
        { emoji: "🫓", title: "Cabbage Paratha", price: "Under ₹60", href: "/recipes/cabbage-paratha" },
        { emoji: "🍳", title: "Masala Omelette", price: "Under ₹49", href: "/recipes/masala-omelette" },
    ],

    seedComments: [
        { name: "Sneha W.", color1: "#8e44ad", color2: "#9b59b6", stars: 5, text: "The besan tip is a game changer! No more watery bhurji.", date: "1 week ago" },
    ],
};
