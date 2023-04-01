import { object, date, string } from "joi";

export const putProduct = object({
  code: string(),
  product_name: string(),
  quantity: string(),
  brands: string(),
  categories: string(),
  labels: string(),
  cities: string(),
  purchase_places: string(),
  stores: string(),
  ingredients_text: string(),
  traces: string(),
  serving_size: string(),
  serving_quantity: string(),
  nutriscore_score: string(),
  nutriscore_grade: string(),
  main_category: string(),
  image_url: string(),

  imported_t: date(),
  status: string().valid("draft", "trash", "published"),
});
