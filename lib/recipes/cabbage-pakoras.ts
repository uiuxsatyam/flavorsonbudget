import { Recipe } from "../recipe-types";

export const cabbagePakoras: Recipe = {
    slug: "cabbage-pakoras",
    title: "Cabbage Pakoras",
    titleEmphasis: "The ₹45 Snack",
    category: "Indian Budget",
    subcategory: "Under ₹50",
    date: "Mar 2026",
    views: "1.8k",
    emoji: "🥟",
    image: "/images/recipes/cabbage-pakoras.png",
    savingsBadgeAmount: "₹75",
    savingsBadgeSub: "vs resto",
    initialLikes: 112,

    stats: [
        { icon: "💰", value: "₹45", label: "Total Cost" },
        { icon: "🍽️", value: "₹12", label: "Per Serving" },
        { icon: "⏱️", value: "20 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "Medium", label: "Spice Level" },
    ],

    intro: {
        lead: "The ultimate budget-friendly rainy day snack — crispy shredded cabbage fritters that beat onion pakoras any day for half the price.",
        body: [
            "When onion prices soar, cabbage comes to the rescue. <strong>Cabbage Pakoras</strong> (also known as Cabbage Vada) are incredibly crunchy on the outside and soft inside. The shredded cabbage mimics the texture of onions but with a sweet, subtle flavor that pairs beautifully with spicy besan.",
            "This recipe makes a huge batch for just ₹45, making it the perfect affordable snack for tea time or unexpected guests."
        ],
        highlights: [
            "Cheaper than onion pakoras",
            "Extra crispy texture",
            "Ready in 20 minutes",
            "Perfect with Masala Chai",
            "Gluten-free (made with Besan)",
            "Kids' favorite evening snack"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Street Food",
        headingIcon: "₹",
        ingredients: [
            { name: "Cabbage", qty: "2 cups (shredded)", cost: "₹10" },
            { name: "Besan (Gram Flour)", qty: "1 cup", cost: "₹15" },
            { name: "Rice Flour", qty: "2 tbsp", cost: "₹5" },
            { name: "Green Chillies & Ginger", qty: "as needed", cost: "₹5" },
            { name: "Oil (for frying)", qty: "100ml", cost: "₹10" },
        ],
        totalServings: "4 Servings (Platter)",
        totalCost: "₹45",
        perServing: "~₹12",
        restaurantCost: "₹120",
        saving: "₹75!",
    },

    ingredients: [
        {
            groupName: "The Base",
            items: [
                "🥬 2 cups cabbage — very finely shredded",
                "🧅 1/2 onion — thinly sliced (optional)",
                "🌿 1/4 cup fresh coriander — chopped",
                "🌶️ 2 green chillies — finely chopped",
                "🫚 1 tsp ginger-garlic paste"
            ],
        },
        {
            groupName: "Batter Mix",
            items: [
                "🥣 1 cup besan (gram flour)",
                "🍚 2 tbsp rice flour — for extra crunch",
                "🧂 1/2 tsp carom seeds (ajwain)",
                "🧂 Salt, turmeric, and red chilli powder to taste",
                "🥨 A pinch of baking soda (optional)"
            ],
        },
    ],

    steps: [
        {
            title: "Prep the Cabbage — 5 min",
            paras: [
                "In a large bowl, mix shredded cabbage, sliced onion, and salt. Let it sit for 5 minutes. The cabbage will release some moisture, which is enough to bind the batter without extra water."
            ],
        },
        {
            title: "Bind the Batter — 5 min",
            paras: [
                "Add besan, rice flour, spices, and chillies to the cabbage. Mix well with your hands. The mixture should be thick and chunky, not watery like pancake batter.",
                "If it's too dry, sprinkle just a few drops of water. It should just hold together."
            ],
            tip: { type: "gold", icon: "⭐", label: "Crunch Secret", text: "Rice flour is the key to that long-lasting crunch. Don't skip it if you want restaurant-style pakoras." },
        },
        {
            title: "Deep Fry — 10 min",
            paras: [
                "Heat oil in a kadai (deep pan) on medium-high. Drop small, rough portions of the mixture into the hot oil.",
                "Fry until they are deep golden brown and crispy (about 3-4 minutes per batch). Drain on paper towels."
            ],
            tip: { type: "red", icon: "⚠️", label: "Oil Temp", text: "If the oil is too cold, the pakoras will soak up oil. If it's too hot, they'll burn outside and stay raw inside. Test with a tiny piece of batter first." },
        },
    ],

    tips: [
        { bold: "Don't add too much water.", text: "Cabbage releases its own water. Using less water makes pakoras crispier." },
        { bold: "Fry on medium heat.", text: "This ensures the cabbage inside gets cooked through while the besan crisps up." },
        { bold: "Serve with green chutney.", text: "The tanginess of the chutney balances the rich, fried flavor." }
    ],

    substitutions: [
        { original: "Cabbage", swap: "Shredded Kale or Spinach", saves: "-₹10" },
        { original: "Besan", swap: "Moong Dal batter (soaked & ground)", saves: "₹0" },
        { original: "Rice Flour", swap: "Cornstarch", saves: "₹0" },
    ],

    variations: [
        { name: "🍜 Chinese Style", desc: "Add soy sauce and ginger-garlic to the batter for a 'Cabbage Manchurian' dry vibe.", price: "Same", full: false },
        { name: "🍟 Cabbage Fries", desc: "Cut cabbage into thick wedges instead of shredding for a different look.", price: "Same", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Tea time snack (twice a week)", restCost: "₹960", homeCost: "₹360" },
            { scenario: "Party appetizer for 10", restCost: "₹500", homeCost: "₹100" },
        ],
        tip: "Cabbage pakoras are one of the highest margin items for street vendors. Making them at home is almost 70% cheaper.",
    },

    nutrition: [
        { value: "180", label: "Calories" },
        { value: "22g", label: "Carbs" },
        { value: "8g", label: "Protein" },
        { value: "9g", label: "Fat" },
    ],

    faq: [
        { q: "Why are my pakoras soggy?", a: "Either the batter was too thin (too much water) or the oil wasn't hot enough when you dropped them in." },
        { q: "Can I air fry these?", a: "Yes! Spray with oil and air fry at 200°C for 12-15 minutes, turning halfway. They won't be as crunchy but much healthier." }
    ],

    related: [
        { emoji: "🫓", title: "Cabbage Paratha", price: "Under ₹60", href: "/recipes/cabbage-paratha" },
        { emoji: "🍞", title: "Bruschetta", price: "Under ₹99", href: "/recipes/bruschetta" },
    ],

    seedComments: [
        { name: "Rahul M.", color1: "#3498db", color2: "#2980b9", stars: 5, text: "I actually prefer these over onion pakoras now. Much more crunch!", date: "4 days ago" },
    ],
};
