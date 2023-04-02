import logger from "../../Logs/logger";
import products from "./products.data.json";
import zlib from "zlib";
import fs from "fs";
import readline from "readline";
import https from "https";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const url = (param: string) =>
  "https://challenges.coode.sh/food/data/json/" + param;

const saveFile = async (fileUrl: any) => {
  const path = __dirname + "/tmp/" + fileUrl.split("/").pop();
  if (!fs.existsSync(__dirname + "/tmp/")){
    fs.mkdirSync(__dirname + "/tmp/");
  }
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
  const product = products[0];
  // delete all data
  await prisma.product.deleteMany();
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
    let importData = [];
    for await (const line of rl) {
      if (count === 100) {
        break;
      }
      count++;
      const row = JSON.parse(line);
      row.imported_t = time;
      importData.push(JSON.parse(line));
    }

    await prisma.product.createMany({
      data: importData,
    });

    // fs.rmSync(path);
  } catch (err) {
    logger.error("Erro importando dados(" + product + "): " + err);
  }
  // });
}
