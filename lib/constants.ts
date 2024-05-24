import { z } from "zod";

export const PASSWORD_MIN_LENGTH = 10;
export const PASSWORD_REGEX = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);
export const PASSWORD_NUMBER_REGEX = new RegExp(
  ".*\\d.*"
);
export const EMAIL_REGEX = new RegExp(
  ".*@zod.com"
);

export const PASSWORD_REGEX_ERROR =
  "Passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-";
export const EMAIL_REGEX_ERROR =
  "Oly @zod.com emails are allowed.";
export const USER_NAME_ERROR =
  "Username should be at 5 characters long.";
export const PASSWORD_LENGTH_ERROR =
  "Password should be at least 10 characters long.";
export const PASSWORD_NUMBER_ERROR =
  "Passwords should contain at least on number(0123456789).";
