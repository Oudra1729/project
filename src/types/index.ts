export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  created_at?: string;
}

export interface Product {
  id: string;
  name: string;
  name_ar: string;
  description: string;
  description_ar: string;
  price: number;
  original_price?: number;
  image_url: string;
  category: string;
  category_ar: string;
  rating: number;
  reviews_count: number;
  in_stock: boolean;
  features: string[];
  features_ar: string[];
  created_at: string;
}

export interface AuthResponse {
  user: User | null;
  token: string | null;
  error: string | null;
}