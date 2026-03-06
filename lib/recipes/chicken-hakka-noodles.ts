import { Recipe } from "../recipe-types";

export const chickenHakkaNoodles: Recipe = {
    slug: "chicken-hakka-noodles",
    title: "Chicken Hakka Noodles",
    titleEmphasis: "Under ₹129",
    category: "Quick Meals",
    subcategory: "Under ₹129",
    date: "Feb 2026",
    views: "5.4k",
    emoji: "🍜",
    image: "/images/recipes/chicken-hakka-noodles.png",
    savingsBadgeAmount: "₹171",
    savingsBadgeSub: "vs resto",
    initialLikes: 267,

    stats: [
        { icon: "💰", value: "₹129", label: "Total Cost" },
        { icon: "🍽️", value: "₹65", label: "Per Serving" },
        { icon: "⏱️", value: "25 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Medium", label: "Spice Level" },
    ],

    intro: {
        lead: "Street-style Hakka noodles with chicken — smoky, spicy, and ready in 25 minutes for under ₹129.",
        body: [
            "This <strong>chicken hakka noodles</strong> recipe captures that smoky Indo-Chinese flavor that costs ₹300 at restaurants. The secret? <strong>High heat and soy sauce.</strong>",
            "Perfect for a quick weeknight dinner or when you're craving Chinese but don't want to spend ₹300+. Once you nail the wok technique, you'll make this twice a week.",
        ],
        highlights: [
            "Restaurant-quality Indo-Chinese at home",
            "₹129 home vs ₹300 restaurant",
            "25 minutes — faster than delivery",
            "High-protein with chicken",
            "Endlessly customizable",
            "Kids' absolute favorite",
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Restaurant",
        headingIcon: "₹",
        tip: { type: "gold", icon: "💡", label: "Budget Tip", text: "Ching's hakka noodles (₹20 pack) work perfectly. No need for expensive ramen noodles!" },
        ingredients: [
            { name: "Hakka noodles", qty: "200g", cost: "₹20" },
            { name: "Chicken breast", qty: "150g", cost: "₹50" },
            { name: "Mixed vegetables (cabbage, carrot, capsicum)", qty: "1 cup", cost: "₹20" },
            { name: "Soy sauce + vinegar + chilli sauce", qty: "as needed", cost: "₹15" },
            { name: "Garlic + ginger", qty: "1 tbsp each", cost: "₹10" },
            { name: "Spring onions", qty: "2 stalks", cost: "₹5" },
            { name: "Oil", qty: "2 tbsp", cost: "₹9" },
        ],
        totalServings: "2 Servings",
        totalCost: "₹129",
        perServing: "~₹65",
        restaurantCost: "₹300",
        saving: "₹171!",
    },

    ingredients: [
        {
            groupName: "Noodles & Protein",
            items: [
                "🍜 200g hakka noodles — boiled, drained, tossed with 1 tsp oil",
                "🍗 150g chicken breast — sliced thin",
                "🧄 1 tbsp garlic — minced",
                "🫚 1 tbsp ginger — minced",
            ],
        },
        {
            groupName: "Vegetables & Sauces",
            items: [
                "🥬 1/2 cup cabbage — shredded",
                "🥕 1/4 cup carrot — julienned",
                "🫑 1/4 cup capsicum — sliced",
                "🧅 2 spring onion stalks — whites & greens separated",
                "🫙 2 tbsp soy sauce + 1 tbsp vinegar + 1 tsp chilli sauce",
                "🧂 Salt & pepper to taste",
            ],
        },
    ],

    steps: [
        {
            title: "Boil Noodles & Prep — 10 min",
            paras: [
                "Boil noodles as per packet, drain, rinse with cold water, and toss with 1 tsp oil to prevent sticking. Slice all vegetables and chicken.",
            ],
        },
        {
            title: "Cook Chicken — 5 min",
            paras: [
                "Heat oil in a wok on <strong>high heat</strong>. Add chicken strips, season with salt and pepper. Cook until golden on all edges. Remove and set aside.",
            ],
            tip: { type: "gold", icon: "⭐", label: "Key Step", text: "Don't crowd the pan. Cook chicken in a single layer for proper browning. Crowding = steaming." },
        },
        {
            title: "Stir-Fry & Combine — 8 min",
            paras: [
                "In the same wok on high heat, add ginger-garlic. Stir 30 seconds. Add vegetables — cabbage first, then carrot and capsicum. Toss for 2 minutes (keep them crunchy!).",
                "Add noodles, chicken, all sauces. Toss vigorously for 2 minutes until everything is coated and slightly charred.",
                "Garnish with spring onion greens. <strong>Serve immediately!</strong>",
            ],
            tip: { type: "green", icon: "💡", label: "Pro Tip", text: "The secret to restaurant-style smokiness is HIGH HEAT. Your wok should be smoking before you add ingredients." },
        },
    ],

    tips: [
        { bold: "High heat is everything.", text: "Indo-Chinese cooking demands high heat for that characteristic smoky 'wok hei' flavor." },
        { bold: "Don't overcook noodles.", text: "Boil them 1 minute less than the packet says. They'll finish cooking in the wok." },
        { bold: "Prep everything first.", text: "Stir-fry cooking is fast. Have all ingredients chopped and sauces mixed before turning on the heat." },
        { bold: "Toss, don't stir.", text: "Lift and toss the noodles to coat evenly without breaking them." },
    ],

    substitutions: [
        { original: "Chicken", swap: "Paneer / tofu cubes", saves: "~₹10" },
        { original: "Hakka noodles", swap: "Maggi / any instant noodles", saves: "~₹5" },
        { original: "Soy sauce", swap: "Tamari (gluten-free)", saves: "₹0" },
        { original: "Fresh ginger-garlic", swap: "Ginger-garlic paste", saves: "~₹3" },
    ],

    variations: [
        { name: "🥚 Egg Noodles", desc: "Push noodles to one side, scramble 2 eggs, then toss everything together.", price: "Same ₹129", full: false },
        { name: "🌶️ Schezwan Noodles", desc: "Add 2 tbsp schezwan sauce instead of regular chilli sauce. Fiery!", price: "+₹5 → ₹134", full: false },
        { name: "🥬 Veg Hakka Noodles", desc: "Skip chicken, double the vegetables. Quick and healthy!", price: "₹79", full: false },
        { name: "🍜 Triple Schezwan", desc: "Schezwan fried rice + schezwan noodles + manchurian. The ultimate combo!", price: "+₹50 → ₹179", full: true },
    ],

    savingsTable: {
        rows: [
            { scenario: "Chinese once a week (4×/month)", restCost: "₹1,200", homeCost: "₹516" },
            { scenario: "Chinese twice a week (8×/month)", restCost: "₹2,400", homeCost: "₹1,032" },
        ],
        tip: "Craving Chinese food twice a week? Making it at home saves you over ₹1,300 monthly. That's your Netflix + Spotify subscription covered!",
    },

    nutrition: [
        { value: "450", label: "Calories" },
        { value: "55g", label: "Carbs" },
        { value: "22g", label: "Protein" },
        { value: "16g", label: "Fat" },
    ],

    faq: [
        { q: "Which noodles are best?", a: "Ching's or Top Ramen hakka noodles work great. Any flat or round noodles will do." },
        { q: "Can I make this less spicy?", a: "Skip the chilli sauce and green chillies. Use just soy sauce and vinegar." },
        { q: "How do I get that restaurant smoky taste?", a: "Maximum heat on your wok. If your kitchen isn't a little smoky, your heat isn't high enough!" },
    ],

    related: [
        { emoji: "🍝", title: "Creamy Garlic Pasta", price: "Under ₹149", href: "/recipes/creamy-garlic-pasta" },
        { emoji: "🍚", title: "Chicken Biryani", price: "Under ₹199", href: "/recipes/chicken-biryani" },
        { emoji: "🥚", title: "Anda Bhurji Pav", price: "Under ₹59", href: "/recipes/anda-bhurji-pav" },
    ],

    seedComments: [
        { name: "Amit G.", color1: "#e67e22", color2: "#f39c12", stars: 5, text: "Tastes better than my local Chinese joint. My wife was impressed! The high heat tip really works.", date: "3 days ago" },
        { name: "Pooja N.", color1: "#1abc9c", color2: "#16a085", stars: 4, text: "Made the veg version for my kids and they loved it! Will try with chicken next time.", date: "1 week ago" },
    ],
};
