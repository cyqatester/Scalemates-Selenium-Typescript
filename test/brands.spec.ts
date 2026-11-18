import { expect } from "chai";
import { BrandsPage } from "../src/pages/brands.page";
import { getDriver } from "./support/driver";

describe("Scalemates Brands", function () {
  it("shows the Brands link and the destination heading", async function () {
    const page = new BrandsPage(getDriver(this));
    expect(await page.isNavigationLinkVisible()).to.equal(true);
    await page.openFromHome();
    expect(await page.isHeadingVisible()).to.equal(true);
  });
});
