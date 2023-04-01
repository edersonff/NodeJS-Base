import { object, date, string } from "joi";

export const putProduct = object({
  imported_t: date().required(),
  status: string().valid("draft", "trash", "published").required(),
});
