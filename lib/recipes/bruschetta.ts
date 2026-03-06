import { Recipe } from "../recipe-types";

export const bruschetta: Recipe = {
    slug: "bruschetta",
    title: "Classic Tomato Bruschetta",
    titleEmphasis: "Gourmet for Under ₹99",
    category: "Continental",
    subcategory: "Under ₹99",
    date: "Mar 2026",
    views: "1.5k",
    emoji: "🍞",
    image: "/images/recipes/bruschetta.png", // Will need to be moved to this path
    savingsBadgeAmount: "₹301",
    savingsBadgeSub: "vs resto",
    initialLikes: 124,

    stats: [
        { icon: "💰", value: "₹99", label: "Total Cost" },
        { icon: "🍽️", value: "₹25", label: "Per Slice" },
        { icon: "⏱️", value: "15 min", label: "Total Time" },
        { icon: "👥", value: "4", label: "Servings" },
        { icon: "🌶️", value: "None", label: "Spice Level" },
    ],

    intro: {
        lead: "The ultimate Italian appetizer — crispy toasted baguette topped with juicy, herb-infused tomatoes — for less than a coffee!",
        body: [
            "This <strong>Classic Tomato Bruschetta</strong> brings restaurant-style sophistication to your home kitchen. Using just a few fresh ingredients and basic pantry staples, you can create a centerpiece appetizer that looks and tastes expensive but costs less than ₹100 for a whole platter.",
            "The secret lies in the <strong>quality of the tomatoes</strong> and the <strong>rubbing of fresh garlic</strong> on the toasted bread. It's simple, elegant, and perfect for when you want to impress without breaking the bank."
        ],
        highlights: [
            "Ready in 15 minutes",
            "Costs under ₹25 per serving",
            "Gourmet appetizer look",
            "Only 6 key ingredients",
            "No cooking required (just toasting)",
            "Perfect for hosting or healthy snacking"
        ],
    },

    costTable: {
        heading: "Cost Breakdown: Home vs Fine Dining",
        headingIcon: "₹",
        ingredients: [
            { name: "Baguette / Italian Bread", qty: "1 loaf", cost: "₹45" },
            { name: "Ripe Roma Tomatoes", qty: "3 large", cost: "₹15" },
            { name: "Fresh Basil Leaves", qty: "handful", cost: "₹10" },
            { name: "Garlic Cloves", qty: "2 cloves", cost: "₹5" },
            { name: "Extra Virgin Olive Oil", qty: "2 tbsp", cost: "₹20" },
            { name: "Balsamic Glaze / Salt / Pepper", qty: "dash", cost: "₹4" },
        ],
        totalServings: "4 Servings (8-10 slices)",
        totalCost: "₹99",
        perServing: "~₹25",
        restaurantCost: "₹400",
        saving: "₹301!",
    },

    ingredients: [
        {
            groupName: "Topping",
            items: [
                "🍅 3 large ripe tomatoes — seeded and finely diced",
                "🌿 1/4 cup fresh basil leaves — thinly sliced (chiffonade)",
                "🫒 1 tbsp extra virgin olive oil",
                "🧂 Salt & freshly cracked black pepper to taste",
                "🍯 1 tsp balsamic glaze (optional for garnish)"
            ],
        },
        {
            groupName: "The Bread",
            items: [
                "🥖 1 baguette or loaf of Italian crusty bread — sliced into 1/2 inch rounds",
                "🧄 1-2 large garlic cloves — peeled and cut in half",
                "🧈 1 tbsp olive oil or butter — for brushing"
            ],
        },
    ],

    steps: [
        {
            title: "Prep the Tomatoes — 5 min",
            paras: [
                "In a medium bowl, combine the diced tomatoes, sliced basil, and 1 tbsp of olive oil.",
                "Season with salt and pepper. Toss gently to combine. Let it sit at room temperature to allow the flavors to meld."
            ],
            tip: { type: "gold", icon: "⭐", label: "Secret Tip", text: "Removing the seeds from the tomatoes prevents the bruschetta from getting soggy. Use only the firm outer flesh." },
        },
        {
            title: "Toast the Bread — 7 min",
            paras: [
                "Preheat your oven to 200°C (400°F) or use a toaster/tawa.",
                "Arrange bread slices on a baking sheet and brush lightly with olive oil. Toast for 5-7 minutes until golden and crispy around the edges."
            ],
        },
        {
            title: "The Garlic Magic & Assembly — 3 min",
            paras: [
                "While the bread is still warm, take the halved garlic clove and rub the cut side over the top of each toasted slice. The heat from the bread will melt the garlic into the crust.",
                "Spoon a generous portion of the tomato mixture onto each slice. Drizzle with balsamic glaze if using, and serve immediately."
            ],
            tip: { type: "green", icon: "💡", label: "Flavor Hack", text: "The garlic rub is the traditional Italian way to infuse flavor without the bite of raw chopped garlic. Don't skip it!" },
        },
    ],

    tips: [
        { bold: "Use room temperature tomatoes.", text: "Cold tomatoes have less flavor. Let them sit out for an hour before prepping." },
        { bold: "Choose crusty bread.", text: "A soft sandwich loaf won't hold the weight of the tomatoes. Look for a firm baguette or ciabatta." },
        { bold: "Salt right before serving.", text: "Salting tomatoes too early draws out moisture and makes them watery." },
        { bold: "Rub garlic while bread is HOT.", text: "The heat acts like a grater, melting the garlic essence directly into the bread." }
    ],

    substitutions: [
        { original: "Baguette", swap: "Thick slices of sourdough", saves: "~₹5" },
        { original: "Fresh Basil", swap: "1/2 tsp dried basil + fresh parsley", saves: "~₹5" },
        { original: "Balsamic Glaze", swap: "Honey + dash of vinegar", saves: "~₹2" },
    ],

    variations: [
        { name: "🧀 Cheesy Bruschetta", desc: "Add a thin slice of fresh mozzarella or a sprinkle of Parmesan before toasting.", price: "+₹25 → ₹124", full: false },
        { name: "🍄 Mushroom & Herb", desc: "Sauté mushrooms with garlic and thyme instead of the tomato topping.", price: "+₹15 → ₹114", full: false },
        { name: "🥑 Avocado Bruschetta", desc: "Top with mashed avocado and chili flakes before adding the tomatoes.", price: "+₹40 → ₹139", full: false },
    ],

    savingsTable: {
        rows: [
            { scenario: "Weekend snack (4×/month)", restCost: "₹1,600", homeCost: "₹396" },
            { scenario: "Hosting a party for 8", restCost: "₹3,200", homeCost: "₹198" },
        ],
        tip: "Bruschetta is the ultimate 'cheap but expensive-looking' dish. It's the perfect way to host guests on a budget.",
    },

    nutrition: [
        { value: "120", label: "Calories" },
        { value: "18g", label: "Carbs" },
        { value: "3g", label: "Protein" },
        { value: "4g", label: "Fat" },
    ],

    faq: [
        { q: "Can I make the topping in advance?", a: "Yes, up to 2 hours. Any longer and the tomatoes start to lose their texture." },
        { q: "What tomatoes are best?", a: "Roma or Plum tomatoes are best because they have more flesh and fewer seeds." },
        { q: "Can I use regular bread?", a: "You can, but toast it extra well so it doesn't get soggy under the tomatoes." },
    ],

    related: [
        { emoji: "🍝", title: "Creamy Garlic Pasta", price: "Under ₹149", href: "/recipes/creamy-garlic-pasta" },
        { emoji: "🥘", title: "Masala Omelette", price: "Under ₹49", href: "/recipes/masala-omelette" },
        { emoji: "🍳", title: "Anda Bhurji Pav", price: "Under ₹59", href: "/recipes/anda-bhurji-pav" },
    ],

    seedComments: [
        { name: "Sofia T.", color1: "#2ecc71", color2: "#27ae60", stars: 5, text: "The garlic rub technique is a total game changer. Tastes exactly like my favorite Italian spot!", date: "1 day ago" },
        { name: "Marco L.", color1: "#e74c3c", color2: "#c0392b", stars: 5, text: "So simple but so worth it. The fresh basil makes it smell like heaven.", date: "3 days ago" },
    ],
};
