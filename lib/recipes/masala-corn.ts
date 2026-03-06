import { Recipe } from "../recipe-types";

export const masalaCorn: Recipe = {
    slug: "masala-corn",
    title: "Masala Corn",
    titleEmphasis: "The Mall Snack for ₹12",
    category: "Indian Budget",
    subcategory: "Under ₹50",
    date: "Mar 2026",
    views: "2.1k",
    emoji: "🌽",
    image: "/images/recipes/masala-corn.png",
    savingsBadgeAmount: "₹150",
    savingsBadgeSub: "vs mall",
    initialLikes: 168,

    stats: [
        { icon: "💰", value: "₹50", label: "Total Cost" },
        { icon: "🍽️", value: "₹12", label: "Per Serving" },
        { icon: "⏱️", value: "10 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "Medium", label: "Spice Level" },
    ],

    intro: {
        lead: "Street-style buttery sweet corn with a zesty masala kick — better than the expensive mall cups for a fraction of the cost.",
        body: [
            "We've all paid ₹80-₹120 for a small cup of steamed corn at the cinema or mall. But did you know you can make <strong>4 large servings</strong> for just ₹50? All you need is some frozen or fresh corn and a few basic spices from your masala dabba.",
            "This <strong>Masala Corn</strong> recipe is juicy, sweet, spicy, and tangy. It's the ultimate healthy snack that feels like a treat."
        ],
        highlights: [
            "4 servings for the price of 1 mall cup",
            "Ready in 10 minutes",
            "High in fiber & Vitamin C",
            "Kid-friendly (adjust spice)",
            "Minimal cleanup required",
            "Perfect for movie nights at home"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Mall Cup",
        headingIcon: "₹",
        ingredients: [
            { name: "Sweet Corn (Frozen or 2 Cobs)", qty: "4 cups", cost: "₹30" },
            { name: "Butter", qty: "1 tbsp", cost: "₹10" },
            { name: "Lemon", qty: "1/2 piece", cost: "₹5" },
            { name: "Chaat Masala & Chili Powder", qty: "minimal", cost: "₹5" },
        ],
        totalServings: "4 Large Cups",
        totalCost: "₹50",
        perServing: "~₹12.5",
        restaurantCost: "₹200",
        saving: "₹150!",
    },

    ingredients: [
        {
            groupName: "Main",
            items: [
                "🌽 4 cups sweet corn — frozen or kernels removed from 2 large cobs",
                "🧈 1 tbsp unsalted butter — salted works too, just adjust added salt",
                "🧂 1/2 tsp chaat masala",
                "🌶️ 1/4 tsp red chilli powder (or black pepper)",
                "🍋 1 tsp lemon juice",
                "🧂 Salt to taste"
            ],
        },
        {
            groupName: "Optional Toppings",
            items: [
                "🧀 1 tbsp grated cheese",
                "🌿 Finely chopped coriander/cilantro",
                "🧅 1 tsp finely chopped onion (for crunch)"
            ],
        },
    ],

    steps: [
        {
            title: "Steam the Corn — 6 min",
            paras: [
                "If using cobs, boil them for 8 minutes and then scrape the kernels. If using frozen or loose kernels, add them to a steamer or boil in lightly salted water for 5-6 minutes until tender and plump.",
                "Drain the water completely. The corn should be hot!"
            ],
        },
        {
            title: "The Buttery Mix — 2 min",
            paras: [
                "While the corn is still steaming hot, transfer to a bowl. Add the butter and toss until it's completely melted and coating every kernel.",
                "Add chaat masala, red chilli powder, and salt. Mix well."
            ],
            tip: { type: "gold", icon: "⭐", label: "Temperature", text: "The corn MUST be very hot when you add the butter, so it melts instantly and creates a creamy sauce with the spices." },
        },
        {
            title: "The Zesty Finish — 2 min",
            paras: [
                "Squeeze fresh lemon juice over the top. Add optional toppings like coriander or cheese.",
                "Serve immediately in small bowls or cups for that authentic experience."
            ],
        },
    ],

    tips: [
        { bold: "Use Sweet Corn.", text: "Regular field corn is too starchy. Look for 'American Sweet Corn' for that juicy, sweet pop." },
        { bold: "Don't over-boil.", text: "Over-boiled corn loses its sweetness and becomes mushy." },
        { bold: "Customize your flavor.", text: "Try adding a pinch of 'Oregano' and 'Chili Flakes' for a pizza-style corn." }
    ],

    substitutions: [
        { original: "Butter", swap: "Olive oil or Vegan Butter", saves: "₹0" },
        { original: "Chaat Masala", swap: "Amchoor + Cumin powder", saves: "₹2" },
        { original: "Red Chilli Powder", swap: "Black Pepper", saves: "₹0" },
    ],

    variations: [
        { name: "🧀 Cheese Corn", desc: "Add 2 tbsp grated cheese while the corn is hot for a gooey, rich treat.", price: "+₹20", full: false },
        { name: "🔥 Peri Peri Corn", desc: "Use Peri Peri seasoning instead of Indian spices for a modern kick.", price: "+₹10", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Family movie night snack", restCost: "₹400", homeCost: "₹50" },
            { scenario: "After-school snack (Weekly)", restCost: "₹800", homeCost: "₹200" },
        ],
        tip: "Corn is a high-volume snack. Buy 1kg frozen bags (₹120) for the best value — that's 20+ servings for the price of one mall trip!",
    },

    nutrition: [
        { value: "140", label: "Calories" },
        { value: "19g", label: "Carbs" },
        { value: "4g", label: "Protein" },
        { value: "6g", label: "Fat" },
    ],

    faq: [
        { q: "Can I use canned corn?", a: "Yes, just drain the brine and rinse before heating. Canned corn is already cooked, so it only needs a quick warm-up." },
        { q: "Is this healthy?", a: "Corn is a great source of fiber and antioxidants. Limit the butter if you're watching calories." }
    ],

    related: [
        { emoji: "🍛", title: "Vegetable Poha", price: "Under ₹40", href: "/recipes/vegetable-poha" },
        { emoji: "🍟", title: "Crunchy French Fries", price: "Under ₹40", href: "/recipes/crunchy-french-fries" },
    ],

    seedComments: [
        { name: "Ananya V.", color1: "#e67e22", color2: "#d35400", stars: 5, text: "Exactly like the corn you get at PVR. My kids were so happy!", date: "3 days ago" },
    ],
};
