export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  collection: string;
  category: string;
  sizes: string[];
  colors: string[];
  image: string;
  gallery: string[];
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const YAHVE_PRODUCTS: Product[] = [
  {
    id: "prod_1",
    slug: "faith-over-fear-tee",
    name: "Faith Over Fear Tee",
    price: 15500,
    collection: "The Glory Collection",
    category: "Tops",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    image: "/attached_assets/generated_images/product2.jpg",
    gallery: ["/attached_assets/generated_images/product2.jpg", "/attached_assets/generated_images/hero2.jpg"],
    description: "Constructed from 240gsm heavy-weight cotton, the Faith Over Fear Tee offers an oversized, boxy fit. It features a dropped shoulder and thick ribbed collar. Subtle puff print typography on the back acts as a quiet reminder of identity.",
    isBestSeller: true
  },
  {
    id: "prod_2",
    slug: "sovereign-oversized-hoodie",
    name: "Sovereign Oversized Hoodie",
    price: 17500,
    collection: "Kingdom",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Charcoal"],
    image: "/attached_assets/generated_images/product1.jpg",
    gallery: ["/attached_assets/generated_images/product1.jpg", "/attached_assets/generated_images/hero1.jpg"],
    description: "A staple in the YAHVE wardrobe. This 450gsm French Terry hoodie is designed with a double-lined hood and a kangaroo pocket. It drapes effortlessly, giving a luxurious silhouette. Embroidered Kingdom emblem on the chest.",
    isNew: true
  },
  {
    id: "prod_3",
    slug: "purpose-cap",
    name: "Purpose Cap",
    price: 8500,
    collection: "Purpose",
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Black", "Sand"],
    image: "/attached_assets/generated_images/product3.jpg",
    gallery: ["/attached_assets/generated_images/product3.jpg", "/attached_assets/generated_images/lookbook4.jpg"],
    description: "Classic 6-panel baseball cap constructed from premium cotton twill. Adjustable back strap with matte metal hardware. 'Purpose' tonal embroidery across the front panels.",
    isBestSeller: true
  },
  {
    id: "prod_4",
    slug: "blessed-unbothered-tee",
    name: "Blessed & Unbothered Tee",
    price: 15500,
    collection: "Grace",
    category: "Tops",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Stone"],
    image: "/attached_assets/generated_images/product2.jpg",
    gallery: ["/attached_assets/generated_images/product2.jpg"],
    description: "Premium heavy-weight tee featuring a relaxed, drop-shoulder fit. The 'Blessed & Unbothered' graphic is screen-printed using a high-density technique for a tactile finish.",
  },
  {
    id: "prod_5",
    slug: "never-forget-tote",
    name: "Never Forget Tote",
    price: 6500,
    collection: "Never Forget God",
    category: "Accessories",
    sizes: ["Standard"],
    colors: ["Beige"],
    image: "/attached_assets/generated_images/product4.jpg",
    gallery: ["/attached_assets/generated_images/product4.jpg"],
    description: "Heavyweight 12oz canvas tote bag. Features reinforced webbed handles and an internal zip pocket for valuables. Screen-printed 'Never Forget God' text.",
    isNew: true
  },
  {
    id: "prod_6",
    slug: "identity-hoodie",
    name: "Identity Hoodie",
    price: 17500,
    collection: "Identity",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Cream"],
    image: "/attached_assets/generated_images/product5.jpg",
    gallery: ["/attached_assets/generated_images/product5.jpg", "/attached_assets/generated_images/hero3.jpg"],
    description: "An ultra-premium 450gsm fleece hoodie with a cropped body and elongated sleeves. Designed to elevate the everyday uniform. Features subtle blind-embossed branding.",
    isBestSeller: true
  },
  {
    id: "prod_7",
    slug: "kingdom-come-long-sleeve",
    name: "Kingdom Come Long Sleeve",
    price: 15000,
    collection: "Kingdom",
    category: "Tops",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Cream", "Black", "White", "Navy blue"],
    image: "/attached_assets/generated_images/product2.jpg",
    gallery: ["/attached_assets/generated_images/product2.jpg"],
    description: "A mock-neck long sleeve tee in heavy jersey cotton. Ribbed cuffs and an oversized body fit. 'Kingdom Come' tonal print down the spine.",
  },
  {
    id: "prod_8",
    slug: "grace-jogger",
    name: "Grace Jogger",
    price: 15000,
    collection: "Grace",
    category: "Bottoms",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Oatmeal", "Black", "Coffee brown"],
    image: "/attached_assets/generated_images/product1.jpg",
    gallery: ["/attached_assets/generated_images/product1.jpg"],
    description: "Relaxed fit sweatpants with a straight-leg drape. Features side welt pockets and an elasticated waistband with elongated drawstrings. Matches perfectly with the Sovereign Hoodie."
  },
  {
    id: "prod_9",
    slug: "glory-track-jacket",
    name: "Glory Track Jacket",
    price: 19500,
    collection: "The Glory Collection",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    image: "/attached_assets/generated_images/product6.jpg",
    gallery: ["/attached_assets/generated_images/product6.jpg"],
    description: "A modern take on the classic track jacket. Premium nylon shell with mesh lining. Features a two-way matte zipper and hidden zip pockets.",
    isNew: true
  },
  {
    id: "prod_10",
    slug: "pillar-tee",
    name: "Pillar Tee",
    price: 15500,
    collection: "Identity",
    category: "Tops",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy Blue"],
    image: "/attached_assets/generated_images/product2.jpg",
    gallery: ["/attached_assets/generated_images/product2.jpg"],
    description: "Essential oversized t-shirt. The perfect foundational piece for any outfit. Signature YAHVE back seam detail.",
  },
  {
    id: "prod_11",
    slug: "remnant-cap",
    name: "Remnant Cap",
    price: 8500,
    collection: "Never Forget God",
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Charcoal", "Tan"],
    image: "/attached_assets/generated_images/product3.jpg",
    gallery: ["/attached_assets/generated_images/product3.jpg"],
    description: "Unstructured 6-panel cap with a slightly curved brim. Vintage wash finish for a lived-in feel.",
  },
  {
    id: "prod_12",
    slug: "covenant-hoodie",
    name: "Covenant Hoodie",
    price: 17500,
    collection: "The Glory Collection",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Cream"],
    image: "/attached_assets/generated_images/product5.jpg",
    gallery: ["/attached_assets/generated_images/product5.jpg"],
    description: "Our heaviest hoodie to date. 500gsm custom-milled fleece. Drop shoulder, cropped body, extreme oversized fit. An absolute masterpiece of comfort and form.",
    isBestSeller: true,
    isNew: true
  }
];
