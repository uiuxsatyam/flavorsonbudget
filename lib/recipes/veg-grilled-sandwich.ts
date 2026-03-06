import { Recipe } from "../recipe-types";

export const vegGrilledSandwich: Recipe = {
    slug: "veg-grilled-sandwich",
    title: "Veg Grilled Sandwich",
    titleEmphasis: "Cafe-Style for ₹60",
    category: "Quick Bites",
    subcategory: "Under ₹99",
    date: "Mar 2026",
    views: "8.3k",
    emoji: "🥪",
    image: "/images/recipes/veg-grilled-sandwich.png",
    savingsBadgeAmount: "₹140",
    savingsBadgeSub: "vs cafe",
    initialLikes: 198,

    stats: [
        { icon: "💰", value: "₹60", label: "Total Cost" },
        { icon: "🍽️", value: "₹30", label: "Per Sandwich" },
        { icon: "⏱️", value: "10 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Mild", label: "Spice Level" },
    ],

    intro: {
        lead: "The ultimate comfort snack — triple-layered with fresh vegetables, spicy green chutney, and melting cheese, grilled to golden perfection.",
        body: [
            "Why pay ₹200 at a cafe for a sandwich you can make in 10 minutes? This <strong>Cafe-Style Veg Grilled Sandwich</strong> uses basic bread and veggies but elevates them with a secret homemade sandwich masala.",
            "It's the perfect balance of crunchy bread and juicy, spiced vegetable filling. Great for a quick lunch or an evening snack with tea."
        ],
        highlights: [
            "Costs 70% less than a cafe",
            "Ready in 10 minutes",
            "Loaded with vitamins",
            "Professional grill marks",
            "Perfectly crisp exterior",
            "Cheesy & satisfying"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Local Cafe",
        headingIcon: "₹",
        ingredients: [
            { name: "Bread Slices (White/Brown)", qty: "4 slices", cost: "₹10" },
            { name: "Cucumber, Tomato, Onion", qty: "few slices each", cost: "₹10" },
            { name: "Boiled Potato", qty: "1 small", cost: "₹5" },
            { name: "Butter & Cheese Slice", qty: "as needed", cost: "₹25" },
            { name: "Green Chutney & Spices", qty: "minimal", cost: "₹10" },
        ],
        totalServings: "2 Sandwiches",
        totalCost: "₹60",
        perServing: "~₹30",
        restaurantCost: "₹200",
        saving: "₹140!",
    },

    ingredients: [
        {
            groupName: "The Foundation",
            items: [
                "🍞 4 slices of Sandwich Bread",
                "🧈 2 tbsp butter — at room temperature",
                "🌿 2 tbsp Spicy Green Chutney (Mint-Coriander)"
            ],
        },
        {
            groupName: "The Fillings",
            items: [
                "🥔 1 boiled potato — thinly sliced",
                "🥒 1 small cucumber — thinly sliced",
                "🍅 1 small tomato — thinly sliced",
                "🧅 1 small onion — thinly sliced",
                "🧀 2 Cheese Slices (optional but recommended)"
            ],
        },
        {
            groupName: "Flavor Kick",
            items: [
                "🧂 Sandwich Masala (or Chaat Masala)",
                "🌶️ Black pepper powder"
            ],
        },
    ],

    steps: [
        {
            title: "Prep & Spread — 3 min",
            paras: [
                "Butter two slices of bread generously on one side. Spread green chutney on the other side of all slices.",
                "The butter acts as a waterproof barrier so the chutney doesn't make the bread soggy."
            ],
        },
        {
            title: "Layering the Veggies — 4 min",
            paras: [
                "Layer slices of potato, cucumber, tomato, and onion. Sprinkle a generous amount of sandwich masala and pepper between layers.",
                "Place a cheese slice on top and cover with the second bread slice (chutney side down)."
            ],
            tip: { type: "gold", icon: "⭐", label: "Pro Tip", text: "Slice your vegetables as thin as possible using a mandolin or sharp knife. This ensures the sandwich stays structured and doesn't fall apart." },
        },
        {
            title: "The Grill — 3 min",
            paras: [
                "Heat a sandwich griller or a tawa. Brush the outside of the bread with butter.",
                "Grill until golden brown and crispy. If using a tawa, press down with a heavy plate to get that compact cafe feel."
            ],
        },
    ],

    tips: [
        { bold: "Room temp butter.", text: "Cold butter will tear your bread. Let it sit out for 20 minutes before prep." },
        { bold: "The 'Triple' layer.", text: "For a real cafe feel, use 3 slices of bread and create two layers of fillings." },
        { bold: "Seal with butter.", text: "Always butter the side that touches the grill for that perfect 'crunch' sound." }
    ],

    substitutions: [
        { original: "Cheese Slice", swap: "Grated Mozzarella or Processed Cheese", saves: "₹5" },
        { original: "Sandwich Bread", swap: "Multigrain or Brown Bread", saves: "₹5" },
    ],

    variations: [
        { name: "🌽 Corn & Cheese", desc: "Swap fresh veggies for boiled sweet corn and extra cheese.", price: "+₹15", full: false },
        { name: "🌯 Bombay Masala", desc: "Add a layer of spicy mashed potato bhaji.", price: "+₹5", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Quick office lunch", restCost: "₹250", homeCost: "₹45" },
            { scenario: "Saturday home cafe", restCost: "₹500", homeCost: "₹120" },
        ],
        tip: "A commercial sandwich griller costs ₹15 at home vs ₹150 at Starbucks. The ROI on your home toaster is insane!",
    },

    nutrition: [
        { value: "320", label: "Calories" },
        { value: "42g", label: "Carbs" },
        { value: "9g", label: "Protein" },
        { value: "12g", label: "Fat" },
    ],

    faq: [
        { q: "How to prevent sogginess?", a: "Always toast the inner side of the bread slightly or apply butter first before chutney." },
        { q: "What's in sandwich masala?", a: "It's usually a mix of black salt, cumin powder, amchoor, and fennel." }
    ],

    related: [
        { emoji: "🍞", title: "Bruschetta", price: "Under ₹99", href: "/recipes/bruschetta" },
        { emoji: "🍔", title: "Anda Bhurji Pav", price: "Under ₹59", href: "/recipes/anda-bhurji-pav" },
    ],

    seedComments: [
        { name: "Ishaan G.", color1: "#e67e22", color2: "#d35400", stars: 5, text: "Simple, easy, and tastes just like the cafe nearby. My go-to breakfast now.", date: "1 day ago" },
    ],
};
