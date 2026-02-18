import { Recipe } from "../recipe-types";

export const choleBhature: Recipe = {
    slug: "chole-bhature",
    title: "Chole Bhature",
    titleEmphasis: "Under ₹149",
    category: "Indian Budget",
    subcategory: "Under ₹149",
    date: "Feb 2026",
    views: "4.7k",
    emoji: "🫓",
    image: "",
    savingsBadgeAmount: "₹151",
    savingsBadgeSub: "vs resto",
    initialLikes: 312,

    stats: [
        { icon: "💰", value: "₹149", label: "Total Cost" },
        { icon: "🍽️", value: "₹37", label: "Per Serving" },
        { icon: "⏱️", value: "45 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "Medium", label: "Spice Level" },
    ],

    intro: {
        lead: "Delhi's legendary breakfast — spicy chickpea curry with fluffy fried bread — for under ₹149 for the whole family.",
        body: [
            "Restaurant chole bhature costs ₹200–300 per plate. This recipe feeds <strong>4 people for ₹149</strong>. That's ₹37 per person for an authentic Punjabi feast.",
            "The chole are simmered with <strong>tea bag trick</strong> for that dark, rich color. The bhature are pillowy soft. It's the real deal — not a shortcut version.",
        ],
        highlights: [
            "Feeds 4 for under ₹150",
            "₹37/plate vs ₹300 restaurant",
            "Authentic Punjabi recipe",
            "Weekend breakfast special",
            "Vegetarian & protein-rich",
            "Impressive for guests",
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Restaurant",
        headingIcon: "₹",
        tip: { type: "gold", icon: "💡", label: "Budget Tip", text: "Use canned chickpeas (₹45) to skip the overnight soaking step. Same taste, half the time!" },
        ingredients: [
            { name: "Chickpeas (kabuli chana)", qty: "1.5 cups (dried)", cost: "₹30" },
            { name: "Maida (all-purpose flour)", qty: "2 cups", cost: "₹20" },
            { name: "Onions + tomatoes", qty: "3 each", cost: "₹25" },
            { name: "Chole masala + spices", qty: "as needed", cost: "₹15" },
            { name: "Yogurt (for bhature dough)", qty: "1/4 cup", cost: "₹10" },
            { name: "Oil (for frying)", qty: "for deep fry", cost: "₹30" },
            { name: "Ginger, garlic, green chillies", qty: "as needed", cost: "₹10" },
            { name: "Tea bags (for chole color)", qty: "2", cost: "₹4" },
            { name: "Amchoor, coriander", qty: "garnish", cost: "₹5" },
        ],
        totalServings: "4 Servings",
        totalCost: "₹149",
        perServing: "~₹37",
        restaurantCost: "₹300",
        saving: "₹151!",
    },

    ingredients: [
        {
            groupName: "For the Chole",
            items: [
                "🫘 1.5 cups dried chickpeas — soaked overnight (or 2 cans)",
                "🧅 2 large onions — finely chopped",
                "🍅 3 medium tomatoes — puréed",
                "🧄 1 tbsp ginger-garlic paste",
                "🌶️ 2 green chillies — slit",
                "🌿 2 tbsp chole masala",
                "🫚 1 tsp each: cumin, coriander, red chilli, turmeric",
                "🍵 2 tea bags — boiled in 1 cup water (for color)",
                "🧂 Salt to taste + 1 tsp amchoor (dry mango powder)",
            ],
        },
        {
            groupName: "For the Bhature",
            items: [
                "🫓 2 cups maida (all-purpose flour)",
                "🥛 1/4 cup yogurt",
                "💧 Warm water as needed",
                "🧂 1/2 tsp salt + 1/2 tsp baking powder + 1 tsp sugar",
                "🫒 1 tbsp oil (for dough) + oil for deep frying",
            ],
        },
    ],

    steps: [
        {
            title: "Prepare the Chole — 25 min",
            paras: [
                "Pressure cook soaked chickpeas with tea bag water, salt, and a pinch of baking soda — 4–5 whistles until soft.",
                "In a separate pan, heat oil. Add cumin seeds, let them splutter. Add onions and cook until deep golden brown (8–10 min). Add ginger-garlic paste, cook 1 min.",
                "Add tomato purée and all spices. Cook until oil separates (5–6 min). Add cooked chickpeas with their water. Simmer 10 min. Mash a few chickpeas for thickness.",
            ],
            tip: { type: "gold", icon: "⭐", label: "Key Step", text: "The tea bag water gives chole that authentic dark brown color. Don't skip this — it's the secret!" },
        },
        {
            title: "Make Bhature Dough — 5 min + 30 min rest",
            paras: [
                "Mix maida, salt, baking powder, sugar, yogurt, and 1 tbsp oil. Knead into a soft, smooth dough with warm water. It should be softer than roti dough.",
                "Cover with a damp cloth and rest for 30 minutes. The dough will puff up slightly.",
            ],
            tip: { type: "green", icon: "💡", label: "Pro Tip", text: "The yogurt and baking powder are what make bhature soft and puffy. Don't skip either!" },
        },
        {
            title: "Fry Bhature & Serve — 15 min",
            paras: [
                "Divide dough into 8 balls. Roll each into an oval shape (not too thin, not too thick — about 5mm).",
                "Heat oil for deep frying on medium-high. Slide in one bhatura — press gently with a slotted spoon. It should puff up beautifully!",
                "Flip once and fry until golden on both sides. Drain on paper towels. Serve hot with chole, sliced onion, and pickle!",
            ],
            tip: { type: "red", icon: "⚠️", label: "Watch Carefully", text: "Oil temperature is critical. Too hot = brown outside, raw inside. Too cold = oily bhature. Test with a small dough piece first." },
        },
    ],

    tips: [
        { bold: "Soak chickpeas overnight.", text: "Minimum 8 hours soaking. This ensures even cooking and creamy texture." },
        { bold: "Cook onions until deep brown.", text: "This is the flavor base. Rushing this step ruins the entire dish." },
        { bold: "Bhature dough should be soft.", text: "Softer than roti dough. If it's stiff, bhature won't puff." },
        { bold: "Oil temperature matters.", text: "Medium-high heat. Drop a tiny piece of dough — if it rises immediately, oil is ready." },
        { bold: "Serve immediately.", text: "Bhature are best hot. They deflate and get chewy as they cool." },
    ],

    substitutions: [
        { original: "Dried chickpeas", swap: "Canned chickpeas (2 cans)", saves: "Time (skip soaking)" },
        { original: "Maida", swap: "Wheat flour (for healthier version)", saves: "₹0" },
        { original: "Deep frying", swap: "Air fryer (brush with oil)", saves: "~₹20 oil" },
        { original: "Chole masala", swap: "Homemade garam masala + cumin", saves: "~₹5" },
    ],

    variations: [
        { name: "🫓 Amritsari Chole", desc: "Add anardana (pomegranate seeds) powder and extra amchoor for tangy Amritsari style.", price: "Same ₹149", full: false },
        { name: "🧀 Paneer Bhature", desc: "Add grated paneer to the bhature dough for extra richness.", price: "+₹20 → ₹169", full: false },
        { name: "🥗 Diet Version", desc: "Skip bhature. Serve chole with brown rice or multigrain roti. Healthier!", price: "₹99", full: false },
        { name: "🌶️ Pindi Chole", desc: "Dry version with no gravy. Extra spices, more onion. Great with kulcha.", price: "Same ₹149", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Weekend breakfast (4×/month)", restCost: "₹1,200", homeCost: "₹596" },
            { scenario: "Sunday family brunch (4×/month)", restCost: "₹2,400", homeCost: "₹596" },
        ],
        tip: "Making chole bhature at home for Sunday brunch saves you over ₹600 monthly. Plus, your family gets fresh, hot bhature — not the cold ones from restaurant delivery!",
    },

    nutrition: [
        { value: "550", label: "Calories" },
        { value: "68g", label: "Carbs" },
        { value: "18g", label: "Protein" },
        { value: "24g", label: "Fat" },
    ],

    faq: [
        { q: "Why didn't my bhature puff up?", a: "Common reasons: dough too stiff, oil not hot enough, or rolled too thin. Keep dough soft and oil at 180°C." },
        { q: "Can I make chole in advance?", a: "Yes! Chole taste even better the next day. Store in fridge for up to 3 days. Make bhature fresh." },
        { q: "Is there a healthier version?", a: "Serve chole with multigrain roti instead of bhature. The chole themselves are packed with protein and fiber." },
        { q: "Can I freeze bhature dough?", a: "Yes! Freeze portioned balls for up to 2 weeks. Thaw naturally and roll fresh." },
    ],

    related: [
        { emoji: "🍚", title: "Chicken Biryani", price: "Under ₹199", href: "/recipes/chicken-biryani" },
        { emoji: "🥚", title: "Anda Bhurji Pav", price: "Under ₹59", href: "/recipes/anda-bhurji-pav" },
        { emoji: "🍝", title: "Creamy Garlic Pasta", price: "Under ₹149", href: "/recipes/creamy-garlic-pasta" },
    ],

    seedComments: [
        { name: "Nisha K.", color1: "#e74c3c", color2: "#c0392b", stars: 5, text: "Made this for Sunday brunch and the bhature puffed up perfectly! The tea bag trick is genius!", date: "2 days ago" },
        { name: "Manish P.", color1: "#2ecc71", color2: "#27ae60", stars: 5, text: "Better than my neighbourhood chole bhature wala. My mom was genuinely impressed!", date: "6 days ago" },
        { name: "Sunita R.", color1: "#9b59b6", color2: "#8e44ad", stars: 4, text: "Used canned chickpeas for speed. Still tasted amazing! Will try with dried ones next time.", date: "2 weeks ago" },
    ],
};
