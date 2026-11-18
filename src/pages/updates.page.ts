import { By, WebDriver } from "selenium-webdriver";
import { SectionPage } from "./section.page";
import { expect } from "chai";

export class UpdatesPage extends SectionPage {
  protected readonly sectionName = "Updates";

  private readonly allSectionsRadioBtn = By.xpath("//label[normalize-space(.)='All sections']");
  private readonly kitsRadioBtn = By.id("fkSECTION-Kits");
  private readonly albumsRadioBtn = By.id("cfkSECTION-Albums");
  private readonly magazinesRadioBtn = By.id("fkSECTION-Magazines");

  private readonly staticModelKitsHeader = By.xpath("//h5[normalize-space()='Static model kits']");
  private readonly albumsHeader = By.xpath("//h5[normalize-space()='Albums']");
  private readonly magazinesHeader = By.xpath("//h5[normalize-space()='Magazines']");

  constructor(driver: WebDriver) {
    super(driver);
  }

  async clickAllSectionsRadioBtn(): Promise<void> {
    expect(await this.isVisible(this.allSectionsRadioBtn)).to.equal(true);
    const radioButton = await this.findVisible(this.allSectionsRadioBtn);
    await radioButton.click();
  }

  async clickKitsRadioBtn(): Promise<void> {
    expect(await this.isVisible(this.kitsRadioBtn)).to.equal(true);
    const radioButton = await this.findVisible(this.kitsRadioBtn);
    await radioButton.click();
  }

  async clickAlbumsRadioBtn(): Promise<void> {
    expect(await this.isVisible(this.albumsRadioBtn)).to.equal(true);
    const radioButton = await this.findVisible(this.albumsRadioBtn);
    await radioButton.click();
  }

  async clickMagazinesRadioBtn(): Promise<void> {
    expect(await this.isVisible(this.magazinesRadioBtn)).to.equal(true);
    const radioButton = await this.findVisible(this.magazinesRadioBtn);
    await radioButton.click();
  }

  async isStaticModelKitsHeader(): Promise<void> {
    expect(await this.isVisible(this.staticModelKitsHeader)).to.equal(true);
  }

  async isAlbumsHeader(): Promise<void> {
    expect(await this.isVisible(this.albumsHeader)).to.equal(true);
  }

  async isMagazinesHeader(): Promise<void> {
    expect(await this.isVisible(this.magazinesHeader)).to.equal(true);
  }
}