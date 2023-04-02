import logger from "../../Logs/logger";
import products from "./products.data.json";
import zlib from "zlib";
import fs from "fs";
import readline from "readline";
import https from "https";
import { PrismaClient, ProductStatus } from "@prisma/client";
import moment from "moment";

const prisma = new PrismaClient();
const { LOGS } = process.env;

const url = (param: string) =>
  "https://challenges.coode.sh/food/data/json/" + param;

const saveFile = async (fileUrl: any) => {
  const path = __dirname + "/tmp/" + fileUrl.split("/").pop();
  const file = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
    https.get(fileUrl, function (response) {
      response.pipe(file);
      file.on("finish", function () {
        file.close();
        resolve(path);
      });
    });
  });
  return path;
};

export default async function importData() {
  if (LOGS) {
    logger.info("Importing data...");
  }

  if (!fs.existsSync(__dirname + "/tmp/")) {
    fs.mkdirSync(__dirname + "/tmp/");
  }

  await prisma.product.deleteMany();

  products.map(async (product) => {
    try {
      const path = await saveFile(url(product));
      const time = moment().toISOString();

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
      let importData = [];
      for await (const line of rl) {
        if (count === 100) {
          break;
        }
        count++;

        importData.push({
          data: JSON.parse(line),
          imported_t: time,
          status: ProductStatus.draft,
        });
      }
      await prisma.product.createMany({
        data: importData,
      });

      fs.rmSync(path);
      fs.rmSync(jsonPath);
    } catch (err) {
      if (LOGS) {
        logger.error("Erro importando dados(" + product + "): " + err);
      }
    }
  });
}
