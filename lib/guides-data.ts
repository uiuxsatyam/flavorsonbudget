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
    },
    {
        slug: "late-night-cravings-01",
        title: "Late Night Cravings 01",
        subtitle: "Quick, Tasty & Under ₹100",
        description: "The ultimate survival guide for midnight hunger. From Masala Maggi to Cheesy Toast, get your fix in under 5 minutes without breaking the bank.",
        image: "/images/guides/late-night-cravings-01.png",
        category: "Quick Bites",
        date: "Mar 2026",
        views: "3,450",
        author: "FlavorsOnBudget",
        intro: {
            lead: "Midnight hunger strikes when you least expect it. Don't reach for the expensive delivery apps!",
            body: [
                "We've curated the most legendary late-night snacks that are fast, delicious, and incredibly cheap. Whether you're a student pulling an all-nighter or just need a savory hit before bed, these are for you.",
                "Every item in this guide costs less than ₹100 and takes less than 5 minutes to prepare."
            ],
            keyTakeaways: [
                "Maggi is the king, but veggies make it a meal.",
                "Frozen corn and eggs are high-value freezer staples.",
                "Breads and spreads are your fastest path to satisfaction.",
                "Keep base spices (Chat Masala, Oregano) handy."
            ]
        },
        sections: [
            {
                title: "The Savory Lineup",
                type: "comparison",
                content: ["Quick hits for immediate cravings."],
                list: [
                    "Masala Maggi: The classic, boosted with spices and onion. (₹60)",
                    "Cheesy Toast: Melty goodness on a budget. (₹60)",
                    "Egg Bhurji Roll: High protein, highly satisfying. (Ready in 3 min)",
                    "Garlic Butter Corn: The 2-minute snack champion. (₹50)"
                ]
            },
            {
                title: "Prep Steps",
                type: "checklist",
                content: ["How to manage the 3 AM kitchen run."],
                list: [
                    "Keep water boiling while you chop.",
                    "Use high heat for quick stir-frys.",
                    "Clean as you go (or don't, it's late!).",
                    "Always have butter in the fridge."
                ]
            }
        ],
        faqs: [
            { q: "Is Maggi healthy at night?", a: "While it's processed, adding peas, carrots, or an egg makes it much more balanced." },
            { q: "What's the best cheese for toast?", a: "Amul processed cheese slices or cubes are perfect for that classic street-style melt." }
        ],
        relatedRecipes: [
            { title: "Masala Maggi", price: "Under ₹60", emoji: "🍜", slug: "masala-maggi" },
            { title: "Anda Bhurji Pav", price: "Under ₹60", emoji: "🍳", slug: "anda-bhurji-pav" }
        ]
    },
    {
        slug: "late-night-cravings-02",
        title: "Late Night Cravings 02",
        subtitle: "Comfort Meals Under ₹100",
        description: "Moving beyond snacks into real comfort. Paneer Bhurji, Veg Hakka Noodles, and even leftover Chicken Fried Rice — all for under ₹100.",
        image: "/images/guides/late-night-cravings-02.png",
        category: "Comfort Food",
        date: "Mar 2026",
        views: "2,890",
        author: "FlavorsOnBudget",
        intro: {
            lead: "Sometimes a snack isn't enough. You need a proper, warm, comforting meal.",
            body: [
                "This secondary guide focuses on slightly more substantial meals that still fit the budget and the late-night timeline.",
                "Transform simple ingredients like paneer, noodles, and leftover rice into gourmet-style comfort food in under 10 minutes."
            ],
            keyTakeaways: [
                "Leftover rice is a goldmine for fried rice.",
                "Paneer is the ultimate vegetarian protein for quick scrambles.",
                "Noodles are versatile—change the sauce, change the meal.",
                "Spices transform basic ingredients into restaurant-style hits."
            ]
        },
        sections: [
            {
                title: "The Comfort Menu",
                type: "stats",
                content: ["Substantial bites for serious hunger."],
                list: [
                    "Paneer Bhurji: Scrambled paneer with veggies. (₹120)",
                    "Veg Hakka Noodles: Stir-fry perfection in 8 min. (₹75)",
                    "Chicken Fried Rice: Using leftover chicken/rice. (₹90)",
                    "Potato Chips Chaat: Quick, crunchy, and spicy. (₹60)",
                    "Spicy Egg Sandwich: The protein-packed powerhouse. (₹100)"
                ]
            }
        ],
        faqs: [
            { q: "Can I use frozen veggies for noodles?", a: "Absolutely. Frozen peas and corn are perfect time-savers for late-night cooking." },
            { q: "What if I don't have soy sauce?", a: "A mix of salt, pepper, and a dash of vinegar can mimic the tang in a pinch." }
        ],
        relatedRecipes: [
            { title: "Chicken Hakka Noodles", price: "Under ₹129", emoji: "🍜", slug: "chicken-hakka-noodles" },
            { title: "Paneer Bhurji", price: "Under ₹120", emoji: "🧀", slug: "dhaba-style-paneer-bhurji" }
        ]
    },
    {
        slug: "late-night-cravings-03",
        title: "Late Night Cravings 03",
        subtitle: "Sweet Cravings & Treats",
        description: "For that midnight sweet tooth! Chocolate mug cakes, Nutella parathas, and frozen fruit shakes — all under ₹100.",
        image: "/images/guides/late-night-cravings-03.png",
        category: "Sweet Treats",
        date: "Mar 2026",
        views: "4,120",
        author: "FlavorsOnBudget",
        intro: {
            lead: "The sweet tooth doesn't sleep. Here's how to satisfy it on a budget.",
            body: [
                "Midnight desserts don't have to be complicated. With a microwave and a few pantry staples like cocoa, sugar, and Nutella, you're minutes away from bliss.",
                "This guide is for the chocolate lovers and the fruit fans who need a quick fix before lights out."
            ],
            keyTakeaways: [
                "A mug cake is a 1-minute miracle.",
                "Nutella makes anything better, especially parathas.",
                "Frozen fruits are perfect for instant healthy shakes.",
                "Cinnamon and oats are great for a cozy, warm finish."
            ]
        },
        sections: [
            {
                title: "The Sweet Selection",
                type: "comparison",
                content: ["Instant gratification for your sweet cravings."],
                list: [
                    "Chocolate Mug Cake: 1 minute in the microwave. (₹60)",
                    "Honey Banana Toast: Simple, sweet, and healthy. (₹40)",
                    "Nutella Paratha: Fold, cook, and enjoy. (₹50)",
                    "Frozen Fruit Shake: Blend and go. (₹70)",
                    "Cinnamon Oats: The warm, cozy classic. (₹50/₹70)"
                ]
            }
        ],
        faqs: [
            { q: "Is mug cake gummy?", a: "If you overcook it, yes. Try 45-60 seconds and let it rest for another minute." },
            { q: "Can I use honey instead of Nutella?", a: "Yes, honey and banana is a classic budget-friendly sweet combo." }
        ],
        relatedRecipes: [
            { title: "Chocolate Lava Cake", price: "Under ₹80", emoji: "🧁", slug: "chocolate-lava-cake" },
            { title: "Banana Pancakes", price: "Under ₹50", emoji: "🥞", slug: "banana-pancakes" }
        ]
    },
    {
        slug: "4-fried-chicken-recipes-budget",
        title: "4 Fried Chicken Recipes for Budget",
        subtitle: "Max Crunch, Min Cost",
        description: "Why pay for delivery when you can make elite fried chicken at home? We compare four legendary techniques to get maximum crunch on a budget.",
        image: "/images/guides/fried-chicken-comparison.png",
        category: "Comparison",
        date: "Mar 2026",
        views: "3,400",
        author: "FlavorsOnBudget",
        intro: {
            lead: "The quest for the perfect crunch ends here. Stop overpaying for bone-dry fast food chicken!",
            body: [
                "Fried chicken is often seen as a 'treat' because of resto prices. But at home, chicken is one of the most cost-effective proteins. The real cost isn't the meat, it's the technique.",
                "In this guide, we break down four distinct ways to fry chicken that will save you over ₹200 per meal while delivering 10x the flavor."
            ],
            keyTakeaways: [
                "Brining is the secret to juicy meat, not the oil.",
                "Cornstarch is cheaper and crunchier than flour alone.",
                "Double-frying works for chicken just as well as fries.",
                "Spices in the flour are where the magic happens."
            ]
        },
        sections: [
            {
                title: "The 4 Techniques",
                type: "comparison",
                content: ["Four ways to fry, four ways to fly."],
                list: [
                    "1. The KFC Clone: Double-breaded, heavy on spices (₹110/portion)",
                    "2. The Southern Buttermilk: Tangy, thick crust, extremely juicy (₹130/portion)",
                    "3. The Indian Street Fry: Chickpea flour base, extra spicy (₹90/portion)",
                    "4. The Korean 'Yangnyeom': Sweet & spicy glaze, double-fried for snap (₹140/portion)"
                ]
            },
            {
                title: "Budget Breakdown",
                type: "stats",
                content: ["The numbers behind the crunch."],
                list: [
                    "Home-made Fried Chicken: ₹90-₹140 per serving",
                    "Major Fast Food Chain: ₹350+ per serving",
                    "Saving: ~₹240 per meal!",
                    "Annual Saving (2x/month): ₹5,760!"
                ]
            }
        ],
        faqs: [
            { q: "Do I need a deep fryer?", a: "No! A heavy-bottomed kadai or cast-iron pan works perfectly and uses less oil." },
            { q: "Is it healthy?", a: "Frying is indulgent, but home-made means zero preservatives and better oil quality." }
        ],
        relatedRecipes: [
            { title: "Chicken Biryani", price: "Under ₹199", emoji: "🍛", slug: "chicken-biryani" },
            { title: "Crunchy French Fries", price: "Under ₹40", emoji: "🍟", slug: "crunchy-french-fries" }
        ]
    }
];

export function getAllGuides(): Guide[] {
    return guides;
}

export function getGuideBySlug(slug: string): Guide | undefined {
    return guides.find((g) => g.slug === slug);
}
