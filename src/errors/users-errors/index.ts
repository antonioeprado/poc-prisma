import { ApplicationError } from "@protocols";

export function userNotRegistered(): ApplicationError {
  return {
    name: "userNotRegistered",
    message: "You are not registered!",
  };
}

export function wrongInfo(): ApplicationError {
  return {
    name: "wrongInfo",
    message: "Wrong email or password.",
  };
}
