import { Recipe } from "../recipe-types";

export const chickenBiryani: Recipe = {
    slug: "chicken-biryani",
    title: "Chicken Biryani",
    titleEmphasis: "Under ₹199",
    category: "Indian Budget",
    subcategory: "Under ₹199",
    date: "Feb 2026",
    views: "6.8k",
    emoji: "🍚",
    image: "",
    savingsBadgeAmount: "₹201",
    savingsBadgeSub: "vs resto",
    initialLikes: 389,

    stats: [
        { icon: "💰", value: "₹199", label: "Total Cost" },
        { icon: "🍽️", value: "₹50", label: "Per Serving" },
        { icon: "⏱️", value: "50 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "Medium", label: "Spice Level" },
    ],

    intro: {
        lead: "Restaurant biryani for ₹400? Make it at home for under ₹199 and feed the whole family.",
        body: [
            "This <strong>chicken biryani</strong> uses the dum (slow-cook) method for layered, fragrant rice and tender chicken. It's the real deal — not a shortcut version.",
            "Once you master this, you'll never order biryani again. <strong>₹50 per plate vs ₹400</strong> at a restaurant. The math speaks for itself.",
        ],
        highlights: [
            "Authentic dum biryani method",
            "Feeds 4 people for under ₹200",
            "₹50/plate vs ₹400 restaurant",
            "Freezer-friendly — batch cook weekends",
            "Impressive enough for guests",
            "One-pot meal — minimal cleanup",
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Restaurant",
        headingIcon: "₹",
        tip: { type: "gold", icon: "💡", label: "Budget Tip", text: "Buy whole spices in bulk from a local spice store. A ₹50 pack of biryani masala lasts 8–10 biryanis!" },
        ingredients: [
            { name: "Chicken (with bone)", qty: "500g", cost: "₹80" },
            { name: "Basmati rice", qty: "2 cups", cost: "₹35" },
            { name: "Onions (large)", qty: "3", cost: "₹15" },
            { name: "Yogurt (curd)", qty: "1/2 cup", cost: "₹15" },
            { name: "Whole spices & biryani masala", qty: "as needed", cost: "₹20" },
            { name: "Cooking oil / ghee", qty: "3 tbsp", cost: "₹15" },
            { name: "Saffron / food color, mint, coriander", qty: "as needed", cost: "₹19" },
        ],
        totalServings: "4 Servings",
        totalCost: "₹199",
        perServing: "~₹50",
        restaurantCost: "₹400",
        saving: "₹350!",
    },

    ingredients: [
        {
            groupName: "For the Rice",
            items: [
                "🍚 2 cups basmati rice — soaked 30 min",
                "🫒 1 tbsp oil + whole spices (bay leaf, cardamom, cloves, cinnamon)",
                "🧂 Salt to taste",
                "💧 Enough water to boil rice 70% done",
            ],
        },
        {
            groupName: "For the Chicken Masala",
            items: [
                "🍗 500g chicken (bone-in, curry cut)",
                "🧅 3 large onions, thinly sliced (fried golden)",
                "🥛 1/2 cup thick yogurt (curd)",
                "🧄 1 tbsp ginger-garlic paste",
                "🌶️ 1 tsp red chilli powder + 1/2 tsp turmeric",
                "🌿 1 tbsp biryani masala",
                "🌱 Fresh mint + coriander leaves",
            ],
        },
    ],

    steps: [
        {
            title: "Marinate the Chicken — 30 min",
            paras: [
                "Mix chicken with yogurt, ginger-garlic paste, biryani masala, red chilli powder, turmeric, salt, half the mint & coriander, and half the fried onions. Let it marinate for at least 30 minutes (overnight is best).",
            ],
            tip: { type: "gold", icon: "⭐", label: "Key Step", text: "Longer marination = more flavorful chicken. Even 2 hours makes a big difference." },
        },
        {
            title: "Parboil the Rice — 8 min",
            paras: [
                "Boil water with whole spices and salt. Add soaked rice and cook until 70% done (still has a bite). Drain and set aside.",
            ],
            tip: { type: "red", icon: "⚠️", label: "Watch Carefully", text: "Do NOT fully cook the rice. It finishes cooking during dum. Overcooked rice = mushy biryani." },
        },
        {
            title: "Layer & Dum Cook — 25 min",
            paras: [
                "In a heavy-bottomed pot, spread marinated chicken evenly. Layer parboiled rice on top.",
                "Sprinkle remaining fried onions, mint, coriander, a pinch of saffron soaked in warm milk, and 1 tbsp ghee.",
                "Seal with aluminium foil + tight lid. Cook on <strong>high heat 5 min</strong>, then <strong>lowest heat 20 min</strong>. Do NOT open the lid!",
            ],
            tip: { type: "green", icon: "💡", label: "Pro Tip", text: "Place a tawa (flat pan) under the pot on low heat for even cooking and to prevent the bottom from burning." },
        },
    ],

    tips: [
        { bold: "Use bone-in chicken.", text: "Bones add deeper flavor to the biryani. Boneless works but tastes less authentic." },
        { bold: "Soak rice for 30 minutes.", text: "Soaked rice elongates beautifully and cooks evenly during dum." },
        { bold: "Fry onions to deep golden.", text: "Patience here is key — properly browned onions are the backbone of great biryani." },
        { bold: "Seal the pot tightly.", text: "No steam should escape during dum. Use dough or foil if your lid isn't tight." },
        { bold: "Rest before serving.", text: "Let the biryani rest 5 minutes after cooking. Then gently fluff with a fork from the edges." },
    ],

    substitutions: [
        { original: "Saffron", swap: "Yellow food color + cardamom", saves: "~₹30" },
        { original: "Ghee", swap: "Butter or cooking oil", saves: "~₹10" },
        { original: "Basmati rice", swap: "Regular long-grain rice", saves: "~₹15" },
        { original: "Biryani masala", swap: "Homemade garam masala", saves: "~₹5" },
    ],

    variations: [
        { name: "🥚 Egg Biryani", desc: "Replace chicken with 6 boiled eggs. Slit and fry them golden before layering.", price: "₹99", full: false },
        { name: "🥬 Veg Biryani", desc: "Use mixed vegetables (paneer, potato, beans, carrot) with same masala.", price: "₹129", full: false },
        { name: "🍖 Mutton Biryani", desc: "Use mutton instead — pressure cook 3 whistles before layering. Richer flavor.", price: "+₹100 → ₹299", full: false },
        { name: "🌶️ Hyderabadi Style", desc: "Add more green chillies, use kewra water, and increase dum time to 30 min.", price: "Same ₹199", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Biryani once a week (4×/month)", restCost: "₹1,600", homeCost: "₹796" },
            { scenario: "Biryani twice a week (8×/month)", restCost: "₹3,200", homeCost: "₹1,592" },
            { scenario: "Family dinner every Sunday (4×/month)", restCost: "₹2,400", homeCost: "₹796" },
        ],
        tip: "A single biryani saves you ₹200+. Make it 4 times a month and you've saved enough for a nice family outing!",
    },

    nutrition: [
        { value: "520", label: "Calories" },
        { value: "62g", label: "Carbs" },
        { value: "28g", label: "Protein" },
        { value: "18g", label: "Fat" },
    ],

    faq: [
        { q: "Can I use boneless chicken?", a: "Yes, but bone-in gives better flavor. Reduce marination time to 20 min for boneless." },
        { q: "Why is my biryani not fragrant?", a: "Make sure you're using fresh whole spices and proper dum (sealed lid). Old spices lose aroma." },
        { q: "Can I make this in a pressure cooker?", a: "Yes! Layer everything, close lid (without whistle weight), cook high 2 min then low 15 min." },
        { q: "How long can I store biryani?", a: "Refrigerate up to 3 days. Reheat with a splash of water in a covered pan on low heat." },
    ],

    related: [
        { emoji: "🍝", title: "Creamy Garlic Pasta", price: "Under ₹149", href: "/recipes/creamy-garlic-pasta" },
        { emoji: "🥚", title: "Anda Bhurji Pav", price: "Under ₹59", href: "/recipes/anda-bhurji-pav" },
        { emoji: "🍜", title: "Chicken Hakka Noodles", price: "Under ₹129", href: "/recipes/chicken-hakka-noodles" },
    ],

    seedComments: [
        { name: "Vikram T.", color1: "#2ecc71", color2: "#27ae60", stars: 5, text: "Best biryani recipe I've found online. My wife thought I ordered from a restaurant!", date: "5 days ago" },
        { name: "Sneha P.", color1: "#e74c3c", color2: "#c0392b", stars: 5, text: "Made this for a dinner party. Everyone kept asking for the recipe. Under ₹200 for 4 people is insane!", date: "1 week ago" },
        { name: "Arjun D.", color1: "#3498db", color2: "#2980b9", stars: 4, text: "Took a couple tries to get the dum right but now it's perfect every time. The tawa trick really works!", date: "2 weeks ago" },
    ],
};
