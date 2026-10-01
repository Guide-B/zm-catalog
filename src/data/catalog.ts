// Auto-generated from catalog.db - do not edit manually
// Regenerate with: python3 scripts/generate_catalog_data.py

export interface ProductVariant {
  name: string;
  storage: string;
  color: string;
  price: number;
  sku: string;
}

export interface CatalogProduct {
  id: string;
  category: string;
  subcategory: string;
  brand: string;
  model: string;
  title: string;
  description: string;
  price_retail: number;
  price_team: number;
  specs: Record<string, string>;
  in_stock: boolean;
  featured: boolean;
  variants: ProductVariant[];
  images: string[];
}

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    "id": "bottoms_relaxed_utility_cargo",
    "category": "bottoms",
    "subcategory": "cargo",
    "brand": "Essentials",
    "model": "Utility Wide-Leg Cargo Trousers",
    "title": "Heavyweight Cotton Canvas Utility Cargo Pants",
    "description": "Engineered for daily durability with 8 multi-functional flap pockets, reinforced knee panels, and adjustable toggle hems.",
    "price_retail": 420.0,
    "price_team": 360.0,
    "specs": {
      "Fabric": "100% Heavyweight Cotton Canvas (320 GSM)",
      "Pockets": "8 Deep Utility Cargo Pockets",
      "Fit": "Relaxed Straight-Leg with Adjustable Drawcord Hems",
      "Waist": "Elasticized Rear Waistband with Belt Loops"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Large - Washed Black",
        "storage": "L",
        "color": "Washed Black",
        "price": 420.0,
        "sku": "CARGO-BLK-L"
      },
      {
        "name": "Medium - Washed Black",
        "storage": "M",
        "color": "Washed Black",
        "price": 420.0,
        "sku": "CARGO-BLK-M"
      }
    ],
    "images": [
      "/images/menswear/b1.jpg"
    ]
  },
  {
    "id": "power_anker_prime_100w",
    "category": "chargers_power",
    "subcategory": "fast_charger",
    "brand": "Anker",
    "model": "Anker Prime 100W GaN",
    "title": "Anker Prime 100W GaN 3-Port Fast Wall Charger",
    "description": "Ultra-compact GaN fast charger with 2x USB-C and 1x USB-A ports. Powers MacBook Pro, iPhone, and iPad simultaneously with ActiveShield 2.0 temperature monitoring.",
    "price_retail": 950.0,
    "price_team": 840.0,
    "specs": {
      "Total Output": "100W Max",
      "Ports": "2x USB-C, 1x USB-A",
      "Technology": "GaNPrime Intelligent Power Allocation",
      "Safety": "ActiveShield 2.0 Real-Time Temperature Monitoring",
      "Compatibility": "Laptops, Tablets, Smartphones, Wearables"
    },
    "in_stock": true,
    "featured": true,
    "variants": [
      {
        "name": "Anker Prime 100W - Charcoal Black",
        "storage": "100W",
        "color": "Charcoal Black",
        "price": 950.0,
        "sku": "ANK-100W-BLK"
      }
    ],
    "images": [
      "/images/chargers/anker_charger_100w.png"
    ]
  },
  {
    "id": "jeans_heritage_selvedge_denim",
    "category": "jeans",
    "subcategory": "denim",
    "brand": "Essentials",
    "model": "Heritage Straight-Leg Denim Jeans",
    "title": "Vintage Wash 14oz Selvedge Straight-Leg Denim",
    "description": "Custom 14oz ring-spun cotton denim with genuine red-line selvedge ID, custom brass hardware, and vintage fading.",
    "price_retail": 480.0,
    "price_team": 410.0,
    "specs": {
      "Denim Weight": "14oz Heavyweight Selvedge Cotton",
      "Weave": "Right-Hand Twill with Red-Line Selvedge ID",
      "Hardware": "Antiqued Solid Brass Rivets and YKK Zipper",
      "Fit": "Classic Straight-Leg Mid-Rise"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Waist 32 - Vintage Indigo",
        "storage": "32",
        "color": "Vintage Indigo",
        "price": 480.0,
        "sku": "JNS-IND-32"
      },
      {
        "name": "Waist 34 - Vintage Indigo",
        "storage": "34",
        "color": "Vintage Indigo",
        "price": 480.0,
        "sku": "JNS-IND-34"
      }
    ],
    "images": [
      "/images/menswear/j1.jpg"
    ]
  },
  {
    "id": "laptop_asus_tuf-fx63",
    "category": "laptops",
    "subcategory": "gaming",
    "brand": "ASUS",
    "model": "TUF-FX63",
    "title": "ASUS TUF-FX63 15.6-inch Gaming Laptop",
    "description": "Verified gaming laptop configuration with 15.6-inch display, 16GB RAM, high performance dedicated graphics, and fast NVMe SSD storage. Sourced directly from verified supply hubs.",
    "price_retail": 7605.0,
    "price_team": 6578.0,
    "specs": {
      "Display": "15.6-inch Full HD (1920x1080) High Refresh Rate",
      "RAM": "16GB High Speed DDR4 / DDR5",
      "Processors": "i5 - 7th Gen, i7 - 7th Gen",
      "Graphics": "GTX 1050 4GB",
      "Storage": "512GB SSD",
      "Configurations": "2 selectable configurations available"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Intel Core i5 - 7th Gen • GTX 1050 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1050 4GB",
        "price": 7605.0,
        "sku": "LAP-AS-01"
      },
      {
        "name": "Intel Core i7 - 7th Gen • GTX 1050 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1050 4GB",
        "price": 8296.0,
        "sku": "LAP-AS-02"
      }
    ],
    "images": [
      "/images/laptops/asus-tuf-fx63.png"
    ]
  },
  {
    "id": "laptop_asus_tuf-fx80",
    "category": "laptops",
    "subcategory": "gaming",
    "brand": "ASUS",
    "model": "TUF-FX80",
    "title": "ASUS TUF-FX80 15.6-inch Gaming Laptop",
    "description": "Verified gaming laptop configuration with 15.6-inch display, 16GB RAM, high performance dedicated graphics, and fast NVMe SSD storage. Sourced directly from verified supply hubs.",
    "price_retail": 8296.0,
    "price_team": 7176.0,
    "specs": {
      "Display": "15.6-inch Full HD (1920x1080) High Refresh Rate",
      "RAM": "16GB High Speed DDR4 / DDR5",
      "Processors": "i5 - 8th Gen, i7 - 8th Gen",
      "Graphics": "GTX 1050 Ti 4GB",
      "Storage": "512GB SSD",
      "Configurations": "2 selectable configurations available"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Intel Core i5 - 8th Gen • GTX 1050 Ti 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1050 Ti 4GB",
        "price": 8296.0,
        "sku": "LAP-AS-03"
      },
      {
        "name": "Intel Core i7 - 8th Gen • GTX 1050 Ti 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1050 Ti 4GB",
        "price": 8987.0,
        "sku": "LAP-AS-04"
      }
    ],
    "images": [
      "/images/laptops/asus-tuf-fx80.png"
    ]
  },
  {
    "id": "laptop_asus_fx95gt9300",
    "category": "laptops",
    "subcategory": "gaming",
    "brand": "ASUS",
    "model": "FX95GT9300",
    "title": "ASUS FX95GT9300 15.6-inch Gaming Laptop",
    "description": "Verified gaming laptop configuration with 15.6-inch display, 16GB RAM, high performance dedicated graphics, and fast NVMe SSD storage. Sourced directly from verified supply hubs.",
    "price_retail": 8642.0,
    "price_team": 7475.0,
    "specs": {
      "Display": "15.6-inch Full HD (1920x1080) High Refresh Rate",
      "RAM": "16GB High Speed DDR4 / DDR5",
      "Processors": "i5 - 9th Gen",
      "Graphics": "GTX 1650 4GB",
      "Storage": "512GB SSD",
      "Configurations": "1 selectable configurations available"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Intel Core i5 - 9th Gen • GTX 1650 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 4GB",
        "price": 8642.0,
        "sku": "LAP-AS-05"
      }
    ],
    "images": [
      "/images/laptops/asus-fx95gt-9300.png"
    ]
  },
  {
    "id": "laptop_asus_fx95gt9750",
    "category": "laptops",
    "subcategory": "gaming",
    "brand": "ASUS",
    "model": "FX95GT9750",
    "title": "ASUS FX95GT9750 15.6-inch Gaming Laptop",
    "description": "Verified gaming laptop configuration with 15.6-inch display, 16GB RAM, high performance dedicated graphics, and fast NVMe SSD storage. Sourced directly from verified supply hubs.",
    "price_retail": 9679.0,
    "price_team": 8372.0,
    "specs": {
      "Display": "15.6-inch Full HD (1920x1080) High Refresh Rate",
      "RAM": "16GB High Speed DDR4 / DDR5",
      "Processors": "i7 - 9th Gen",
      "Graphics": "GTX 1650 4GB, GTX 1660 6GB",
      "Storage": "512GB SSD",
      "Configurations": "2 selectable configurations available"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Intel Core i7 - 9th Gen • GTX 1650 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 4GB",
        "price": 9679.0,
        "sku": "LAP-AS-06"
      },
      {
        "name": "Intel Core i7 - 9th Gen • GTX 1660 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1660 6GB",
        "price": 10370.0,
        "sku": "LAP-AS-07"
      }
    ],
    "images": [
      "/images/laptops/asus-fx95gt-9750.png"
    ]
  },
  {
    "id": "laptop_asus_fx506",
    "category": "laptops",
    "subcategory": "gaming",
    "brand": "ASUS",
    "model": "FX506",
    "title": "ASUS FX506 15.6-inch Gaming Laptop",
    "description": "Verified gaming laptop configuration with 15.6-inch display, 16GB RAM, high performance dedicated graphics, and fast NVMe SSD storage. Sourced directly from verified supply hubs.",
    "price_retail": 9333.0,
    "price_team": 8073.0,
    "specs": {
      "Display": "15.6-inch Full HD (1920x1080) High Refresh Rate",
      "RAM": "16GB High Speed DDR4 / DDR5",
      "Processors": "i5 - 10th Gen, i5 - 11th Gen, i7 - 10th Gen, i7 - 11th Gen",
      "Graphics": "GTX 1650 Ti 4GB, GTX 1660 Ti 6GB, RTX 3050 4GB, RTX 3060 6GB",
      "Storage": "512GB SSD",
      "Configurations": "6 selectable configurations available"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Intel Core i5 - 10th Gen • GTX 1650 Ti 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 Ti 4GB",
        "price": 9333.0,
        "sku": "LAP-AS-08"
      },
      {
        "name": "Intel Core i7 - 10th Gen • GTX 1650 Ti 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 Ti 4GB",
        "price": 10716.0,
        "sku": "LAP-AS-09"
      },
      {
        "name": "Intel Core i7 - 10th Gen • GTX 1660 Ti 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1660 Ti 6GB",
        "price": 11407.0,
        "sku": "LAP-AS-10"
      },
      {
        "name": "Intel Core i5 - 11th Gen • RTX 3050 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 11753.0,
        "sku": "LAP-AS-11"
      },
      {
        "name": "Intel Core i7 - 11th Gen • RTX 3050 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 12790.0,
        "sku": "LAP-AS-12"
      },
      {
        "name": "Intel Core i7 - 11th Gen • RTX 3060 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3060 6GB",
        "price": 13827.0,
        "sku": "LAP-AS-13"
      }
    ],
    "images": [
      "/images/laptops/asus-fx506.png"
    ]
  },
  {
    "id": "laptop_asus_fx507",
    "category": "laptops",
    "subcategory": "gaming",
    "brand": "ASUS",
    "model": "FX507",
    "title": "ASUS FX507 15.6-inch Gaming Laptop",
    "description": "Verified gaming laptop configuration with 15.6-inch display, 16GB RAM, high performance dedicated graphics, and fast NVMe SSD storage. Sourced directly from verified supply hubs.",
    "price_retail": 15555.0,
    "price_team": 13455.0,
    "specs": {
      "Display": "15.6-inch Full HD (1920x1080) High Refresh Rate",
      "RAM": "16GB High Speed DDR4 / DDR5",
      "Processors": "i5 - 12th Gen, i5 - 13th Gen, i7 - 12th Gen, i7 - 13th Gen, i9 - 13th Gen",
      "Graphics": "RTX 3050 4GB, RTX 3060 6GB, RTX 4050 6GB, RTX 4060 8GB",
      "Storage": "1TB SSD, 512GB SSD",
      "Configurations": "7 selectable configurations available"
    },
    "in_stock": true,
    "featured": true,
    "variants": [
      {
        "name": "Intel Core i5 - 12th Gen • RTX 3050 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 15555.0,
        "sku": "LAP-AS-14"
      },
      {
        "name": "Intel Core i7 - 12th Gen • RTX 3050 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 16938.0,
        "sku": "LAP-AS-15"
      },
      {
        "name": "Intel Core i7 - 12th Gen • RTX 3060 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3060 6GB",
        "price": 18320.0,
        "sku": "LAP-AS-16"
      },
      {
        "name": "Intel Core i5 - 13th Gen • RTX 4050 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4050 6GB",
        "price": 21431.0,
        "sku": "LAP-AS-17"
      },
      {
        "name": "Intel Core i7 - 13th Gen • RTX 4050 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4050 6GB",
        "price": 23505.0,
        "sku": "LAP-AS-18"
      },
      {
        "name": "Intel Core i7 - 13th Gen • RTX 4060 8GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4060 8GB",
        "price": 24542.0,
        "sku": "LAP-AS-19"
      },
      {
        "name": "Intel Core i9 - 13th Gen • RTX 4060 8GB • 1TB SSD",
        "storage": "1TB SSD",
        "color": "RTX 4060 8GB",
        "price": 26616.0,
        "sku": "LAP-AS-20"
      }
    ],
    "images": [
      "/images/laptops/asus-fx507.png"
    ]
  },
  {
    "id": "laptop_hp_omen_5___victus_5",
    "category": "laptops",
    "subcategory": "gaming",
    "brand": "HP",
    "model": "OMEN 5 / Victus 5",
    "title": "HP OMEN 5 / Victus 5 15.6-inch Gaming Laptop",
    "description": "Verified gaming laptop configuration with 15.6-inch display, 16GB RAM, high performance dedicated graphics, and fast NVMe SSD storage. Sourced directly from verified supply hubs.",
    "price_retail": 9333.0,
    "price_team": 8073.0,
    "specs": {
      "Display": "15.6-inch Full HD (1920x1080) High Refresh Rate",
      "RAM": "16GB High Speed DDR4 / DDR5",
      "Processors": "i5 - 9th Gen, i7 - 9th Gen",
      "Graphics": "GTX 1650 4GB, GTX 1660 Ti 6GB",
      "Storage": "512GB SSD",
      "Configurations": "3 selectable configurations available"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Intel Core i5 - 9th Gen • GTX 1650 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 4GB",
        "price": 9333.0,
        "sku": "LAP-HP-21"
      },
      {
        "name": "Intel Core i7 - 9th Gen • GTX 1650 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 4GB",
        "price": 10370.0,
        "sku": "LAP-HP-22"
      },
      {
        "name": "Intel Core i7 - 9th Gen • GTX 1660 Ti 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1660 Ti 6GB",
        "price": 11407.0,
        "sku": "LAP-HP-23"
      }
    ],
    "images": [
      "/images/laptops/hp-omen-victus-5.png"
    ]
  },
  {
    "id": "laptop_hp_omen_6___victus_6",
    "category": "laptops",
    "subcategory": "gaming",
    "brand": "HP",
    "model": "OMEN 6 / Victus 6",
    "title": "HP OMEN 6 / Victus 6 15.6-inch Gaming Laptop",
    "description": "Verified gaming laptop configuration with 15.6-inch display, 16GB RAM, high performance dedicated graphics, and fast NVMe SSD storage. Sourced directly from verified supply hubs.",
    "price_retail": 10370.0,
    "price_team": 8970.0,
    "specs": {
      "Display": "15.6-inch Full HD (1920x1080) High Refresh Rate",
      "RAM": "16GB High Speed DDR4 / DDR5",
      "Processors": "i5 - 10th Gen, i7 - 10th Gen",
      "Graphics": "GTX 1650 Ti 4GB, GTX 1660 Ti 6GB",
      "Storage": "512GB SSD",
      "Configurations": "3 selectable configurations available"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Intel Core i5 - 10th Gen • GTX 1650 Ti 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 Ti 4GB",
        "price": 10370.0,
        "sku": "LAP-HP-24"
      },
      {
        "name": "Intel Core i7 - 10th Gen • GTX 1650 Ti 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 Ti 4GB",
        "price": 11753.0,
        "sku": "LAP-HP-25"
      },
      {
        "name": "Intel Core i7 - 10th Gen • GTX 1660 Ti 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1660 Ti 6GB",
        "price": 12790.0,
        "sku": "LAP-HP-26"
      }
    ],
    "images": [
      "/images/laptops/hp-omen-victus-6.png"
    ]
  },
  {
    "id": "laptop_hp_omen_7___victus_7",
    "category": "laptops",
    "subcategory": "gaming",
    "brand": "HP",
    "model": "OMEN 7 / Victus 7",
    "title": "HP OMEN 7 / Victus 7 15.6-inch Gaming Laptop",
    "description": "Verified gaming laptop configuration with 15.6-inch display, 16GB RAM, high performance dedicated graphics, and fast NVMe SSD storage. Sourced directly from verified supply hubs.",
    "price_retail": 13135.0,
    "price_team": 11362.0,
    "specs": {
      "Display": "15.6-inch Full HD (1920x1080) High Refresh Rate",
      "RAM": "16GB High Speed DDR4 / DDR5",
      "Processors": "i5 - 11th Gen, i7 - 11th Gen",
      "Graphics": "RTX 3050 4GB, RTX 3060 6GB",
      "Storage": "512GB SSD",
      "Configurations": "3 selectable configurations available"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Intel Core i5 - 11th Gen • RTX 3050 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 13135.0,
        "sku": "LAP-HP-27"
      },
      {
        "name": "Intel Core i7 - 11th Gen • RTX 3050 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 14518.0,
        "sku": "LAP-HP-28"
      },
      {
        "name": "Intel Core i7 - 11th Gen • RTX 3060 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3060 6GB",
        "price": 15555.0,
        "sku": "LAP-HP-29"
      }
    ],
    "images": [
      "/images/laptops/hp-omen-victus-7.png"
    ]
  },
  {
    "id": "laptop_hp_omen_8___victus_8",
    "category": "laptops",
    "subcategory": "gaming",
    "brand": "HP",
    "model": "OMEN 8 / Victus 8",
    "title": "HP OMEN 8 / Victus 8 15.6-inch Gaming Laptop",
    "description": "Verified gaming laptop configuration with 15.6-inch display, 16GB RAM, high performance dedicated graphics, and fast NVMe SSD storage. Sourced directly from verified supply hubs.",
    "price_retail": 16418.0,
    "price_team": 14202.0,
    "specs": {
      "Display": "15.6-inch Full HD (1920x1080) High Refresh Rate",
      "RAM": "16GB High Speed DDR4 / DDR5",
      "Processors": "i5 - 12th Gen, i7 - 12th Gen",
      "Graphics": "RTX 3050 4GB, RTX 3060 6GB",
      "Storage": "512GB SSD",
      "Configurations": "3 selectable configurations available"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Intel Core i5 - 12th Gen • RTX 3050 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 16418.0,
        "sku": "LAP-HP-30"
      },
      {
        "name": "Intel Core i7 - 12th Gen • RTX 3050 4GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 17455.0,
        "sku": "LAP-HP-31"
      },
      {
        "name": "Intel Core i7 - 12th Gen • RTX 3060 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3060 6GB",
        "price": 18492.0,
        "sku": "LAP-HP-32"
      }
    ],
    "images": [
      "/images/laptops/hp-omen-victus-8.png"
    ]
  },
  {
    "id": "laptop_hp_omen_9___victus_9",
    "category": "laptops",
    "subcategory": "gaming",
    "brand": "HP",
    "model": "OMEN 9 / Victus 9",
    "title": "HP OMEN 9 / Victus 9 15.6-inch Gaming Laptop",
    "description": "Verified gaming laptop configuration with 15.6-inch display, 16GB RAM, high performance dedicated graphics, and fast NVMe SSD storage. Sourced directly from verified supply hubs.",
    "price_retail": 21086.0,
    "price_team": 18239.0,
    "specs": {
      "Display": "15.6-inch Full HD (1920x1080) High Refresh Rate",
      "RAM": "16GB High Speed DDR4 / DDR5",
      "Processors": "i5 - 13th Gen, i7 - 13th Gen",
      "Graphics": "RTX 4050 6GB, RTX 4060 8GB",
      "Storage": "512GB SSD",
      "Configurations": "3 selectable configurations available"
    },
    "in_stock": true,
    "featured": true,
    "variants": [
      {
        "name": "Intel Core i5 - 13th Gen • RTX 4050 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4050 6GB",
        "price": 21086.0,
        "sku": "LAP-HP-33"
      },
      {
        "name": "Intel Core i7 - 13th Gen • RTX 4050 6GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4050 6GB",
        "price": 24542.0,
        "sku": "LAP-HP-34"
      },
      {
        "name": "Intel Core i7 - 13th Gen • RTX 4060 8GB • 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4060 8GB",
        "price": 27480.0,
        "sku": "LAP-HP-35"
      }
    ],
    "images": [
      "/images/laptops/hp-omen-victus-9.png"
    ]
  },
  {
    "id": "apparel_heavyweight_tee",
    "category": "menswear",
    "subcategory": "t_shirts",
    "brand": "Essentials",
    "model": "Heavyweight Crewneck Tee",
    "title": "Heavyweight 280GSM Vintage Cotton T-Shirt",
    "description": "Boxy streetwear cut made from 100% 280GSM combed cotton, double-stitched collar, preshrunk fabric.",
    "price_retail": 350.0,
    "price_team": 290.0,
    "specs": {
      "Material": "100% Combed Cotton 280GSM",
      "Fit": "Relaxed Boxy Drop-Shoulder",
      "Colors": "Washed Black, Vintage Grey, Off-White",
      "Sizes": "M, L, XL, XXL"
    },
    "in_stock": true,
    "featured": false,
    "variants": [],
    "images": [
      "/images/menswear/t1.jpg"
    ]
  },
  {
    "id": "apparel_french_terry_hoodie",
    "category": "menswear",
    "subcategory": "hoodies",
    "brand": "Essentials",
    "model": "450GSM French Terry Hoodie",
    "title": "Ultra-Heavy French Terry Drop Shoulder Hoodie",
    "description": "Premium 450GSM organic French terry cotton with seamless ribbed hem and cuffs. Zero drawstring minimalist aesthetic.",
    "price_retail": 750.0,
    "price_team": 650.0,
    "specs": {
      "Material": "450GSM Heavyweight French Terry",
      "Fit": "Oversized Boxy Fit",
      "Colors": "Onyx Black, Heather Grey, Sandstone",
      "Sizes": "S, M, L, XL"
    },
    "in_stock": true,
    "featured": false,
    "variants": [],
    "images": [
      "/images/menswear/h1.jpg"
    ]
  },
  {
    "id": "apparel_chunky_sneaker",
    "category": "menswear",
    "subcategory": "sneakers",
    "brand": "Essentials",
    "model": "Retro Low-Top Chunky Sneaker",
    "title": "Retro Minimalist Leather Platform Sneaker",
    "description": "Constructed from premium calfskin leather with a cushioned EVA midsole and durable traction rubber outsole.",
    "price_retail": 950.0,
    "price_team": 820.0,
    "specs": {
      "Upper": "Genuine Calfskin Leather & Suede Overlays",
      "Sole": "Cushioned EVA Midsole with Rubber Tread",
      "Sizes": "EU 40 - 45",
      "Colors": "Vintage White/Black, Triple Cream"
    },
    "in_stock": true,
    "featured": false,
    "variants": [],
    "images": [
      "/images/menswear/s1.jpg"
    ]
  },
  {
    "id": "apple_iphone_18_pro_max",
    "category": "phones",
    "subcategory": "flagship",
    "brand": "Apple",
    "model": "iPhone 18 Pro Max",
    "title": "Apple iPhone 18 Pro Max",
    "description": "Local-stock units, factory sealed condition with confirmed specifications and finishes. Grade A+ genuine Apple hardware.",
    "price_retail": 29800.0,
    "price_team": 28200.0,
    "specs": {
      "Display": "6.9-inch Super Retina XDR OLED with ProMotion 120Hz",
      "Chip": "Apple A19 Pro Neural Engine",
      "Camera": "48MP Fusion Triple Camera with 5x Telephoto",
      "Chassis": "Grade 5 Titanium with textured matte glass back",
      "Battery": "Up to 33 hours video playback",
      "OS": "iOS 18 / iOS 19 ready"
    },
    "in_stock": true,
    "featured": true,
    "variants": [
      {
        "name": "1TB Desert Titanium",
        "storage": "1TB",
        "color": "Desert Titanium",
        "price": 34500.0,
        "sku": "IP18PM-1TB-DES"
      },
      {
        "name": "1TB Natural Titanium",
        "storage": "1TB",
        "color": "Natural Titanium",
        "price": 34500.0,
        "sku": "IP18PM-1TB-NAT"
      },
      {
        "name": "256GB Natural Titanium",
        "storage": "256GB",
        "color": "Natural Titanium",
        "price": 27500.0,
        "sku": "IP18PM-256-NAT"
      },
      {
        "name": "512GB Space Black",
        "storage": "512GB",
        "color": "Space Black",
        "price": 29800.0,
        "sku": "IP18PM-512-BLK"
      },
      {
        "name": "512GB Natural Titanium",
        "storage": "512GB",
        "color": "Natural Titanium",
        "price": 29800.0,
        "sku": "IP18PM-512-NAT"
      }
    ],
    "images": [
      "/images/phones/iphone-18-pro-max.jpg",
      "/images/phones/apple_official_lineup.jpg"
    ]
  },
  {
    "id": "apple_iphone_18_pro",
    "category": "phones",
    "subcategory": "flagship",
    "brand": "Apple",
    "model": "iPhone 18 Pro",
    "title": "Apple iPhone 18 Pro",
    "description": "Local-stock units, factory sealed condition with confirmed specifications and finishes. Grade A+ genuine Apple hardware.",
    "price_retail": 25500.0,
    "price_team": 24100.0,
    "specs": {
      "Display": "6.3-inch Super Retina XDR OLED with ProMotion 120Hz",
      "Chip": "Apple A19 Pro Neural Engine",
      "Camera": "48MP Fusion Triple Camera with 5x Telephoto",
      "Chassis": "Grade 5 Titanium with textured matte glass back",
      "Battery": "Up to 27 hours video playback",
      "OS": "iOS 18 / iOS 19 ready"
    },
    "in_stock": true,
    "featured": true,
    "variants": [
      {
        "name": "256GB Natural Titanium",
        "storage": "256GB",
        "color": "Natural Titanium",
        "price": 25500.0,
        "sku": "IP18P-256-NAT"
      },
      {
        "name": "256GB White Titanium",
        "storage": "256GB",
        "color": "White Titanium",
        "price": 25500.0,
        "sku": "IP18P-256-WHT"
      },
      {
        "name": "512GB Space Black",
        "storage": "512GB",
        "color": "Space Black",
        "price": 28000.0,
        "sku": "IP18P-512-BLK"
      },
      {
        "name": "512GB Natural Titanium",
        "storage": "512GB",
        "color": "Natural Titanium",
        "price": 28000.0,
        "sku": "IP18P-512-NAT"
      }
    ],
    "images": [
      "/images/phones/iphone-18-pro.jpg"
    ]
  },
  {
    "id": "watch_apple_ultra_2",
    "category": "smart_watches",
    "subcategory": "rugged",
    "brand": "Apple",
    "model": "Apple Watch Ultra 2",
    "title": "Apple Watch Ultra 2 (49mm Titanium Case)",
    "description": "The most rugged and capable Apple Watch. Engineered for endurance athletes, outdoor adventurers, and water sports enthusiasts with a lightweight titanium case and up to 36 hours battery life.",
    "price_retail": 15200.0,
    "price_team": 13800.0,
    "specs": {
      "Case Size": "49mm Aerospace-Grade Titanium",
      "Display": "Always-On Retina display, up to 3000 nits peak brightness",
      "Connectivity": "GPS + Cellular",
      "Battery": "Up to 36 hours normal use (up to 72 hours in Low Power Mode)",
      "Water Resistance": "100m water resistant, high-speed water sports and recreational dive to 40m"
    },
    "in_stock": true,
    "featured": true,
    "variants": [
      {
        "name": "49mm Titanium - Alpine Loop",
        "storage": "49mm",
        "color": "Orange",
        "price": 15200.0,
        "sku": "AW-ULTRA-2-ALP"
      },
      {
        "name": "49mm Titanium - Ocean Band",
        "storage": "49mm",
        "color": "Ocean Blue",
        "price": 15200.0,
        "sku": "AW-ULTRA-2-OCN"
      }
    ],
    "images": [
      "/images/watches/apple_watch_ultra_2.png"
    ]
  },
  {
    "id": "watch_apple_series_10",
    "category": "smart_watches",
    "subcategory": "flagship",
    "brand": "Apple",
    "model": "Apple Watch Series 10",
    "title": "Apple Watch Series 10 (46mm Aluminum)",
    "description": "Thinnest Apple Watch ever with our biggest display. Advanced health sensors for ECG, blood oxygen, sleep tracking, and faster charging.",
    "price_retail": 8600.0,
    "price_team": 7800.0,
    "specs": {
      "Case Size": "46mm Jet Black Aluminum",
      "Display": "Wide-angle OLED Always-On Retina Display",
      "Processor": "S10 SiP with 64-bit dual-core processor",
      "Sensors": "Electrical heart sensor, Optical heart sensor, Temperature sensor",
      "Battery": "Up to 18 hours (fast charge to 80% in 30 minutes)"
    },
    "in_stock": true,
    "featured": true,
    "variants": [
      {
        "name": "46mm Jet Black - Sport Band",
        "storage": "46mm",
        "color": "Jet Black",
        "price": 8600.0,
        "sku": "AW-S10-46-BLK"
      },
      {
        "name": "46mm Silver - Sport Loop",
        "storage": "46mm",
        "color": "Silver",
        "price": 8600.0,
        "sku": "AW-S10-46-SLV"
      }
    ],
    "images": [
      "/images/watches/apple_watch_series_10.png"
    ]
  },
  {
    "id": "sneaker_retro_court_low",
    "category": "sneakers",
    "subcategory": "court",
    "brand": "Essentials",
    "model": "Retro Court Low-Top Trainer",
    "title": "Retro Minimalist Calfskin Leather Court Sneaker",
    "description": "Clean, timeless low-top sneaker crafted from genuine full-grain calfskin leather with a cushioned EVA footbed and durable rubber cupsole.",
    "price_retail": 950.0,
    "price_team": 820.0,
    "specs": {
      "Upper": "100% Genuine Full-Grain Calfskin Leather",
      "Insole": "Ergonomic OrthoLite Cushioned Footbed",
      "Outsole": "Vulcanized Non-Marking Rubber Cupsole",
      "Sizes Available": "EU 40, 41, 42, 43, 44, 45",
      "Colorways": "Pristine White, White/Vintage Navy"
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "Size 42 - Pristine White",
        "storage": "42",
        "color": "Pristine White",
        "price": 950.0,
        "sku": "SNK-CRT-42-WHT"
      },
      {
        "name": "Size 43 - Pristine White",
        "storage": "43",
        "color": "Pristine White",
        "price": 950.0,
        "sku": "SNK-CRT-43-WHT"
      }
    ],
    "images": [
      "/images/menswear/s1.jpg"
    ]
  },
  {
    "id": "audio_airpods_pro_2",
    "category": "wireless_audio",
    "subcategory": "earbuds",
    "brand": "Apple",
    "model": "AirPods Pro 2",
    "title": "Apple AirPods Pro 2 (USB-C) with Active Noise Cancellation",
    "description": "Grade A+ factory sealed genuine Apple AirPods Pro 2 with USB-C MagSafe Charging Case, H2 headphone chip, up to 2x more Active Noise Cancellation, and Adaptive Audio.",
    "price_retail": 4800.0,
    "price_team": 4300.0,
    "specs": {
      "Chip": "Apple H2 Headphone Chip",
      "Charging Case": "MagSafe Charging Case (USB-C) with Speaker and Lanyard Loop",
      "Audio Tech": "Active Noise Cancellation, Adaptive Audio, Transparency Mode",
      "Battery": "Up to 6 hours listening time (up to 30 hours with case)",
      "Sweat/Water Resistance": "IP54 dust, sweat, and water resistant"
    },
    "in_stock": true,
    "featured": true,
    "variants": [
      {
        "name": "USB-C MagSafe Case",
        "storage": "USB-C",
        "color": "White",
        "price": 4800.0,
        "sku": "APP-2ND-GEN"
      }
    ],
    "images": [
      "/images/audio/airpods_pro_2.png"
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'phones', label: 'Phones' },
  { id: 'laptops', label: 'Laptops' },
  { id: 'smart_watches', label: 'Watches' },
  { id: 'wireless_audio', label: 'Audio' },
  { id: 'chargers_power', label: 'Chargers' },
  { id: 'menswear', label: 'Menswear' },
  { id: 'sneakers', label: 'Sneakers' },
  { id: 'jeans', label: 'Jeans' },
  { id: 'bottoms', label: 'Bottoms' },
];

export const SITE_CONFIG = {
  name: 'ZM Catalog',
  tagline: 'Browse Our Full Range',
  whatsapp: '+260977000000',
  currency: 'K',
  contactMessage: 'Hi, I saw your catalog and I would like to inquire about a product.',
};
