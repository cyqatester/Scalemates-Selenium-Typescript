import { By, WebDriver } from "selenium-webdriver";
import { BasePage } from "../core/base-page";

export class HomePage extends BasePage {
  constructor(driver: WebDriver) {
    super(driver);
  }

  async open(): Promise<void> {
    await this.navigate();
  }

  async isLoaded(): Promise<boolean> {
    return (await this.getTitle()).trim().length > 0 &&
      await this.isNavigationLinkVisible("News Feed");
  }

  async isNavigationLinkVisible(label: string): Promise<boolean> {
    return this.isVisible(this.navigationLink(label));
  }

  async clickNavigationLink(label: string): Promise<void> {
    await this.clickVisible(this.navigationLink(label));
  }

  private navigationLink(label: string): By {
    const safeLabel = label.replace(/'/g, "&apos;");
    return By.xpath(
      `//a[normalize-space(translate(string(.), '\u00a0', ' '))='${safeLabel}']`
    );
  }
}
