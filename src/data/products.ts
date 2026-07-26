export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number; // USD Base (INR = price * 80)
  rating: number;
  reviews: number;
  details: string;
  image: string;
  longDescription?: string;
}

export const ALL_PRODUCTS: Product[] = [
  // Makeup
  {
    id: 1,
    name: "Vinyl Ink Liquid Lipstick",
    brand: "Maybelline",
    category: "Makeup",
    price: 14,
    rating: 5,
    reviews: 340,
    details: "Super stay vinyl ink liquid lipstick for 16hr wear.",
    image: "/products/maybelline-vinyl-ink-liquid-lipstick.webp",
    longDescription: "Get the lock-in shine and color with Maybelline Super Stay Vinyl Ink. This liquid lipstick delivers no-budge vinyl color with a 16-hour wear guarantee. Featuring an innovative color-lock formula that resists smudging and transfer, it leaves a comfortable, high-shine finish from morning to night."
  },
  {
    id: 2,
    name: "Sky High Waterproof Mascara",
    brand: "Maybelline",
    category: "Makeup",
    price: 13,
    rating: 5,
    reviews: 450,
    details: "Infinite length and volume lashes sky high mascara.",
    image: "/products/maybelline-sky-high-waterproof-mascara.webp",
    longDescription: "Sky High lash impact from every angle! Lash Sensational Sky High Mascara delivers full volume and limitless length. The exclusive Flex Tower mascara brush bends to volumize and extend every single lash from root to tip. Infused with bamboo extract and fibers for long, full lashes that never get weighed down."
  },
  {
    id: 3,
    name: "Ultime Pro HD Matte Lip",
    brand: "Faces Canada",
    category: "Makeup",
    price: 15,
    rating: 5,
    reviews: 110,
    details: "High-definition matte lipstick for ultimate comfort.",
    image: "/products/faces-canada-ultime-pro-hd-matte-lip.webp",
    longDescription: "Faces Canada Ultime Pro HD Matte Lipstick offers highly pigmented colors that stay put all day. Its feather-light formula glides smoothly onto the lips, leaving a flawless high-definition matte finish. Packed with skin-loving ingredients to keep your lips moisturized and cracking-free."
  },
  {
    id: 4,
    name: "Matte Drama Lipstick",
    brand: "K-Beauty",
    category: "Makeup",
    price: 24,
    rating: 5,
    reviews: 120,
    details: "Velvet feel luxury matte lipstick in signature shades.",
    image: "/products/k-beauty-matte-drama-lipstick.webp",
    longDescription: "Curated for the ultimate luxury feel, the K-Beauty Matte Drama Lipstick is a premium lipstick that wraps your lips in rich, velvet matte colors. Highly buildable and velvety, it delivers signature shades that adapt elegantly to every skin tone while remaining soft and lightweight."
  },
  {
    id: 5,
    name: "Fit Me Matte Liquid Foundation",
    brand: "Maybelline",
    category: "Makeup",
    price: 11,
    rating: 4,
    reviews: 520,
    details: "Natural matte finish liquid foundation.",
    image: "/products/maybelline-fit-me-matte-liquid-foundation.webp",
    longDescription: "Maybelline Fit Me Matte + Poreless Liquid Foundation is designed to fit your unique skin tone and texture. Ideal for normal-to-oily skin types, this ultra-lightweight foundation features micro-powders to control shine and blur pores for a natural, seamless matte finish that lasts up to 12 hours."
  },
  {
    id: 22,
    name: "Color Sensational Creamy Matte",
    brand: "Maybelline",
    category: "Makeup",
    price: 9,
    rating: 4,
    reviews: 180,
    details: "Creamy matte lipstick with honey nectar.",
    image: "/products/maybelline-color-sensational-creamy-matte.webp",
    longDescription: "Maybelline Color Sensational Creamy Mattes deliver rich, warm matte color in a velvety, moisturizing formula. Infused with nourishing honey nectar, this lipstick glides on effortlessly for a smooth, comfortable matte look that keeps lips hydrated and looking plump."
  },
  {
    id: 23,
    name: "Lash Sensational Mascara",
    brand: "Maybelline",
    category: "Makeup",
    price: 12,
    rating: 5,
    reviews: 290,
    details: "Sensational full fan effect mascara.",
    image: "/products/maybelline-lash-sensational-mascara.webp",
    longDescription: "Reveal layers of lashes for a sensational full-fan effect. The fanning curved brush features ten layers of bristles to capture and coat lashes from root to tip. Washable formula separates and defines lashes without clumping for a dramatic, wide-awake look."
  },
  {
    id: 24,
    name: "Liquid Velvet Matte Lip",
    brand: "Faces Canada",
    category: "Makeup",
    price: 16,
    rating: 4,
    reviews: 75,
    details: "Long-lasting non-drying liquid matte lipstick.",
    image: "/products/faces-canada-liquid-velvet-matte-lip.webp",
    longDescription: "A luxurious fluid lip color that glides on like a dream and dries down to a rich, velvety matte finish. Faces Canada Liquid Velvet Matte Lip is specially formulated to deliver long-lasting, transfer-proof wear without stripping your lips of essential hydration."
  },

  // Skin
  {
    id: 6,
    name: "Sunset Radiance Serum",
    brand: "Celestia Lab",
    category: "Skin",
    price: 48,
    rating: 5,
    reviews: 124,
    details: "Facial serum for an ultimate golden hour glow.",
    image: "/products/celestia-lab-sunset-radiance-serum.webp",
    longDescription: "Experience the ultimate skin glow with Sunset Radiance Serum. Packed with vitamin complexes, botanical extracts, and light-reflecting minerals, this luxurious serum hydrates, plumps, and refines skin texture. Perfect as a skin-brightening treatment or a glowing primer under cosmetics."
  },
  {
    id: 7,
    name: "Amber Glow Moisturizer",
    brand: "Celestia Lab",
    category: "Skin",
    price: 36,
    rating: 4,
    reviews: 98,
    details: "Nourishing hydration cream packed with botanical blossoms.",
    image: "/products/celestia-lab-amber-glow-moisturizer.webp",
    longDescription: "Restore and locks in moisture with the Amber Glow Moisturizer. Formulated with rich botanical oils, squalane, and honey-orange blossom extracts, this luxurious face cream repairs dry skin and delivers a dewy, radiant finish that keeps your face refreshed all day long."
  },
  {
    id: 8,
    name: "Vitamin C+E Glow Cream",
    brand: "Dot & Key",
    category: "Skin",
    price: 18,
    rating: 5,
    reviews: 145,
    details: "Lightweight cream loaded with triple vitamin C.",
    image: "/products/dot-key-vitamin-ce-glow-cream.webp",
    longDescription: "Revitalize dull, tired skin with Dot & Key's Vitamin C+E Glow Cream. A lightweight gel-cream formula packed with Kakadu plum extract, triple vitamin C, and vitamin E. It fights free radicals, fades dark spots, and infuses your skin with long-lasting hydration."
  },
  {
    id: 9,
    name: "Watermelon SPF 50 Matte Gel",
    brand: "Dot & Key",
    category: "Skin",
    price: 20,
    rating: 5,
    reviews: 94,
    details: "Sunscreen gel with cooling watermelon extract.",
    image: "/products/dot-key-watermelon-spf-50-matte-gel.webp",
    longDescription: "Get ultimate sun protection and oil control with the Watermelon Matte Sunscreen Gel. Boasting SPF 50 PA+++ broad-spectrum filters, this lightweight water-gel formula is infused with fresh watermelon extracts and hyaluronic acid to hydrate the skin while leaving a dry, matte touch."
  },
  {
    id: 25,
    name: "CeraVe Hydrating Cleanser",
    brand: "CeraVe",
    category: "Skin",
    price: 15,
    rating: 5,
    reviews: 340,
    details: "Non-foaming face wash for dry skin with hyaluronic acid.",
    image: "/products/cerave-cerave-hydrating-cleanser.webp",
    longDescription: "Developed with dermatologists, CeraVe Hydrating Facial Cleanser is a gentle face wash containing three essential ceramides and hyaluronic acid. It cleanses, hydrates, and helps restore the protective skin barrier without stripping away vital moisture or leaving a tight feel."
  },
  {
    id: 26,
    name: "Ultra Light Daily UV Defense SPF 50",
    brand: "Kiehl's",
    category: "Skin",
    price: 42,
    rating: 4,
    reviews: 110,
    details: "Daily sun protection with pollution defense.",
    image: "/products/kiehls-ultra-light-daily-uv-defense-spf-50.webp",
    longDescription: "Protect your skin from harmful UVA/UVB rays and environmental pollutants. Kiehl's Ultra Light Daily UV Defense is a non-comedogenic, oil-free sunscreen that absorbs quickly and leaves a translucent matte finish. Infused with Baicalin to provide advanced cellular defense."
  },
  {
    id: 27,
    name: "Retinol Skin Renewing Serum",
    brand: "CeraVe",
    category: "Skin",
    price: 25,
    rating: 5,
    reviews: 195,
    details: "Gentle retinol serum for fine lines and skin barrier.",
    image: "/products/cerave-retinol-skin-renewing-serum.webp",
    longDescription: "Help reduce the appearance of fine lines, wrinkles, and post-acne marks while supporting your skin barrier. Formulated with encapsulated retinol, ceramides, and hyaluronic acid, this gentle yet effective serum continually refines and resurfaces skin texture over time."
  },

  // Hair
  {
    id: 10,
    name: "Keratin Smooth Shampoo",
    brand: "L'Oreal Paris",
    category: "Hair",
    price: 19,
    rating: 5,
    reviews: 85,
    details: "Nourishing shampoo to restore keratin levels.",
    image: "/products/loreal-paris-keratin-smooth-shampoo.webp",
    longDescription: "Restores hair's natural strength and smoothness. L'Oreal Paris Keratin Smooth Shampoo contains Micro-Keratin technology that fills in micro-irregularities along the hair fibers, straightening frizz and leaving hair silky smooth, shiny, and manageable for up to 72 hours."
  },
  {
    id: 11,
    name: "Argan Oil Hair Mask",
    brand: "Plum",
    category: "Hair",
    price: 25,
    rating: 4,
    reviews: 62,
    details: "Deep conditioning argan oil hair mask.",
    image: "/products/plum-argan-oil-hair-mask.webp",
    longDescription: "A rich, creamy deep-conditioning mask loaded with organic cold-pressed argan oil, shea butter, and plant proteins. Plum Argan Oil Hair Mask works deeply to repair heat-damaged, frizzy, and chemically-treated locks, transforming them into soft, lustrous, and strong tresses."
  },
  {
    id: 28,
    name: "Bond Maintenance Shampoo No.4",
    brand: "Olaplex",
    category: "Hair",
    price: 30,
    rating: 5,
    reviews: 410,
    details: "Highly moisturizing, reparative shampoo.",
    image: "/products/olaplex-bond-maintenance-shampoo-no4.webp",
    longDescription: "A highly concentrated, reparative shampoo that hydrates and rebuilds damaged hair bonds. Olaplex No. 4 protects and repairs broken bonds, split ends, and frizz by re-linking broken disulfide bonds. Safe for color-treated hair and proven to reduce breakage and strengthen all hair types."
  },
  {
    id: 29,
    name: "Bond Maintenance Conditioner No.5",
    brand: "Olaplex",
    category: "Hair",
    price: 30,
    rating: 5,
    reviews: 380,
    details: "Reparative conditioner that eliminates damage and frizz.",
    image: "/products/olaplex-bond-maintenance-conditioner-no5.webp",
    longDescription: "Complement your hair repair routine with Olaplex No. 5. A highly-moisturizing, reparative conditioner that eliminates frizz, split ends, and damage while protecting and rebuilding hair bonds. It leaves hair shiny, strong, and deeply nourished without weighing it down."
  },
  {
    id: 30,
    name: "Avocado Hair Mask",
    brand: "Plum",
    category: "Hair",
    price: 22,
    rating: 4,
    reviews: 85,
    details: "Deep conditioning mask for dry, damaged hair.",
    image: "/products/plum-avocado-hair-mask.webp",
    longDescription: "Give your dry, frizzy hair the ultimate hydration boost with Plum's Avocado Hair Mask. Packed with avocado oil, shea butter, and aloe extracts, this mask deep conditions dry locks, prevents breakage, and leaves hair bouncy, soft, and extremely shiny."
  },

  // Appliances
  {
    id: 12,
    name: "Salon Hair Dryer Pro",
    brand: "Philips",
    category: "Appliances",
    price: 55,
    rating: 5,
    reviews: 120,
    details: "Quick drying ionic hairdryer with diffuser.",
    image: "/products/philips-salon-hair-dryer-pro.webp",
    longDescription: "Philips Salon Hair Dryer Pro features a powerful AC motor that delivers up to 110km/h air speed for fast, professional drying results. Equipped with ionic conditioning, it releases millions of ions to eliminate static, smooth hair cuticles, and amplify shine. Includes a diffuser and concentrator nozzle."
  },
  {
    id: 13,
    name: "Ceramic Hair Straightener",
    brand: "Philips",
    category: "Appliances",
    price: 45,
    rating: 4,
    reviews: 94,
    details: "Ceramic plate straightener with digital temp screen.",
    image: "/products/philips-ceramic-hair-straightener.webp",
    longDescription: "Achieve smooth, sleek hair easily. With silk ceramic plates that glide smoothly through your hair, this Philips straightener distributes heat evenly to prevent hair damage. Features a fast heat-up time of 30 seconds and a digital temperature display ranging up to 230°C."
  },
  {
    id: 31,
    name: "Pro Hair Waver & Curler",
    brand: "Philips",
    category: "Appliances",
    price: 68,
    rating: 5,
    reviews: 92,
    details: "Three-barrel curling iron for beachy waves.",
    image: "/products/philips-pro-hair-waver-curler.webp",
    longDescription: "Create beautiful mermaid-style beachy waves easily. The Philips Pro Hair Waver features a triple-barrel design coated in protective ceramic tourmaline. Fast heating with adjustable temperature settings makes styling safe for all hair structures and locks in waves that last all day."
  },
  {
    id: 32,
    name: "Cordless Hair Straightener",
    brand: "Philips",
    category: "Appliances",
    price: 95,
    rating: 4,
    reviews: 45,
    details: "On-the-go rechargeable styling plates.",
    image: "/products/philips-cordless-hair-straightener.webp",
    longDescription: "Compact and powerful, this cordless rechargeable straightener is your ultimate travel styling companion. Offering up to 30 minutes of cordless styling with ceramic-coated plates, it heats up rapidly and includes a heat-resistant travel pouch for quick touch-ups anywhere."
  },
  {
    id: 33,
    name: "Sonic Facial Cleansing Brush",
    brand: "Bloom Co",
    category: "Appliances",
    price: 35,
    rating: 5,
    reviews: 76,
    details: "Waterproof silicone facial massager.",
    image: "/products/bloom-co-sonic-facial-cleansing-brush.webp",
    longDescription: "Take your facial cleansing routine to the next level. This waterproof sonic cleansing brush features ultra-hygienic silicone bristles that vibrate up to 8,000 times per minute. It deep cleanses pores, removes oil, dirt, and cosmetics residue, and leaves skin smooth and primed for skincare."
  },

  // Bath & Body
  {
    id: 14,
    name: "Citrus Infused Body Wash",
    brand: "Celestia Lab",
    category: "Bath & Body",
    price: 28,
    rating: 5,
    reviews: 82,
    details: "Invigorating shower gel with sweet mandarin.",
    image: "/products/celestia-lab-citrus-infused-body-wash.webp",
    longDescription: "Energize your senses and refresh your body. This citrus-infused body wash blends Mandarin, Sweet Orange, and Lime essential oils with nourishing vitamin E. Dries gently without stripping moisture, leaving your skin soft, supple, and delicately scented with a bright citrus fragrance."
  },
  {
    id: 15,
    name: "Cocoa Butter Body Lotion",
    brand: "Dove",
    category: "Bath & Body",
    price: 12,
    rating: 4,
    reviews: 154,
    details: "Rich cocoa butter lotion for dry skin repair.",
    image: "/products/dove-cocoa-butter-body-lotion.webp",
    longDescription: "Deeply nourish and repair dry, flaky skin. Dove Cocoa Butter Body Lotion combines rich cocoa butter and skin-natural nutrients to deliver 24-hour hydration. Absorbs quickly without a greasy residue, restoring skin elasticity and leaving a soft, natural radiance."
  },
  {
    id: 34,
    name: "Vanilla Cream Body Butter",
    brand: "Dove",
    category: "Bath & Body",
    price: 14,
    rating: 5,
    reviews: 210,
    details: "Deeply moisturizing whipped body butter.",
    image: "/products/dove-vanilla-cream-body-butter.webp",
    longDescription: "Pamper your body with the whipped, luxurious texture of Vanilla Cream Body Butter. Formulated with Dove's unique moisturizing serum and sweet vanilla bean extracts, this rich butter melts into dry skin, leaving it incredibly soft and smelling delicious."
  },
  {
    id: 35,
    name: "Eucalyptus Bath Salts",
    brand: "Celestia Lab",
    category: "Bath & Body",
    price: 18,
    rating: 4,
    reviews: 64,
    details: "Relaxing muscle soak with pure eucalyptus oils.",
    image: "/products/celestia-lab-eucalyptus-bath-salts.webp",
    longDescription: "Soothe tired muscles and relax your mind. Formulated with pure Epsom salt and organic eucalyptus essential oils, these bath salts detoxify the skin, relieve muscular tension, and create a refreshing spa-like aromatherapy experience in your own tub."
  },
  {
    id: 36,
    name: "Deep Nourishing Body Wash",
    brand: "Dove",
    category: "Bath & Body",
    price: 11,
    rating: 5,
    reviews: 430,
    details: "Classic moisturizing shower gel for soft skin.",
    image: "/products/dove-deep-nourishing-body-wash.webp",
    longDescription: "The classic choice for soft, healthy skin. Dove Deeply Nourishing Body Wash features an ultra-mild cleansing formula loaded with NutriumMoisture technology. It delivers natural nutrients deep into the skin's surface layers, keeping skin hydrated and smooth after just one shower."
  },

  // Natural
  {
    id: 16,
    name: "Tea Tree Face Wash",
    brand: "Biotique",
    category: "Natural",
    price: 10,
    rating: 5,
    reviews: 310,
    details: "Anti-acne clearing tea tree organic wash.",
    image: "/products/biotique-tea-tree-face-wash.webp",
    longDescription: "Formulated with 100% natural and organic botanicals. Biotique Tea Tree Face Wash cleanses deep inside pores, removes excess oil, and targets acne-causing bacteria. Infused with tea tree oil, neem, and turmeric extracts to soothe redness and promote clear skin."
  },
  {
    id: 17,
    name: "Organic Coconut Hair Oil",
    brand: "Biotique",
    category: "Natural",
    price: 12,
    rating: 4,
    reviews: 142,
    details: "Cold-pressed pure organic coconut hair oil.",
    image: "/products/biotique-organic-coconut-hair-oil.webp",
    longDescription: "Nourish your scalp and strengthen hair follicles. This 100% natural, cold-pressed coconut oil is rich in vitamins and essential fatty acids. It penetrates deeply to restore dry, damaged hair shafts, prevent dandruff, and add a beautiful healthy shine to your locks."
  },
  {
    id: 37,
    name: "Neem Purifying Face Wash",
    brand: "Biotique",
    category: "Natural",
    price: 9,
    rating: 4,
    reviews: 250,
    details: "Fresh neem extract cooling antibacterial gel.",
    image: "/products/biotique-neem-purifying-face-wash.webp",
    longDescription: "Cleanse your skin daily with the antibacterial benefits of Neem. This soap-free, cooling gel formula clears impurities, controls oil secretion without drying, and prevents acne breakouts. Made with pure neem leaf extracts and chamomile for soft, calm skin."
  },
  {
    id: 38,
    name: "Almond & Honey Body Soap",
    brand: "Biotique",
    category: "Natural",
    price: 8,
    rating: 5,
    reviews: 120,
    details: "Nourishing oil-rich natural organic soap.",
    image: "/products/biotique-almond-honey-body-soap.webp",
    longDescription: "Indulge in a luxurious, nourishing bath. This organic bar soap is enriched with sweet almond oil, coconut oil, and wild honey. It hydrates dry skin, gently exfoliates dead skin cells, and wraps your body in a comforting, sweet natural fragrance."
  },
  {
    id: 39,
    name: "Aloe Vera Gel Mist",
    brand: "Biotique",
    category: "Natural",
    price: 11,
    rating: 4,
    reviews: 85,
    details: "Soothes skin irritations, hydrates instantly.",
    image: "/products/biotique-aloe-vera-gel-mist.webp",
    longDescription: "Calm and rehydrate your face instantly. Packed with 100% pure aloe vera extract and cooling cucumber juice, this soothing face mist calms sunburns, reduces redness, and locks in moisture, leaving a fresh, dewy glow anytime throughout the day."
  },

  // Fragrance
  {
    id: 18,
    name: "Sandalwood & Mandarin Mist",
    brand: "Celestia Lab",
    category: "Fragrance",
    price: 65,
    rating: 5,
    reviews: 112,
    details: "Warm fragrance spray with bright citrus accents.",
    image: "/products/celestia-lab-sandalwood-mandarin-mist.webp",
    longDescription: "Wrap yourself in a sophisticated fragrance. The Sandalwood & Mandarin Mist blends the earthy, woody notes of warm Mysore Sandalwood with the bright, sparkling top notes of Sweet Mandarin and Citrus. Long-lasting, alluring, and perfect for both day and night wear."
  },
  {
    id: 19,
    name: "Vanilla Amber Perfume",
    brand: "Victoria's Secret",
    category: "Fragrance",
    price: 75,
    rating: 5,
    reviews: 204,
    details: "Luxury vanilla amber perfume drops.",
    image: "/products/victorias-secret-vanilla-amber-perfume.webp",
    longDescription: "A seductive, warm, and sweet fragrance. Victoria's Secret Vanilla Amber is a luxurious perfume featuring rich amber notes combined with creamy vanilla orchids and soft wood undertones. Delivers an elegant, intimate fragrance trail that lingers beautifully."
  },
  {
    id: 40,
    name: "Rose de Grasse Eau de Parfum",
    brand: "Wanderlust",
    category: "Fragrance",
    price: 85,
    rating: 5,
    reviews: 150,
    details: "Classic velvet rose petals luxury perfume.",
    image: "/products/wanderlust-rose-de-grasse-eau-de-parfum.webp",
    longDescription: "Capturing the essence of hand-picked roses from Grasse, France. This luxury fragrance layers velvet Bulgarian Rose petals with a heart of Turkish Rose and base notes of warm musk and cedarwood, creating a timeless, floral, and deeply romantic signature scent."
  },
  {
    id: 41,
    name: "Bergamot & Sea Salt Cologne",
    brand: "Celestia Lab",
    category: "Fragrance",
    price: 60,
    rating: 4,
    reviews: 88,
    details: "Fresh ocean air combined with citrus undertones.",
    image: "/products/celestia-lab-bergamot-sea-salt-cologne.webp",
    longDescription: "Escape to the coast with a refreshing scent. Bergamot & Sea Salt Cologne combines fresh, salty sea breeze accords with bright Italian bergamot, sage, and driftwood base notes. Clean, aquatic, and invigorating, it is the perfect daily fragrance."
  },
  {
    id: 42,
    name: "Midnight Jasmine Mist",
    brand: "Victoria's Secret",
    category: "Fragrance",
    price: 22,
    rating: 5,
    reviews: 320,
    details: "Alluring jasmine and dark amber body spray.",
    image: "/products/victorias-secret-midnight-jasmine-mist.webp",
    longDescription: "An alluring, sensual floral fragrance mist. Midnight Jasmine features rich jasmine blooms combined with sweet honeysuckle, white musk, and a warm base of dark amber. Spray it over your body for a delicate, long-lasting touch of evening luxury."
  },

  // Accessories
  {
    id: 20,
    name: "Rose Quartz Facial Roller",
    brand: "Bloom Co",
    category: "Accessories",
    price: 1,
    rating: 4,
    reviews: 23,
    details: "Authentic rose quartz massaging skin roller.",
    image: "/products/bloom-co-rose-quartz-facial-roller.webp",
    longDescription: "Made from 100% natural, hand-carved rose quartz stone. This dual-ended facial roller helps improve blood circulation, stimulate lymphatic drainage, reduce morning facial puffiness, and enhance the absorption of your favorite skincare serums and moisturizers."
  },
  {
    id: 21,
    name: "Precision Blender Sponge",
    brand: "M.A.C",
    category: "Accessories",
    price: 8,
    rating: 5,
    reviews: 172,
    details: "Seamless blending cosmetics makeup sponge.",
    image: "/products/mac-precision-blender-sponge.webp",
    longDescription: "Achieve a flawless foundation application. The M.A.C Precision Blender Sponge features a super-soft, latex-free foam structure that expands when wet. Its teardrop shape is perfect for sweeping across large areas and blending around delicate nose and eye creases."
  },
  {
    id: 43,
    name: "Makeup Brush Set (12 pcs)",
    brand: "M.A.C",
    category: "Accessories",
    price: 45,
    rating: 5,
    reviews: 190,
    details: "Professional face and eye makeup brush kit.",
    image: "/products/mac-makeup-brush-set-12-pcs.webp",
    longDescription: "Upgrade your cosmetics application with MAC's 12-piece Professional Brush Kit. Features premium synthetic fibers that mimic natural hair. The set includes foundation, powder, contour, eyeshadow, blending, and eyeliner brushes, all housed in a chic travel pouch."
  },
  {
    id: 44,
    name: "Satin Sleep Eye Mask",
    brand: "Bloom Co",
    category: "Accessories",
    price: 12,
    rating: 4,
    reviews: 65,
    details: "Soft sleep mask to prevent friction and wrinkles.",
    image: "/products/bloom-co-satin-sleep-eye-mask.webp",
    longDescription: "Enjoy uninterrupted, beauty-rest sleep. Made from premium quality, friction-free satin material, this sleep mask block out light completely. Unlike cotton, satin prevents skin friction, preserves hydration, and stops sleep wrinkles from forming around the eyes."
  },
  {
    id: 45,
    name: "Jade Gua Sha Scraping Tool",
    brand: "Bloom Co",
    category: "Accessories",
    price: 15,
    rating: 5,
    reviews: 215,
    details: "Facial contouring and lymphatic drainage tool.",
    image: "/products/bloom-co-jade-gua-sha-scraping-tool.webp",
    longDescription: "An ancient Chinese wellness tool crafted from 100% natural Jade stone. Used to perform Gua Sha facial massages, this tool contours jawlines, lifts cheekbones, relieves muscle tension, and promotes lymphatic drainage to flush toxins and reduce puffiness."
  },

  // Newly Added Home Best Sellers (To Reconcile Duplicates)
  {
    id: 46,
    name: "Desert Rose Lip Oil",
    brand: "Celestia Lab",
    category: "Makeup",
    price: 22,
    rating: 5,
    reviews: 156,
    details: "Sheer tint oil infused with natural seed oils for high shine.",
    image: "/products/celestia-lab-desert-rose-lip-oil.webp",
    longDescription: "Drench your lips in sheer, high-shine color. Infused with organic rosehip seed oil, jojoba seed oil, and Vitamin E, Desert Rose Lip Oil delivers the mirror-like shine of a lip gloss with the comfort and hydration of an intensive lip treatment. Non-sticky and deeply nourishing."
  },
  {
    id: 47,
    name: "Gilded Honey Eyeshadow",
    brand: "Celestia Lab",
    category: "Makeup",
    price: 24,
    rating: 4,
    reviews: 43,
    details: "Shimmering loose pigment eyeshadow for a warm metallic finish.",
    image: "/products/celestia-lab-gilded-honey-eyeshadow.webp",
    longDescription: "A highly pigmented, loose powder eyeshadow that glides on smoothly to create a warm, metallic finish. Made with micro-fine pearls, Gilded Honey captures and reflects light, creating a sparkling, high-impact foil effect on your eyelids."
  },
  {
    id: 48,
    name: "Coral glow blush stick",
    brand: "Celestia Lab",
    category: "Makeup",
    price: 32,
    rating: 5,
    reviews: 74,
    details: "Multi-use cream color stick for cheeks and lips with a dewy finish.",
    image: "/products/celestia-lab-httpsoceanevtexassetscomarquivosids217002ap2001393co116f_blush_em_bastao_cintilante_coral_glow_blush_stick_flirt_oceane_edition_7g_1jpgv638966469804630000.webp",
    longDescription: "A versatile cream-to-powder stick that adds a healthy, sun-kissed flush of coral to cheeks, lips, and eyelids. Formulated with hydrating shea butter and coconut oil, it melts smoothly into the skin for a seamless, buildable dewy finish."
  },
  {
    id: 49,
    name: "Vitamin C Brightening Mask",
    brand: "Celestia Lab",
    category: "Skin",
    price: 42,
    rating: 4,
    reviews: 89,
    details: "Clarifying face mask designed to restore clarity and even skin tones.",
    image: "/products/celestia-lab-vitamin-c-brightening-mask.webp",
    longDescription: "Revitalize tired, dull skin. This nourishing mud mask is infused with active Vitamin C extracts, white kaolin clay, and orange blossom essential oils. It gently draws out deep pores impurities, brightens dark patches, and restores an even, radiant complexion."
  },
  {
    id: 501,
    name: "Vitamin C Glow Moisturizer",
    brand: "Dot & Key",
    category: "Skin",
    price: 14,
    rating: 5,
    reviews: 145,
    details: "Lightweight cream loaded with triple vitamin C and hydration lock.",
    image: "/products/dot-key-vitamin-c-glow-moisturizer.webp"
  },
  {
    id: 502,
    name: "Vinyl Ink Liquid Lipstick",
    brand: "Maybelline New York",
    category: "Makeup",
    price: 11,
    rating: 5,
    reviews: 340,
    details: "Super stay vinyl ink liquid lipstick for 16hr wear.",
    image: "/products/maybelline-new-york-vinyl-ink-liquid-lipstick.webp"
  },
  {
    id: 503,
    name: "No. 3 Hair Perfector Mask",
    brand: "Olaplex",
    category: "Hair",
    price: 24,
    rating: 5,
    reviews: 412,
    details: "Weekly at-home hair repairing treatment.",
    image: "/products/olaplex-no-3-hair-perfector-mask.webp"
  },
  {
    id: 504,
    name: "Neem Purifying Face Wash",
    brand: "Biotique",
    category: "Natural",
    price: 8,
    rating: 4,
    reviews: 210,
    details: "Fresh neem extract cooling antibacterial gel.",
    image: "/products/biotique-neem-purifying-face-wash.webp"
  },
  {
    id: 505,
    name: "Advanced Génifique Serum",
    brand: "Lancôme",
    category: "Skin",
    price: 68,
    rating: 5,
    reviews: 198,
    details: "Anti-aging facial serum for radiance and skin barrier repair.",
    image: "/products/lancme-advanced-gnifique-serum.webp"
  },
  {
    id: 506,
    name: "Double Wear Foundation",
    brand: "Estée Lauder",
    category: "Makeup",
    price: 39,
    rating: 5,
    reviews: 320,
    details: "24-hour wear liquid foundation with buildable coverage.",
    image: "/products/este-lauder-double-wear-foundation.webp"
  },
  {
    id: 507,
    name: "Hydrating Facial Cleanser",
    brand: "CeraVe",
    category: "Skin",
    price: 12,
    rating: 5,
    reviews: 540,
    details: "Non-foaming face wash with hyaluronic acid and ceramides.",
    image: "/products/cerave-hydrating-facial-cleanser.webp"
  },
  {
    id: 508,
    name: "Moisture Surge 100H Gel",
    brand: "Clinique",
    category: "Skin",
    price: 34,
    rating: 4,
    reviews: 180,
    details: "Oil-free gel-cream moisturizer with aloe bio-ferment.",
    image: "/products/clinique-moisture-surge-100h-gel.webp"
  },
  {
    id: 509,
    name: "Matte Lipstick - Ruby Woo",
    brand: "M.A.C Cosmetics",
    category: "Makeup",
    price: 18,
    rating: 5,
    reviews: 460,
    details: "Iconic matte lipstick in vivid blue-red shade.",
    image: "/products/mac-cosmetics-matte-lipstick-ruby-woo.webp"
  },
  {
    id: 510,
    name: "Pure Seduction Body Mist",
    brand: "Victoria's Secret",
    category: "Fragrance",
    price: 15,
    rating: 5,
    reviews: 290,
    details: "Alluring body mist spray featuring red plum and freesia.",
    image: "/products/victorias-secret-pure-seduction-body-mist.webp"
  },
  {
    id: 511,
    name: "Hyaluronic Acid Face Serum",
    brand: "L'Oréal Paris",
    category: "Skin",
    price: 20,
    rating: 4,
    reviews: 175,
    details: "1.5% pure hyaluronic acid serum for intensive hydration.",
    image: "/products/loral-paris-hyaluronic-acid-face-serum.webp"
  },
  {
    id: 512,
    name: "Cocoa Butter Body Lotion",
    brand: "Nivea",
    category: "Bath & Body",
    price: 7,
    rating: 5,
    reviews: 380,
    details: "Deep moisture body lotion with cocoa butter and serum.",
    image: "/products/nivea-cocoa-butter-body-lotion.webp"
  },
  {
    id: 513,
    name: "Gentle Skin Cleanser Gel",
    brand: "Cetaphil",
    category: "Skin",
    price: 11,
    rating: 5,
    reviews: 610,
    details: "Hydrating face wash for dry to normal sensitive skin.",
    image: "/products/cetaphil-gentle-skin-cleanser-gel.webp"
  },
  {
    id: 514,
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    category: "Skin",
    price: 6,
    rating: 5,
    reviews: 890,
    details: "High-strength vitamin and mineral blemish formula.",
    image: "/products/the-ordinary-niacinamide-10-zinc-1.webp"
  },
  {
    id: 515,
    name: "Matte Finish Setting Spray",
    brand: "NYX Professional Makeup",
    category: "Makeup",
    price: 8,
    rating: 5,
    reviews: 420,
    details: "Lightweight setting spray for a matte, shine-free finish.",
    image: "/products/nyx-professional-makeup-matte-finish-setting-spray.webp"
  },
  {
    id: 516,
    name: "Liquid Matte Lipstick Lip",
    brand: "Huda Beauty",
    category: "Makeup",
    price: 18,
    rating: 5,
    reviews: 215,
    details: "Weightless transfer-proof liquid matte lipstick.",
    image: "/products/huda-beauty-liquid-matte-lipstick-lip.webp"
  },
  {
    id: 517,
    name: "Lip Sleeping Recovery Mask",
    brand: "Laneige",
    category: "Makeup",
    price: 17,
    rating: 5,
    reviews: 680,
    details: "Overnight lip mask that delivers intensive moisture.",
    image: "/products/laneige-lip-sleeping-recovery-mask.webp"
  },
  {
    id: 518,
    name: "Green Tea Seed Hydration Serum",
    brand: "Innisfree",
    category: "Skin",
    price: 21,
    rating: 5,
    reviews: 340,
    details: "Moisture-barrier strengthening serum with green tea seed oil.",
    image: "/products/innisfree-green-tea-seed-hydration-serum.webp"
  },
  {
    id: 519,
    name: "Pure Himalayan Rose Water",
    brand: "Kama Ayurveda",
    category: "Skin",
    price: 22,
    rating: 4,
    reviews: 115,
    details: "Pure steam-distilled rose water skin toner and mist.",
    image: "/products/kama-ayurveda-pure-himalayan-rose-water.webp"
  },
  {
    id: 520,
    name: "Green Tea Pore Cleanser Wash",
    brand: "Plum",
    category: "Skin",
    price: 9,
    rating: 4,
    reviews: 195,
    details: "Soap-free foaming face wash with green tea extracts.",
    image: "/products/plum-green-tea-pore-cleanser-wash.webp"
  },
  {
    id: 521,
    name: "Luxury Silk Sugar Soap",
    brand: "Forest Essentials",
    category: "Bath & Body",
    price: 14,
    rating: 5,
    reviews: 92,
    details: "Handmade silk soap infused with natural sugar cane juice.",
    image: "/products/forest-essentials-luxury-silk-sugar-soap.webp"
  },
  {
    id: 522,
    name: "Hydro Boost Hydrating Water Gel",
    brand: "Neutrogena",
    category: "Skin",
    price: 16,
    rating: 5,
    reviews: 720,
    details: "Hyaluronic acid gel moisturizer for dry skin.",
    image: "/products/neutrogena-hydro-boost-hydrating-water-gel.webp"
  },
  {
    id: 523,
    name: "Matte As Hell Crayon Lip",
    brand: "Sugar Cosmetics",
    category: "Makeup",
    price: 12,
    rating: 4,
    reviews: 240,
    details: "High-pigment matte lipstick crayon with silky texture.",
    image: "/products/sugar-cosmetics-matte-as-hell-crayon-lip.webp"
  },
  {
    id: 524,
    name: "Salicylic Acid Face Serum",
    brand: "Pilgrim",
    category: "Skin",
    price: 10,
    rating: 4,
    reviews: 155,
    details: "2% Salicylic acid skin clarifying serum.",
    image: "/products/pilgrim-salicylic-acid-face-serum.webp"
  },
  {
    id: 525,
    name: "Onion Hair Fall Control Shampoo",
    brand: "Mamaearth",
    category: "Hair",
    price: 9,
    rating: 4,
    reviews: 310,
    details: "Onion hair shampoo with plant keratin for hair strength.",
    image: "/products/mamaearth-onion-hair-fall-control-shampoo.webp"
  },
  {
    id: 526,
    name: "Magneteyes Eyeliner Kajal",
    brand: "Faces Canada",
    category: "Makeup",
    price: 5,
    rating: 5,
    reviews: 185,
    details: "2-in-1 intense black eyeliner and smooth kajal pencil.",
    image: "/products/faces-canada-magneteyes-eyeliner-kajal.webp"
  },
  {
    id: 527,
    name: "Velvet Matte Moisture Lipstick",
    brand: "Colorbar",
    category: "Makeup",
    price: 10,
    rating: 4,
    reviews: 140,
    details: "Moisturizing lipstick with velvet matte rich color.",
    image: "/products/colorbar-velvet-matte-moisture-lipstick.webp"
  },
  {
    id: 528,
    name: "Super Lustrous Lipstick Gloss",
    brand: "Revlon",
    category: "Makeup",
    price: 8,
    rating: 5,
    reviews: 295,
    details: "High-impact color lipstick with moisturizing shine.",
    image: "https://revlon.co.in/cdn/shop/files/8902656124616_1_1080x.jpg?v=1725258820"
  }
];
