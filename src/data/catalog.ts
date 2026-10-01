// Auto-generated from catalog.db - do not edit manually
// Regenerate with: python3 scripts/sync_catalog.py

export interface ProductVariant {
  name: string
  storage: string
  color: string
  price: number
  sku: string
}

export interface CatalogProduct {
  id: string
  category: string
  subcategory: string
  brand: string
  model: string
  title: string
  description: string
  price_retail: number
  price_team: number
  specs: Record<string, string>
  in_stock: boolean
  featured: boolean
  variants: ProductVariant[]
  images: string[]
}

export const SITE_CONFIG = {
  name: 'ZM Catalog',
  tagline: 'Browse Our Full Range',
  whatsapp: '+260977000000',
  currency: 'K',
  contactMessage: 'Hi, I saw your catalog and I would like to inquire about a product.',
}

export const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'phones', label: 'Phones' },
  { id: 'laptops', label: 'Laptops' },
  { id: 't_shirts', label: 'T-Shirts' },
  { id: 'hoodies', label: 'Hoodies' },
  { id: 'bottoms', label: 'Pants & Chinos' },
  { id: 'sweatpants', label: 'Sweatpants' },
  { id: 'jeans', label: 'Jeans' },
  { id: 'sneakers', label: 'Sneakers' },
  { id: 'smart_watches', label: 'Watches' },
  { id: 'wireless_audio', label: 'Audio' },
  { id: 'chargers_power', label: 'Chargers' },
]

