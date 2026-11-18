import { By, WebDriver } from "selenium-webdriver";
import { BasePage } from "../core/base-page";
import { HomePage } from "./home.page";

export abstract class SectionPage extends BasePage {
  protected abstract readonly sectionName: string;

  constructor(driver: WebDriver) {
    super(driver);
  }

  async openFromHome(): Promise<void> {
    const homePage = new HomePage(this.driver);
    await homePage.open();
    await homePage.clickNavigationLink(this.sectionName);
    await this.findVisible(this.headingLocator());
  }

  async isNavigationLinkVisible(): Promise<boolean> {
    const homePage = new HomePage(this.driver);
    await homePage.open();
    return homePage.isNavigationLinkVisible(this.sectionName);
  }

  async isHeadingVisible(): Promise<boolean> {
    return this.isVisible(this.headingLocator());
  }

  private headingLocator(): By {
    const safeName = this.sectionName.replace(/'/g, "&apos;");
    return By.xpath(
      `//*[self::h1 or self::h2 or self::h3 or self::h4][contains(normalize-space(.), '${safeName}')]`
    );
  }
}
