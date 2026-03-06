import { Recipe } from "../recipe-types";

export const streetStyleChickenRoll: Recipe = {
    slug: "street-style-chicken-roll",
    title: "Street-Style Chicken Roll",
    titleEmphasis: "The ₹89 Classic",
    category: "Non-Veg Budget",
    subcategory: "Under ₹99",
    date: "Mar 2026",
    views: "5.4k",
    emoji: "🌯",
    image: "/images/recipes/chicken-roll.png",
    savingsBadgeAmount: "₹111",
    savingsBadgeSub: "vs resto",
    initialLikes: 167,

    stats: [
        { icon: "💰", value: "₹89", label: "Total Cost" },
        { icon: "🍽️", value: "₹45", label: "Per Roll" },
        { icon: "⏱️", value: "20 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "High", label: "Spice Level" },
    ],

    intro: {
        lead: "The king of Indian street food — juicy, spicy chicken tikka wrapped in a flaky, egg-coated paratha with crunchy onions and tangy chutney.",
        body: [
            "We've all stood in line at a 'Rolls' joint, paying ₹150+ for a single roll. But you can make <strong>two massive, restaurant-quality rolls</strong> at home for less than ₹90. The secret is the double-marination of the chicken and the 'Lacha' style of the paratha.",
            "This <strong>Street-Style Chicken Roll</strong> is protein-packed, filling, and uses just a few spices to create that iconic smoky flavor."
        ],
        highlights: [
            "Costs under ₹90 for two",
            "High protein (25g+ per roll)",
            "Authentic flaky paratha texture",
            "Ready in 20 minutes",
            "Total control over spice & oil",
            "Better than delivery"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Famous Rolls Chain",
        headingIcon: "₹",
        ingredients: [
            { name: "Boneless Chicken", qty: "200g", cost: "₹50" },
            { name: "Frozen Paratha / Maida", qty: "2 pieces", cost: "₹15" },
            { name: "Egg", qty: "2 small", cost: "₹12" },
            { name: "Onion & Green Chilli", qty: "1 each", cost: "₹5" },
            { name: "Curd & Spices", qty: "minimal", cost: "₹7" },
        ],
        totalServings: "2 Jumbo Rolls",
        totalCost: "₹89",
        perServing: "~₹45",
        restaurantCost: "₹200",
        saving: "₹111!",
    },

    ingredients: [
        {
            groupName: "Chicken Filling",
            items: [
                "🍗 200g boneless chicken — cut into small cubes",
                "🥣 1 tbsp thick curd (Dahi)",
                "🫚 1 tsp Ginger-garlic paste",
                "🌶️ 1 tsp Red chilli powder, 1/2 tsp Turmeric, 1/2 tsp Garam masala",
                "🍋 1 tsp Lemon juice",
                "🧂 Salt to taste"
            ],
        },
        {
            groupName: "The Wrap",
            items: [
                "🫓 2 Maida Parathas (or frozen Lacha Parathas)",
                "🥚 2 Eggs — lightly beaten with a pinch of salt",
                "🧅 1 Onion — thinly sliced",
                "🌿 2 tbsp Green Chutney",
                "🌶️ 1 tsp Chaat Masala"
            ],
        },
    ],

    steps: [
        {
            title: "Quick Marination — 5 min",
            paras: [
                "Combine chicken, curd, ginger-garlic paste, all spices, and lemon juice. Mix well. If you have time, let it sit for 10 minutes, but it's not strictly necessary for such small cubes."
            ],
        },
        {
            title: "Cook the Filling — 7 min",
            paras: [
                "Heat 1 tbsp oil in a pan on high. Add the chicken. Sauté for 5-7 minutes until the moisture evaporates and the chicken gets a slight char on the edges.",
                "The high heat ensures the chicken stays juicy inside while getting crispy outside."
            ],
            tip: { type: "gold", icon: "⭐", label: "Secret Tip", text: "Add a drop of 'Liquid Smoke' or do a quick coal-dhungaar (smoking with a hot coal) for that 100% authentic street taste." },
        },
        {
            title: "The Egg-Paratha Base — 5 min",
            paras: [
                "Heat a tawa. Cook the paratha on both sides until 80% done.",
                "Pour the beaten egg on the tawa and immediately place the paratha on top of the egg. Press down so the egg sticks to the paratha. Flip and cook until the egg is set and the paratha is crispy."
            ],
        },
        {
            title: "Assembly — 3 min",
            paras: [
                "Place the egg-side of the paratha facing up. Line up the cooked chicken in the center.",
                "Top with sliced onions, green chutney, and a sprinkle of chaat masala. Roll tightly and wrap the bottom half in aluminum foil or tissue paper."
            ],
        },
    ],

    tips: [
        { bold: "Use Maida for Stretch.", text: "Authentic street rolls use flour (maida) parathas because they are stretchier and hold the filling better than wheat." },
        { bold: "Don't overcook chicken.", text: "Small cubes cook very fast. 5-7 minutes on high is enough." },
        { bold: "Squeeze the onions.", text: "Soak sliced onions in cold water for 2 min then squeeze dry to remove the raw bite and keep them crunchy." }
    ],

    substitutions: [
        { original: "Boneless Chicken", swap: "Paneer or Soya Chunks", saves: "₹10" },
        { original: "Maida Paratha", swap: "Wheat Roti", saves: "₹5 (healthier)" },
    ],

    variations: [
        { name: "🧀 Double Egg Roll", desc: "Use 2 eggs per paratha for an extra-rich wrap.", price: "+₹15", full: false },
        { name: "🔥 Mayo Mix", desc: "Mix some mayonnaise with the green chutney for a creamy 'Kolkata Style' vibe.", price: "+₹10", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Post-work snack (2 people)", restCost: "₹300", homeCost: "₹89" },
            { scenario: "Game night order for 4", restCost: "₹600", homeCost: "₹178" },
        ],
        tip: "Street food is cheap, but home-made street food is 'I can eat this every day' cheap. You're saving ₹2,000+ a month just by switching this one snack.",
    },

    nutrition: [
        { value: "480", label: "Calories" },
        { value: "35g", label: "Carbs" },
        { value: "24g", label: "Protein" },
        { value: "22g", label: "Fat" },
    ],

    faq: [
        { q: "How to make the paratha flaky?", a: "Use 'Lacha Paratha' technique with layers of oil and flour, or just buy high-quality frozen ones to save time." },
        { q: "Can I use chicken breast?", a: "Yes, but thigh meat is juicier and more forgiving for high-heat sautéing." }
    ],

    related: [
        { emoji: "🍛", title: "Chicken Biryani", price: "Under ₹199", href: "/recipes/chicken-biryani" },
        { emoji: "🍜", title: "Chicken Hakka Noodles", price: "Under ₹129", href: "/recipes/chicken-hakka-noodles" },
    ],

    seedComments: [
        { name: "Karan P.", color1: "#27ae60", color2: "#2ecc71", stars: 5, text: "The egg coating on the paratha makes it so much better. Total flavor bomb!", date: "3 days ago" },
    ],
};
