import { expect } from "chai";
import { HomePage } from "../src/pages/home.page";
import { getDriver } from "./support/driver";

describe("Scalemates home page", function () {
  it("loads the home page", async function () {
    const page = new HomePage(getDriver(this));
    await page.open();
    expect(await page.isLoaded()).to.equal(true);
  });
});
