import { WebDriver } from "selenium-webdriver";
import { SectionPage } from "./section.page";

export class EventsPage extends SectionPage {
  protected readonly sectionName = "Events";

  constructor(driver: WebDriver) {
    super(driver);
  }
}
