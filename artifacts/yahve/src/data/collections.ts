export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
}

export const YAHVE_COLLECTIONS: Collection[] = [
  {
    id: "col_1",
    slug: "the-glory-collection",
    name: "The Glory Collection",
    description: "An elevation of the everyday. Premium heavy-weight essentials designed to stand the test of time.",
    image: "/attached_assets/generated_images/hero1.jpg"
  },
  {
    id: "col_2",
    slug: "never-forget-god",
    name: "Never Forget God",
    description: "A quiet reminder. Pieces meant to center you amidst the noise of the modern world.",
    image: "/attached_assets/generated_images/lookbook1.jpg"
  },
  {
    id: "col_3",
    slug: "kingdom",
    name: "Kingdom",
    description: "Bold and unashamed. Oversized silhouettes and structured fits that make a statement.",
    image: "/attached_assets/generated_images/hero2.jpg"
  },
  {
    id: "col_4",
    slug: "grace",
    name: "Grace",
    description: "Softness and strength combined. Neutral tones, flowing drapes, and ultimate comfort.",
    image: "/attached_assets/generated_images/lookbook3.jpg"
  },
  {
    id: "col_5",
    slug: "identity",
    name: "Identity",
    description: "Rooted in who we are. Sharp lines, deep blacks, and crisp whites.",
    image: "/attached_assets/generated_images/hero3.jpg"
  },
  {
    id: "col_6",
    slug: "purpose",
    name: "Purpose",
    description: "Functional outerwear and accessories built for the journey.",
    image: "/attached_assets/generated_images/lookbook2.jpg"
  }
];
