import { WebDriver } from "selenium-webdriver";
import { SectionPage } from "./section.page";

export class ShopsPage extends SectionPage {
  protected readonly sectionName = "Shops";

  constructor(driver: WebDriver) {
    super(driver);
  }
}
