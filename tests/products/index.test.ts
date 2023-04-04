import request from "supertest";
// @ts-ignore
import { apiURL } from "../config.ts";

test("GET /api/products should return a list of draft products", async () => {
  return request(apiURL)
    .get("/products")
    .query({ limit: 10, offset: 0, status: "draft" })
    .set("Accept", "application/json")
    .expect(200)
    .then((response) => {
      const data = response.body;
      expect(data).toBeInstanceOf(Array);
      expect(data.length).toBe(10);
    });
});
