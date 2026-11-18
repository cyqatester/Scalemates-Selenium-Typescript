import { expect } from "chai";
import { EventsPage } from "../src/pages/events.page";
import { getDriver } from "./support/driver";

describe("Scalemates Events", function () {
  it("shows the Events link and the destination heading", async function () {
    const page = new EventsPage(getDriver(this));
    expect(await page.isNavigationLinkVisible()).to.equal(true);
    await page.openFromHome();
    expect(await page.isHeadingVisible()).to.equal(true);
  });
});