export const CATALOG_PRODUCTS: CatalogProduct[] = [
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
        "name": "256GB Natural Titanium",
        "storage": "256GB",
        "color": "Natural Titanium",
        "price": 27500.0,
        "sku": "IP18PM-256-NAT"
      },
      {
        "name": "512GB Natural Titanium",
        "storage": "512GB",
        "color": "Natural Titanium",
        "price": 29800.0,
        "sku": "IP18PM-512-NAT"
      },
      {
        "name": "512GB Space Black",
        "storage": "512GB",
        "color": "Space Black",
        "price": 29800.0,
        "sku": "IP18PM-512-BLK"
      },
      {
        "name": "1TB Natural Titanium",
        "storage": "1TB",
        "color": "Natural Titanium",
        "price": 34500.0,
        "sku": "IP18PM-1TB-NAT"
      },
      {
        "name": "1TB Desert Titanium",
        "storage": "1TB",
        "color": "Desert Titanium",
        "price": 34500.0,
        "sku": "IP18PM-1TB-DES"
      }
    ],
    "images": [
      "/images/phones/iphone-18-pro-max.jpg",
      "/images/phones/iphone-18-pro-max.jpg"
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
        "name": "512GB Natural Titanium",
        "storage": "512GB",
        "color": "Natural Titanium",
        "price": 28000.0,
        "sku": "IP18P-512-NAT"
      },
      {
        "name": "512GB Space Black",
        "storage": "512GB",
        "color": "Space Black",
        "price": 28000.0,
        "sku": "IP18P-512-BLK"
      }
    ],
    "images": [
      "/images/phones/iphone-18-pro.jpg"
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
        "name": "Intel Core i5 - 13th Gen \u2022 RTX 4050 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4050 6GB",
        "price": 21086.0,
        "sku": "LAP-HP-33"
      },
      {
        "name": "Intel Core i7 - 13th Gen \u2022 RTX 4050 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4050 6GB",
        "price": 24542.0,
        "sku": "LAP-HP-34"
      },
      {
        "name": "Intel Core i7 - 13th Gen \u2022 RTX 4060 8GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4060 8GB",
        "price": 27480.0,
        "sku": "LAP-HP-35"
      }
    ],
    "images": [
      "/Volumes/TSU303_Data/Commerce_Catalog/images/laptops/hp-omen-victus-9.png"
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
        "name": "Intel Core i5 - 12th Gen \u2022 RTX 3050 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 16418.0,
        "sku": "LAP-HP-30"
      },
      {
        "name": "Intel Core i7 - 12th Gen \u2022 RTX 3050 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 17455.0,
        "sku": "LAP-HP-31"
      },
      {
        "name": "Intel Core i7 - 12th Gen \u2022 RTX 3060 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3060 6GB",
        "price": 18492.0,
        "sku": "LAP-HP-32"
      }
    ],
    "images": [
      "/Volumes/TSU303_Data/Commerce_Catalog/images/laptops/hp-omen-victus-8.png"
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
        "name": "Intel Core i5 - 12th Gen \u2022 RTX 3050 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 15555.0,
        "sku": "LAP-AS-14"
      },
      {
        "name": "Intel Core i7 - 12th Gen \u2022 RTX 3050 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 16938.0,
        "sku": "LAP-AS-15"
      },
      {
        "name": "Intel Core i7 - 12th Gen \u2022 RTX 3060 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3060 6GB",
        "price": 18320.0,
        "sku": "LAP-AS-16"
      },
      {
        "name": "Intel Core i5 - 13th Gen \u2022 RTX 4050 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4050 6GB",
        "price": 21431.0,
        "sku": "LAP-AS-17"
      },
      {
        "name": "Intel Core i7 - 13th Gen \u2022 RTX 4050 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4050 6GB",
        "price": 23505.0,
        "sku": "LAP-AS-18"
      },
      {
        "name": "Intel Core i7 - 13th Gen \u2022 RTX 4060 8GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 4060 8GB",
        "price": 24542.0,
        "sku": "LAP-AS-19"
      },
      {
        "name": "Intel Core i9 - 13th Gen \u2022 RTX 4060 8GB \u2022 1TB SSD",
        "storage": "1TB SSD",
        "color": "RTX 4060 8GB",
        "price": 26616.0,
        "sku": "LAP-AS-20"
      }
    ],
    "images": [
      "/Volumes/TSU303_Data/Commerce_Catalog/images/laptops/asus-fx507.png"
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
        "name": "Intel Core i5 - 11th Gen \u2022 RTX 3050 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 13135.0,
        "sku": "LAP-HP-27"
      },
      {
        "name": "Intel Core i7 - 11th Gen \u2022 RTX 3050 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 14518.0,
        "sku": "LAP-HP-28"
      },
      {
        "name": "Intel Core i7 - 11th Gen \u2022 RTX 3060 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3060 6GB",
        "price": 15555.0,
        "sku": "LAP-HP-29"
      }
    ],
    "images": [
      "/Volumes/TSU303_Data/Commerce_Catalog/images/laptops/hp-omen-victus-7.png"
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
        "name": "Intel Core i5 - 10th Gen \u2022 GTX 1650 Ti 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 Ti 4GB",
        "price": 10370.0,
        "sku": "LAP-HP-24"
      },
      {
        "name": "Intel Core i7 - 10th Gen \u2022 GTX 1650 Ti 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 Ti 4GB",
        "price": 11753.0,
        "sku": "LAP-HP-25"
      },
      {
        "name": "Intel Core i7 - 10th Gen \u2022 GTX 1660 Ti 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1660 Ti 6GB",
        "price": 12790.0,
        "sku": "LAP-HP-26"
      }
    ],
    "images": [
      "/Volumes/TSU303_Data/Commerce_Catalog/images/laptops/hp-omen-victus-6.png"
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
        "name": "Intel Core i7 - 9th Gen \u2022 GTX 1650 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 4GB",
        "price": 9679.0,
        "sku": "LAP-AS-06"
      },
      {
        "name": "Intel Core i7 - 9th Gen \u2022 GTX 1660 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1660 6GB",
        "price": 10370.0,
        "sku": "LAP-AS-07"
      }
    ],
    "images": [
      "/Volumes/TSU303_Data/Commerce_Catalog/images/laptops/asus-fx95gt-9750.png"
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
        "name": "Intel Core i5 - 10th Gen \u2022 GTX 1650 Ti 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 Ti 4GB",
        "price": 9333.0,
        "sku": "LAP-AS-08"
      },
      {
        "name": "Intel Core i7 - 10th Gen \u2022 GTX 1650 Ti 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 Ti 4GB",
        "price": 10716.0,
        "sku": "LAP-AS-09"
      },
      {
        "name": "Intel Core i7 - 10th Gen \u2022 GTX 1660 Ti 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1660 Ti 6GB",
        "price": 11407.0,
        "sku": "LAP-AS-10"
      },
      {
        "name": "Intel Core i5 - 11th Gen \u2022 RTX 3050 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 11753.0,
        "sku": "LAP-AS-11"
      },
      {
        "name": "Intel Core i7 - 11th Gen \u2022 RTX 3050 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3050 4GB",
        "price": 12790.0,
        "sku": "LAP-AS-12"
      },
      {
        "name": "Intel Core i7 - 11th Gen \u2022 RTX 3060 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "RTX 3060 6GB",
        "price": 13827.0,
        "sku": "LAP-AS-13"
      }
    ],
    "images": [
      "/Volumes/TSU303_Data/Commerce_Catalog/images/laptops/asus-fx506.png"
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
        "name": "Intel Core i5 - 9th Gen \u2022 GTX 1650 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 4GB",
        "price": 9333.0,
        "sku": "LAP-HP-21"
      },
      {
        "name": "Intel Core i7 - 9th Gen \u2022 GTX 1650 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 4GB",
        "price": 10370.0,
        "sku": "LAP-HP-22"
      },
      {
        "name": "Intel Core i7 - 9th Gen \u2022 GTX 1660 Ti 6GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1660 Ti 6GB",
        "price": 11407.0,
        "sku": "LAP-HP-23"
      }
    ],
    "images": [
      "/Volumes/TSU303_Data/Commerce_Catalog/images/laptops/hp-omen-victus-5.png"
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
        "name": "Intel Core i5 - 9th Gen \u2022 GTX 1650 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1650 4GB",
        "price": 8642.0,
        "sku": "LAP-AS-05"
      }
    ],
    "images": [
      "/Volumes/TSU303_Data/Commerce_Catalog/images/laptops/asus-fx95gt-9300.png"
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
        "name": "Intel Core i5 - 8th Gen \u2022 GTX 1050 Ti 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1050 Ti 4GB",
        "price": 8296.0,
        "sku": "LAP-AS-03"
      },
      {
        "name": "Intel Core i7 - 8th Gen \u2022 GTX 1050 Ti 4GB \u2022 512GB SSD",
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
        "name": "Intel Core i5 - 7th Gen \u2022 GTX 1050 4GB \u2022 512GB SSD",
        "storage": "512GB SSD",
        "color": "GTX 1050 4GB",
        "price": 7605.0,
        "sku": "LAP-AS-01"
      },
      {
        "name": "Intel Core i7 - 7th Gen \u2022 GTX 1050 4GB \u2022 512GB SSD",
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
    "id": "apparel_t6",
    "category": "t_shirts",
    "subcategory": "t_shirts",
    "brand": "Essentials",
    "model": "Classic Ribbed-Cuff Long-Sleeve Cotton Tee",
    "title": "Classic Ribbed-Cuff Long-Sleeve Cotton Tee",
    "description": "Premium midweight long-sleeve staple engineered for multi-season versatility. Features clean seamwork and resilient collar construction suitable as a standalone top or warm base-layer.",
    "price_retail": 165.39,
    "price_team": 143.06,
    "specs": {
      "Material": "100% Combed Cotton (240 GSM)",
      "Fit Profile": "Standard Tailored Fit",
      "Fabric Weight": "240 GSM",
      "Fit Guidance": "Clean, tailored silhouette through the arms and torso."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "S \u2022 Pure White",
        "storage": "S",
        "color": "Pure White",
        "price": 165.39,
        "sku": "T6-S-PUR"
      },
      {
        "name": "S \u2022 Black",
        "storage": "S",
        "color": "Black",
        "price": 165.39,
        "sku": "T6-S-BLA"
      },
      {
        "name": "S \u2022 Heather Grey",
        "storage": "S",
        "color": "Heather Grey",
        "price": 165.39,
        "sku": "T6-S-HEA"
      },
      {
        "name": "S \u2022 Forest Green",
        "storage": "S",
        "color": "Forest Green",
        "price": 165.39,
        "sku": "T6-S-FOR"
      },
      {
        "name": "M \u2022 Pure White",
        "storage": "M",
        "color": "Pure White",
        "price": 165.39,
        "sku": "T6-M-PUR"
      },
      {
        "name": "M \u2022 Black",
        "storage": "M",
        "color": "Black",
        "price": 165.39,
        "sku": "T6-M-BLA"
      },
      {
        "name": "M \u2022 Heather Grey",
        "storage": "M",
        "color": "Heather Grey",
        "price": 165.39,
        "sku": "T6-M-HEA"
      },
      {
        "name": "M \u2022 Forest Green",
        "storage": "M",
        "color": "Forest Green",
        "price": 165.39,
        "sku": "T6-M-FOR"
      },
      {
        "name": "L \u2022 Pure White",
        "storage": "L",
        "color": "Pure White",
        "price": 165.39,
        "sku": "T6-L-PUR"
      },
      {
        "name": "L \u2022 Black",
        "storage": "L",
        "color": "Black",
        "price": 165.39,
        "sku": "T6-L-BLA"
      },
      {
        "name": "L \u2022 Heather Grey",
        "storage": "L",
        "color": "Heather Grey",
        "price": 165.39,
        "sku": "T6-L-HEA"
      },
      {
        "name": "L \u2022 Forest Green",
        "storage": "L",
        "color": "Forest Green",
        "price": 165.39,
        "sku": "T6-L-FOR"
      },
      {
        "name": "XL \u2022 Pure White",
        "storage": "XL",
        "color": "Pure White",
        "price": 165.39,
        "sku": "T6-XL-PUR"
      },
      {
        "name": "XL \u2022 Black",
        "storage": "XL",
        "color": "Black",
        "price": 165.39,
        "sku": "T6-XL-BLA"
      },
      {
        "name": "XL \u2022 Heather Grey",
        "storage": "XL",
        "color": "Heather Grey",
        "price": 165.39,
        "sku": "T6-XL-HEA"
      },
      {
        "name": "XL \u2022 Forest Green",
        "storage": "XL",
        "color": "Forest Green",
        "price": 165.39,
        "sku": "T6-XL-FOR"
      },
      {
        "name": "2XL \u2022 Pure White",
        "storage": "2XL",
        "color": "Pure White",
        "price": 165.39,
        "sku": "T6-2XL-PUR"
      },
      {
        "name": "2XL \u2022 Black",
        "storage": "2XL",
        "color": "Black",
        "price": 165.39,
        "sku": "T6-2XL-BLA"
      },
      {
        "name": "2XL \u2022 Heather Grey",
        "storage": "2XL",
        "color": "Heather Grey",
        "price": 165.39,
        "sku": "T6-2XL-HEA"
      },
      {
        "name": "2XL \u2022 Forest Green",
        "storage": "2XL",
        "color": "Forest Green",
        "price": 165.39,
        "sku": "T6-2XL-FOR"
      }
    ],
    "images": [
      "/images/menswear/t6.jpg"
    ]
  },
  {
    "id": "apparel_t3",
    "category": "t_shirts",
    "subcategory": "t_shirts",
    "brand": "Essentials",
    "model": "Everyday Premium Long-Staple Cotton Tee",
    "title": "Everyday Premium Long-Staple Cotton Tee",
    "description": "The quintessential everyday foundation tee made from silky-smooth Xinjiang cotton. Features exceptional breathability and moisture control, ideal for warm climates and daily layering.",
    "price_retail": 134.67,
    "price_team": 116.49,
    "specs": {
      "Material": "100% Xinjiang Long-Staple Cotton (200 GSM)",
      "Fit Profile": "Standard Modern Fit",
      "Fabric Weight": "200 GSM",
      "Fit Guidance": "Tailored clean drape that fits comfortably under button-ups or outerwear."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "S \u2022 Crisp White",
        "storage": "S",
        "color": "Crisp White",
        "price": 134.67,
        "sku": "T3-S-CRI"
      },
      {
        "name": "S \u2022 Jet Black",
        "storage": "S",
        "color": "Jet Black",
        "price": 134.67,
        "sku": "T3-S-JET"
      },
      {
        "name": "S \u2022 Steel Grey",
        "storage": "S",
        "color": "Steel Grey",
        "price": 134.67,
        "sku": "T3-S-STE"
      },
      {
        "name": "S \u2022 Dark Navy",
        "storage": "S",
        "color": "Dark Navy",
        "price": 134.67,
        "sku": "T3-S-DAR"
      },
      {
        "name": "S \u2022 Mocha Brown",
        "storage": "S",
        "color": "Mocha Brown",
        "price": 134.67,
        "sku": "T3-S-MOC"
      },
      {
        "name": "M \u2022 Crisp White",
        "storage": "M",
        "color": "Crisp White",
        "price": 134.67,
        "sku": "T3-M-CRI"
      },
      {
        "name": "M \u2022 Jet Black",
        "storage": "M",
        "color": "Jet Black",
        "price": 134.67,
        "sku": "T3-M-JET"
      },
      {
        "name": "M \u2022 Steel Grey",
        "storage": "M",
        "color": "Steel Grey",
        "price": 134.67,
        "sku": "T3-M-STE"
      },
      {
        "name": "M \u2022 Dark Navy",
        "storage": "M",
        "color": "Dark Navy",
        "price": 134.67,
        "sku": "T3-M-DAR"
      },
      {
        "name": "M \u2022 Mocha Brown",
        "storage": "M",
        "color": "Mocha Brown",
        "price": 134.67,
        "sku": "T3-M-MOC"
      },
      {
        "name": "L \u2022 Crisp White",
        "storage": "L",
        "color": "Crisp White",
        "price": 134.67,
        "sku": "T3-L-CRI"
      },
      {
        "name": "L \u2022 Jet Black",
        "storage": "L",
        "color": "Jet Black",
        "price": 134.67,
        "sku": "T3-L-JET"
      },
      {
        "name": "L \u2022 Steel Grey",
        "storage": "L",
        "color": "Steel Grey",
        "price": 134.67,
        "sku": "T3-L-STE"
      },
      {
        "name": "L \u2022 Dark Navy",
        "storage": "L",
        "color": "Dark Navy",
        "price": 134.67,
        "sku": "T3-L-DAR"
      },
      {
        "name": "L \u2022 Mocha Brown",
        "storage": "L",
        "color": "Mocha Brown",
        "price": 134.67,
        "sku": "T3-L-MOC"
      },
      {
        "name": "XL \u2022 Crisp White",
        "storage": "XL",
        "color": "Crisp White",
        "price": 134.67,
        "sku": "T3-XL-CRI"
      },
      {
        "name": "XL \u2022 Jet Black",
        "storage": "XL",
        "color": "Jet Black",
        "price": 134.67,
        "sku": "T3-XL-JET"
      },
      {
        "name": "XL \u2022 Steel Grey",
        "storage": "XL",
        "color": "Steel Grey",
        "price": 134.67,
        "sku": "T3-XL-STE"
      },
      {
        "name": "XL \u2022 Dark Navy",
        "storage": "XL",
        "color": "Dark Navy",
        "price": 134.67,
        "sku": "T3-XL-DAR"
      },
      {
        "name": "XL \u2022 Mocha Brown",
        "storage": "XL",
        "color": "Mocha Brown",
        "price": 134.67,
        "sku": "T3-XL-MOC"
      },
      {
        "name": "2XL \u2022 Crisp White",
        "storage": "2XL",
        "color": "Crisp White",
        "price": 134.67,
        "sku": "T3-2XL-CRI"
      },
      {
        "name": "2XL \u2022 Jet Black",
        "storage": "2XL",
        "color": "Jet Black",
        "price": 134.67,
        "sku": "T3-2XL-JET"
      },
      {
        "name": "2XL \u2022 Steel Grey",
        "storage": "2XL",
        "color": "Steel Grey",
        "price": 134.67,
        "sku": "T3-2XL-STE"
      },
      {
        "name": "2XL \u2022 Dark Navy",
        "storage": "2XL",
        "color": "Dark Navy",
        "price": 134.67,
        "sku": "T3-2XL-DAR"
      },
      {
        "name": "2XL \u2022 Mocha Brown",
        "storage": "2XL",
        "color": "Mocha Brown",
        "price": 134.67,
        "sku": "T3-2XL-MOC"
      }
    ],
    "images": [
      "/images/menswear/t3.jpg"
    ]
  },
  {
    "id": "apparel_t1",
    "category": "t_shirts",
    "subcategory": "t_shirts",
    "brand": "Essentials",
    "model": "Classic 100% Combed Cotton Crewneck Tee",
    "title": "Classic 100% Combed Cotton Crewneck Tee",
    "description": "Crafted from 100% long-staple combed cotton, this essential crewneck tee provides an ultra-soft hand feel with lasting shape retention. Its reinforced rib collar prevents bacon-neck distortion through repeated washes.",
    "price_retail": 131.63,
    "price_team": 113.86,
    "specs": {
      "Material": "100% Long-Staple Combed Cotton (220 GSM)",
      "Fit Profile": "Regular / Relaxed Fit",
      "Fabric Weight": "220 GSM",
      "Fit Guidance": "True to size. For an oversized boxy aesthetic, consider sizing up one full size."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "S \u2022 Pure White",
        "storage": "S",
        "color": "Pure White",
        "price": 131.63,
        "sku": "T1-S-PUR"
      },
      {
        "name": "S \u2022 Charcoal Black",
        "storage": "S",
        "color": "Charcoal Black",
        "price": 131.63,
        "sku": "T1-S-CHA"
      },
      {
        "name": "S \u2022 Heather Grey",
        "storage": "S",
        "color": "Heather Grey",
        "price": 131.63,
        "sku": "T1-S-HEA"
      },
      {
        "name": "S \u2022 Navy Blue",
        "storage": "S",
        "color": "Navy Blue",
        "price": 131.63,
        "sku": "T1-S-NAV"
      },
      {
        "name": "S \u2022 Sage Green",
        "storage": "S",
        "color": "Sage Green",
        "price": 131.63,
        "sku": "T1-S-SAG"
      },
      {
        "name": "M \u2022 Pure White",
        "storage": "M",
        "color": "Pure White",
        "price": 131.63,
        "sku": "T1-M-PUR"
      },
      {
        "name": "M \u2022 Charcoal Black",
        "storage": "M",
        "color": "Charcoal Black",
        "price": 131.63,
        "sku": "T1-M-CHA"
      },
      {
        "name": "M \u2022 Heather Grey",
        "storage": "M",
        "color": "Heather Grey",
        "price": 131.63,
        "sku": "T1-M-HEA"
      },
      {
        "name": "M \u2022 Navy Blue",
        "storage": "M",
        "color": "Navy Blue",
        "price": 131.63,
        "sku": "T1-M-NAV"
      },
      {
        "name": "M \u2022 Sage Green",
        "storage": "M",
        "color": "Sage Green",
        "price": 131.63,
        "sku": "T1-M-SAG"
      },
      {
        "name": "L \u2022 Pure White",
        "storage": "L",
        "color": "Pure White",
        "price": 131.63,
        "sku": "T1-L-PUR"
      },
      {
        "name": "L \u2022 Charcoal Black",
        "storage": "L",
        "color": "Charcoal Black",
        "price": 131.63,
        "sku": "T1-L-CHA"
      },
      {
        "name": "L \u2022 Heather Grey",
        "storage": "L",
        "color": "Heather Grey",
        "price": 131.63,
        "sku": "T1-L-HEA"
      },
      {
        "name": "L \u2022 Navy Blue",
        "storage": "L",
        "color": "Navy Blue",
        "price": 131.63,
        "sku": "T1-L-NAV"
      },
      {
        "name": "L \u2022 Sage Green",
        "storage": "L",
        "color": "Sage Green",
        "price": 131.63,
        "sku": "T1-L-SAG"
      },
      {
        "name": "XL \u2022 Pure White",
        "storage": "XL",
        "color": "Pure White",
        "price": 131.63,
        "sku": "T1-XL-PUR"
      },
      {
        "name": "XL \u2022 Charcoal Black",
        "storage": "XL",
        "color": "Charcoal Black",
        "price": 131.63,
        "sku": "T1-XL-CHA"
      },
      {
        "name": "XL \u2022 Heather Grey",
        "storage": "XL",
        "color": "Heather Grey",
        "price": 131.63,
        "sku": "T1-XL-HEA"
      },
      {
        "name": "XL \u2022 Navy Blue",
        "storage": "XL",
        "color": "Navy Blue",
        "price": 131.63,
        "sku": "T1-XL-NAV"
      },
      {
        "name": "XL \u2022 Sage Green",
        "storage": "XL",
        "color": "Sage Green",
        "price": 131.63,
        "sku": "T1-XL-SAG"
      },
      {
        "name": "2XL \u2022 Pure White",
        "storage": "2XL",
        "color": "Pure White",
        "price": 131.63,
        "sku": "T1-2XL-PUR"
      },
      {
        "name": "2XL \u2022 Charcoal Black",
        "storage": "2XL",
        "color": "Charcoal Black",
        "price": 131.63,
        "sku": "T1-2XL-CHA"
      },
      {
        "name": "2XL \u2022 Heather Grey",
        "storage": "2XL",
        "color": "Heather Grey",
        "price": 131.63,
        "sku": "T1-2XL-HEA"
      },
      {
        "name": "2XL \u2022 Navy Blue",
        "storage": "2XL",
        "color": "Navy Blue",
        "price": 131.63,
        "sku": "T1-2XL-NAV"
      },
      {
        "name": "2XL \u2022 Sage Green",
        "storage": "2XL",
        "color": "Sage Green",
        "price": 131.63,
        "sku": "T1-2XL-SAG"
      },
      {
        "name": "3XL \u2022 Pure White",
        "storage": "3XL",
        "color": "Pure White",
        "price": 131.63,
        "sku": "T1-3XL-PUR"
      },
      {
        "name": "3XL \u2022 Charcoal Black",
        "storage": "3XL",
        "color": "Charcoal Black",
        "price": 131.63,
        "sku": "T1-3XL-CHA"
      },
      {
        "name": "3XL \u2022 Heather Grey",
        "storage": "3XL",
        "color": "Heather Grey",
        "price": 131.63,
        "sku": "T1-3XL-HEA"
      },
      {
        "name": "3XL \u2022 Navy Blue",
        "storage": "3XL",
        "color": "Navy Blue",
        "price": 131.63,
        "sku": "T1-3XL-NAV"
      },
      {
        "name": "3XL \u2022 Sage Green",
        "storage": "3XL",
        "color": "Sage Green",
        "price": 131.63,
        "sku": "T1-3XL-SAG"
      }
    ],
    "images": [
      "/images/menswear/t1.jpg"
    ]
  },
  {
    "id": "apparel_t2",
    "category": "t_shirts",
    "subcategory": "t_shirts",
    "brand": "Essentials",
    "model": "Heavyweight 280GSM Slub Cotton Relaxed Tee",
    "title": "Heavyweight 280GSM Slub Cotton Relaxed Tee",
    "description": "A structured heavyweight t-shirt featuring a subtle slub texture for depth and visual richness. Built with substantial body that drapes cleanly without clinging.",
    "price_retail": 129.17,
    "price_team": 111.73,
    "specs": {
      "Material": "100% Premium Slub Cotton (280 GSM)",
      "Fit Profile": "Relaxed Boxy Fit",
      "Fabric Weight": "280 GSM",
      "Fit Guidance": "Cut with an effortless dropped shoulder; select your standard size."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Vintage White",
        "storage": "M",
        "color": "Vintage White",
        "price": 129.17,
        "sku": "T2-M-VIN"
      },
      {
        "name": "M \u2022 Washed Black",
        "storage": "M",
        "color": "Washed Black",
        "price": 129.17,
        "sku": "T2-M-WAS"
      },
      {
        "name": "M \u2022 Sand Khaki",
        "storage": "M",
        "color": "Sand Khaki",
        "price": 129.17,
        "sku": "T2-M-SAN"
      },
      {
        "name": "M \u2022 Olive Green",
        "storage": "M",
        "color": "Olive Green",
        "price": 129.17,
        "sku": "T2-M-OLI"
      },
      {
        "name": "L \u2022 Vintage White",
        "storage": "L",
        "color": "Vintage White",
        "price": 129.17,
        "sku": "T2-L-VIN"
      },
      {
        "name": "L \u2022 Washed Black",
        "storage": "L",
        "color": "Washed Black",
        "price": 129.17,
        "sku": "T2-L-WAS"
      },
      {
        "name": "L \u2022 Sand Khaki",
        "storage": "L",
        "color": "Sand Khaki",
        "price": 129.17,
        "sku": "T2-L-SAN"
      },
      {
        "name": "L \u2022 Olive Green",
        "storage": "L",
        "color": "Olive Green",
        "price": 129.17,
        "sku": "T2-L-OLI"
      },
      {
        "name": "XL \u2022 Vintage White",
        "storage": "XL",
        "color": "Vintage White",
        "price": 129.17,
        "sku": "T2-XL-VIN"
      },
      {
        "name": "XL \u2022 Washed Black",
        "storage": "XL",
        "color": "Washed Black",
        "price": 129.17,
        "sku": "T2-XL-WAS"
      },
      {
        "name": "XL \u2022 Sand Khaki",
        "storage": "XL",
        "color": "Sand Khaki",
        "price": 129.17,
        "sku": "T2-XL-SAN"
      },
      {
        "name": "XL \u2022 Olive Green",
        "storage": "XL",
        "color": "Olive Green",
        "price": 129.17,
        "sku": "T2-XL-OLI"
      },
      {
        "name": "2XL \u2022 Vintage White",
        "storage": "2XL",
        "color": "Vintage White",
        "price": 129.17,
        "sku": "T2-2XL-VIN"
      },
      {
        "name": "2XL \u2022 Washed Black",
        "storage": "2XL",
        "color": "Washed Black",
        "price": 129.17,
        "sku": "T2-2XL-WAS"
      },
      {
        "name": "2XL \u2022 Sand Khaki",
        "storage": "2XL",
        "color": "Sand Khaki",
        "price": 129.17,
        "sku": "T2-2XL-SAN"
      },
      {
        "name": "2XL \u2022 Olive Green",
        "storage": "2XL",
        "color": "Olive Green",
        "price": 129.17,
        "sku": "T2-2XL-OLI"
      },
      {
        "name": "3XL \u2022 Vintage White",
        "storage": "3XL",
        "color": "Vintage White",
        "price": 129.17,
        "sku": "T2-3XL-VIN"
      },
      {
        "name": "3XL \u2022 Washed Black",
        "storage": "3XL",
        "color": "Washed Black",
        "price": 129.17,
        "sku": "T2-3XL-WAS"
      },
      {
        "name": "3XL \u2022 Sand Khaki",
        "storage": "3XL",
        "color": "Sand Khaki",
        "price": 129.17,
        "sku": "T2-3XL-SAN"
      },
      {
        "name": "3XL \u2022 Olive Green",
        "storage": "3XL",
        "color": "Olive Green",
        "price": 129.17,
        "sku": "T2-3XL-OLI"
      }
    ],
    "images": [
      "/images/menswear/t2.jpg"
    ]
  },
  {
    "id": "apparel_t4",
    "category": "t_shirts",
    "subcategory": "t_shirts",
    "brand": "Essentials",
    "model": "Heavyweight 280G Long-Sleeve Crewneck Shirt",
    "title": "Heavyweight 280G Long-Sleeve Crewneck Shirt",
    "description": "Substantial heavyweight long-sleeve tee with snug ribbed wrist cuffs. Designed to provide core thermal comfort during cooler evenings while maintaining a crisp architectural drape.",
    "price_retail": 114.42,
    "price_team": 98.97,
    "specs": {
      "Material": "100% Dense Cotton Jersey (280 GSM)",
      "Fit Profile": "Relaxed Fit",
      "Fabric Weight": "280 GSM",
      "Fit Guidance": "Spacious through the chest and torso with neatly fitted cuffs."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Optic White",
        "storage": "M",
        "color": "Optic White",
        "price": 114.42,
        "sku": "T4-M-OPT"
      },
      {
        "name": "M \u2022 Onyx Black",
        "storage": "M",
        "color": "Onyx Black",
        "price": 114.42,
        "sku": "T4-M-ONY"
      },
      {
        "name": "M \u2022 Charcoal Melange",
        "storage": "M",
        "color": "Charcoal Melange",
        "price": 114.42,
        "sku": "T4-M-CHA"
      },
      {
        "name": "M \u2022 Earthy Sand",
        "storage": "M",
        "color": "Earthy Sand",
        "price": 114.42,
        "sku": "T4-M-EAR"
      },
      {
        "name": "L \u2022 Optic White",
        "storage": "L",
        "color": "Optic White",
        "price": 114.42,
        "sku": "T4-L-OPT"
      },
      {
        "name": "L \u2022 Onyx Black",
        "storage": "L",
        "color": "Onyx Black",
        "price": 114.42,
        "sku": "T4-L-ONY"
      },
      {
        "name": "L \u2022 Charcoal Melange",
        "storage": "L",
        "color": "Charcoal Melange",
        "price": 114.42,
        "sku": "T4-L-CHA"
      },
      {
        "name": "L \u2022 Earthy Sand",
        "storage": "L",
        "color": "Earthy Sand",
        "price": 114.42,
        "sku": "T4-L-EAR"
      },
      {
        "name": "XL \u2022 Optic White",
        "storage": "XL",
        "color": "Optic White",
        "price": 114.42,
        "sku": "T4-XL-OPT"
      },
      {
        "name": "XL \u2022 Onyx Black",
        "storage": "XL",
        "color": "Onyx Black",
        "price": 114.42,
        "sku": "T4-XL-ONY"
      },
      {
        "name": "XL \u2022 Charcoal Melange",
        "storage": "XL",
        "color": "Charcoal Melange",
        "price": 114.42,
        "sku": "T4-XL-CHA"
      },
      {
        "name": "XL \u2022 Earthy Sand",
        "storage": "XL",
        "color": "Earthy Sand",
        "price": 114.42,
        "sku": "T4-XL-EAR"
      },
      {
        "name": "2XL \u2022 Optic White",
        "storage": "2XL",
        "color": "Optic White",
        "price": 114.42,
        "sku": "T4-2XL-OPT"
      },
      {
        "name": "2XL \u2022 Onyx Black",
        "storage": "2XL",
        "color": "Onyx Black",
        "price": 114.42,
        "sku": "T4-2XL-ONY"
      },
      {
        "name": "2XL \u2022 Charcoal Melange",
        "storage": "2XL",
        "color": "Charcoal Melange",
        "price": 114.42,
        "sku": "T4-2XL-CHA"
      },
      {
        "name": "2XL \u2022 Earthy Sand",
        "storage": "2XL",
        "color": "Earthy Sand",
        "price": 114.42,
        "sku": "T4-2XL-EAR"
      },
      {
        "name": "3XL \u2022 Optic White",
        "storage": "3XL",
        "color": "Optic White",
        "price": 114.42,
        "sku": "T4-3XL-OPT"
      },
      {
        "name": "3XL \u2022 Onyx Black",
        "storage": "3XL",
        "color": "Onyx Black",
        "price": 114.42,
        "sku": "T4-3XL-ONY"
      },
      {
        "name": "3XL \u2022 Charcoal Melange",
        "storage": "3XL",
        "color": "Charcoal Melange",
        "price": 114.42,
        "sku": "T4-3XL-CHA"
      },
      {
        "name": "3XL \u2022 Earthy Sand",
        "storage": "3XL",
        "color": "Earthy Sand",
        "price": 114.42,
        "sku": "T4-3XL-EAR"
      }
    ],
    "images": [
      "/images/menswear/t4.jpg"
    ]
  },
  {
    "id": "apparel_t5",
    "category": "t_shirts",
    "subcategory": "t_shirts",
    "brand": "Essentials",
    "model": "Minimalist Loose-Cut Everyday Base Tee",
    "title": "Minimalist Loose-Cut Everyday Base Tee",
    "description": "An airy, lightweight casual tee designed for effortless everyday wear and casual comfort. Made with soft ring-spun cotton that gets softer with every wash.",
    "price_retail": 98.89,
    "price_team": 85.54,
    "specs": {
      "Material": "100% Ring-Spun Cotton (190 GSM)",
      "Fit Profile": "Loose Casual Fit",
      "Fabric Weight": "190 GSM",
      "Fit Guidance": "Relaxed cut around the torso for unrestricted movement."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "S \u2022 Bright White",
        "storage": "S",
        "color": "Bright White",
        "price": 98.89,
        "sku": "T5-S-BRI"
      },
      {
        "name": "S \u2022 Deep Black",
        "storage": "S",
        "color": "Deep Black",
        "price": 98.89,
        "sku": "T5-S-DEE"
      },
      {
        "name": "S \u2022 Soft Beige",
        "storage": "S",
        "color": "Soft Beige",
        "price": 98.89,
        "sku": "T5-S-SOF"
      },
      {
        "name": "S \u2022 Slate Blue",
        "storage": "S",
        "color": "Slate Blue",
        "price": 98.89,
        "sku": "T5-S-SLA"
      },
      {
        "name": "M \u2022 Bright White",
        "storage": "M",
        "color": "Bright White",
        "price": 98.89,
        "sku": "T5-M-BRI"
      },
      {
        "name": "M \u2022 Deep Black",
        "storage": "M",
        "color": "Deep Black",
        "price": 98.89,
        "sku": "T5-M-DEE"
      },
      {
        "name": "M \u2022 Soft Beige",
        "storage": "M",
        "color": "Soft Beige",
        "price": 98.89,
        "sku": "T5-M-SOF"
      },
      {
        "name": "M \u2022 Slate Blue",
        "storage": "M",
        "color": "Slate Blue",
        "price": 98.89,
        "sku": "T5-M-SLA"
      },
      {
        "name": "L \u2022 Bright White",
        "storage": "L",
        "color": "Bright White",
        "price": 98.89,
        "sku": "T5-L-BRI"
      },
      {
        "name": "L \u2022 Deep Black",
        "storage": "L",
        "color": "Deep Black",
        "price": 98.89,
        "sku": "T5-L-DEE"
      },
      {
        "name": "L \u2022 Soft Beige",
        "storage": "L",
        "color": "Soft Beige",
        "price": 98.89,
        "sku": "T5-L-SOF"
      },
      {
        "name": "L \u2022 Slate Blue",
        "storage": "L",
        "color": "Slate Blue",
        "price": 98.89,
        "sku": "T5-L-SLA"
      },
      {
        "name": "XL \u2022 Bright White",
        "storage": "XL",
        "color": "Bright White",
        "price": 98.89,
        "sku": "T5-XL-BRI"
      },
      {
        "name": "XL \u2022 Deep Black",
        "storage": "XL",
        "color": "Deep Black",
        "price": 98.89,
        "sku": "T5-XL-DEE"
      },
      {
        "name": "XL \u2022 Soft Beige",
        "storage": "XL",
        "color": "Soft Beige",
        "price": 98.89,
        "sku": "T5-XL-SOF"
      },
      {
        "name": "XL \u2022 Slate Blue",
        "storage": "XL",
        "color": "Slate Blue",
        "price": 98.89,
        "sku": "T5-XL-SLA"
      },
      {
        "name": "2XL \u2022 Bright White",
        "storage": "2XL",
        "color": "Bright White",
        "price": 98.89,
        "sku": "T5-2XL-BRI"
      },
      {
        "name": "2XL \u2022 Deep Black",
        "storage": "2XL",
        "color": "Deep Black",
        "price": 98.89,
        "sku": "T5-2XL-DEE"
      },
      {
        "name": "2XL \u2022 Soft Beige",
        "storage": "2XL",
        "color": "Soft Beige",
        "price": 98.89,
        "sku": "T5-2XL-SOF"
      },
      {
        "name": "2XL \u2022 Slate Blue",
        "storage": "2XL",
        "color": "Slate Blue",
        "price": 98.89,
        "sku": "T5-2XL-SLA"
      }
    ],
    "images": [
      "/images/menswear/t5.jpg"
    ]
  },
  {
    "id": "apparel_h6",
    "category": "hoodies",
    "subcategory": "hoodies",
    "brand": "Essentials",
    "model": "Heavyweight Boxy-Fit Zip-Up Hoodie",
    "title": "Heavyweight Boxy-Fit Zip-Up Hoodie",
    "description": "A luxury streetwear-inspired zip hoodie boasting a heavy 420 GSM fabric weight and a structured boxy silhouette. Built to endure daily wear with premium hardware.",
    "price_retail": 201.84,
    "price_team": 174.59,
    "specs": {
      "Material": "85% Heavy Cotton, 15% Polyester (420 GSM)",
      "Fit Profile": "Boxy Oversized Fit",
      "Fabric Weight": "420 GSM",
      "Fit Guidance": "Intentionally designed with a cropped body and wide chest."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Faded Black",
        "storage": "M",
        "color": "Faded Black",
        "price": 201.84,
        "sku": "H6-M-FAD"
      },
      {
        "name": "M \u2022 Heather Grey",
        "storage": "M",
        "color": "Heather Grey",
        "price": 201.84,
        "sku": "H6-M-HEA"
      },
      {
        "name": "M \u2022 Taupe Brown",
        "storage": "M",
        "color": "Taupe Brown",
        "price": 201.84,
        "sku": "H6-M-TAU"
      },
      {
        "name": "L \u2022 Faded Black",
        "storage": "L",
        "color": "Faded Black",
        "price": 201.84,
        "sku": "H6-L-FAD"
      },
      {
        "name": "L \u2022 Heather Grey",
        "storage": "L",
        "color": "Heather Grey",
        "price": 201.84,
        "sku": "H6-L-HEA"
      },
      {
        "name": "L \u2022 Taupe Brown",
        "storage": "L",
        "color": "Taupe Brown",
        "price": 201.84,
        "sku": "H6-L-TAU"
      },
      {
        "name": "XL \u2022 Faded Black",
        "storage": "XL",
        "color": "Faded Black",
        "price": 201.84,
        "sku": "H6-XL-FAD"
      },
      {
        "name": "XL \u2022 Heather Grey",
        "storage": "XL",
        "color": "Heather Grey",
        "price": 201.84,
        "sku": "H6-XL-HEA"
      },
      {
        "name": "XL \u2022 Taupe Brown",
        "storage": "XL",
        "color": "Taupe Brown",
        "price": 201.84,
        "sku": "H6-XL-TAU"
      },
      {
        "name": "2XL \u2022 Faded Black",
        "storage": "2XL",
        "color": "Faded Black",
        "price": 201.84,
        "sku": "H6-2XL-FAD"
      },
      {
        "name": "2XL \u2022 Heather Grey",
        "storage": "2XL",
        "color": "Heather Grey",
        "price": 201.84,
        "sku": "H6-2XL-HEA"
      },
      {
        "name": "2XL \u2022 Taupe Brown",
        "storage": "2XL",
        "color": "Taupe Brown",
        "price": 201.84,
        "sku": "H6-2XL-TAU"
      }
    ],
    "images": [
      "/images/menswear/h6.jpg"
    ]
  },
  {
    "id": "apparel_h2",
    "category": "hoodies",
    "subcategory": "hoodies",
    "brand": "Essentials",
    "model": "Pure Cotton Minimalist Relaxed Pullover Hoodie",
    "title": "Pure Cotton Minimalist Relaxed Pullover Hoodie",
    "description": "A clean, modern hoodie crafted from premium French terry cotton with zero external branding. Offers a clean, draped drape suitable for both lounge and elevated street styling.",
    "price_retail": 191.71,
    "price_team": 165.83,
    "specs": {
      "Material": "100% Cotton Loopback French Terry (400 GSM)",
      "Fit Profile": "Modern Relaxed Fit",
      "Fabric Weight": "400 GSM",
      "Fit Guidance": "Boxy body with slightly elongated sleeves for a refined silhouette."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "S \u2022 Bone White",
        "storage": "S",
        "color": "Bone White",
        "price": 191.71,
        "sku": "H2-S-BON"
      },
      {
        "name": "S \u2022 Washed Black",
        "storage": "S",
        "color": "Washed Black",
        "price": 191.71,
        "sku": "H2-S-WAS"
      },
      {
        "name": "S \u2022 Dusty Olive",
        "storage": "S",
        "color": "Dusty Olive",
        "price": 191.71,
        "sku": "H2-S-DUS"
      },
      {
        "name": "S \u2022 Slate Navy",
        "storage": "S",
        "color": "Slate Navy",
        "price": 191.71,
        "sku": "H2-S-SLA"
      },
      {
        "name": "M \u2022 Bone White",
        "storage": "M",
        "color": "Bone White",
        "price": 191.71,
        "sku": "H2-M-BON"
      },
      {
        "name": "M \u2022 Washed Black",
        "storage": "M",
        "color": "Washed Black",
        "price": 191.71,
        "sku": "H2-M-WAS"
      },
      {
        "name": "M \u2022 Dusty Olive",
        "storage": "M",
        "color": "Dusty Olive",
        "price": 191.71,
        "sku": "H2-M-DUS"
      },
      {
        "name": "M \u2022 Slate Navy",
        "storage": "M",
        "color": "Slate Navy",
        "price": 191.71,
        "sku": "H2-M-SLA"
      },
      {
        "name": "L \u2022 Bone White",
        "storage": "L",
        "color": "Bone White",
        "price": 191.71,
        "sku": "H2-L-BON"
      },
      {
        "name": "L \u2022 Washed Black",
        "storage": "L",
        "color": "Washed Black",
        "price": 191.71,
        "sku": "H2-L-WAS"
      },
      {
        "name": "L \u2022 Dusty Olive",
        "storage": "L",
        "color": "Dusty Olive",
        "price": 191.71,
        "sku": "H2-L-DUS"
      },
      {
        "name": "L \u2022 Slate Navy",
        "storage": "L",
        "color": "Slate Navy",
        "price": 191.71,
        "sku": "H2-L-SLA"
      },
      {
        "name": "XL \u2022 Bone White",
        "storage": "XL",
        "color": "Bone White",
        "price": 191.71,
        "sku": "H2-XL-BON"
      },
      {
        "name": "XL \u2022 Washed Black",
        "storage": "XL",
        "color": "Washed Black",
        "price": 191.71,
        "sku": "H2-XL-WAS"
      },
      {
        "name": "XL \u2022 Dusty Olive",
        "storage": "XL",
        "color": "Dusty Olive",
        "price": 191.71,
        "sku": "H2-XL-DUS"
      },
      {
        "name": "XL \u2022 Slate Navy",
        "storage": "XL",
        "color": "Slate Navy",
        "price": 191.71,
        "sku": "H2-XL-SLA"
      },
      {
        "name": "2XL \u2022 Bone White",
        "storage": "2XL",
        "color": "Bone White",
        "price": 191.71,
        "sku": "H2-2XL-BON"
      },
      {
        "name": "2XL \u2022 Washed Black",
        "storage": "2XL",
        "color": "Washed Black",
        "price": 191.71,
        "sku": "H2-2XL-WAS"
      },
      {
        "name": "2XL \u2022 Dusty Olive",
        "storage": "2XL",
        "color": "Dusty Olive",
        "price": 191.71,
        "sku": "H2-2XL-DUS"
      },
      {
        "name": "2XL \u2022 Slate Navy",
        "storage": "2XL",
        "color": "Slate Navy",
        "price": 191.71,
        "sku": "H2-2XL-SLA"
      }
    ],
    "images": [
      "/images/menswear/h2.jpg"
    ]
  },
  {
    "id": "apparel_h1",
    "category": "hoodies",
    "subcategory": "hoodies",
    "brand": "Essentials",
    "model": "Heavyweight Fleece-Lined Pullover Hoodie",
    "title": "Heavyweight Fleece-Lined Pullover Hoodie",
    "description": "Substantial cold-weather pullover lined with insulating micro-fleece. Engineered with a double-layered structured hood that stands upright and a spacious front kangaroo pocket.",
    "price_retail": 165.39,
    "price_team": 143.06,
    "specs": {
      "Material": "80% Combed Cotton, 20% Polyester (380 GSM Fleece)",
      "Fit Profile": "Relaxed Boxy Fit",
      "Fabric Weight": "380 GSM",
      "Fit Guidance": "Generously proportioned through the shoulders and chest for easy layering."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Charcoal Heather",
        "storage": "M",
        "color": "Charcoal Heather",
        "price": 165.39,
        "sku": "H1-M-CHA"
      },
      {
        "name": "M \u2022 Midnight Black",
        "storage": "M",
        "color": "Midnight Black",
        "price": 165.39,
        "sku": "H1-M-MID"
      },
      {
        "name": "M \u2022 Oatmeal Melange",
        "storage": "M",
        "color": "Oatmeal Melange",
        "price": 165.39,
        "sku": "H1-M-OAT"
      },
      {
        "name": "M \u2022 Pine Green",
        "storage": "M",
        "color": "Pine Green",
        "price": 165.39,
        "sku": "H1-M-PIN"
      },
      {
        "name": "L \u2022 Charcoal Heather",
        "storage": "L",
        "color": "Charcoal Heather",
        "price": 165.39,
        "sku": "H1-L-CHA"
      },
      {
        "name": "L \u2022 Midnight Black",
        "storage": "L",
        "color": "Midnight Black",
        "price": 165.39,
        "sku": "H1-L-MID"
      },
      {
        "name": "L \u2022 Oatmeal Melange",
        "storage": "L",
        "color": "Oatmeal Melange",
        "price": 165.39,
        "sku": "H1-L-OAT"
      },
      {
        "name": "L \u2022 Pine Green",
        "storage": "L",
        "color": "Pine Green",
        "price": 165.39,
        "sku": "H1-L-PIN"
      },
      {
        "name": "XL \u2022 Charcoal Heather",
        "storage": "XL",
        "color": "Charcoal Heather",
        "price": 165.39,
        "sku": "H1-XL-CHA"
      },
      {
        "name": "XL \u2022 Midnight Black",
        "storage": "XL",
        "color": "Midnight Black",
        "price": 165.39,
        "sku": "H1-XL-MID"
      },
      {
        "name": "XL \u2022 Oatmeal Melange",
        "storage": "XL",
        "color": "Oatmeal Melange",
        "price": 165.39,
        "sku": "H1-XL-OAT"
      },
      {
        "name": "XL \u2022 Pine Green",
        "storage": "XL",
        "color": "Pine Green",
        "price": 165.39,
        "sku": "H1-XL-PIN"
      },
      {
        "name": "2XL \u2022 Charcoal Heather",
        "storage": "2XL",
        "color": "Charcoal Heather",
        "price": 165.39,
        "sku": "H1-2XL-CHA"
      },
      {
        "name": "2XL \u2022 Midnight Black",
        "storage": "2XL",
        "color": "Midnight Black",
        "price": 165.39,
        "sku": "H1-2XL-MID"
      },
      {
        "name": "2XL \u2022 Oatmeal Melange",
        "storage": "2XL",
        "color": "Oatmeal Melange",
        "price": 165.39,
        "sku": "H1-2XL-OAT"
      },
      {
        "name": "2XL \u2022 Pine Green",
        "storage": "2XL",
        "color": "Pine Green",
        "price": 165.39,
        "sku": "H1-2XL-PIN"
      },
      {
        "name": "3XL \u2022 Charcoal Heather",
        "storage": "3XL",
        "color": "Charcoal Heather",
        "price": 165.39,
        "sku": "H1-3XL-CHA"
      },
      {
        "name": "3XL \u2022 Midnight Black",
        "storage": "3XL",
        "color": "Midnight Black",
        "price": 165.39,
        "sku": "H1-3XL-MID"
      },
      {
        "name": "3XL \u2022 Oatmeal Melange",
        "storage": "3XL",
        "color": "Oatmeal Melange",
        "price": 165.39,
        "sku": "H1-3XL-OAT"
      },
      {
        "name": "3XL \u2022 Pine Green",
        "storage": "3XL",
        "color": "Pine Green",
        "price": 165.39,
        "sku": "H1-3XL-PIN"
      }
    ],
    "images": [
      "/images/menswear/h1.jpg"
    ]
  },
  {
    "id": "apparel_h3",
    "category": "hoodies",
    "subcategory": "hoodies",
    "brand": "Essentials",
    "model": "Full-Zip Fleece-Lined Cotton Hoodie",
    "title": "Full-Zip Fleece-Lined Cotton Hoodie",
    "description": "Versatile full-zip fleece hoodie built for adjustable temperature control. Features a smooth glide metallic zipper, split kangaroo front pockets, and an ultra-soft thermal lining.",
    "price_retail": 150.2,
    "price_team": 129.92,
    "specs": {
      "Material": "75% Cotton, 25% Polyester (360 GSM)",
      "Fit Profile": "Standard Athletic Fit",
      "Fabric Weight": "360 GSM",
      "Fit Guidance": "Standard athletic cut. Fits cleanly over t-shirts and shirts."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Jet Black",
        "storage": "M",
        "color": "Jet Black",
        "price": 150.2,
        "sku": "H3-M-JET"
      },
      {
        "name": "M \u2022 Medium Grey",
        "storage": "M",
        "color": "Medium Grey",
        "price": 150.2,
        "sku": "H3-M-MED"
      },
      {
        "name": "M \u2022 Deep Navy",
        "storage": "M",
        "color": "Deep Navy",
        "price": 150.2,
        "sku": "H3-M-DEE"
      },
      {
        "name": "M \u2022 Burgundy",
        "storage": "M",
        "color": "Burgundy",
        "price": 150.2,
        "sku": "H3-M-BUR"
      },
      {
        "name": "L \u2022 Jet Black",
        "storage": "L",
        "color": "Jet Black",
        "price": 150.2,
        "sku": "H3-L-JET"
      },
      {
        "name": "L \u2022 Medium Grey",
        "storage": "L",
        "color": "Medium Grey",
        "price": 150.2,
        "sku": "H3-L-MED"
      },
      {
        "name": "L \u2022 Deep Navy",
        "storage": "L",
        "color": "Deep Navy",
        "price": 150.2,
        "sku": "H3-L-DEE"
      },
      {
        "name": "L \u2022 Burgundy",
        "storage": "L",
        "color": "Burgundy",
        "price": 150.2,
        "sku": "H3-L-BUR"
      },
      {
        "name": "XL \u2022 Jet Black",
        "storage": "XL",
        "color": "Jet Black",
        "price": 150.2,
        "sku": "H3-XL-JET"
      },
      {
        "name": "XL \u2022 Medium Grey",
        "storage": "XL",
        "color": "Medium Grey",
        "price": 150.2,
        "sku": "H3-XL-MED"
      },
      {
        "name": "XL \u2022 Deep Navy",
        "storage": "XL",
        "color": "Deep Navy",
        "price": 150.2,
        "sku": "H3-XL-DEE"
      },
      {
        "name": "XL \u2022 Burgundy",
        "storage": "XL",
        "color": "Burgundy",
        "price": 150.2,
        "sku": "H3-XL-BUR"
      },
      {
        "name": "2XL \u2022 Jet Black",
        "storage": "2XL",
        "color": "Jet Black",
        "price": 150.2,
        "sku": "H3-2XL-JET"
      },
      {
        "name": "2XL \u2022 Medium Grey",
        "storage": "2XL",
        "color": "Medium Grey",
        "price": 150.2,
        "sku": "H3-2XL-MED"
      },
      {
        "name": "2XL \u2022 Deep Navy",
        "storage": "2XL",
        "color": "Deep Navy",
        "price": 150.2,
        "sku": "H3-2XL-DEE"
      },
      {
        "name": "2XL \u2022 Burgundy",
        "storage": "2XL",
        "color": "Burgundy",
        "price": 150.2,
        "sku": "H3-2XL-BUR"
      },
      {
        "name": "3XL \u2022 Jet Black",
        "storage": "3XL",
        "color": "Jet Black",
        "price": 150.2,
        "sku": "H3-3XL-JET"
      },
      {
        "name": "3XL \u2022 Medium Grey",
        "storage": "3XL",
        "color": "Medium Grey",
        "price": 150.2,
        "sku": "H3-3XL-MED"
      },
      {
        "name": "3XL \u2022 Deep Navy",
        "storage": "3XL",
        "color": "Deep Navy",
        "price": 150.2,
        "sku": "H3-3XL-DEE"
      },
      {
        "name": "3XL \u2022 Burgundy",
        "storage": "3XL",
        "color": "Burgundy",
        "price": 150.2,
        "sku": "H3-3XL-BUR"
      }
    ],
    "images": [
      "/images/menswear/h3.jpg"
    ]
  },
  {
    "id": "apparel_h4",
    "category": "hoodies",
    "subcategory": "hoodies",
    "brand": "Essentials",
    "model": "Thermal Plush Kangaroo-Pocket Hoodie",
    "title": "Thermal Plush Kangaroo-Pocket Hoodie",
    "description": "Super-soft casual hoodie lined with high-density thermal plush for exceptional warmth. Lightweight yet remarkably insulating for chilly weather.",
    "price_retail": 112.4,
    "price_team": 97.23,
    "specs": {
      "Material": "65% Cotton, 35% Poly-Fleece Blend (340 GSM)",
      "Fit Profile": "Comfort Relaxed Fit",
      "Fabric Weight": "340 GSM",
      "Fit Guidance": "Relaxed casual drape. Order normal size for a cozy everyday fit."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Smoke Grey",
        "storage": "M",
        "color": "Smoke Grey",
        "price": 112.4,
        "sku": "H4-M-SMO"
      },
      {
        "name": "M \u2022 Pitch Black",
        "storage": "M",
        "color": "Pitch Black",
        "price": 112.4,
        "sku": "H4-M-PIT"
      },
      {
        "name": "M \u2022 Camel Brown",
        "storage": "M",
        "color": "Camel Brown",
        "price": 112.4,
        "sku": "H4-M-CAM"
      },
      {
        "name": "M \u2022 Ivory",
        "storage": "M",
        "color": "Ivory",
        "price": 112.4,
        "sku": "H4-M-IVO"
      },
      {
        "name": "L \u2022 Smoke Grey",
        "storage": "L",
        "color": "Smoke Grey",
        "price": 112.4,
        "sku": "H4-L-SMO"
      },
      {
        "name": "L \u2022 Pitch Black",
        "storage": "L",
        "color": "Pitch Black",
        "price": 112.4,
        "sku": "H4-L-PIT"
      },
      {
        "name": "L \u2022 Camel Brown",
        "storage": "L",
        "color": "Camel Brown",
        "price": 112.4,
        "sku": "H4-L-CAM"
      },
      {
        "name": "L \u2022 Ivory",
        "storage": "L",
        "color": "Ivory",
        "price": 112.4,
        "sku": "H4-L-IVO"
      },
      {
        "name": "XL \u2022 Smoke Grey",
        "storage": "XL",
        "color": "Smoke Grey",
        "price": 112.4,
        "sku": "H4-XL-SMO"
      },
      {
        "name": "XL \u2022 Pitch Black",
        "storage": "XL",
        "color": "Pitch Black",
        "price": 112.4,
        "sku": "H4-XL-PIT"
      },
      {
        "name": "XL \u2022 Camel Brown",
        "storage": "XL",
        "color": "Camel Brown",
        "price": 112.4,
        "sku": "H4-XL-CAM"
      },
      {
        "name": "XL \u2022 Ivory",
        "storage": "XL",
        "color": "Ivory",
        "price": 112.4,
        "sku": "H4-XL-IVO"
      },
      {
        "name": "2XL \u2022 Smoke Grey",
        "storage": "2XL",
        "color": "Smoke Grey",
        "price": 112.4,
        "sku": "H4-2XL-SMO"
      },
      {
        "name": "2XL \u2022 Pitch Black",
        "storage": "2XL",
        "color": "Pitch Black",
        "price": 112.4,
        "sku": "H4-2XL-PIT"
      },
      {
        "name": "2XL \u2022 Camel Brown",
        "storage": "2XL",
        "color": "Camel Brown",
        "price": 112.4,
        "sku": "H4-2XL-CAM"
      },
      {
        "name": "2XL \u2022 Ivory",
        "storage": "2XL",
        "color": "Ivory",
        "price": 112.4,
        "sku": "H4-2XL-IVO"
      }
    ],
    "images": [
      "/images/menswear/h4.jpg"
    ]
  },
  {
    "id": "apparel_h5",
    "category": "hoodies",
    "subcategory": "hoodies",
    "brand": "Essentials",
    "model": "Everyday 100% Cotton Terry Cloth Hoodie",
    "title": "Everyday 100% Cotton Terry Cloth Hoodie",
    "description": "An all-season loopback terry hoodie that delivers breathability in moderate weather. Perfect for gym commutes, spring layering, and daily errands.",
    "price_retail": 108.62,
    "price_team": 93.96,
    "specs": {
      "Material": "100% Pure Combed Cotton (320 GSM Terry)",
      "Fit Profile": "Regular Fit",
      "Fabric Weight": "320 GSM",
      "Fit Guidance": "True to size with standard body length."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "S \u2022 Natural Cream",
        "storage": "S",
        "color": "Natural Cream",
        "price": 108.62,
        "sku": "H5-S-NAT"
      },
      {
        "name": "S \u2022 Solid Black",
        "storage": "S",
        "color": "Solid Black",
        "price": 108.62,
        "sku": "H5-S-SOL"
      },
      {
        "name": "S \u2022 Heather Grey",
        "storage": "S",
        "color": "Heather Grey",
        "price": 108.62,
        "sku": "H5-S-HEA"
      },
      {
        "name": "S \u2022 Sage Green",
        "storage": "S",
        "color": "Sage Green",
        "price": 108.62,
        "sku": "H5-S-SAG"
      },
      {
        "name": "M \u2022 Natural Cream",
        "storage": "M",
        "color": "Natural Cream",
        "price": 108.62,
        "sku": "H5-M-NAT"
      },
      {
        "name": "M \u2022 Solid Black",
        "storage": "M",
        "color": "Solid Black",
        "price": 108.62,
        "sku": "H5-M-SOL"
      },
      {
        "name": "M \u2022 Heather Grey",
        "storage": "M",
        "color": "Heather Grey",
        "price": 108.62,
        "sku": "H5-M-HEA"
      },
      {
        "name": "M \u2022 Sage Green",
        "storage": "M",
        "color": "Sage Green",
        "price": 108.62,
        "sku": "H5-M-SAG"
      },
      {
        "name": "L \u2022 Natural Cream",
        "storage": "L",
        "color": "Natural Cream",
        "price": 108.62,
        "sku": "H5-L-NAT"
      },
      {
        "name": "L \u2022 Solid Black",
        "storage": "L",
        "color": "Solid Black",
        "price": 108.62,
        "sku": "H5-L-SOL"
      },
      {
        "name": "L \u2022 Heather Grey",
        "storage": "L",
        "color": "Heather Grey",
        "price": 108.62,
        "sku": "H5-L-HEA"
      },
      {
        "name": "L \u2022 Sage Green",
        "storage": "L",
        "color": "Sage Green",
        "price": 108.62,
        "sku": "H5-L-SAG"
      },
      {
        "name": "XL \u2022 Natural Cream",
        "storage": "XL",
        "color": "Natural Cream",
        "price": 108.62,
        "sku": "H5-XL-NAT"
      },
      {
        "name": "XL \u2022 Solid Black",
        "storage": "XL",
        "color": "Solid Black",
        "price": 108.62,
        "sku": "H5-XL-SOL"
      },
      {
        "name": "XL \u2022 Heather Grey",
        "storage": "XL",
        "color": "Heather Grey",
        "price": 108.62,
        "sku": "H5-XL-HEA"
      },
      {
        "name": "XL \u2022 Sage Green",
        "storage": "XL",
        "color": "Sage Green",
        "price": 108.62,
        "sku": "H5-XL-SAG"
      },
      {
        "name": "2XL \u2022 Natural Cream",
        "storage": "2XL",
        "color": "Natural Cream",
        "price": 108.62,
        "sku": "H5-2XL-NAT"
      },
      {
        "name": "2XL \u2022 Solid Black",
        "storage": "2XL",
        "color": "Solid Black",
        "price": 108.62,
        "sku": "H5-2XL-SOL"
      },
      {
        "name": "2XL \u2022 Heather Grey",
        "storage": "2XL",
        "color": "Heather Grey",
        "price": 108.62,
        "sku": "H5-2XL-HEA"
      },
      {
        "name": "2XL \u2022 Sage Green",
        "storage": "2XL",
        "color": "Sage Green",
        "price": 108.62,
        "sku": "H5-2XL-SAG"
      }
    ],
    "images": [
      "/images/menswear/h5.jpg"
    ]
  },
  {
    "id": "apparel_b1",
    "category": "bottoms",
    "subcategory": "trousers",
    "brand": "Essentials",
    "model": "Multi-Pocket Utility Relaxed Cargo Trousers",
    "title": "Multi-Pocket Utility Relaxed Cargo Trousers",
    "description": "Rugged yet modern cargo pants made from durable cotton twill. Features low-profile flap cargo pockets, reinforced knees, and an adjustable cuff cinch for versatile styling.",
    "price_retail": 232.89,
    "price_team": 201.45,
    "specs": {
      "Material": "100% Heavy Cotton Twill",
      "Fit Profile": "Relaxed Straight-Leg",
      "Fabric Weight": "100% Cotton",
      "Fit Guidance": "Relaxed through seat and thighs with a clean straight drape."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "30 \u2022 Military Olive",
        "storage": "30",
        "color": "Military Olive",
        "price": 232.89,
        "sku": "B1-30-MIL"
      },
      {
        "name": "30 \u2022 Tactical Black",
        "storage": "30",
        "color": "Tactical Black",
        "price": 232.89,
        "sku": "B1-30-TAC"
      },
      {
        "name": "30 \u2022 Desert Khaki",
        "storage": "30",
        "color": "Desert Khaki",
        "price": 232.89,
        "sku": "B1-30-DES"
      },
      {
        "name": "30 \u2022 Gunmetal Grey",
        "storage": "30",
        "color": "Gunmetal Grey",
        "price": 232.89,
        "sku": "B1-30-GUN"
      },
      {
        "name": "32 \u2022 Military Olive",
        "storage": "32",
        "color": "Military Olive",
        "price": 232.89,
        "sku": "B1-32-MIL"
      },
      {
        "name": "32 \u2022 Tactical Black",
        "storage": "32",
        "color": "Tactical Black",
        "price": 232.89,
        "sku": "B1-32-TAC"
      },
      {
        "name": "32 \u2022 Desert Khaki",
        "storage": "32",
        "color": "Desert Khaki",
        "price": 232.89,
        "sku": "B1-32-DES"
      },
      {
        "name": "32 \u2022 Gunmetal Grey",
        "storage": "32",
        "color": "Gunmetal Grey",
        "price": 232.89,
        "sku": "B1-32-GUN"
      },
      {
        "name": "34 \u2022 Military Olive",
        "storage": "34",
        "color": "Military Olive",
        "price": 232.89,
        "sku": "B1-34-MIL"
      },
      {
        "name": "34 \u2022 Tactical Black",
        "storage": "34",
        "color": "Tactical Black",
        "price": 232.89,
        "sku": "B1-34-TAC"
      },
      {
        "name": "34 \u2022 Desert Khaki",
        "storage": "34",
        "color": "Desert Khaki",
        "price": 232.89,
        "sku": "B1-34-DES"
      },
      {
        "name": "34 \u2022 Gunmetal Grey",
        "storage": "34",
        "color": "Gunmetal Grey",
        "price": 232.89,
        "sku": "B1-34-GUN"
      },
      {
        "name": "36 \u2022 Military Olive",
        "storage": "36",
        "color": "Military Olive",
        "price": 232.89,
        "sku": "B1-36-MIL"
      },
      {
        "name": "36 \u2022 Tactical Black",
        "storage": "36",
        "color": "Tactical Black",
        "price": 232.89,
        "sku": "B1-36-TAC"
      },
      {
        "name": "36 \u2022 Desert Khaki",
        "storage": "36",
        "color": "Desert Khaki",
        "price": 232.89,
        "sku": "B1-36-DES"
      },
      {
        "name": "36 \u2022 Gunmetal Grey",
        "storage": "36",
        "color": "Gunmetal Grey",
        "price": 232.89,
        "sku": "B1-36-GUN"
      },
      {
        "name": "38 \u2022 Military Olive",
        "storage": "38",
        "color": "Military Olive",
        "price": 232.89,
        "sku": "B1-38-MIL"
      },
      {
        "name": "38 \u2022 Tactical Black",
        "storage": "38",
        "color": "Tactical Black",
        "price": 232.89,
        "sku": "B1-38-TAC"
      },
      {
        "name": "38 \u2022 Desert Khaki",
        "storage": "38",
        "color": "Desert Khaki",
        "price": 232.89,
        "sku": "B1-38-DES"
      },
      {
        "name": "38 \u2022 Gunmetal Grey",
        "storage": "38",
        "color": "Gunmetal Grey",
        "price": 232.89,
        "sku": "B1-38-GUN"
      },
      {
        "name": "40 \u2022 Military Olive",
        "storage": "40",
        "color": "Military Olive",
        "price": 232.89,
        "sku": "B1-40-MIL"
      },
      {
        "name": "40 \u2022 Tactical Black",
        "storage": "40",
        "color": "Tactical Black",
        "price": 232.89,
        "sku": "B1-40-TAC"
      },
      {
        "name": "40 \u2022 Desert Khaki",
        "storage": "40",
        "color": "Desert Khaki",
        "price": 232.89,
        "sku": "B1-40-DES"
      },
      {
        "name": "40 \u2022 Gunmetal Grey",
        "storage": "40",
        "color": "Gunmetal Grey",
        "price": 232.89,
        "sku": "B1-40-GUN"
      }
    ],
    "images": [
      "/images/menswear/b1.jpg"
    ]
  },
  {
    "id": "apparel_b3",
    "category": "bottoms",
    "subcategory": "trousers",
    "brand": "Essentials",
    "model": "Heavy Cotton Straight-Cut Casual Trousers",
    "title": "Heavy Cotton Straight-Cut Casual Trousers",
    "description": "Classic workwear-grade casual trousers constructed from dense, wear-resistant cotton. Designed for hard-wearing daily use and outdoor casual settings.",
    "price_retail": 199.14,
    "price_team": 172.26,
    "specs": {
      "Material": "100% High-Density Cotton Drill",
      "Fit Profile": "Classic Straight Fit",
      "Fabric Weight": "100% Cotton",
      "Fit Guidance": "Roomy straight cut from hip to hem. Sits naturally at the waist."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "30 \u2022 Dark Khaki",
        "storage": "30",
        "color": "Dark Khaki",
        "price": 199.14,
        "sku": "B3-30-DAR"
      },
      {
        "name": "30 \u2022 Coal Black",
        "storage": "30",
        "color": "Coal Black",
        "price": 199.14,
        "sku": "B3-30-COA"
      },
      {
        "name": "30 \u2022 Army Green",
        "storage": "30",
        "color": "Army Green",
        "price": 199.14,
        "sku": "B3-30-ARM"
      },
      {
        "name": "32 \u2022 Dark Khaki",
        "storage": "32",
        "color": "Dark Khaki",
        "price": 199.14,
        "sku": "B3-32-DAR"
      },
      {
        "name": "32 \u2022 Coal Black",
        "storage": "32",
        "color": "Coal Black",
        "price": 199.14,
        "sku": "B3-32-COA"
      },
      {
        "name": "32 \u2022 Army Green",
        "storage": "32",
        "color": "Army Green",
        "price": 199.14,
        "sku": "B3-32-ARM"
      },
      {
        "name": "34 \u2022 Dark Khaki",
        "storage": "34",
        "color": "Dark Khaki",
        "price": 199.14,
        "sku": "B3-34-DAR"
      },
      {
        "name": "34 \u2022 Coal Black",
        "storage": "34",
        "color": "Coal Black",
        "price": 199.14,
        "sku": "B3-34-COA"
      },
      {
        "name": "34 \u2022 Army Green",
        "storage": "34",
        "color": "Army Green",
        "price": 199.14,
        "sku": "B3-34-ARM"
      },
      {
        "name": "36 \u2022 Dark Khaki",
        "storage": "36",
        "color": "Dark Khaki",
        "price": 199.14,
        "sku": "B3-36-DAR"
      },
      {
        "name": "36 \u2022 Coal Black",
        "storage": "36",
        "color": "Coal Black",
        "price": 199.14,
        "sku": "B3-36-COA"
      },
      {
        "name": "36 \u2022 Army Green",
        "storage": "36",
        "color": "Army Green",
        "price": 199.14,
        "sku": "B3-36-ARM"
      },
      {
        "name": "38 \u2022 Dark Khaki",
        "storage": "38",
        "color": "Dark Khaki",
        "price": 199.14,
        "sku": "B3-38-DAR"
      },
      {
        "name": "38 \u2022 Coal Black",
        "storage": "38",
        "color": "Coal Black",
        "price": 199.14,
        "sku": "B3-38-COA"
      },
      {
        "name": "38 \u2022 Army Green",
        "storage": "38",
        "color": "Army Green",
        "price": 199.14,
        "sku": "B3-38-ARM"
      },
      {
        "name": "40 \u2022 Dark Khaki",
        "storage": "40",
        "color": "Dark Khaki",
        "price": 199.14,
        "sku": "B3-40-DAR"
      },
      {
        "name": "40 \u2022 Coal Black",
        "storage": "40",
        "color": "Coal Black",
        "price": 199.14,
        "sku": "B3-40-COA"
      },
      {
        "name": "40 \u2022 Army Green",
        "storage": "40",
        "color": "Army Green",
        "price": 199.14,
        "sku": "B3-40-ARM"
      },
      {
        "name": "42 \u2022 Dark Khaki",
        "storage": "42",
        "color": "Dark Khaki",
        "price": 199.14,
        "sku": "B3-42-DAR"
      },
      {
        "name": "42 \u2022 Coal Black",
        "storage": "42",
        "color": "Coal Black",
        "price": 199.14,
        "sku": "B3-42-COA"
      },
      {
        "name": "42 \u2022 Army Green",
        "storage": "42",
        "color": "Army Green",
        "price": 199.14,
        "sku": "B3-42-ARM"
      }
    ],
    "images": [
      "/images/menswear/b3.jpg"
    ]
  },
  {
    "id": "apparel_b2",
    "category": "bottoms",
    "subcategory": "trousers",
    "brand": "Essentials",
    "model": "Stretch Comfort Flat-Front Chino Trousers",
    "title": "Stretch Comfort Flat-Front Chino Trousers",
    "description": "Sleek business-casual chinos engineered with 4-way stretch for day-to-night versatility. Sharp tailored appearance with the comfort of performance fabric.",
    "price_retail": 195.76,
    "price_team": 169.33,
    "specs": {
      "Material": "97% Combed Cotton, 3% Spandex",
      "Fit Profile": "Slim-Straight Fit",
      "Fabric Weight": "100% Cotton",
      "Fit Guidance": "Clean, tailored taper through the calves; order your usual waist size."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "30 \u2022 Classic Khaki",
        "storage": "30",
        "color": "Classic Khaki",
        "price": 195.76,
        "sku": "B2-30-CLA"
      },
      {
        "name": "30 \u2022 Ink Navy",
        "storage": "30",
        "color": "Ink Navy",
        "price": 195.76,
        "sku": "B2-30-INK"
      },
      {
        "name": "30 \u2022 Stealth Black",
        "storage": "30",
        "color": "Stealth Black",
        "price": 195.76,
        "sku": "B2-30-STE"
      },
      {
        "name": "30 \u2022 Charcoal",
        "storage": "30",
        "color": "Charcoal",
        "price": 195.76,
        "sku": "B2-30-CHA"
      },
      {
        "name": "31 \u2022 Classic Khaki",
        "storage": "31",
        "color": "Classic Khaki",
        "price": 195.76,
        "sku": "B2-31-CLA"
      },
      {
        "name": "31 \u2022 Ink Navy",
        "storage": "31",
        "color": "Ink Navy",
        "price": 195.76,
        "sku": "B2-31-INK"
      },
      {
        "name": "31 \u2022 Stealth Black",
        "storage": "31",
        "color": "Stealth Black",
        "price": 195.76,
        "sku": "B2-31-STE"
      },
      {
        "name": "31 \u2022 Charcoal",
        "storage": "31",
        "color": "Charcoal",
        "price": 195.76,
        "sku": "B2-31-CHA"
      },
      {
        "name": "32 \u2022 Classic Khaki",
        "storage": "32",
        "color": "Classic Khaki",
        "price": 195.76,
        "sku": "B2-32-CLA"
      },
      {
        "name": "32 \u2022 Ink Navy",
        "storage": "32",
        "color": "Ink Navy",
        "price": 195.76,
        "sku": "B2-32-INK"
      },
      {
        "name": "32 \u2022 Stealth Black",
        "storage": "32",
        "color": "Stealth Black",
        "price": 195.76,
        "sku": "B2-32-STE"
      },
      {
        "name": "32 \u2022 Charcoal",
        "storage": "32",
        "color": "Charcoal",
        "price": 195.76,
        "sku": "B2-32-CHA"
      },
      {
        "name": "33 \u2022 Classic Khaki",
        "storage": "33",
        "color": "Classic Khaki",
        "price": 195.76,
        "sku": "B2-33-CLA"
      },
      {
        "name": "33 \u2022 Ink Navy",
        "storage": "33",
        "color": "Ink Navy",
        "price": 195.76,
        "sku": "B2-33-INK"
      },
      {
        "name": "33 \u2022 Stealth Black",
        "storage": "33",
        "color": "Stealth Black",
        "price": 195.76,
        "sku": "B2-33-STE"
      },
      {
        "name": "33 \u2022 Charcoal",
        "storage": "33",
        "color": "Charcoal",
        "price": 195.76,
        "sku": "B2-33-CHA"
      },
      {
        "name": "34 \u2022 Classic Khaki",
        "storage": "34",
        "color": "Classic Khaki",
        "price": 195.76,
        "sku": "B2-34-CLA"
      },
      {
        "name": "34 \u2022 Ink Navy",
        "storage": "34",
        "color": "Ink Navy",
        "price": 195.76,
        "sku": "B2-34-INK"
      },
      {
        "name": "34 \u2022 Stealth Black",
        "storage": "34",
        "color": "Stealth Black",
        "price": 195.76,
        "sku": "B2-34-STE"
      },
      {
        "name": "34 \u2022 Charcoal",
        "storage": "34",
        "color": "Charcoal",
        "price": 195.76,
        "sku": "B2-34-CHA"
      },
      {
        "name": "36 \u2022 Classic Khaki",
        "storage": "36",
        "color": "Classic Khaki",
        "price": 195.76,
        "sku": "B2-36-CLA"
      },
      {
        "name": "36 \u2022 Ink Navy",
        "storage": "36",
        "color": "Ink Navy",
        "price": 195.76,
        "sku": "B2-36-INK"
      },
      {
        "name": "36 \u2022 Stealth Black",
        "storage": "36",
        "color": "Stealth Black",
        "price": 195.76,
        "sku": "B2-36-STE"
      },
      {
        "name": "36 \u2022 Charcoal",
        "storage": "36",
        "color": "Charcoal",
        "price": 195.76,
        "sku": "B2-36-CHA"
      },
      {
        "name": "38 \u2022 Classic Khaki",
        "storage": "38",
        "color": "Classic Khaki",
        "price": 195.76,
        "sku": "B2-38-CLA"
      },
      {
        "name": "38 \u2022 Ink Navy",
        "storage": "38",
        "color": "Ink Navy",
        "price": 195.76,
        "sku": "B2-38-INK"
      },
      {
        "name": "38 \u2022 Stealth Black",
        "storage": "38",
        "color": "Stealth Black",
        "price": 195.76,
        "sku": "B2-38-STE"
      },
      {
        "name": "38 \u2022 Charcoal",
        "storage": "38",
        "color": "Charcoal",
        "price": 195.76,
        "sku": "B2-38-CHA"
      }
    ],
    "images": [
      "/images/menswear/b2.jpg"
    ]
  },
  {
    "id": "apparel_b6",
    "category": "bottoms",
    "subcategory": "trousers",
    "brand": "Essentials",
    "model": "Wrinkle-Resistant Classic Cotton Slacks",
    "title": "Wrinkle-Resistant Classic Cotton Slacks",
    "description": "Refined everyday slacks tailored from crease-resistant cotton. Designed with a generous mid-to-high rise that provides reliable all-day comfort for work or travel.",
    "price_retail": 168.42,
    "price_team": 145.68,
    "specs": {
      "Material": "95% Cotton, 5% Poly-Blend (Anti-Crease Finish)",
      "Fit Profile": "Regular High-Rise Straight",
      "Fabric Weight": "100% Cotton",
      "Fit Guidance": "Generous rise with comfortable seat room; true to size."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "31 \u2022 Classic Black",
        "storage": "31",
        "color": "Classic Black",
        "price": 168.42,
        "sku": "B6-31-CLA"
      },
      {
        "name": "31 \u2022 Dark Khaki",
        "storage": "31",
        "color": "Dark Khaki",
        "price": 168.42,
        "sku": "B6-31-DAR"
      },
      {
        "name": "31 \u2022 Navy",
        "storage": "31",
        "color": "Navy",
        "price": 168.42,
        "sku": "B6-31-NAV"
      },
      {
        "name": "31 \u2022 Silver Grey",
        "storage": "31",
        "color": "Silver Grey",
        "price": 168.42,
        "sku": "B6-31-SIL"
      },
      {
        "name": "32 \u2022 Classic Black",
        "storage": "32",
        "color": "Classic Black",
        "price": 168.42,
        "sku": "B6-32-CLA"
      },
      {
        "name": "32 \u2022 Dark Khaki",
        "storage": "32",
        "color": "Dark Khaki",
        "price": 168.42,
        "sku": "B6-32-DAR"
      },
      {
        "name": "32 \u2022 Navy",
        "storage": "32",
        "color": "Navy",
        "price": 168.42,
        "sku": "B6-32-NAV"
      },
      {
        "name": "32 \u2022 Silver Grey",
        "storage": "32",
        "color": "Silver Grey",
        "price": 168.42,
        "sku": "B6-32-SIL"
      },
      {
        "name": "33 \u2022 Classic Black",
        "storage": "33",
        "color": "Classic Black",
        "price": 168.42,
        "sku": "B6-33-CLA"
      },
      {
        "name": "33 \u2022 Dark Khaki",
        "storage": "33",
        "color": "Dark Khaki",
        "price": 168.42,
        "sku": "B6-33-DAR"
      },
      {
        "name": "33 \u2022 Navy",
        "storage": "33",
        "color": "Navy",
        "price": 168.42,
        "sku": "B6-33-NAV"
      },
      {
        "name": "33 \u2022 Silver Grey",
        "storage": "33",
        "color": "Silver Grey",
        "price": 168.42,
        "sku": "B6-33-SIL"
      },
      {
        "name": "34 \u2022 Classic Black",
        "storage": "34",
        "color": "Classic Black",
        "price": 168.42,
        "sku": "B6-34-CLA"
      },
      {
        "name": "34 \u2022 Dark Khaki",
        "storage": "34",
        "color": "Dark Khaki",
        "price": 168.42,
        "sku": "B6-34-DAR"
      },
      {
        "name": "34 \u2022 Navy",
        "storage": "34",
        "color": "Navy",
        "price": 168.42,
        "sku": "B6-34-NAV"
      },
      {
        "name": "34 \u2022 Silver Grey",
        "storage": "34",
        "color": "Silver Grey",
        "price": 168.42,
        "sku": "B6-34-SIL"
      },
      {
        "name": "36 \u2022 Classic Black",
        "storage": "36",
        "color": "Classic Black",
        "price": 168.42,
        "sku": "B6-36-CLA"
      },
      {
        "name": "36 \u2022 Dark Khaki",
        "storage": "36",
        "color": "Dark Khaki",
        "price": 168.42,
        "sku": "B6-36-DAR"
      },
      {
        "name": "36 \u2022 Navy",
        "storage": "36",
        "color": "Navy",
        "price": 168.42,
        "sku": "B6-36-NAV"
      },
      {
        "name": "36 \u2022 Silver Grey",
        "storage": "36",
        "color": "Silver Grey",
        "price": 168.42,
        "sku": "B6-36-SIL"
      },
      {
        "name": "38 \u2022 Classic Black",
        "storage": "38",
        "color": "Classic Black",
        "price": 168.42,
        "sku": "B6-38-CLA"
      },
      {
        "name": "38 \u2022 Dark Khaki",
        "storage": "38",
        "color": "Dark Khaki",
        "price": 168.42,
        "sku": "B6-38-DAR"
      },
      {
        "name": "38 \u2022 Navy",
        "storage": "38",
        "color": "Navy",
        "price": 168.42,
        "sku": "B6-38-NAV"
      },
      {
        "name": "38 \u2022 Silver Grey",
        "storage": "38",
        "color": "Silver Grey",
        "price": 168.42,
        "sku": "B6-38-SIL"
      },
      {
        "name": "40 \u2022 Classic Black",
        "storage": "40",
        "color": "Classic Black",
        "price": 168.42,
        "sku": "B6-40-CLA"
      },
      {
        "name": "40 \u2022 Dark Khaki",
        "storage": "40",
        "color": "Dark Khaki",
        "price": 168.42,
        "sku": "B6-40-DAR"
      },
      {
        "name": "40 \u2022 Navy",
        "storage": "40",
        "color": "Navy",
        "price": 168.42,
        "sku": "B6-40-NAV"
      },
      {
        "name": "40 \u2022 Silver Grey",
        "storage": "40",
        "color": "Silver Grey",
        "price": 168.42,
        "sku": "B6-40-SIL"
      }
    ],
    "images": [
      "/images/menswear/b6.jpg"
    ]
  },
  {
    "id": "apparel_b5",
    "category": "bottoms",
    "subcategory": "trousers",
    "brand": "Essentials",
    "model": "Lightweight Breathable Straight-Fit Trousers",
    "title": "Lightweight Breathable Straight-Fit Trousers",
    "description": "Cooling, featherweight trousers engineered for warm climates and active commutes. Features moisture-wicking weave and exceptional drape that resists creasing.",
    "price_retail": 132.98,
    "price_team": 115.03,
    "specs": {
      "Material": "88% Nylon, 12% Spandex (Ice-Silk Touch)",
      "Fit Profile": "Straight Drape Fit",
      "Fabric Weight": "Heavyweight",
      "Fit Guidance": "Easy flowing drape that stays lightweight and airy in hot weather."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "30 \u2022 Medium Grey",
        "storage": "30",
        "color": "Medium Grey",
        "price": 132.98,
        "sku": "B5-30-MED"
      },
      {
        "name": "30 \u2022 Deep Black",
        "storage": "30",
        "color": "Deep Black",
        "price": 132.98,
        "sku": "B5-30-DEE"
      },
      {
        "name": "30 \u2022 Navy Blue",
        "storage": "30",
        "color": "Navy Blue",
        "price": 132.98,
        "sku": "B5-30-NAV"
      },
      {
        "name": "30 \u2022 Khaki",
        "storage": "30",
        "color": "Khaki",
        "price": 132.98,
        "sku": "B5-30-KHA"
      },
      {
        "name": "32 \u2022 Medium Grey",
        "storage": "32",
        "color": "Medium Grey",
        "price": 132.98,
        "sku": "B5-32-MED"
      },
      {
        "name": "32 \u2022 Deep Black",
        "storage": "32",
        "color": "Deep Black",
        "price": 132.98,
        "sku": "B5-32-DEE"
      },
      {
        "name": "32 \u2022 Navy Blue",
        "storage": "32",
        "color": "Navy Blue",
        "price": 132.98,
        "sku": "B5-32-NAV"
      },
      {
        "name": "32 \u2022 Khaki",
        "storage": "32",
        "color": "Khaki",
        "price": 132.98,
        "sku": "B5-32-KHA"
      },
      {
        "name": "34 \u2022 Medium Grey",
        "storage": "34",
        "color": "Medium Grey",
        "price": 132.98,
        "sku": "B5-34-MED"
      },
      {
        "name": "34 \u2022 Deep Black",
        "storage": "34",
        "color": "Deep Black",
        "price": 132.98,
        "sku": "B5-34-DEE"
      },
      {
        "name": "34 \u2022 Navy Blue",
        "storage": "34",
        "color": "Navy Blue",
        "price": 132.98,
        "sku": "B5-34-NAV"
      },
      {
        "name": "34 \u2022 Khaki",
        "storage": "34",
        "color": "Khaki",
        "price": 132.98,
        "sku": "B5-34-KHA"
      },
      {
        "name": "36 \u2022 Medium Grey",
        "storage": "36",
        "color": "Medium Grey",
        "price": 132.98,
        "sku": "B5-36-MED"
      },
      {
        "name": "36 \u2022 Deep Black",
        "storage": "36",
        "color": "Deep Black",
        "price": 132.98,
        "sku": "B5-36-DEE"
      },
      {
        "name": "36 \u2022 Navy Blue",
        "storage": "36",
        "color": "Navy Blue",
        "price": 132.98,
        "sku": "B5-36-NAV"
      },
      {
        "name": "36 \u2022 Khaki",
        "storage": "36",
        "color": "Khaki",
        "price": 132.98,
        "sku": "B5-36-KHA"
      },
      {
        "name": "38 \u2022 Medium Grey",
        "storage": "38",
        "color": "Medium Grey",
        "price": 132.98,
        "sku": "B5-38-MED"
      },
      {
        "name": "38 \u2022 Deep Black",
        "storage": "38",
        "color": "Deep Black",
        "price": 132.98,
        "sku": "B5-38-DEE"
      },
      {
        "name": "38 \u2022 Navy Blue",
        "storage": "38",
        "color": "Navy Blue",
        "price": 132.98,
        "sku": "B5-38-NAV"
      },
      {
        "name": "38 \u2022 Khaki",
        "storage": "38",
        "color": "Khaki",
        "price": 132.98,
        "sku": "B5-38-KHA"
      }
    ],
    "images": [
      "/images/menswear/b5.jpg"
    ]
  },
  {
    "id": "apparel_b4",
    "category": "bottoms",
    "subcategory": "trousers",
    "brand": "Essentials",
    "model": "Vintage Corduroy Straight-Leg Casual Pants",
    "title": "Vintage Corduroy Straight-Leg Casual Pants",
    "description": "Richly textured corduroy trousers that combine vintage warmth with easy everyday styling. Soft velvet-like feel with a clean, drape-heavy silhouette.",
    "price_retail": 101.19,
    "price_team": 87.53,
    "specs": {
      "Material": "90% Cotton, 10% Polyester (12-Wale Corduroy)",
      "Fit Profile": "Relaxed Straight-Leg",
      "Fabric Weight": "100% Cotton",
      "Fit Guidance": "Relaxed cut with an adaptable elasticized rear waistband."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Warm Tan",
        "storage": "M",
        "color": "Warm Tan",
        "price": 101.19,
        "sku": "B4-M-WAR"
      },
      {
        "name": "M \u2022 Deep Brown",
        "storage": "M",
        "color": "Deep Brown",
        "price": 101.19,
        "sku": "B4-M-DEE"
      },
      {
        "name": "M \u2022 Black",
        "storage": "M",
        "color": "Black",
        "price": 101.19,
        "sku": "B4-M-BLA"
      },
      {
        "name": "M \u2022 Forest Green",
        "storage": "M",
        "color": "Forest Green",
        "price": 101.19,
        "sku": "B4-M-FOR"
      },
      {
        "name": "L \u2022 Warm Tan",
        "storage": "L",
        "color": "Warm Tan",
        "price": 101.19,
        "sku": "B4-L-WAR"
      },
      {
        "name": "L \u2022 Deep Brown",
        "storage": "L",
        "color": "Deep Brown",
        "price": 101.19,
        "sku": "B4-L-DEE"
      },
      {
        "name": "L \u2022 Black",
        "storage": "L",
        "color": "Black",
        "price": 101.19,
        "sku": "B4-L-BLA"
      },
      {
        "name": "L \u2022 Forest Green",
        "storage": "L",
        "color": "Forest Green",
        "price": 101.19,
        "sku": "B4-L-FOR"
      },
      {
        "name": "XL \u2022 Warm Tan",
        "storage": "XL",
        "color": "Warm Tan",
        "price": 101.19,
        "sku": "B4-XL-WAR"
      },
      {
        "name": "XL \u2022 Deep Brown",
        "storage": "XL",
        "color": "Deep Brown",
        "price": 101.19,
        "sku": "B4-XL-DEE"
      },
      {
        "name": "XL \u2022 Black",
        "storage": "XL",
        "color": "Black",
        "price": 101.19,
        "sku": "B4-XL-BLA"
      },
      {
        "name": "XL \u2022 Forest Green",
        "storage": "XL",
        "color": "Forest Green",
        "price": 101.19,
        "sku": "B4-XL-FOR"
      },
      {
        "name": "2XL \u2022 Warm Tan",
        "storage": "2XL",
        "color": "Warm Tan",
        "price": 101.19,
        "sku": "B4-2XL-WAR"
      },
      {
        "name": "2XL \u2022 Deep Brown",
        "storage": "2XL",
        "color": "Deep Brown",
        "price": 101.19,
        "sku": "B4-2XL-DEE"
      },
      {
        "name": "2XL \u2022 Black",
        "storage": "2XL",
        "color": "Black",
        "price": 101.19,
        "sku": "B4-2XL-BLA"
      },
      {
        "name": "2XL \u2022 Forest Green",
        "storage": "2XL",
        "color": "Forest Green",
        "price": 101.19,
        "sku": "B4-2XL-FOR"
      },
      {
        "name": "3XL \u2022 Warm Tan",
        "storage": "3XL",
        "color": "Warm Tan",
        "price": 101.19,
        "sku": "B4-3XL-WAR"
      },
      {
        "name": "3XL \u2022 Deep Brown",
        "storage": "3XL",
        "color": "Deep Brown",
        "price": 101.19,
        "sku": "B4-3XL-DEE"
      },
      {
        "name": "3XL \u2022 Black",
        "storage": "3XL",
        "color": "Black",
        "price": 101.19,
        "sku": "B4-3XL-BLA"
      },
      {
        "name": "3XL \u2022 Forest Green",
        "storage": "3XL",
        "color": "Forest Green",
        "price": 101.19,
        "sku": "B4-3XL-FOR"
      }
    ],
    "images": [
      "/images/menswear/b4.jpg"
    ]
  },
  {
    "id": "apparel_s5",
    "category": "sweatpants",
    "subcategory": "joggers",
    "brand": "Essentials",
    "model": "100% Combed Cotton Heavyweight Sweatpants",
    "title": "100% Combed Cotton Heavyweight Sweatpants",
    "description": "Luxurious heavyweight sweatpants made from 100% pure combed cotton. Boasts a thick, structured drape and an ultra-plush feel that endures years of wear.",
    "price_retail": 232.89,
    "price_team": 201.45,
    "specs": {
      "Material": "100% Combed Cotton (400 GSM)",
      "Fit Profile": "Relaxed Fit",
      "Fabric Weight": "400 GSM",
      "Fit Guidance": "Generous relaxed cut; delivers unmatched everyday comfort."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Raw Black",
        "storage": "M",
        "color": "Raw Black",
        "price": 232.89,
        "sku": "S5-M-RAW"
      },
      {
        "name": "M \u2022 Heather Grey",
        "storage": "M",
        "color": "Heather Grey",
        "price": 232.89,
        "sku": "S5-M-HEA"
      },
      {
        "name": "M \u2022 Vintage Navy",
        "storage": "M",
        "color": "Vintage Navy",
        "price": 232.89,
        "sku": "S5-M-VIN"
      },
      {
        "name": "L \u2022 Raw Black",
        "storage": "L",
        "color": "Raw Black",
        "price": 232.89,
        "sku": "S5-L-RAW"
      },
      {
        "name": "L \u2022 Heather Grey",
        "storage": "L",
        "color": "Heather Grey",
        "price": 232.89,
        "sku": "S5-L-HEA"
      },
      {
        "name": "L \u2022 Vintage Navy",
        "storage": "L",
        "color": "Vintage Navy",
        "price": 232.89,
        "sku": "S5-L-VIN"
      },
      {
        "name": "XL \u2022 Raw Black",
        "storage": "XL",
        "color": "Raw Black",
        "price": 232.89,
        "sku": "S5-XL-RAW"
      },
      {
        "name": "XL \u2022 Heather Grey",
        "storage": "XL",
        "color": "Heather Grey",
        "price": 232.89,
        "sku": "S5-XL-HEA"
      },
      {
        "name": "XL \u2022 Vintage Navy",
        "storage": "XL",
        "color": "Vintage Navy",
        "price": 232.89,
        "sku": "S5-XL-VIN"
      },
      {
        "name": "2XL \u2022 Raw Black",
        "storage": "2XL",
        "color": "Raw Black",
        "price": 232.89,
        "sku": "S5-2XL-RAW"
      },
      {
        "name": "2XL \u2022 Heather Grey",
        "storage": "2XL",
        "color": "Heather Grey",
        "price": 232.89,
        "sku": "S5-2XL-HEA"
      },
      {
        "name": "2XL \u2022 Vintage Navy",
        "storage": "2XL",
        "color": "Vintage Navy",
        "price": 232.89,
        "sku": "S5-2XL-VIN"
      },
      {
        "name": "3XL \u2022 Raw Black",
        "storage": "3XL",
        "color": "Raw Black",
        "price": 232.89,
        "sku": "S5-3XL-RAW"
      },
      {
        "name": "3XL \u2022 Heather Grey",
        "storage": "3XL",
        "color": "Heather Grey",
        "price": 232.89,
        "sku": "S5-3XL-HEA"
      },
      {
        "name": "3XL \u2022 Vintage Navy",
        "storage": "3XL",
        "color": "Vintage Navy",
        "price": 232.89,
        "sku": "S5-3XL-VIN"
      }
    ],
    "images": [
      "/images/menswear/s5.jpg"
    ]
  },
  {
    "id": "apparel_s4",
    "category": "sweatpants",
    "subcategory": "joggers",
    "brand": "Essentials",
    "model": "Pinstripe Detail Slim-Fit Gym Sweatpants",
    "title": "Pinstripe Detail Slim-Fit Gym Sweatpants",
    "description": "Tailored training pants featuring elevated seam-piping down each leg to visually elongate the frame. Combines workout performance with sleek streetwear presentation.",
    "price_retail": 195.26,
    "price_team": 168.9,
    "specs": {
      "Material": "75% Cotton, 20% Polyester, 5% Spandex",
      "Fit Profile": "Slim Tapered Fit",
      "Fabric Weight": "100% Cotton",
      "Fit Guidance": "Form-fitting through calves; if in-between sizes, size up."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Jet Black / White Stripe",
        "storage": "M",
        "color": "Jet Black / White Stripe",
        "price": 195.26,
        "sku": "S4-M-JET"
      },
      {
        "name": "M \u2022 Charcoal / Grey Stripe",
        "storage": "M",
        "color": "Charcoal / Grey Stripe",
        "price": 195.26,
        "sku": "S4-M-CHA"
      },
      {
        "name": "M \u2022 Navy / White Stripe",
        "storage": "M",
        "color": "Navy / White Stripe",
        "price": 195.26,
        "sku": "S4-M-NAV"
      },
      {
        "name": "L \u2022 Jet Black / White Stripe",
        "storage": "L",
        "color": "Jet Black / White Stripe",
        "price": 195.26,
        "sku": "S4-L-JET"
      },
      {
        "name": "L \u2022 Charcoal / Grey Stripe",
        "storage": "L",
        "color": "Charcoal / Grey Stripe",
        "price": 195.26,
        "sku": "S4-L-CHA"
      },
      {
        "name": "L \u2022 Navy / White Stripe",
        "storage": "L",
        "color": "Navy / White Stripe",
        "price": 195.26,
        "sku": "S4-L-NAV"
      },
      {
        "name": "XL \u2022 Jet Black / White Stripe",
        "storage": "XL",
        "color": "Jet Black / White Stripe",
        "price": 195.26,
        "sku": "S4-XL-JET"
      },
      {
        "name": "XL \u2022 Charcoal / Grey Stripe",
        "storage": "XL",
        "color": "Charcoal / Grey Stripe",
        "price": 195.26,
        "sku": "S4-XL-CHA"
      },
      {
        "name": "XL \u2022 Navy / White Stripe",
        "storage": "XL",
        "color": "Navy / White Stripe",
        "price": 195.26,
        "sku": "S4-XL-NAV"
      },
      {
        "name": "2XL \u2022 Jet Black / White Stripe",
        "storage": "2XL",
        "color": "Jet Black / White Stripe",
        "price": 195.26,
        "sku": "S4-2XL-JET"
      },
      {
        "name": "2XL \u2022 Charcoal / Grey Stripe",
        "storage": "2XL",
        "color": "Charcoal / Grey Stripe",
        "price": 195.26,
        "sku": "S4-2XL-CHA"
      },
      {
        "name": "2XL \u2022 Navy / White Stripe",
        "storage": "2XL",
        "color": "Navy / White Stripe",
        "price": 195.26,
        "sku": "S4-2XL-NAV"
      }
    ],
    "images": [
      "/images/menswear/s4.jpg"
    ]
  },
  {
    "id": "apparel_s1",
    "category": "sweatpants",
    "subcategory": "joggers",
    "brand": "Essentials",
    "model": "Tapered Cuffed Athletic Joggers",
    "title": "Tapered Cuffed Athletic Joggers",
    "description": "The quintessential athletic jogger designed with an ergonomic leg taper and firm ribbed cuffs. Built with flexible cotton blend that maintains its recovery without bagging at the knees.",
    "price_retail": 127.96,
    "price_team": 110.69,
    "specs": {
      "Material": "80% Cotton, 20% Polyester (320 GSM French Terry)",
      "Fit Profile": "Tapered Athletic Fit",
      "Fabric Weight": "320 GSM",
      "Fit Guidance": "Tapers neatly down from knee to ankle for a modern athletic look."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Matte Black",
        "storage": "M",
        "color": "Matte Black",
        "price": 127.96,
        "sku": "S1-M-MAT"
      },
      {
        "name": "M \u2022 Melange Grey",
        "storage": "M",
        "color": "Melange Grey",
        "price": 127.96,
        "sku": "S1-M-MEL"
      },
      {
        "name": "M \u2022 Dark Navy",
        "storage": "M",
        "color": "Dark Navy",
        "price": 127.96,
        "sku": "S1-M-DAR"
      },
      {
        "name": "L \u2022 Matte Black",
        "storage": "L",
        "color": "Matte Black",
        "price": 127.96,
        "sku": "S1-L-MAT"
      },
      {
        "name": "L \u2022 Melange Grey",
        "storage": "L",
        "color": "Melange Grey",
        "price": 127.96,
        "sku": "S1-L-MEL"
      },
      {
        "name": "L \u2022 Dark Navy",
        "storage": "L",
        "color": "Dark Navy",
        "price": 127.96,
        "sku": "S1-L-DAR"
      },
      {
        "name": "XL \u2022 Matte Black",
        "storage": "XL",
        "color": "Matte Black",
        "price": 127.96,
        "sku": "S1-XL-MAT"
      },
      {
        "name": "XL \u2022 Melange Grey",
        "storage": "XL",
        "color": "Melange Grey",
        "price": 127.96,
        "sku": "S1-XL-MEL"
      },
      {
        "name": "XL \u2022 Dark Navy",
        "storage": "XL",
        "color": "Dark Navy",
        "price": 127.96,
        "sku": "S1-XL-DAR"
      },
      {
        "name": "2XL \u2022 Matte Black",
        "storage": "2XL",
        "color": "Matte Black",
        "price": 127.96,
        "sku": "S1-2XL-MAT"
      },
      {
        "name": "2XL \u2022 Melange Grey",
        "storage": "2XL",
        "color": "Melange Grey",
        "price": 127.96,
        "sku": "S1-2XL-MEL"
      },
      {
        "name": "2XL \u2022 Dark Navy",
        "storage": "2XL",
        "color": "Dark Navy",
        "price": 127.96,
        "sku": "S1-2XL-DAR"
      },
      {
        "name": "3XL \u2022 Matte Black",
        "storage": "3XL",
        "color": "Matte Black",
        "price": 127.96,
        "sku": "S1-3XL-MAT"
      },
      {
        "name": "3XL \u2022 Melange Grey",
        "storage": "3XL",
        "color": "Melange Grey",
        "price": 127.96,
        "sku": "S1-3XL-MEL"
      },
      {
        "name": "3XL \u2022 Dark Navy",
        "storage": "3XL",
        "color": "Dark Navy",
        "price": 127.96,
        "sku": "S1-3XL-DAR"
      }
    ],
    "images": [
      "/images/menswear/s1.jpg"
    ]
  },
  {
    "id": "apparel_s2",
    "category": "sweatpants",
    "subcategory": "joggers",
    "brand": "Essentials",
    "model": "Heavyweight French Terry Everyday Joggers",
    "title": "Heavyweight French Terry Everyday Joggers",
    "description": "Dense, cozy sweatpants engineered for maximum lounge and weekend comfort. Lined with a smooth loopback terry interior that feels soft against the skin.",
    "price_retail": 121.17,
    "price_team": 104.81,
    "specs": {
      "Material": "100% Heavy Cotton Loopback Terry (360 GSM)",
      "Fit Profile": "Relaxed Cuffed Fit",
      "Fabric Weight": "360 GSM",
      "Fit Guidance": "Roomy through the thigh with gentle tapering towards the cuffed ankle."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "S \u2022 Heather Grey",
        "storage": "S",
        "color": "Heather Grey",
        "price": 121.17,
        "sku": "S2-S-HEA"
      },
      {
        "name": "S \u2022 Washed Black",
        "storage": "S",
        "color": "Washed Black",
        "price": 121.17,
        "sku": "S2-S-WAS"
      },
      {
        "name": "S \u2022 Oatmeal",
        "storage": "S",
        "color": "Oatmeal",
        "price": 121.17,
        "sku": "S2-S-OAT"
      },
      {
        "name": "S \u2022 Forest Green",
        "storage": "S",
        "color": "Forest Green",
        "price": 121.17,
        "sku": "S2-S-FOR"
      },
      {
        "name": "M \u2022 Heather Grey",
        "storage": "M",
        "color": "Heather Grey",
        "price": 121.17,
        "sku": "S2-M-HEA"
      },
      {
        "name": "M \u2022 Washed Black",
        "storage": "M",
        "color": "Washed Black",
        "price": 121.17,
        "sku": "S2-M-WAS"
      },
      {
        "name": "M \u2022 Oatmeal",
        "storage": "M",
        "color": "Oatmeal",
        "price": 121.17,
        "sku": "S2-M-OAT"
      },
      {
        "name": "M \u2022 Forest Green",
        "storage": "M",
        "color": "Forest Green",
        "price": 121.17,
        "sku": "S2-M-FOR"
      },
      {
        "name": "L \u2022 Heather Grey",
        "storage": "L",
        "color": "Heather Grey",
        "price": 121.17,
        "sku": "S2-L-HEA"
      },
      {
        "name": "L \u2022 Washed Black",
        "storage": "L",
        "color": "Washed Black",
        "price": 121.17,
        "sku": "S2-L-WAS"
      },
      {
        "name": "L \u2022 Oatmeal",
        "storage": "L",
        "color": "Oatmeal",
        "price": 121.17,
        "sku": "S2-L-OAT"
      },
      {
        "name": "L \u2022 Forest Green",
        "storage": "L",
        "color": "Forest Green",
        "price": 121.17,
        "sku": "S2-L-FOR"
      },
      {
        "name": "XL \u2022 Heather Grey",
        "storage": "XL",
        "color": "Heather Grey",
        "price": 121.17,
        "sku": "S2-XL-HEA"
      },
      {
        "name": "XL \u2022 Washed Black",
        "storage": "XL",
        "color": "Washed Black",
        "price": 121.17,
        "sku": "S2-XL-WAS"
      },
      {
        "name": "XL \u2022 Oatmeal",
        "storage": "XL",
        "color": "Oatmeal",
        "price": 121.17,
        "sku": "S2-XL-OAT"
      },
      {
        "name": "XL \u2022 Forest Green",
        "storage": "XL",
        "color": "Forest Green",
        "price": 121.17,
        "sku": "S2-XL-FOR"
      },
      {
        "name": "2XL \u2022 Heather Grey",
        "storage": "2XL",
        "color": "Heather Grey",
        "price": 121.17,
        "sku": "S2-2XL-HEA"
      },
      {
        "name": "2XL \u2022 Washed Black",
        "storage": "2XL",
        "color": "Washed Black",
        "price": 121.17,
        "sku": "S2-2XL-WAS"
      },
      {
        "name": "2XL \u2022 Oatmeal",
        "storage": "2XL",
        "color": "Oatmeal",
        "price": 121.17,
        "sku": "S2-2XL-OAT"
      },
      {
        "name": "2XL \u2022 Forest Green",
        "storage": "2XL",
        "color": "Forest Green",
        "price": 121.17,
        "sku": "S2-2XL-FOR"
      }
    ],
    "images": [
      "/images/menswear/s2.jpg"
    ]
  },
  {
    "id": "apparel_s6",
    "category": "sweatpants",
    "subcategory": "joggers",
    "brand": "Essentials",
    "model": "Relaxed Fit Fleece-Back Lounge Joggers",
    "title": "Relaxed Fit Fleece-Back Lounge Joggers",
    "description": "Ultra-cozy fleece-back sweatpants designed for cool evenings and effortless lounging. Soft brushed interior locks in warmth while remaining lightweight.",
    "price_retail": 98.89,
    "price_team": 85.54,
    "specs": {
      "Material": "70% Cotton, 30% Polyester Fleece (320 GSM)",
      "Fit Profile": "Relaxed Easy Fit",
      "Fabric Weight": "320 GSM",
      "Fit Guidance": "Easy relaxed silhouette through the hips and legs."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Light Heather Grey",
        "storage": "M",
        "color": "Light Heather Grey",
        "price": 98.89,
        "sku": "S6-M-LIG"
      },
      {
        "name": "M \u2022 Pitch Black",
        "storage": "M",
        "color": "Pitch Black",
        "price": 98.89,
        "sku": "S6-M-PIT"
      },
      {
        "name": "M \u2022 Beige Melange",
        "storage": "M",
        "color": "Beige Melange",
        "price": 98.89,
        "sku": "S6-M-BEI"
      },
      {
        "name": "L \u2022 Light Heather Grey",
        "storage": "L",
        "color": "Light Heather Grey",
        "price": 98.89,
        "sku": "S6-L-LIG"
      },
      {
        "name": "L \u2022 Pitch Black",
        "storage": "L",
        "color": "Pitch Black",
        "price": 98.89,
        "sku": "S6-L-PIT"
      },
      {
        "name": "L \u2022 Beige Melange",
        "storage": "L",
        "color": "Beige Melange",
        "price": 98.89,
        "sku": "S6-L-BEI"
      },
      {
        "name": "XL \u2022 Light Heather Grey",
        "storage": "XL",
        "color": "Light Heather Grey",
        "price": 98.89,
        "sku": "S6-XL-LIG"
      },
      {
        "name": "XL \u2022 Pitch Black",
        "storage": "XL",
        "color": "Pitch Black",
        "price": 98.89,
        "sku": "S6-XL-PIT"
      },
      {
        "name": "XL \u2022 Beige Melange",
        "storage": "XL",
        "color": "Beige Melange",
        "price": 98.89,
        "sku": "S6-XL-BEI"
      },
      {
        "name": "2XL \u2022 Light Heather Grey",
        "storage": "2XL",
        "color": "Light Heather Grey",
        "price": 98.89,
        "sku": "S6-2XL-LIG"
      },
      {
        "name": "2XL \u2022 Pitch Black",
        "storage": "2XL",
        "color": "Pitch Black",
        "price": 98.89,
        "sku": "S6-2XL-PIT"
      },
      {
        "name": "2XL \u2022 Beige Melange",
        "storage": "2XL",
        "color": "Beige Melange",
        "price": 98.89,
        "sku": "S6-2XL-BEI"
      }
    ],
    "images": [
      "/images/menswear/s6.jpg"
    ]
  },
  {
    "id": "apparel_s3",
    "category": "sweatpants",
    "subcategory": "joggers",
    "brand": "Essentials",
    "model": "Breathable Quick-Dry Drawstring Joggers",
    "title": "Breathable Quick-Dry Drawstring Joggers",
    "description": "Featherweight athletic joggers featuring advanced moisture management and high ventilation. Ideal for morning runs, workouts, and hot-weather casual lounging.",
    "price_retail": 90.79,
    "price_team": 78.53,
    "specs": {
      "Material": "90% Nylon, 10% Elastane",
      "Fit Profile": "Slim Athletic Fit",
      "Fabric Weight": "Heavyweight",
      "Fit Guidance": "Streamlined athletic cut designed to move with your body."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "M \u2022 Deep Black",
        "storage": "M",
        "color": "Deep Black",
        "price": 90.79,
        "sku": "S3-M-DEE"
      },
      {
        "name": "M \u2022 Steel Grey",
        "storage": "M",
        "color": "Steel Grey",
        "price": 90.79,
        "sku": "S3-M-STE"
      },
      {
        "name": "M \u2022 Dark Slate",
        "storage": "M",
        "color": "Dark Slate",
        "price": 90.79,
        "sku": "S3-M-DAR"
      },
      {
        "name": "L \u2022 Deep Black",
        "storage": "L",
        "color": "Deep Black",
        "price": 90.79,
        "sku": "S3-L-DEE"
      },
      {
        "name": "L \u2022 Steel Grey",
        "storage": "L",
        "color": "Steel Grey",
        "price": 90.79,
        "sku": "S3-L-STE"
      },
      {
        "name": "L \u2022 Dark Slate",
        "storage": "L",
        "color": "Dark Slate",
        "price": 90.79,
        "sku": "S3-L-DAR"
      },
      {
        "name": "XL \u2022 Deep Black",
        "storage": "XL",
        "color": "Deep Black",
        "price": 90.79,
        "sku": "S3-XL-DEE"
      },
      {
        "name": "XL \u2022 Steel Grey",
        "storage": "XL",
        "color": "Steel Grey",
        "price": 90.79,
        "sku": "S3-XL-STE"
      },
      {
        "name": "XL \u2022 Dark Slate",
        "storage": "XL",
        "color": "Dark Slate",
        "price": 90.79,
        "sku": "S3-XL-DAR"
      },
      {
        "name": "2XL \u2022 Deep Black",
        "storage": "2XL",
        "color": "Deep Black",
        "price": 90.79,
        "sku": "S3-2XL-DEE"
      },
      {
        "name": "2XL \u2022 Steel Grey",
        "storage": "2XL",
        "color": "Steel Grey",
        "price": 90.79,
        "sku": "S3-2XL-STE"
      },
      {
        "name": "2XL \u2022 Dark Slate",
        "storage": "2XL",
        "color": "Dark Slate",
        "price": 90.79,
        "sku": "S3-2XL-DAR"
      }
    ],
    "images": [
      "/images/menswear/s3.jpg"
    ]
  },
  {
    "id": "apparel_j6",
    "category": "jeans",
    "subcategory": "denim",
    "brand": "Essentials",
    "model": "Light Wash Wide-Leg Skate Denim",
    "title": "Light Wash Wide-Leg Skate Denim",
    "description": "Contemporary wide-leg jeans featuring a pale summer wash and clean drape. Designed to pool subtly over sneakers with an effortless streetwear attitude.",
    "price_retail": 334.15,
    "price_team": 289.04,
    "specs": {
      "Material": "100% Premium Cotton Denim (12.5 oz)",
      "Fit Profile": "Wide-Leg Loose Fit",
      "Fabric Weight": "12.5 OZ",
      "Fit Guidance": "Cut wide through the leg for an exaggerated, contemporary silhouette."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "30 \u2022 Ice Blue Wash",
        "storage": "30",
        "color": "Ice Blue Wash",
        "price": 334.15,
        "sku": "J6-30-ICE"
      },
      {
        "name": "30 \u2022 Chalk White",
        "storage": "30",
        "color": "Chalk White",
        "price": 334.15,
        "sku": "J6-30-CHA"
      },
      {
        "name": "30 \u2022 Washed Light Grey",
        "storage": "30",
        "color": "Washed Light Grey",
        "price": 334.15,
        "sku": "J6-30-WAS"
      },
      {
        "name": "32 \u2022 Ice Blue Wash",
        "storage": "32",
        "color": "Ice Blue Wash",
        "price": 334.15,
        "sku": "J6-32-ICE"
      },
      {
        "name": "32 \u2022 Chalk White",
        "storage": "32",
        "color": "Chalk White",
        "price": 334.15,
        "sku": "J6-32-CHA"
      },
      {
        "name": "32 \u2022 Washed Light Grey",
        "storage": "32",
        "color": "Washed Light Grey",
        "price": 334.15,
        "sku": "J6-32-WAS"
      },
      {
        "name": "34 \u2022 Ice Blue Wash",
        "storage": "34",
        "color": "Ice Blue Wash",
        "price": 334.15,
        "sku": "J6-34-ICE"
      },
      {
        "name": "34 \u2022 Chalk White",
        "storage": "34",
        "color": "Chalk White",
        "price": 334.15,
        "sku": "J6-34-CHA"
      },
      {
        "name": "34 \u2022 Washed Light Grey",
        "storage": "34",
        "color": "Washed Light Grey",
        "price": 334.15,
        "sku": "J6-34-WAS"
      },
      {
        "name": "36 \u2022 Ice Blue Wash",
        "storage": "36",
        "color": "Ice Blue Wash",
        "price": 334.15,
        "sku": "J6-36-ICE"
      },
      {
        "name": "36 \u2022 Chalk White",
        "storage": "36",
        "color": "Chalk White",
        "price": 334.15,
        "sku": "J6-36-CHA"
      },
      {
        "name": "36 \u2022 Washed Light Grey",
        "storage": "36",
        "color": "Washed Light Grey",
        "price": 334.15,
        "sku": "J6-36-WAS"
      },
      {
        "name": "38 \u2022 Ice Blue Wash",
        "storage": "38",
        "color": "Ice Blue Wash",
        "price": 334.15,
        "sku": "J6-38-ICE"
      },
      {
        "name": "38 \u2022 Chalk White",
        "storage": "38",
        "color": "Chalk White",
        "price": 334.15,
        "sku": "J6-38-CHA"
      },
      {
        "name": "38 \u2022 Washed Light Grey",
        "storage": "38",
        "color": "Washed Light Grey",
        "price": 334.15,
        "sku": "J6-38-WAS"
      }
    ],
    "images": [
      "/images/menswear/j6.jpg"
    ]
  },
  {
    "id": "apparel_j1",
    "category": "jeans",
    "subcategory": "denim",
    "brand": "Essentials",
    "model": "Vintage Wash Straight-Leg Heritage Denim",
    "title": "Vintage Wash Straight-Leg Heritage Denim",
    "description": "A nod to classic American denim, crafted with a vintage stonewash finish and natural fading across thighs. Offers a timeless straight-leg silhouette that pairs effortlessly with boots or sneakers.",
    "price_retail": 298.71,
    "price_team": 258.38,
    "specs": {
      "Material": "98% Heavy Cotton Denim, 2% Spandex (13.5 oz)",
      "Fit Profile": "Classic Straight-Leg",
      "Fabric Weight": "13.5 OZ",
      "Fit Guidance": "Standard straight cut from thigh to ankle. Fits true to waist size."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "30 \u2022 Vintage Medium Blue",
        "storage": "30",
        "color": "Vintage Medium Blue",
        "price": 298.71,
        "sku": "J1-30-VIN"
      },
      {
        "name": "30 \u2022 Stonewash Indigo",
        "storage": "30",
        "color": "Stonewash Indigo",
        "price": 298.71,
        "sku": "J1-30-STO"
      },
      {
        "name": "30 \u2022 Deep Raw Indigo",
        "storage": "30",
        "color": "Deep Raw Indigo",
        "price": 298.71,
        "sku": "J1-30-DEE"
      },
      {
        "name": "31 \u2022 Vintage Medium Blue",
        "storage": "31",
        "color": "Vintage Medium Blue",
        "price": 298.71,
        "sku": "J1-31-VIN"
      },
      {
        "name": "31 \u2022 Stonewash Indigo",
        "storage": "31",
        "color": "Stonewash Indigo",
        "price": 298.71,
        "sku": "J1-31-STO"
      },
      {
        "name": "31 \u2022 Deep Raw Indigo",
        "storage": "31",
        "color": "Deep Raw Indigo",
        "price": 298.71,
        "sku": "J1-31-DEE"
      },
      {
        "name": "32 \u2022 Vintage Medium Blue",
        "storage": "32",
        "color": "Vintage Medium Blue",
        "price": 298.71,
        "sku": "J1-32-VIN"
      },
      {
        "name": "32 \u2022 Stonewash Indigo",
        "storage": "32",
        "color": "Stonewash Indigo",
        "price": 298.71,
        "sku": "J1-32-STO"
      },
      {
        "name": "32 \u2022 Deep Raw Indigo",
        "storage": "32",
        "color": "Deep Raw Indigo",
        "price": 298.71,
        "sku": "J1-32-DEE"
      },
      {
        "name": "33 \u2022 Vintage Medium Blue",
        "storage": "33",
        "color": "Vintage Medium Blue",
        "price": 298.71,
        "sku": "J1-33-VIN"
      },
      {
        "name": "33 \u2022 Stonewash Indigo",
        "storage": "33",
        "color": "Stonewash Indigo",
        "price": 298.71,
        "sku": "J1-33-STO"
      },
      {
        "name": "33 \u2022 Deep Raw Indigo",
        "storage": "33",
        "color": "Deep Raw Indigo",
        "price": 298.71,
        "sku": "J1-33-DEE"
      },
      {
        "name": "34 \u2022 Vintage Medium Blue",
        "storage": "34",
        "color": "Vintage Medium Blue",
        "price": 298.71,
        "sku": "J1-34-VIN"
      },
      {
        "name": "34 \u2022 Stonewash Indigo",
        "storage": "34",
        "color": "Stonewash Indigo",
        "price": 298.71,
        "sku": "J1-34-STO"
      },
      {
        "name": "34 \u2022 Deep Raw Indigo",
        "storage": "34",
        "color": "Deep Raw Indigo",
        "price": 298.71,
        "sku": "J1-34-DEE"
      },
      {
        "name": "36 \u2022 Vintage Medium Blue",
        "storage": "36",
        "color": "Vintage Medium Blue",
        "price": 298.71,
        "sku": "J1-36-VIN"
      },
      {
        "name": "36 \u2022 Stonewash Indigo",
        "storage": "36",
        "color": "Stonewash Indigo",
        "price": 298.71,
        "sku": "J1-36-STO"
      },
      {
        "name": "36 \u2022 Deep Raw Indigo",
        "storage": "36",
        "color": "Deep Raw Indigo",
        "price": 298.71,
        "sku": "J1-36-DEE"
      },
      {
        "name": "38 \u2022 Vintage Medium Blue",
        "storage": "38",
        "color": "Vintage Medium Blue",
        "price": 298.71,
        "sku": "J1-38-VIN"
      },
      {
        "name": "38 \u2022 Stonewash Indigo",
        "storage": "38",
        "color": "Stonewash Indigo",
        "price": 298.71,
        "sku": "J1-38-STO"
      },
      {
        "name": "38 \u2022 Deep Raw Indigo",
        "storage": "38",
        "color": "Deep Raw Indigo",
        "price": 298.71,
        "sku": "J1-38-DEE"
      }
    ],
    "images": [
      "/images/menswear/j1.jpg"
    ]
  },
  {
    "id": "apparel_j3",
    "category": "jeans",
    "subcategory": "denim",
    "brand": "Essentials",
    "model": "Faded Vintage Gradient Relaxed Denim",
    "title": "Faded Vintage Gradient Relaxed Denim",
    "description": "Expressive 90s-inspired relaxed jeans showcasing hand-finished whiskering and gentle gradient wash. Combines a spacious thigh with a clean vertical fall.",
    "price_retail": 231.2,
    "price_team": 199.99,
    "specs": {
      "Material": "100% Rigid Cotton Denim (13 oz)",
      "Fit Profile": "Relaxed Straight Fit",
      "Fabric Weight": "13 OZ",
      "Fit Guidance": "Spacious relaxed fit. Will soften and conform to your shape over time."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "30 \u2022 Light Vintage Blue",
        "storage": "30",
        "color": "Light Vintage Blue",
        "price": 231.2,
        "sku": "J3-30-LIG"
      },
      {
        "name": "30 \u2022 Washed Charcoal",
        "storage": "30",
        "color": "Washed Charcoal",
        "price": 231.2,
        "sku": "J3-30-WAS"
      },
      {
        "name": "30 \u2022 Mid Denim Blue",
        "storage": "30",
        "color": "Mid Denim Blue",
        "price": 231.2,
        "sku": "J3-30-MID"
      },
      {
        "name": "32 \u2022 Light Vintage Blue",
        "storage": "32",
        "color": "Light Vintage Blue",
        "price": 231.2,
        "sku": "J3-32-LIG"
      },
      {
        "name": "32 \u2022 Washed Charcoal",
        "storage": "32",
        "color": "Washed Charcoal",
        "price": 231.2,
        "sku": "J3-32-WAS"
      },
      {
        "name": "32 \u2022 Mid Denim Blue",
        "storage": "32",
        "color": "Mid Denim Blue",
        "price": 231.2,
        "sku": "J3-32-MID"
      },
      {
        "name": "34 \u2022 Light Vintage Blue",
        "storage": "34",
        "color": "Light Vintage Blue",
        "price": 231.2,
        "sku": "J3-34-LIG"
      },
      {
        "name": "34 \u2022 Washed Charcoal",
        "storage": "34",
        "color": "Washed Charcoal",
        "price": 231.2,
        "sku": "J3-34-WAS"
      },
      {
        "name": "34 \u2022 Mid Denim Blue",
        "storage": "34",
        "color": "Mid Denim Blue",
        "price": 231.2,
        "sku": "J3-34-MID"
      },
      {
        "name": "36 \u2022 Light Vintage Blue",
        "storage": "36",
        "color": "Light Vintage Blue",
        "price": 231.2,
        "sku": "J3-36-LIG"
      },
      {
        "name": "36 \u2022 Washed Charcoal",
        "storage": "36",
        "color": "Washed Charcoal",
        "price": 231.2,
        "sku": "J3-36-WAS"
      },
      {
        "name": "36 \u2022 Mid Denim Blue",
        "storage": "36",
        "color": "Mid Denim Blue",
        "price": 231.2,
        "sku": "J3-36-MID"
      },
      {
        "name": "38 \u2022 Light Vintage Blue",
        "storage": "38",
        "color": "Light Vintage Blue",
        "price": 231.2,
        "sku": "J3-38-LIG"
      },
      {
        "name": "38 \u2022 Washed Charcoal",
        "storage": "38",
        "color": "Washed Charcoal",
        "price": 231.2,
        "sku": "J3-38-WAS"
      },
      {
        "name": "38 \u2022 Mid Denim Blue",
        "storage": "38",
        "color": "Mid Denim Blue",
        "price": 231.2,
        "sku": "J3-38-MID"
      }
    ],
    "images": [
      "/images/menswear/j3.jpg"
    ]
  },
  {
    "id": "apparel_j2",
    "category": "jeans",
    "subcategory": "denim",
    "brand": "Essentials",
    "model": "Premium Stretch Slim-Straight Business Jeans",
    "title": "Premium Stretch Slim-Straight Business Jeans",
    "description": "Modern dark-rinse jeans tailored for professional and evening wear. Infused with dual-core stretch yarns to retain shape without bagging, providing a clean, sophisticated profile.",
    "price_retail": 229.52,
    "price_team": 198.53,
    "specs": {
      "Material": "78% Cotton, 20% Polyester, 2% Elastane (11.5 oz)",
      "Fit Profile": "Slim-Straight Fit",
      "Fabric Weight": "11.5 OZ",
      "Fit Guidance": "Tailored through hip and thigh with a slight taper below the knee."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "30 \u2022 Dark Indigo Rinse",
        "storage": "30",
        "color": "Dark Indigo Rinse",
        "price": 229.52,
        "sku": "J2-30-DAR"
      },
      {
        "name": "30 \u2022 Solid Jet Black",
        "storage": "30",
        "color": "Solid Jet Black",
        "price": 229.52,
        "sku": "J2-30-SOL"
      },
      {
        "name": "30 \u2022 Charcoal Wash",
        "storage": "30",
        "color": "Charcoal Wash",
        "price": 229.52,
        "sku": "J2-30-CHA"
      },
      {
        "name": "31 \u2022 Dark Indigo Rinse",
        "storage": "31",
        "color": "Dark Indigo Rinse",
        "price": 229.52,
        "sku": "J2-31-DAR"
      },
      {
        "name": "31 \u2022 Solid Jet Black",
        "storage": "31",
        "color": "Solid Jet Black",
        "price": 229.52,
        "sku": "J2-31-SOL"
      },
      {
        "name": "31 \u2022 Charcoal Wash",
        "storage": "31",
        "color": "Charcoal Wash",
        "price": 229.52,
        "sku": "J2-31-CHA"
      },
      {
        "name": "32 \u2022 Dark Indigo Rinse",
        "storage": "32",
        "color": "Dark Indigo Rinse",
        "price": 229.52,
        "sku": "J2-32-DAR"
      },
      {
        "name": "32 \u2022 Solid Jet Black",
        "storage": "32",
        "color": "Solid Jet Black",
        "price": 229.52,
        "sku": "J2-32-SOL"
      },
      {
        "name": "32 \u2022 Charcoal Wash",
        "storage": "32",
        "color": "Charcoal Wash",
        "price": 229.52,
        "sku": "J2-32-CHA"
      },
      {
        "name": "33 \u2022 Dark Indigo Rinse",
        "storage": "33",
        "color": "Dark Indigo Rinse",
        "price": 229.52,
        "sku": "J2-33-DAR"
      },
      {
        "name": "33 \u2022 Solid Jet Black",
        "storage": "33",
        "color": "Solid Jet Black",
        "price": 229.52,
        "sku": "J2-33-SOL"
      },
      {
        "name": "33 \u2022 Charcoal Wash",
        "storage": "33",
        "color": "Charcoal Wash",
        "price": 229.52,
        "sku": "J2-33-CHA"
      },
      {
        "name": "34 \u2022 Dark Indigo Rinse",
        "storage": "34",
        "color": "Dark Indigo Rinse",
        "price": 229.52,
        "sku": "J2-34-DAR"
      },
      {
        "name": "34 \u2022 Solid Jet Black",
        "storage": "34",
        "color": "Solid Jet Black",
        "price": 229.52,
        "sku": "J2-34-SOL"
      },
      {
        "name": "34 \u2022 Charcoal Wash",
        "storage": "34",
        "color": "Charcoal Wash",
        "price": 229.52,
        "sku": "J2-34-CHA"
      },
      {
        "name": "36 \u2022 Dark Indigo Rinse",
        "storage": "36",
        "color": "Dark Indigo Rinse",
        "price": 229.52,
        "sku": "J2-36-DAR"
      },
      {
        "name": "36 \u2022 Solid Jet Black",
        "storage": "36",
        "color": "Solid Jet Black",
        "price": 229.52,
        "sku": "J2-36-SOL"
      },
      {
        "name": "36 \u2022 Charcoal Wash",
        "storage": "36",
        "color": "Charcoal Wash",
        "price": 229.52,
        "sku": "J2-36-CHA"
      },
      {
        "name": "38 \u2022 Dark Indigo Rinse",
        "storage": "38",
        "color": "Dark Indigo Rinse",
        "price": 229.52,
        "sku": "J2-38-DAR"
      },
      {
        "name": "38 \u2022 Solid Jet Black",
        "storage": "38",
        "color": "Solid Jet Black",
        "price": 229.52,
        "sku": "J2-38-SOL"
      },
      {
        "name": "38 \u2022 Charcoal Wash",
        "storage": "38",
        "color": "Charcoal Wash",
        "price": 229.52,
        "sku": "J2-38-CHA"
      }
    ],
    "images": [
      "/images/menswear/j2.jpg"
    ]
  },
  {
    "id": "apparel_j4",
    "category": "jeans",
    "subcategory": "denim",
    "brand": "Essentials",
    "model": "Classic Mid-Rise Stretch Straight Jeans",
    "title": "Classic Mid-Rise Stretch Straight Jeans",
    "description": "The dependable everyday denim staple. Balances authentic cotton texture with flexibility for driving, walking, and day-long wear.",
    "price_retail": 201.84,
    "price_team": 174.59,
    "specs": {
      "Material": "97% Cotton, 3% Spandex (12 oz)",
      "Fit Profile": "Regular Straight Fit",
      "Fabric Weight": "12 OZ",
      "Fit Guidance": "True regular fit with standard 16-inch leg opening."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "30 \u2022 Classic Blue",
        "storage": "30",
        "color": "Classic Blue",
        "price": 201.84,
        "sku": "J4-30-CLA"
      },
      {
        "name": "30 \u2022 Dark Navy",
        "storage": "30",
        "color": "Dark Navy",
        "price": 201.84,
        "sku": "J4-30-DAR"
      },
      {
        "name": "30 \u2022 Washed Black",
        "storage": "30",
        "color": "Washed Black",
        "price": 201.84,
        "sku": "J4-30-WAS"
      },
      {
        "name": "31 \u2022 Classic Blue",
        "storage": "31",
        "color": "Classic Blue",
        "price": 201.84,
        "sku": "J4-31-CLA"
      },
      {
        "name": "31 \u2022 Dark Navy",
        "storage": "31",
        "color": "Dark Navy",
        "price": 201.84,
        "sku": "J4-31-DAR"
      },
      {
        "name": "31 \u2022 Washed Black",
        "storage": "31",
        "color": "Washed Black",
        "price": 201.84,
        "sku": "J4-31-WAS"
      },
      {
        "name": "32 \u2022 Classic Blue",
        "storage": "32",
        "color": "Classic Blue",
        "price": 201.84,
        "sku": "J4-32-CLA"
      },
      {
        "name": "32 \u2022 Dark Navy",
        "storage": "32",
        "color": "Dark Navy",
        "price": 201.84,
        "sku": "J4-32-DAR"
      },
      {
        "name": "32 \u2022 Washed Black",
        "storage": "32",
        "color": "Washed Black",
        "price": 201.84,
        "sku": "J4-32-WAS"
      },
      {
        "name": "33 \u2022 Classic Blue",
        "storage": "33",
        "color": "Classic Blue",
        "price": 201.84,
        "sku": "J4-33-CLA"
      },
      {
        "name": "33 \u2022 Dark Navy",
        "storage": "33",
        "color": "Dark Navy",
        "price": 201.84,
        "sku": "J4-33-DAR"
      },
      {
        "name": "33 \u2022 Washed Black",
        "storage": "33",
        "color": "Washed Black",
        "price": 201.84,
        "sku": "J4-33-WAS"
      },
      {
        "name": "34 \u2022 Classic Blue",
        "storage": "34",
        "color": "Classic Blue",
        "price": 201.84,
        "sku": "J4-34-CLA"
      },
      {
        "name": "34 \u2022 Dark Navy",
        "storage": "34",
        "color": "Dark Navy",
        "price": 201.84,
        "sku": "J4-34-DAR"
      },
      {
        "name": "34 \u2022 Washed Black",
        "storage": "34",
        "color": "Washed Black",
        "price": 201.84,
        "sku": "J4-34-WAS"
      },
      {
        "name": "36 \u2022 Classic Blue",
        "storage": "36",
        "color": "Classic Blue",
        "price": 201.84,
        "sku": "J4-36-CLA"
      },
      {
        "name": "36 \u2022 Dark Navy",
        "storage": "36",
        "color": "Dark Navy",
        "price": 201.84,
        "sku": "J4-36-DAR"
      },
      {
        "name": "36 \u2022 Washed Black",
        "storage": "36",
        "color": "Washed Black",
        "price": 201.84,
        "sku": "J4-36-WAS"
      },
      {
        "name": "38 \u2022 Classic Blue",
        "storage": "38",
        "color": "Classic Blue",
        "price": 201.84,
        "sku": "J4-38-CLA"
      },
      {
        "name": "38 \u2022 Dark Navy",
        "storage": "38",
        "color": "Dark Navy",
        "price": 201.84,
        "sku": "J4-38-DAR"
      },
      {
        "name": "38 \u2022 Washed Black",
        "storage": "38",
        "color": "Washed Black",
        "price": 201.84,
        "sku": "J4-38-WAS"
      },
      {
        "name": "40 \u2022 Classic Blue",
        "storage": "40",
        "color": "Classic Blue",
        "price": 201.84,
        "sku": "J4-40-CLA"
      },
      {
        "name": "40 \u2022 Dark Navy",
        "storage": "40",
        "color": "Dark Navy",
        "price": 201.84,
        "sku": "J4-40-DAR"
      },
      {
        "name": "40 \u2022 Washed Black",
        "storage": "40",
        "color": "Washed Black",
        "price": 201.84,
        "sku": "J4-40-WAS"
      }
    ],
    "images": [
      "/images/menswear/j4.jpg"
    ]
  },
  {
    "id": "apparel_j5",
    "category": "jeans",
    "subcategory": "denim",
    "brand": "Essentials",
    "model": "Heavy-Duty Workwear Relaxed Fit Jeans",
    "title": "Heavy-Duty Workwear Relaxed Fit Jeans",
    "description": "Constructed from thick, abrasion-resistant denim engineered for rugged outdoor and workshop tasks. Features triple-needle stitching and reinforced back pockets.",
    "price_retail": 134.33,
    "price_team": 116.2,
    "specs": {
      "Material": "100% Heavy Cotton Denim (14 oz)",
      "Fit Profile": "Relaxed Work Fit",
      "Fabric Weight": "14 OZ",
      "Fit Guidance": "Spacious through seat, thighs, and knees for unrestricted movement."
    },
    "in_stock": true,
    "featured": false,
    "variants": [
      {
        "name": "30 \u2022 Raw Indigo Blue",
        "storage": "30",
        "color": "Raw Indigo Blue",
        "price": 134.33,
        "sku": "J5-30-RAW"
      },
      {
        "name": "30 \u2022 Stonewashed Black",
        "storage": "30",
        "color": "Stonewashed Black",
        "price": 134.33,
        "sku": "J5-30-STO"
      },
      {
        "name": "30 \u2022 Tinted Blue",
        "storage": "30",
        "color": "Tinted Blue",
        "price": 134.33,
        "sku": "J5-30-TIN"
      },
      {
        "name": "32 \u2022 Raw Indigo Blue",
        "storage": "32",
        "color": "Raw Indigo Blue",
        "price": 134.33,
        "sku": "J5-32-RAW"
      },
      {
        "name": "32 \u2022 Stonewashed Black",
        "storage": "32",
        "color": "Stonewashed Black",
        "price": 134.33,
        "sku": "J5-32-STO"
      },
      {
        "name": "32 \u2022 Tinted Blue",
        "storage": "32",
        "color": "Tinted Blue",
        "price": 134.33,
        "sku": "J5-32-TIN"
      },
      {
        "name": "34 \u2022 Raw Indigo Blue",
        "storage": "34",
        "color": "Raw Indigo Blue",
        "price": 134.33,
        "sku": "J5-34-RAW"
      },
      {
        "name": "34 \u2022 Stonewashed Black",
        "storage": "34",
        "color": "Stonewashed Black",
        "price": 134.33,
        "sku": "J5-34-STO"
      },
      {
        "name": "34 \u2022 Tinted Blue",
        "storage": "34",
        "color": "Tinted Blue",
        "price": 134.33,
        "sku": "J5-34-TIN"
      },
      {
        "name": "36 \u2022 Raw Indigo Blue",
        "storage": "36",
        "color": "Raw Indigo Blue",
        "price": 134.33,
        "sku": "J5-36-RAW"
      },
      {
        "name": "36 \u2022 Stonewashed Black",
        "storage": "36",
        "color": "Stonewashed Black",
        "price": 134.33,
        "sku": "J5-36-STO"
      },
      {
        "name": "36 \u2022 Tinted Blue",
        "storage": "36",
        "color": "Tinted Blue",
        "price": 134.33,
        "sku": "J5-36-TIN"
      },
      {
        "name": "38 \u2022 Raw Indigo Blue",
        "storage": "38",
        "color": "Raw Indigo Blue",
        "price": 134.33,
        "sku": "J5-38-RAW"
      },
      {
        "name": "38 \u2022 Stonewashed Black",
        "storage": "38",
        "color": "Stonewashed Black",
        "price": 134.33,
        "sku": "J5-38-STO"
      },
      {
        "name": "38 \u2022 Tinted Blue",
        "storage": "38",
        "color": "Tinted Blue",
        "price": 134.33,
        "sku": "J5-38-TIN"
      },
      {
        "name": "40 \u2022 Raw Indigo Blue",
        "storage": "40",
        "color": "Raw Indigo Blue",
        "price": 134.33,
        "sku": "J5-40-RAW"
      },
      {
        "name": "40 \u2022 Stonewashed Black",
        "storage": "40",
        "color": "Stonewashed Black",
        "price": 134.33,
        "sku": "J5-40-STO"
      },
      {
        "name": "40 \u2022 Tinted Blue",
        "storage": "40",
        "color": "Tinted Blue",
        "price": 134.33,
        "sku": "J5-40-TIN"
      }
    ],
    "images": [
      "/images/menswear/j5.jpg"
    ]
  },
  {
    "id": "apparel_chunky_sneaker",
    "category": "sneakers",
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
      "/Volumes/TSU303_Data/Commerce_Catalog/images/menswear/s1.jpg"
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
      "/Volumes/TSU303_Data/Commerce_Catalog/images/menswear/s1.jpg"
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
        "name": "49mm Titanium - Ocean Band",
        "storage": "49mm",
        "color": "Ocean Blue",
        "price": 15200.0,
        "sku": "AW-ULTRA-2-OCN"
      },
      {
        "name": "49mm Titanium - Alpine Loop",
        "storage": "49mm",
        "color": "Orange",
        "price": 15200.0,
        "sku": "AW-ULTRA-2-ALP"
      }
    ],
    "images": [
      "/Volumes/TSU303_Data/Commerce_Catalog/images/watches/apple_watch_ultra_2.png"
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
      "/Volumes/TSU303_Data/Commerce_Catalog/images/watches/apple_watch_series_10.png"
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
      "/Volumes/TSU303_Data/Commerce_Catalog/images/audio/airpods_pro_2.png"
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
      "/Volumes/TSU303_Data/Commerce_Catalog/images/chargers/anker_charger_100w.png"
    ]
  }
]
