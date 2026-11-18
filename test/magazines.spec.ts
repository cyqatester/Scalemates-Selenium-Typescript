import { expect } from "chai";
import { MagazinesPage } from "../src/pages/magazines.page";
import { getDriver } from "./support/driver";

describe("Scalemates Magazines", function () {
  it("shows the Magazines link and the destination heading", async function () {
    const page = new MagazinesPage(getDriver(this));
    expect(await page.isNavigationLinkVisible()).to.equal(true);
    await page.openFromHome();
    expect(await page.isHeadingVisible()).to.equal(true);
  });
});
