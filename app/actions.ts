"use server";

import { z } from "zod";

import {
  EMAIL_REGEX,
  EMAIL_REGEX_ERROR,
  PASSWORD_LENGTH_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_NUMBER_ERROR,
  PASSWORD_NUMBER_REGEX,
  USER_NAME_ERROR,
} from "@/lib/constants";

const formSchema = z.object({
  username: z.string().trim().min(5, USER_NAME_ERROR),
  email: z.string().email().toLowerCase().regex(EMAIL_REGEX, EMAIL_REGEX_ERROR),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(PASSWORD_MIN_LENGTH, PASSWORD_LENGTH_ERROR)
    .regex(PASSWORD_NUMBER_REGEX, PASSWORD_NUMBER_ERROR),
});

export async function logIn(prevState: any, formData: FormData) {  
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}