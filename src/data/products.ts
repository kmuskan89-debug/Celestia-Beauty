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
    image: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//m/a/maybelline-superstay-vinil-ink-liquid-lipstick-55-royal.jpg",
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
    image: "https://m.media-amazon.com/images/I/71frVkTEtHL.jpg",
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
    image: "https://m.media-amazon.com/images/I/61yZJB6YxCL.jpg",
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
    image: "https://images-static.nykaa.com/media/catalog/product/d/5/d5bafbb8904330901506_1.jpg?tr=w-500",
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
    image: "https://m.media-amazon.com/images/I/71QsfD+b28L._AC_UF1000,1000_QL80_.jpg",
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
    image: "https://i5.walmartimages.com/seo/Maybelline-Color-Sensational-Creamy-Matte-Lipstick_4d180912-bf1d-42cc-b41f-3ba42242a748.ff9876cf24f7cf36bc3d8054a00f3ea3.jpeg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcp-Fvdei1EEdpvHKUTBEzzfsWbcqX0al4SQ&s",
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
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzuFdjqhANKpUuocONfI4IqRpSD8carzEgvmNDDlGRsNyBVQTA9x-U9esPSTn_Ba0DCPfL6lRmLBxWoVK6Dgxis0pXPRYDEYET9NktXuQUy6krQmuVW0WynDpsUn4NpVu5Jg&usqp=CAc",
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
    image: "https://absolutskincare.com/cdn/shop/files/Radiance_Serum_transparent_background.png?v=1750873369",
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
    image: "https://www.gosupps.com/media/catalog/product/6/1/61Ayr0wq8rL.jpg",
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
    image: "https://m.media-amazon.com/images/I/61mRtf8GSPL._AC_UF1000,1000_QL80_.jpg",
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
    image: "https://m.media-amazon.com/images/I/61-k3cC0kzL._AC_UF1000,1000_QL80_.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7ZGl8GU5ZpnKN5tokQSf9kz8IO4zRnD_Og&s",
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
    image: "https://cdn.basler-beauty.de/out/pictures/generated/product/1/980_980_100/2614499-Kiehl-s-Ultra-Light-Daily-UV-Defense-SPF-50-30-ml.95bbd2ee.jpg",
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
    image: "https://optiphar.com/media/22/07/88/1759411611/CeraVe%20Skin%20Renewing%20Retinol%20Serum%2030%20ml%20-%2010.png?ts=1759411616",
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
    image: "https://threebs.co/cdn/shop/files/loreal-paris-elseve-keratin-smooth-72h-smoothing-shampoo-620ml-IMG1-20250115_3899266c-f8c2-4b91-969c-7cca57586dce_1200x1200.jpg?v=1736930804",
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
    image: "https://m.media-amazon.com/images/I/51evllh9IAL.jpg",
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
    image: "https://m.media-amazon.com/images/I/611M60Lp3LL._AC_UF1000,1000_QL80_.jpg",
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
    image: "https://m.media-amazon.com/images/I/61OLMvoFOHL._AC_UF1000,1000_QL80_.jpg",
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
    image: "https://plumgoodness.com/cdn/shop/files/AvocadoMaskListing11.webp?v=1777573080&width=1001",
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
    image: "https://m.media-amazon.com/images/I/61+oSepuRTL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_ZJPHNwYW4gZm9yZWdyb3VuZD0iIzBGMTExMSIgZm9udD0iQW1hem9uRW1iZXIgNjYiPjQuMzwvc3Bhbj4=,60,875,420,420,0,0_PIRIOFOURANDHALF-medium-V2,TopLeft,190,885_ZJPHNwYW4gZm9yZWdyb3VuZD0iIzU2NTk1OSIgZm9udD0iQW1hem9uRW1iZXIgNjYiPig3NSk8L3NwYW4+,650,875,420,420,0,0_QL100_.jpg",
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
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT0tKlbV0CqRh2jz1Q9TaOy4KKpk2MprxH1FhPMUST2hrV0KeJJPFkycgKIEVuihRhLmoqRNxTjdYMtswxaSzYZ0B3kldrvsjerm9XNigjZpnxXB1BsnVoSJRqq7-V7mDvFRQ&usqp=CAc",
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
    image: "https://m.media-amazon.com/images/I/41MwtpRuIcL._AC_UF1000,1000_QL80_.jpg",
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
    image: "https://m.media-amazon.com/images/I/613YQhPkFuL._AC_UF1000,1000_QL80_.jpg",
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
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSK3qbGl1JcsbB4vcHOWydYAnqI5iNLPJ5DWe8tpQBMxfUYKp3ccZLcIsfYs9qUIJCDYB8i50jPZcclcDi8qncxjgpeq_G86quXJnU6i0jGKQGpzsvpIjoDxco",
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
    image: "https://smytten-image.gumlet.io/discover_product/1764073133_DSTD0116BB13_1.jpg",
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
    image: "https://www.boozyshop.nl/cdn/shop/files/dove-nourishing-secrets-restoring-coconut-body-lotion-250-ml-69520220684671.png",
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
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQot-FAAlUtFJeJ-NIz8E1vVN0OPWXGvwHmKiUphy7jYxsaeXbGwp9XZ-ce0op7uH7frhpyi0gHMXWhzUtGbGzj3f4geqpquRUs1v_9t4prPrBSLBhjY_3P",
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
    image: "https://www.thebodybar.ca/cdn/shop/products/Eucalyptus_Salts_800x800_365ad552-ecf5-4cd4-8ed7-3db2094b7615.jpg?v=1648666482",
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
    image: "https://peronabeauty.com/wp-content/uploads/2024/02/Dove-Body-Wash-Deeply-Nourishing-750ml.jpg",
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
    image: "https://www.biotique.com/cdn/shop/files/tea-tree-skin-clearing-facial-wash-ap-1.png?v=1675250862",
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
    image: "https://d1iuscsovtvj4y.cloudfront.net/products/Hair_Science_Coconut_Hair_Oil_01.jpg",
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
    image: "https://m.media-amazon.com/images/I/51Odp5oERkL.jpg",
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
    image: "https://m.media-amazon.com/images/I/615hJco5wML._AC_UF1000,1000_QL80_.jpg",
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
    image: "https://i5.walmartimages.com/asr/74058b4a-d242-473e-a811-9f4d430bbb9f.57bf71e1fff902e045c7e46c20de109f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4l-HA9pxUkMf2UxUC2qkfewN3a8UIy3y4MA&s",
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
    image: "https://www.victoriassecret.com.au/dw/image/v2/BLPL_PRD/on/demandware.static/-/Sites-beauty-master-catalog/default/dw3c0c7a31/large/112283035118_OM_F.jpg?sw=1500&sh=1500&sm=fit",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsotufwoaTFNu3PC_rVgEVGWU0P4kTjFJVBg&s",
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
    image: "https://fimgs.net/mdimg/perfume/o.134750.jpg",
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
    image: "https://cdn.store-assets.com/s/139218/i/9167588.jpeg?width=1024",
    longDescription: "An alluring, sensual floral fragrance mist. Midnight Jasmine features rich jasmine blooms combined with sweet honeysuckle, white musk, and a warm base of dark amber. Spray it over your body for a delicate, long-lasting touch of evening luxury."
  },

  // Accessories
  {
    id: 20,
    name: "Rose Quartz Facial Roller",
    brand: "Bloom Co",
    category: "Accessories",
    price: 22,
    rating: 4,
    reviews: 88,
    details: "Authentic rose quartz massaging skin roller.",
    image: "https://caresmith.com/cdn/shop/files/1_c9a62d30-88bf-4814-89b5-c12f2296f355.jpg?v=1690436441",
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
    image: "https://sdcdn.io/mc/mac_sku_MWL601_1x1_0.png?height=700px&width=700px",
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
    image: "https://m.media-amazon.com/images/I/61N057v2PBL._AC_UF894,1000_QL80_.jpg",
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
    image: "https://bloomandbliss.com.co/cdn/shop/files/9.png?v=1731660433",
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
    image: "https://m.media-amazon.com/images/I/61FHX6KC9EL.jpg",
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
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTq2lwLCiy376nJzNqAzEh1jyFLQtwvVPd5iOYjet4tEcpz5CqayeLpoXgVrntZyB54SbwpH4wDkt-FpLb0Xlsaxh7kUZDyDOFjNQWl09yNU465oo27eqAg0A",
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
    image: "https://smytten-image.gumlet.io/discover_product/1660124803_GILDEDHONEY_1.jpg?w=360",
    longDescription: "A highly pigmented, loose powder eyeshadow that glides on smoothly to create a warm, metallic finish. Made with micro-fine pearls, Gilded Honey captures and reflects light, creating a sparkling, high-impact foil effect on your eyelids."
  },
  {
    id: 48,
    name: "Coral Glow Blush Stick",
    brand: "Celestia Lab",
    category: "Makeup",
    price: 32,
    rating: 5,
    reviews: 74,
    details: "Multi-use cream color stick for cheeks and lips with a dewy finish.",
    image: "https://smytten-image.gumlet.io/discover_product/1688194488_CORALGLOW_1.jpg?w=360",
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
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdlBrU-Cltr9QPx5dgt8OgiebQsNbe0pWaaeemjtgj0QyISHwhuf3b_CYd7IQFyh4fRhg_RngpVZhrRIjTITUngQGk2FASUdVluijvMPRoKkcJnfUMNLHO1UsnuIgR3aoX&usqp=CAc",
    longDescription: "Revitalize tired, dull skin. This nourishing mud mask is infused with active Vitamin C extracts, white kaolin clay, and orange blossom essential oils. It gently draws out deep pores impurities, brightens dark patches, and restores an even, radiant complexion."
  }
];
