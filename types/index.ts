export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  inStock: boolean;
  featured: boolean;
}

export interface GalleryPhoto {
  id: string;
  imageUrl: string;
  videoUrl?: string;
  caption: string;
  submittedBy: string;
  birdType: string;
  location: string;
  approved: boolean;
  featured: boolean;
  isPlaceholder?: boolean;
  upvotes?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
