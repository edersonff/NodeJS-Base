import request from "supertest";
// @ts-ignore
import { apiURL } from "../config.ts";

const code = '8718215480235'

test("GET /api/products/{code} should return a product", async () => {
    return request(apiURL)
      .get("/products/" + code)
      .set("Accept", "application/json")
      .expect(200)
      .then((response) => {
          const data = response.body;
          expect(data).toBeInstanceOf(Object);
          expect(data.data.code).toBe(code);
      });
  });

  test("PUT /api/products/{code} should return a updated product", async () => {
    return request(apiURL)
      .put("/products/" + code)
      .send({
        status: "published",
      })
      .set("Accept", "application/json")
      .expect(200)
      .then((response) => {
          const data = response.body;
          expect(data).toBeInstanceOf(Object);
          expect(data.data.code).toBe(code);
          expect(data.status).toBe("published");
      });
  });
    

  test("DELETE /api/products/{code} should return a message about success destroyed product", async () => {
    return request(apiURL)
      .delete("/products/" + code)
      .set("Accept", "application/json")
      .expect(200)
      .then((response) => {
          expect(response.text).toBe("Produto deletado com sucesso");
      });
  });