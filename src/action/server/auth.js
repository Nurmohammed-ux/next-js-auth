"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payLoad) => {
  console.log(payLoad);

  // 1. check user exist or not
  const isExist = await dbConnect("users").findOne({ email: payLoad.email });
  if (isExist) {
    return {
      success: false,
      message: "User already exist",
    };
  }

  // 2. create new user
  const hashPassword = await bcrypt.hash(payLoad.password, 10);

  const newUser = {
    ...payLoad,
    createdAt: new Date().toISOString(),
    role: "user",
    password: hashPassword,
  };
  console.log(newUser);

  // 3. send user info to db
  const result = await dbConnect("users").insertOne(newUser);
  if (result.acknowledged) {
    return {
      success: true,
      message: `User created with ${result.insertedId.toString()}`,
    };
  } else {
    return {
      success: false,
      message: "Something went wrong.Try again",
    };
  }
};
