import { expect } from "chai";
import { ShopsPage } from "../src/pages/shops.page";
import { getDriver } from "./support/driver";

describe("Scalemates Shops", function () {
  it("shows the Shops link and the destination heading", async function () {
    const page = new ShopsPage(getDriver(this));
    expect(await page.isNavigationLinkVisible()).to.equal(true);
    await page.openFromHome();
    expect(await page.isHeadingVisible()).to.equal(true);
  });
});
