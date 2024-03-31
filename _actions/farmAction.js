"use server";

import connectDB from "@/config/database";
import Farm from "@/models/Farm";

export async function getFarm() {
  try {
    await connectDB();
    const data = JSON.parse(JSON.stringify(await Farm.find()));

    // throw new Error('Error!')

    return { data };
  } catch (error) {
    return { errMsg: error.message };
  }
}
