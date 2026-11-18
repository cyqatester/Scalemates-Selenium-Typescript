import { WebDriver } from "selenium-webdriver";
import { SectionPage } from "./section.page";

export class KitsPage extends SectionPage {
  protected readonly sectionName = "Kits";

  constructor(driver: WebDriver) {
    super(driver);
  }
}
