import { Recipe } from "../recipe-types";

export const eggFriedRice5Ingredient: Recipe = {
    slug: "5-ingredient-egg-fried-rice",
    title: "5-Ingredient Egg Fried Rice",
    titleEmphasis: "₹80 Meal",
    category: "Asian Budget",
    subcategory: "Under ₹99",
    date: "Mar 2026",
    views: "3.0k",
    emoji: "🍚",
    image: "/images/recipes/egg-fried-rice-5-ingredient.png",
    savingsBadgeAmount: "₹170",
    savingsBadgeSub: "vs resto",
    initialLikes: 210,

    stats: [
        { icon: "💰", value: "₹80", label: "Total Cost" },
        { icon: "🍽️", value: "₹20", label: "Per Serving" },
        { icon: "⏱️", value: "10 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "Mild", label: "Spice Level" },
    ],

    intro: {
        lead: "The absolute minimalist protein meal — fluffy rice, golden scrambled eggs, and a touch of savory soy for just ₹20 per plate.",
        body: [
            "We call this <strong>The Bare Minimum Masterpiece</strong>. It's the recipe you go to when you have 10 minutes, no energy, and almost no groceries. With just 5 key ingredients, you can create a meal that tastes significantly more complex than it is.",
            "This <strong>5-Ingredient Egg Fried Rice</strong> is a staple for students and busy professionals. It's clean, high-protein, and extremely budget-friendly."
        ],
        highlights: [
            "Only 5 ingredients",
            "Ready in 10 minutes",
            "High protein (12g per serving)",
            "Costs under ₹20 per plate",
            "Zero waste recipe",
            "Better than instant noodles"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Asian Takeout",
        headingIcon: "₹",
        ingredients: [
            { name: "Rice (Leftover or fresh)", qty: "3 cups cooked", cost: "₹30" },
            { name: "Large Eggs", qty: "4 eggs", cost: "₹28" },
            { name: "Spring Onion / Onion", qty: "small bunch", cost: "₹10" },
            { name: "Soy Sauce", qty: "1 tbsp", cost: "₹5" },
            { name: "Oil", qty: "1 tbsp", cost: "₹7" },
        ],
        totalServings: "4 Servings",
        totalCost: "₹80",
        perServing: "~₹20",
        restaurantCost: "₹250",
        saving: "₹170!",
    },

    ingredients: [
        {
            groupName: "The 5 Key Ingredients",
            items: [
                "🍚 3 cups cooked rice — preferably day-old/cold",
                "🥚 4 large eggs",
                "🌱 1/4 cup spring onions — whites and greens separated",
                "🍱 1 tbsp Soy Sauce (or Braggs/Tamari)",
                "🫒 1 tbsp Oil (high smoke point)"
            ],
        },
        {
            groupName: "Pantry Staples (Free)",
            items: [
                "🧂 Salt to taste",
                "🧂 Black pepper powder"
            ],
        },
    ],

    steps: [
        {
            title: "The Scramble — 3 min",
            paras: [
                "Whisk eggs with a pinch of salt. Heat oil in a wok or large pan on high heat.",
                "Add white parts of spring onions, sauté for 30 seconds. Pour in the eggs. Let them sit for 10 seconds, then scramble gently until 80% cooked but still moist. Remove eggs from pan and set aside."
            ],
            tip: { type: "gold", icon: "⭐", label: "Egg Texture", text: "Removing the eggs early and adding them back later keeps them fluffy and soft, instead of rubbery and overcooked." },
        },
        {
            title: "Rice & Sauce — 4 min",
            paras: [
                "In the same pan (add a drop more oil if needed), add the cold rice. Break up any large clumps.",
                "Stir-fry on high heat for 2-3 minutes until the rice is heated through and starts to 'pop'. Drizzle soy sauce and add pepper. Toss vigorously."
            ],
        },
        {
            title: "Final Combine — 3 min",
            paras: [
                "Add the scrambled eggs back into the pan. Break them into smaller pieces as you toss with the rice.",
                "Add the green parts of the spring onions. Taste and add salt only if needed (the soy sauce is usually salty enough). Serve immediately."
            ],
            tip: { type: "green", icon: "💡", label: "The Trick", text: "If your rice is too fresh/wet, spread it on a plate and put it in the freezer for 5 minutes before cooking. This dries out the surface for perfect fried rice texture." },
        },
    ],

    tips: [
        { bold: "Cold Rice only.", text: "Fresh rice will turn into a mushy pill. Day-old rice is dry and perfect." },
        { bold: "High Heat.", text: "Keep the heat as high as your stove allows to get that characteristic smoky edge." },
        { bold: "Light Soy Sauce.", text: "Use light soy sauce if you want to keep the rice color golden rather than dark brown." }
    ],

    substitutions: [
        { original: "Spring Onion", swap: "Regular onion + Garlic", saves: "₹0" },
        { original: "Soy Sauce", swap: "Salt + drop of vinegar", saves: "₹2" },
    ],

    variations: [
        { name: "🔥 Spicy Egg Rice", desc: "Add 1 tsp chili flakes or sriracha during the sauce stage.", price: "+₹2", full: false },
        { name: "🍛 Garlic Butter Egg Rice", desc: "Swap oil for butter and add 1 tbsp minced garlic at the start.", price: "+₹10", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Late night study session", restCost: "₹200", homeCost: "₹20" },
            { scenario: "Monthly quick dinner routine", restCost: "₹800", homeCost: "₹80" },
        ],
        tip: "Egg fried rice is essentially free if you have leftover rice. It's the most profitable dish for takeout places because the material cost is so low.",
    },

    nutrition: [
        { value: "310", label: "Calories" },
        { value: "38g", label: "Carbs" },
        { value: "12g", label: "Protein" },
        { value: "14g", label: "Fat" },
    ],

    faq: [
        { q: "Is it healthy?", a: "Yes! It's a balanced meal of complex carbs and protein. Use brown rice for even more fiber." },
        { q: "Can I use butter?", a: "Yes, butter gives a wonderful rich flavor, especially if you add garlic." }
    ],

    related: [
        { emoji: "🍛", title: "Vegetable Poha", price: "Under ₹40", href: "/recipes/vegetable-poha" },
        { emoji: "🍜", title: "Chicken Hakka Noodles", price: "Under ₹129", href: "/recipes/chicken-hakka-noodles" },
    ],

    seedComments: [
        { name: "Alex J.", color1: "#34495e", color2: "#2c3e50", stars: 5, text: "The freezer trick for fresh rice saved my dinner! Perfect texture.", date: "4 days ago" },
    ],
};
