import { WebDriver } from "selenium-webdriver";
import { SectionPage } from "./section.page";

export class BooksPage extends SectionPage {
  protected readonly sectionName = "Books";

  constructor(driver: WebDriver) {
    super(driver);
  }
}
