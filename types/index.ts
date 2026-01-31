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
  caption: string;
  submittedBy: string;
  birdType: string;
  location: string;
  approved: boolean;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
