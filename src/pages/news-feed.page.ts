import { WebDriver } from "selenium-webdriver";
import { SectionPage } from "./section.page";

export class NewsFeedPage extends SectionPage {
  protected readonly sectionName = "News Feed";

  constructor(driver: WebDriver) {
    super(driver);
  }
}
