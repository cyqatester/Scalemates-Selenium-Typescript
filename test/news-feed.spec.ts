import { expect } from "chai";
import { NewsFeedPage } from "../src/pages/news-feed.page";
import { getDriver } from "./support/driver";

describe("Scalemates News Feed", function () {
  it("shows the News Feed link and the destination heading", async function () {
    const page = new NewsFeedPage(getDriver(this));
    expect(await page.isNavigationLinkVisible()).to.equal(true);
    await page.openFromHome();
    expect(await page.isHeadingVisible()).to.equal(true);
  });
});
