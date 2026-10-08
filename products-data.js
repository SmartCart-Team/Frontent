// Shared product catalog for SmartCart.
// Each product's `id` matches the `data-product-id` used on product cards
// and the `?id=` query param read by product.html.
const PRODUCTS = [
  {
    id: 1,
    name: "Aura Pro Noise Cancelling Wireless Headphones",
    shortName: "Aura Pro Wireless ANC",
    category: "Audio",
    price: 249.99,
    originalPrice: 299.99,
    discount: "20% OFF",
    rating: 4.5,
    reviews: 128,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVByiGLcmOHJ7GNtBigvu4IiLCpl_eK0snMOQ0-vmhhHi8t4_6djJwC2IpZFMYQ59w-iGik-HnSkoMFqssjtUy3fq4fN8yHDlhkvvsb5WXPYVgP7aao8i4_jIVaUhCR4kpKTZI5z6Mfj32WCOZnSeZOs4FNoLoRUt5VqPEreAJpiVoUqJLpATpVPEK0ik-8JWq6kUJ8_C3t5vRt4spaGel_T-Ht7cpX3vhl9CB62DYZfrtTrwm_ls4zw",
    badge: "AI Recommended",
    description: [
      "Experience audio in its purest form with the Aura Pro Wireless ANC headphones. Engineered with custom 50mm beryllium drivers, these headphones deliver a breathtakingly wide soundstage with crystalline highs and deep, resonant bass.",
      "The industry-leading adaptive noise cancellation continuously monitors your environment, adjusting in real-time to silence distractions whether you're in a bustling office or a loud airplane cabin. When you need to tune back into the world, Transparency Mode lets ambient sound through naturally."
    ],
    specs: [
      ["Drivers", "50mm Beryllium"],
      ["Battery Life", "Up to 40 hours"],
      ["Bluetooth", "Version 5.3"],
      ["Weight", "285 grams"],
      ["Charging", "USB-C Fast Charge"]
    ]
  },
  {
    id: 2,
    name: "Chrono Smartwatch Series X with Leather Band",
    shortName: "Chrono Smartwatch Series X",
    category: "Wearables",
    price: 189.00,
    originalPrice: null,
    discount: null,
    rating: 4.0,
    reviews: 84,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbDzKy4l5DiVsKJhU_khtSmcIFbvRrQ7a9ZxrzOSNjcZsq_LYvvqHs1N_kyy3DZ_NQkK1ESGFixWIbbEAP332aDB9zU7Onf5HhcIwXmEPLSWfWVCIltVR3tsId2oF5ESQe3nS2g6Pxz40jebBn5v-d28alzNKSDA1fxJoobqgXlSSiq2R-A-Sz4sUlRS0d_rn9XQqUxI5WeBM262zfBsdGGJdDU_ZGY13u_HXsmQMWh1DQK2Qqiq0uGw",
    badge: null,
    description: [
      "Stay connected and track every step with the Chrono Smartwatch Series X. A vibrant always-on display and genuine leather band combine rugged fitness tracking with a refined, everyday look.",
      "Built-in heart rate, SpO2, and sleep monitoring give you a full picture of your health, while multi-day battery life keeps you moving without constant recharging."
    ],
    specs: [
      ["Display", "1.4\" AMOLED, Always-On"],
      ["Battery Life", "Up to 5 days"],
      ["Water Resistance", "5 ATM"],
      ["Sensors", "Heart Rate, SpO2, GPS"],
      ["Strap", "Genuine Leather"]
    ]
  },
  {
    id: 3,
    name: "Tactile Pro Mechanical Keyboard - Quiet Linear",
    shortName: "Tactile Pro Mechanical Keyboard",
    category: "Peripherals",
    price: 129.99,
    originalPrice: null,
    discount: null,
    rating: 5.0,
    reviews: 412,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwrywL1aGOKSjjzIGYlikZpphdfCYqCZg11dnESHtFjq_Rusx4-jjCNWEu25u-9wnGQh357LHjqbSUke4d42PtwkSF0Q0wz3PlCw1OIwq0nWGdB_gdjmXxmoPlwG4qRbN7P70t3ixR0MpZcksuzmJc2C5_GqTgU-tY4mtY-9i77l7vS3OrfUzSmgESiivyyf3_-77Ph1GTQLACYVxZHz6wA3XSFYMFgL7xsaMVRRUpliFxMPHftIUoQg",
    badge: "Best Seller",
    description: [
      "Type faster and quieter with the Tactile Pro Mechanical Keyboard. Custom quiet-linear switches deliver a smooth, satisfying keystroke without the noise of a standard mechanical board.",
      "A compact aluminum frame, per-key backlighting, and hot-swappable switches make it equally at home in a quiet office or a late-night gaming setup."
    ],
    specs: [
      ["Switch Type", "Quiet Linear (Hot-Swappable)"],
      ["Layout", "87-Key Tenkeyless"],
      ["Backlight", "Per-Key RGB"],
      ["Connectivity", "USB-C, 2.4GHz, Bluetooth 5.1"],
      ["Frame", "CNC Aluminum"]
    ]
  },
  {
    id: 4,
    name: "Precision Brew Smart Coffee Maker",
    shortName: "Precision Brew Smart Coffee Maker",
    category: "Home Appliances",
    price: 169.15,
    originalPrice: 199.00,
    discount: "15% OFF",
    rating: 4.5,
    reviews: 96,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlArU8L7u-9T-P-D1y495ej9PKhMLK8OtZ092aJlfypZzfUwFdvLv2f1CBv6Fp8UfemRpM9WMqhNW6wyRiTv7c9j18MP0LnLEKiSeIcnOt9Eazav-Ar3YrWV_nErXaF-xTgPWzo_4W56JQhKe3peQpYjIK6a9yUmBcsO9WX5_e6p-gq7fEfF_NBYrfoxdJ_w08bQResiXCoE1a1zQ8ruXO4dO-npZrojbPKK7J-niMaUaaT595u4AgMw",
    badge: null,
    description: [
      "Wake up to the perfect cup every time. The Precision Brew Smart Coffee Maker lets you dial in temperature, bloom time, and strength from your phone, or choose from six built-in brew profiles.",
      "A matte black and brushed steel finish, thermal carafe, and app-based scheduling make it as much a countertop centerpiece as it is a daily essential."
    ],
    specs: [
      ["Capacity", "12 Cups / 1.8L Thermal Carafe"],
      ["Connectivity", "Wi-Fi + App Control"],
      ["Brew Profiles", "6 Presets + Custom"],
      ["Material", "Matte Black / Brushed Steel"],
      ["Warranty", "2 Years"]
    ]
  },
  {
    id: 5,
    name: "Minimalist Laptop Stand Aluminum",
    shortName: "Minimalist Laptop Stand",
    category: "Accessories",
    price: 45.00,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 57,
    image: "https://images.unsplash.com/photo-1646497982786-e92e5470df33?w=800&h=800&fit=crop&q=80&auto=format",
    badge: null,
    description: [
      "Elevate your workspace, literally. This aluminum laptop stand raises your screen to eye level to improve posture, while its open design keeps your laptop cool during long work sessions.",
      "The foldable, tool-free design collapses flat for travel and fits laptops from 10\" to 17\" with a non-slip silicone grip that keeps your device secure."
    ],
    specs: [
      ["Material", "Anodized Aluminum"],
      ["Compatibility", "10\"\u201317\" Laptops"],
      ["Adjustable Height", "6 Levels"],
      ["Folded Size", "27cm x 10cm x 2cm"],
      ["Weight", "680 grams"]
    ]
  },
  {
    id: 6,
    name: "UltraView 27\" 4K Monitor",
    shortName: "UltraView 27\" 4K Monitor",
    category: "Displays",
    price: 329.99,
    originalPrice: 379.99,
    discount: "13% OFF",
    rating: 4.6,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1639506060209-3f8629d7c67f?w=800&h=800&fit=crop&q=80&auto=format",
    badge: "AI Recommended",
    description: [
      "See every detail with the UltraView 27\" 4K Monitor. A 3840x2160 IPS panel delivers sharp text, accurate colors, and wide viewing angles for work, editing, and everyday browsing.",
      "A slim-bezel design, height-adjustable stand, and built-in USB-C hub (with 65W power delivery) let you connect and charge a laptop with a single cable."
    ],
    specs: [
      ["Resolution", "3840 x 2160 (4K UHD)"],
      ["Panel Type", "IPS, 99% sRGB"],
      ["Refresh Rate", "60Hz"],
      ["Connectivity", "USB-C (65W PD), HDMI 2.1, DisplayPort"],
      ["Stand", "Height, Tilt, Swivel Adjustable"]
    ]
  },
  {
    id: 7,
    name: "PowerCore 20000mAh Fast Charge Power Bank",
    shortName: "PowerCore 20000mAh Power Bank",
    category: "Accessories",
    price: 39.99,
    originalPrice: null,
    discount: null,
    rating: 4.4,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1706275399494-fb26bbc5da63?w=800&h=800&fit=crop&q=80&auto=format",
    badge: null,
    description: [
      "Never run out of battery again. The PowerCore 20000mAh Power Bank holds enough charge for multiple full phone charges or a laptop top-up, all in a pocketable aluminum shell.",
      "18W USB-C Power Delivery and dual USB-A ports mean you can charge two devices at once, with a digital display that shows exactly how much power is left."
    ],
    specs: [
      ["Capacity", "20,000mAh"],
      ["Output", "18W USB-C PD + 2x USB-A"],
      ["Charging Time", "Full recharge in ~4 hours"],
      ["Display", "Digital % Indicator"],
      ["Weight", "345 grams"]
    ]
  },
  {
    id: 8,
    name: "StreamCam Pro 4K Webcam",
    shortName: "StreamCam Pro 4K Webcam",
    category: "Peripherals",
    price: 89.99,
    originalPrice: null,
    discount: null,
    rating: 4.3,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1715869618915-a7bf6608d4c3?w=800&h=800&fit=crop&q=80&auto=format",
    badge: null,
    description: [
      "Look your best on every call and stream. The StreamCam Pro captures crisp 4K video with auto-focus and HDR, even in mixed or low light.",
      "A built-in privacy shutter, dual noise-cancelling microphones, and a flexible mount that clips onto any monitor make it a plug-and-play upgrade for meetings, streaming, or content creation."
    ],
    specs: [
      ["Resolution", "4K @ 30fps / 1080p @ 60fps"],
      ["Field of View", "90\u00b0 Adjustable"],
      ["Focus", "Auto-Focus with HDR"],
      ["Microphone", "Dual Noise-Cancelling"],
      ["Connectivity", "USB-C"]
    ]
  },
  {
    id: 9,
    name: "Bass Boost Portable Bluetooth Speaker",
    shortName: "Bass Boost Bluetooth Speaker",
    category: "Audio",
    price: 59.99,
    originalPrice: 79.99,
    discount: "25% OFF",
    rating: 4.5,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1542483381-41a479b1fb88?w=800&h=800&fit=crop&q=80&auto=format",
    badge: "Best Seller",
    description: [
      "Take the party anywhere with the Bass Boost Portable Speaker. Dual drivers and a passive bass radiator deliver room-filling sound from a compact, rugged shell.",
      "An IPX7 waterproof rating and 18-hour battery life mean it's ready for the pool, the trail, or the backyard, and two speakers can be paired together for true stereo sound."
    ],
    specs: [
      ["Output Power", "20W"],
      ["Battery Life", "Up to 18 hours"],
      ["Water Resistance", "IPX7"],
      ["Bluetooth", "Version 5.3, 30m Range"],
      ["Pairing", "Stereo Pair with 2nd Unit"]
    ]
  },
  {
    id: 10,
    name: "Quantum Gaming Mouse",
    shortName: "Quantum Gaming Mouse",
    category: "Peripherals",
    price: 49.99,
    originalPrice: null,
    discount: null,
    rating: 4.7,
    reviews: 389,
    image: "https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?w=800&h=800&fit=crop&q=80&auto=format",
    badge: "AI Recommended",
    description: [
      "Precision built for competitive play. The Quantum Gaming Mouse uses a 26,000 DPI optical sensor and ultra-light 58g frame for fast, accurate tracking on every move.",
      "Optical switches rated for 80 million clicks, on-board profile memory, and a braided cable keep it reliable through the longest sessions."
    ],
    specs: [
      ["Sensor", "26,000 DPI Optical"],
      ["Switches", "Optical, 80M Click Rating"],
      ["Weight", "58 grams"],
      ["Polling Rate", "1000Hz"],
      ["Connectivity", "USB-C Braided Cable"]
    ]
  },
  {
    id: 11,
    name: "HomeSense Smart Plug (2-Pack)",
    shortName: "HomeSense Smart Plug (2-Pack)",
    category: "Smart Home",
    price: 24.99,
    originalPrice: null,
    discount: null,
    rating: 4.2,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1564517945244-d371c925640b?w=800&h=800&fit=crop&q=80&auto=format",
    badge: null,
    description: [
      "Turn any outlet into a smart outlet. HomeSense Smart Plugs let you control lamps, fans, and small appliances from your phone or with voice commands.",
      "Set schedules, track energy usage, and group plugs into scenes \u2014 works with the major smart home voice assistants, no hub required."
    ],
    specs: [
      ["Max Load", "15A / 1800W"],
      ["Connectivity", "2.4GHz Wi-Fi, No Hub Required"],
      ["Voice Assistants", "Works with major platforms"],
      ["Features", "Scheduling, Energy Monitoring"],
      ["Included", "2 Smart Plugs"]
    ]
  },
  {
    id: 12,
    name: "AeroVac Robot Vacuum",
    shortName: "AeroVac Robot Vacuum",
    category: "Home Appliances",
    price: 299.00,
    originalPrice: 349.00,
    discount: "14% OFF",
    rating: 4.4,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1653990480360-31a12ce9723e?w=800&h=800&fit=crop&q=80&auto=format",
    badge: null,
    description: [
      "Let AeroVac handle the floors. Laser mapping navigates your home room by room, while strong suction lifts dust, pet hair, and debris from carpets and hard floors alike.",
      "Schedule cleans from the app, set no-go zones, and let it return to its dock to recharge \u2014 and empty itself \u2014 automatically."
    ],
    specs: [
      ["Navigation", "LiDAR Room Mapping"],
      ["Suction Power", "2700 Pa"],
      ["Battery Life", "Up to 150 minutes"],
      ["Dustbin", "Self-Emptying Base Included"],
      ["App Control", "Scheduling + No-Go Zones"]
    ]
  },
  {
    id: 13,
    name: "VoltEdge 65W GaN Charger",
    shortName: "VoltEdge 65W GaN Charger",
    category: "Accessories",
    price: 34.99,
    originalPrice: null,
    discount: null,
    rating: 4.6,
    reviews: 221,
    image: "https://images.unsplash.com/photo-1517320069935-381614f8c1e5?w=800&h=800&fit=crop&q=80&auto=format",
    badge: null,
    description: [
      "Charge your laptop, tablet, and phone from one compact adapter. GaN technology packs 65W of fast charging into a footprint smaller than most stock chargers.",
      "Three ports \u2014 two USB-C and one USB-A \u2014 with smart power sharing automatically balance output across connected devices."
    ],
    specs: [
      ["Output", "65W Total (GaN)"],
      ["Ports", "2x USB-C, 1x USB-A"],
      ["Compatibility", "Laptops, Tablets, Phones"],
      ["Safety", "Over-Current & Over-Heat Protection"],
      ["Size", "Compact Travel-Ready Footprint"]
    ]
  }
];

function getProductById(id) {
  const numId = Number(id);
  return PRODUCTS.find(p => p.id === numId) || null;
}
