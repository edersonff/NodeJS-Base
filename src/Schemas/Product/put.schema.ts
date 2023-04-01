import * as joi from "joi";

export const putProduct = joi.object({
  code: joi.string(),
  product_name: joi.string(),
  quantity: joi.string(),
  brands: joi.string(),
  categories: joi.string(),
  labels: joi.string(),
  cities: joi.string(),
  purchase_places: joi.string(),
  stores: joi.string(),
  ingredients_text: joi.string(),
  traces: joi.string(),
  serving_size: joi.string(),
  serving_quantity: joi.string(),
  nutriscore_score: joi.string(),
  nutriscore_grade: joi.string(),
  main_category: joi.string(),
  image_url: joi.string(),

  imported_t: joi.date(),
  status: joi.string().valid("draft", "trash", "published"),
});
