import { WebDriver } from "selenium-webdriver";
import { SectionPage } from "./section.page";

export class MagazinesPage extends SectionPage {
  protected readonly sectionName = "Magazines";

  constructor(driver: WebDriver) {
    super(driver);
  }
}
