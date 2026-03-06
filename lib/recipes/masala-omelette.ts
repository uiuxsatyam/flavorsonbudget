import { Recipe } from "../recipe-types";

export const masalaOmelette: Recipe = {
    slug: "masala-omelette",
    title: "Masala Omelette",
    titleEmphasis: "Under ₹49",
    category: "Breakfast",
    subcategory: "Under ₹49",
    date: "Feb 2026",
    views: "2.5k",
    emoji: "🥘",
    image: "/images/recipes/masala-omelette.png",
    savingsBadgeAmount: "₹71",
    savingsBadgeSub: "vs café",
    initialLikes: 142,

    stats: [
        { icon: "💰", value: "₹49", label: "Total Cost" },
        { icon: "🍽️", value: "₹25", label: "Per Serving" },
        { icon: "⏱️", value: "8 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Mild", label: "Spice Level" },
    ],

    intro: {
        lead: "The Indian masala omelette — fluffy, spiced, and ready in 8 minutes. Your cheapest high-protein meal.",
        body: [
            "Forget boring plain omelettes. This <strong>Indian masala omelette</strong> is packed with onions, tomatoes, green chillies, and coriander for maximum flavor at minimum cost.",
            "At <strong>₹25 per serving</strong>, it's hard to find a more affordable protein-rich meal. Make it for breakfast with toast, or wrap it in a roti for a quick lunch.",
        ],
        highlights: [
            "Ready in 8 minutes",
            "Cheapest protein meal at ₹25/serving",
            "Only 5 basic ingredients",
            "Customizable spice level",
            "Perfect breakfast or snack",
            "Great for weight-watchers",
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Café",
        headingIcon: "₹",
        ingredients: [
            { name: "Eggs", qty: "4", cost: "₹28" },
            { name: "Onion (small)", qty: "1", cost: "₹3" },
            { name: "Tomato (small)", qty: "1", cost: "₹4" },
            { name: "Green chillies, coriander", qty: "as needed", cost: "₹4" },
            { name: "Oil / butter", qty: "1 tbsp", cost: "₹4" },
            { name: "Bread / toast", qty: "4 slices", cost: "₹6" },
        ],
        totalServings: "2 Servings",
        totalCost: "₹49",
        perServing: "~₹25",
        restaurantCost: "₹120",
        saving: "₹71!",
    },

    ingredients: [
        {
            groupName: "Omelette Ingredients",
            items: [
                "🥚 4 eggs",
                "🧅 1 small onion — finely chopped",
                "🍅 1 small tomato — finely diced",
                "🌶️ 1–2 green chillies — finely chopped",
                "🌿 2 tbsp fresh coriander — chopped",
                "🧂 Salt & pepper to taste",
                "🧈 1 tbsp butter or oil",
                "🍞 4 slices bread (for serving)",
            ],
        },
    ],

    steps: [
        {
            title: "Mix the Eggs — 2 min",
            paras: [
                "Crack eggs into a bowl. Add chopped onion, tomato, green chillies, coriander, salt, and pepper. Beat lightly with a fork — don't overmix.",
            ],
        },
        {
            title: "Cook the Omelette — 4 min",
            paras: [
                "Heat butter in a non-stick pan on <strong>medium heat</strong>. Pour in the egg mixture. Let it set for 1 minute without touching.",
                "Gently lift the edges and tilt the pan to let raw egg flow underneath. When top is almost set, fold in half.",
                "Cook 30 more seconds. The inside should be just slightly creamy — not dry!",
            ],
            tip: { type: "gold", icon: "⭐", label: "Key Step", text: "Don't flip the omelette too early. Wait until the bottom is golden and the top is 80% set." },
        },
        {
            title: "Toast & Serve — 2 min",
            paras: [
                "Toast bread slices on the same pan with a little butter. Serve omelette hot alongside toast, with ketchup or green chutney.",
            ],
            tip: { type: "green", icon: "💡", label: "Pro Tip", text: "Sprinkle a pinch of chaat masala on top before folding for an extra flavour punch!" },
        },
    ],

    tips: [
        { bold: "Use fresh eggs.", text: "Fresh eggs have firm, tall yolks that create fluffier omelettes." },
        { bold: "Medium heat is non-negotiable.", text: "High heat = brown, rubbery omelette. Medium heat = golden, fluffy perfection." },
        { bold: "Don't press the omelette.", text: "Pressing squeezes out moisture. Let it cook naturally." },
        { bold: "Add milk for fluffiness.", text: "1 tbsp of milk per egg makes the omelette lighter and fluffier." },
    ],

    substitutions: [
        { original: "Butter", swap: "Oil / ghee", saves: "~₹3" },
        { original: "Bread", swap: "Leftover roti / chapati", saves: "~₹6" },
        { original: "Green chillies", swap: "Black pepper", saves: "₹0" },
    ],

    variations: [
        { name: "🧀 Cheese Omelette", desc: "Add grated cheese inside before folding. Melty, gooey goodness!", price: "+₹15 → ₹64", full: false },
        { name: "🍄 Mushroom Omelette", desc: "Sauté sliced mushrooms first, then pour egg mixture over them.", price: "+₹20 → ₹69", full: false },
        { name: "🥬 Spinach-Feta Style", desc: "Add wilted spinach and crumbled paneer for a healthy twist.", price: "+₹15 → ₹64", full: false },
        { name: "🌯 Omelette Wrap", desc: "Roll the omelette in a tortilla/roti with mayo and veggies.", price: "+₹10 → ₹59", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Breakfast 5 days/week (20×/month)", restCost: "₹2,400", homeCost: "₹980" },
            { scenario: "Quick dinner 3×/week (12×/month)", restCost: "₹1,440", homeCost: "₹588" },
        ],
        tip: "Making omelettes at home for breakfast 5 days a week saves you over ₹1,400 monthly. That's almost a month of groceries!",
    },

    nutrition: [
        { value: "280", label: "Calories" },
        { value: "12g", label: "Carbs" },
        { value: "20g", label: "Protein" },
        { value: "18g", label: "Fat" },
    ],

    faq: [
        { q: "How do I make a fluffy omelette?", a: "Add 1 tbsp milk per egg, beat well, and cook on medium heat. Don't press or flatten!" },
        { q: "Can I meal prep omelettes?", a: "Pre-chop your veggies and store. The actual cooking is so fast (4 min) that meal prep isn't necessary." },
        { q: "What's the best pan for omelettes?", a: "A non-stick pan is essential. If using regular pan, use extra butter/oil." },
    ],

    related: [
        { emoji: "🥚", title: "Anda Bhurji Pav", price: "Under ₹59", href: "/recipes/anda-bhurji-pav" },
        { emoji: "🍝", title: "Creamy Garlic Pasta", price: "Under ₹149", href: "/recipes/creamy-garlic-pasta" },
        { emoji: "🍚", title: "Chicken Biryani", price: "Under ₹199", href: "/recipes/chicken-biryani" },
    ],

    seedComments: [
        { name: "Kavita S.", color1: "#e74c3c", color2: "#c0392b", stars: 5, text: "This is my daily breakfast now. 8 minutes, ₹25, and I'm full till lunch. Can't beat that!", date: "1 day ago" },
        { name: "Dev R.", color1: "#3498db", color2: "#2980b9", stars: 5, text: "The chaat masala tip is a game changer. Such a small addition, huge difference in taste!", date: "5 days ago" },
    ],
};
