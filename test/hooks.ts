import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createDriver } from "../src/core/driver";
import "./support/driver";

export const mochaHooks = {
  async beforeEach(this: Mocha.Context) {
    this.driver = await createDriver();
  },

  async afterEach(this: Mocha.Context) {
    const driver = this.driver;
    if (!driver) return;

    try {
      if (this.currentTest?.state === "failed") {
        mkdirSync("screenshots", { recursive: true });
        const name = (this.currentTest.fullTitle() || "failed")
          .replace(/[^a-z0-9-_]/gi, "_");
        writeFileSync(
          join("screenshots", `${name}.png`),
          await driver.takeScreenshot(),
          "base64"
        );
      }
    } catch (error) {
      console.error("Failure screenshot could not be saved", error);
    } finally {
      await driver.quit();
      this.driver = undefined;
    }
  }
};
