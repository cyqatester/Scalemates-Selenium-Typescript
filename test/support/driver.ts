import { WebDriver } from "selenium-webdriver";

declare module "mocha" {
  interface Context {
    driver?: WebDriver;
  }
}

export function getDriver(context: Mocha.Context): WebDriver {
  if (!context.driver) {
    throw new Error("WebDriver is not initialized. Check test/hooks.ts.");
  }
  return context.driver;
}
