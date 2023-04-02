import * as joi from "joi";

export const putProduct = joi.object({
  data: joi.object().keys({
    code: joi.number().required(),
    name: joi.string().required(),
  }).unknown(true),

  imported_t: joi.date(),
  status: joi.string().valid("draft", "trash", "published"),
});
