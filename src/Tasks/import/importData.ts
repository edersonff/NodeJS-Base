import logger from "../../Logs/logger";
import products from "./products.data.json";
import zlib from "zlib";
import fs from "fs";
import readline from "readline";
import https from "https";
// @ts-ignore
import { parse } from "bfj";
// @ts-ignore
import { getRepository } from "typeorm";
import { Product } from "../../Entity/product.entity";

const url = (param: string) =>
  "https://challenges.coode.sh/food/data/json/" + param;

const saveFile = async (fileUrl: any) => {
  const path = __dirname + "/tmp/" + fileUrl.split("/").pop();
  // const file = fs.createWriteStream(path);
  // await new Promise((resolve, reject) => {
  //   https.get(fileUrl, function (response) {
  //     response.pipe(file);
  //     file.on("finish", function () {
  //       file.close();
  //       resolve(path);
  //     });
  //   });
  // });
  return path;
};

export default async function importData() {
  const product = products[0];
  const productRepository = getRepository(Product);
  // products.map((product) => {
  try {
    const path = await saveFile(url(product));
    const time = new Date().getTime();

    let data = fs.readFileSync(path);
    data = zlib.gunzipSync(data);

    const jsonPath = path.split(".gz").join("");
    fs.writeFileSync(jsonPath, data);

    const fileStream = fs.createReadStream(jsonPath);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let count = 0;
    let importData: {
      [key: string]: any;
    } = [];
    for await (const line of rl) {
      if (count === 100) {
        break;
      }
      count++;
      const row = JSON.parse(line);
      row.imported_t = time;
      importData.push(JSON.parse(line));
    }

    await productRepository.insert(importData);

    // fs.rmSync(path);
  } catch (err) {
    logger.error("Erro importando dados(" + product + "): " + err);
  }
  // });
}
