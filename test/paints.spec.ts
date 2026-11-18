import { expect } from "chai";
import { PaintsPage } from "../src/pages/paints.page";
import { getDriver } from "./support/driver";

describe("Scalemates Paints", function () {
  it("shows the Paints link and the destination heading", async function () {
    const page = new PaintsPage(getDriver(this));
    expect(await page.isNavigationLinkVisible()).to.equal(true);
    await page.openFromHome();
    expect(await page.isHeadingVisible()).to.equal(true);
  });
});
