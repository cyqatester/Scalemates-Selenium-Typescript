import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { config } from "../config/env";

export abstract class BasePage {
  protected constructor(protected readonly driver: WebDriver) {}

  protected async navigate(path = ""): Promise<void> {
    await this.driver.get(new URL(path, config.baseUrl).toString());
    await this.driver.wait(async () => {
      const state = await this.driver.executeScript<string>("return document.readyState");
      return state === "interactive" || state === "complete";
    }, config.defaultTimeout);
  }

  protected async findVisible(locator: By): Promise<WebElement> {
    const element = await this.driver.wait(
      until.elementLocated(locator),
      config.defaultTimeout
    );
    return this.driver.wait(until.elementIsVisible(element), config.defaultTimeout);
  }

  protected async clickVisible(locator: By): Promise<void> {
    const element = await this.findVisible(locator);
    await this.driver.wait(until.elementIsEnabled(element), config.defaultTimeout);
    await element.click();
  }

  protected async isVisible(locator: By): Promise<boolean> {
    try {
      await this.findVisible(locator);
      return true;
    } catch {
      return false;
    }
  }

  async getTitle(): Promise<string> {
    return this.driver.getTitle();
  }
}
