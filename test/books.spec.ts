import { expect } from "chai";
import { BooksPage } from "../src/pages/books.page";
import { getDriver } from "./support/driver";

describe("Scalemates Books", function () {
  it("shows the Books link and the destination heading", async function () {
    const page = new BooksPage(getDriver(this));
    expect(await page.isNavigationLinkVisible()).to.equal(true);
    await page.openFromHome();
    expect(await page.isHeadingVisible()).to.equal(true);
  });
});
