import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
dotenv.config();

const MODEL_NAME = "sentence-transformers/all-MiniLM-L6-v2";
const hf = new HfInference(process.env.HF_TOKEN);

async function main() {
  const outPut = await hf.featureExtraction({
    model: MODEL_NAME,
    inputs: "this is a huggingface test",
  });
  console.log(outPut);
}

main();
