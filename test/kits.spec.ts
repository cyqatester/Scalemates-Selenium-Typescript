import { expect } from "chai";
import { KitsPage } from "../src/pages/kits.page";
import { getDriver } from "./support/driver";

describe("Scalemates Kits", function () {
  it("shows the Kits link and the destination heading", async function () {
    const page = new KitsPage(getDriver(this));
    expect(await page.isNavigationLinkVisible()).to.equal(true);
    await page.openFromHome();
    expect(await page.isHeadingVisible()).to.equal(true);
  });
});
