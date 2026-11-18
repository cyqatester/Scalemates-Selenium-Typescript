import { expect } from "chai";
import { UpdatesPage } from "../src/pages/updates.page";
import { getDriver } from "./support/driver";

describe("Scalemates Updates", function () {
  it("shows the Updates link and the destination heading", async function () {
    const page = new UpdatesPage(getDriver(this));
    expect(await page.isNavigationLinkVisible()).to.equal(true);
    await page.openFromHome();
    expect(await page.isHeadingVisible()).to.equal(true);
  });

  it("shows heading for Kits, Albums, Magazines after clicking the radio button", async function () {
    const page = new UpdatesPage(getDriver(this));
    await page.openFromHome();
    
    await page.clickKitsRadioBtn();
    await page.isStaticModelKitsHeader();

    //click All Sections radio button to show the radio buttons menu again
    await page.clickAllSectionsRadioBtn();

    await page.clickAlbumsRadioBtn();
    await page.isAlbumsHeader();
    
    await page.clickAllSectionsRadioBtn();

    await page.clickMagazinesRadioBtn();
    await page.isMagazinesHeader();
  });
});
