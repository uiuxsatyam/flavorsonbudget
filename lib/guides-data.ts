import { Guide } from "./guide-types";

export const guides: Guide[] = [
    {
        slug: "500-weekly-grocery-challenge",
        title: "₹500 Weekly Grocery Challenge",
        subtitle: "Can You Make It Last 7 Days?",
        description: "A complete manual to surviving a full week on just ₹500. This includes a strategic shopping list and a 7-day meal plan to keep you full and satisfied.",
        image: "/images/guides/grocery-challenge.webp",
        category: "Challenge",
        date: "Feb 2026",
        views: "1,240",
        author: "FlavorsOnBudget",
        intro: {
            lead: "The ultimate test of budget cooking: feeding yourself for an entire week with just a single ₹500 note.",
            body: [
                "In today's economy, ₹500 might seem like it barely covers a single café meal. But with smart planning and focus on core staples, you can actually build a nutritious 7-day meal plan that doesn't feel like a sacrifice.",
                "This guide breaks down the exact grocery list you need and how to rotate these ingredients to prevent meal boredom."
            ],
            keyTakeaways: [
                "Focus on bulk staples like Rice and Dal.",
                "Eggs are your cheapest high-quality protein.",
                "Seasonal vegetables offer the best value per kg.",
                "Planning is 90% of the battle."
            ]
        },
        sections: [
            {
                title: "The ₹500 Grocery List",
                type: "stats",
                content: ["Sticking to this list is crucial. No impulse buys allowed!"],
                list: [
                    "Rice: ₹80",
                    "Dal: ₹70",
                    "Eggs (6): ₹45",
                    "Potatoes: ₹40",
                    "Onions: ₹40",
                    "Tomatoes: ₹40",
                    "Seasonal Veg: ₹80",
                    "Oil: ₹50",
                    "Curd: ₹30",
                    "Spices & Extras: ₹25"
                ]
            },
            {
                title: "7-Day Meal Plan",
                type: "checklist",
                content: ["A rotation that ensures you use every bit of your groceries."],
                list: [
                    "Day 1: Dal Chawal (Simple & Comforting)",
                    "Day 2: Egg Bhurji + Roti (Quick & Protein-rich)",
                    "Day 3: Veg Pulao (Using seasonal veggies)",
                    "Day 4: Aloo Sabzi + Rice (The budget classic)",
                    "Day 5: Curd Rice (Cooling & Easy)",
                    "Day 6: Egg Curry (A hearty treat)",
                    "Day 7: Khichdi (Clear out the remaining stock)"
                ]
            },
            {
                title: "Budget Hacks",
                type: "text",
                content: ["Pro tips to make your money go even further."],
                list: [
                    "Cook once, eat twice (Save on fuel and time)",
                    "Use leftovers creatively",
                    "Buy seasonal vegetables only",
                    "Avoid packaged snacks entirely",
                    "Plan every meal before you step into the market"
                ]
            }
        ],
        faqs: [
            { q: "Is this enough calories for an active person?", a: "This plan provides decent calories through rice and fats, but if you have high energy needs, consider increasing the rice portion—it's the cheapest way to add energy." },
            { q: "What about breakfast?", a: "This challenge assumes 2 main meals. For breakfast, you can use a portion of curd and rice (Curd Rice) or save some potatoes for a quick hash." }
        ],
        relatedRecipes: [
            { title: "Dal Chawal", price: "Under ₹40", emoji: "🍚", slug: "dal-chawal" },
            { title: "Egg Bhurji", price: "Under ₹60", emoji: "🍳", slug: "anda-bhurji-pav" }
        ]
    },
    {
        slug: "spice-level-guide",
        title: "Spice Level Guide",
        subtitle: "For Indian Cooking",
        description: "Never over-spice your curry again. This guide explains the four levels of heat in Indian cuisine and how to achieve them.",
        image: "/images/guides/spice-guide.webp",
        category: "Cooking 101",
        date: "Feb 2026",
        views: "890",
        author: "FlavorsOnBudget",
        intro: {
            lead: "Understanding 'Spicy' is the first step to mastering Indian flavors.",
            body: [
                "For some, 'mild' is too hot. For others, 'extra spicy' is just getting started. This guide helps you navigate the spectrum of heat using standard measurements.",
                "Whether you're cooking for kids or heat-seekers, here's how to hit the mark every time."
            ],
            keyTakeaways: [
                "Chilli powder is for heat; green chillies are for flavor.",
                "Dairy (cream/curd) is your best friend to dial down heat.",
                "Spice levels are cumulative—you can always add, but it's hard to subtract."
            ]
        },
        sections: [
            {
                title: "The Heat Spectrum",
                type: "comparison",
                content: ["From Mild to Extra Spicy."],
                list: [
                    "Mild: 1/4 tsp chilli powder, no green chilli. Kid-friendly!",
                    "Medium: 1/2 tsp chilli powder, 1 small green chilli. Balanced.",
                    "Spicy: 1 tsp chilli powder, 1-2 green chillies. The classic kick.",
                    "Extra Spicy: 1.5-2 tsp chilli powder, multiple chillies. Caution!"
                ]
            },
            {
                title: "Quick Cooling Tips",
                type: "text",
                content: ["Made it too hot? Don't panic."],
                list: [
                    "Add dairy (curd/cream) to reduce heat instantly.",
                    "Add a pinch of sugar or squeeze of lemon to balance.",
                    "Oil actually enhances spice flavor—don't add more if it's too hot!",
                    "Always taste as you cook."
                ]
            }
        ],
        faqs: [
            { q: "Which chilli powder is best?", a: "Kashmiri Lal Mirch gives great color with low heat. Regular chilli powder is much more potent." },
            { q: "My green chillies are too hot!", a: "Remove the seeds and white pith—that's where most of the capsaicin (heat) lives." }
        ],
        relatedRecipes: [
            { title: "Creamy Garlic Pasta", price: "Under ₹150", emoji: "🍝", slug: "creamy-garlic-pasta" },
            { title: "Masala Omelette", price: "Under ₹45", emoji: "🍳", slug: "masala-omelette" }
        ]
    },
    {
        slug: "masala-chai-vs-chai-latte",
        title: "Masala Chai vs Chai Latte",
        subtitle: "Desi Brew vs Café Blend",
        description: "The ultimate comparison between authentic Indian street stall-style tea and the trendy café version. Which one wins on budget?",
        image: "/images/guides/chai-comparison.webp",
        category: "Comparison",
        date: "Feb 2026",
        views: "2,150",
        author: "FlavorsOnBudget",
        intro: {
            lead: "Are you paying for the tea or the foam? We break down the ultimate chai debate.",
            body: [
                "Authentic Masala Chai is a labor of love, simmered in one pot. The Chai Latte is a textured, milky creation often found in high-end cafes.",
                "We compare the flavor profiles, textures, and most importantly—the cost."
            ],
            keyTakeaways: [
                "Traditional chai cost is almost 1/10th of a café latte.",
                "Masala Chai relies on whole spices; Lattes often use syrups.",
                "Texture differences come from the boiling method vs steaming."
            ]
        },
        sections: [
            {
                title: "The Core Differences",
                type: "comparison",
                content: ["A side-by-side look at the two brews."],
                list: [
                    "Method: One-pot simmering vs Steamed milk addition.",
                    "Sweetener: Sugar/Jaggery vs Vanilla/Honey syrups.",
                    "Flavor: Spice-forward & Bold vs Creamy & Milder.",
                    "Texture: Thin & refreshing vs Thick & Frothy."
                ]
            },
            {
                title: "Budget Comparison",
                type: "stats",
                content: ["The numbers don't lie."],
                list: [
                    "Masala Chai at Home: ₹15-₹20 per cup",
                    "Café Masala Chai: ₹180-₹300 per cup",
                    "Chai Latte at Café: ₹180-₹300 per cup",
                    "Savings: ~₹250 per cup!"
                ]
            }
        ],
        faqs: [
            { q: "Can I make a Chai Latte at home?", a: "Yes! Use a milk frother and a strong tea concentrate. It will still cost less than ₹40." },
            { q: "What's the best milk ratio for Masala Chai?", a: "We recommend 1:1 or 1:1.5 (Water to Milk) for a balanced, rich taste." }
        ],
        relatedRecipes: [
            { title: "Masala Omelette", price: "Under ₹45", emoji: "🍳", slug: "masala-omelette" },
            { title: "Anda Bhurji Pav", price: "Under ₹70", emoji: "🥚", slug: "anda-bhurji-pav" }
        ]
    }
];

export function getAllGuides(): Guide[] {
    return guides;
}

export function getGuideBySlug(slug: string): Guide | undefined {
    return guides.find((g) => g.slug === slug);
}
