import { WebDriver } from "selenium-webdriver";
import { SectionPage } from "./section.page";

export class BrandsPage extends SectionPage {
  protected readonly sectionName = "Brands";

  constructor(driver: WebDriver) {
    super(driver);
  }
}
