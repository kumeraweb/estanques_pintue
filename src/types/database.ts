export interface Product {
  id: string
  title: string
  description: string | null
  price: number | null
  category: string | null
  image_url: string | null
  featured: boolean
  created_at: string
  updated_at: string
}

export interface Banner {
  id: string
  image_url: string
  title: string | null
  active: boolean
  created_at: string
  updated_at: string
}
