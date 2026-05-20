import { Recipe } from "../recipe-types";

export const cheesyCornSandwich: Recipe = {
    slug: "cheesy-corn-sandwich",
    title: "Cheesy Corn Sandwich",
    titleEmphasis: "Under ₹80",
    category: "Cafe Style Recipes",
    subcategory: "Under ₹80",
    date: "May 2026",
    views: "3.5k",
    emoji: "🥪",
    image: "/images/recipes/cheesy-corn-sandwich.png",
    savingsBadgeAmount: "₹170",
    savingsBadgeSub: "vs cafe",
    initialLikes: 247,

    stats: [
        { icon: "💰", value: "₹80", label: "Total Cost" },
        { icon: "🍽️", value: "₹40", label: "Per Sandwich" },
        { icon: "⏱️", value: "20 min", label: "Total Time" },
        { icon: "👥", value: "2", label: "Servings" },
        { icon: "🌶️", value: "Mild", label: "Spice Level" },
    ],

    intro: {
        lead: "Crispy outside, creamy & cheesy inside! Pure comfort in every bite with the classic Cheesy Corn Sandwich!",
        body: [
            "Craving a warm, loaded sandwich from your favorite cafe but want to stick to a budget? This <strong>Cheesy Corn Sandwich</strong> is the perfect solution. It features a sweet, crunchy corn filling in a creamy mayonnaise and pizza sauce base, topped with melted mozzarella cheese.",
            "Prepared in less than 20 minutes, this grilled sandwich is crispy on the outside, incredibly gooey on the inside, and costs only ₹40 per sandwich to make at home."
        ],
        highlights: [
            "Super Creamy & Cheesy",
            "Sweet Corn & Veggie Filling",
            "Costs under ₹80 for two",
            "Grills to Golden Perfection"
        ],
    },

    costTable: {
        heading: "Cost Breakdown",
        headingIcon: "₹",
        ingredients: [
            { name: "Bread Slices", qty: "4 pcs", cost: "₹12" },
            { name: "Sweet Corn & Veggies", qty: "Mixed", cost: "₹20" },
            { name: "Mozzarella Cheese", qty: "1/2 cup", cost: "₹15" },
            { name: "Mayonnaise & Pizza Sauce", qty: "3 tbsp", cost: "₹15" },
            { name: "Butter & Spices", qty: "Mixed", cost: "₹18" }
        ],
        totalServings: "2 Sandwiches",
        totalCost: "₹80",
        perServing: "₹40",
        restaurantCost: "₹250",
        saving: "₹170!",
    },

    ingredients: [
        {
            groupName: "The Creamy Filling",
            items: [
                "🌽 1/2 cup Sweet Corn (boiled)",
                "🫑 1/4 cup Capsicum (chopped)",
                "🧅 1/4 cup Onion (chopped)",
                "🍅 1/4 cup Tomato (chopped)",
                "🥛 2 tbsp Mayonnaise",
                "🍅 1 tbsp Pizza Sauce"
            ],
        },
        {
            groupName: "Bread, Cheese & Spreads",
            items: [
                "🍞 4 Bread Slices",
                "🧀 1/2 cup Mozzarella Cheese (grated)",
                "🧈 1 tsp Butter"
            ],
        },
        {
            groupName: "Seasonings",
            items: [
                "🌿 1/2 tsp Oregano",
                "🌶️ 1/2 tsp Chilli Flakes",
                "🧂 Salt to taste"
            ]
        }
    ],

    steps: [
        {
            title: "Combine Veggies",
            paras: [
                "In a bowl, add boiled sweet corn, chopped capsicum, onion, and tomato."
            ]
        },
        {
            title: "Mix Sauce & Seasoning",
            paras: [
                "Add mayonnaise, pizza sauce, oregano, chilli flakes, and salt to the bowl. Mix well to create a creamy coating."
            ]
        },
        {
            title: "Assemble",
            paras: [
                "Spread the creamy corn mixture evenly on a bread slice.",
                "Top generously with grated mozzarella cheese, and place another bread slice on top."
            ]
        },
        {
            title: "Grill",
            paras: [
                "Spread butter on both outer sides of the sandwich.",
                "Place on a grill pan or sandwich maker. Grill until both sides turn golden-brown and crispy, and the cheese inside has fully melted."
            ],
            tip: { type: "gold", icon: "💡", label: "Tips", text: "Use mozzarella for extra cheesiness. Add jalapenos for a spicy kick!" }
        },
        {
            title: "Serve",
            paras: [
                "Slice diagonally and serve hot with tomato ketchup or green chutney."
            ]
        }
    ],

    tips: [
        { bold: "Spicy Twist:", text: "Add 1 tbsp of finely chopped jalapenos or green chillies to the filling mix to give it a spicy kick." },
        { bold: "Browning the Bread:", text: "Grill on low-medium heat so the bread gets extra crispy and golden while allowing the cheese inside to melt completely." }
    ],

    substitutions: [
        { original: "Mozzarella Cheese", swap: "Processed cheese slice", saves: "₹5" },
        { original: "Mayonnaise", swap: "Hung curd (Greek yogurt) for a healthy twist", saves: "₹3 (healthier)" }
    ],

    variations: [
        { name: "Spinach & Corn Sandwich", desc: "Add 1/4 cup boiled, chopped spinach to the corn mix.", price: "+₹5", full: false },
        { name: "Paneer Corn Sandwich", desc: "Fold in 1/4 cup crumbled paneer for an extra protein boost.", price: "+₹15", full: false }
    ],

    savingsTable: {
        rows: [
            { scenario: "Dining out at a cafe", restCost: "₹250", homeCost: "₹80" }
        ],
        tip: "Prepare this at home to save ₹170 and control the amount of butter and oil used!"
    },

    nutrition: [
        { value: "340", label: "Calories" },
        { value: "38g", label: "Carbs" },
        { value: "10g", label: "Protein" },
        { value: "16g", label: "Fat" }
    ],

    faq: [
        { q: "Can I make this on a tawa?", a: "Yes, a simple non-stick tawa works perfectly. Press down gently with a spatula while toasting." },
        { q: "Can I freeze the filling?", a: "You can prep the veggies and corn ahead, but only mix with mayonnaise and sauces right before making to avoid a watery filling." }
    ],

    related: [
        { emoji: "🥪", title: "Three Cheese Veg Sandwich", price: "Under ₹80", href: "/recipes/three-cheese-veg-sandwich" },
        { emoji: "🥪", title: "Veg Grilled Sandwich", price: "Under ₹60", href: "/recipes/veg-grilled-sandwich" }
    ],

    seedComments: [
        { name: "Suresh P.", color1: "#4caf50", color2: "#8bc34a", stars: 5, text: "The combination of mayo and pizza sauce in the filling is so genius, tastes exactly like cafe sandwiches!", date: "2 days ago" }
    ]
};
