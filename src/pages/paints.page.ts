import { WebDriver } from "selenium-webdriver";
import { SectionPage } from "./section.page";

export class PaintsPage extends SectionPage {
  protected readonly sectionName = "Paints";

  constructor(driver: WebDriver) {
    super(driver);
  }
}
