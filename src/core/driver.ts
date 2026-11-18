import { Builder } from "selenium-webdriver";
import {
  Options as ChromeOptions,
  ServiceBuilder
} from "selenium-webdriver/chrome";
import { Options as FirefoxOptions } from "selenium-webdriver/firefox";
import { config } from "../config/env";

export async function createDriver() {
  const builder = new Builder().forBrowser(config.browser);

  if (config.browser === "chrome") {
    const options: ChromeOptions = new ChromeOptions();

    options.addArguments(
      "--window-size=1440,1000",
      "--disable-notifications",
      "--log-level=3"
    );

    if (config.headless) {
      options.addArguments(
        "--headless=new",
        "--no-sandbox",
        "--disable-dev-shm-usage"
      );
    }

    options.setPageLoadStrategy("eager");

    const service = new ServiceBuilder();

    builder
      .setChromeOptions(options)
      .setChromeService(service);

  } else {
    const options: FirefoxOptions = new FirefoxOptions();

    options.addArguments("--width=1440", "--height=1000");

    if (config.headless) {
      options.addArguments("-headless");
    }

    options.setPageLoadStrategy("eager");
    builder.setFirefoxOptions(options);
  }

  const driver = await builder.build();

  await driver.manage().setTimeouts({
    implicit: 0,
    pageLoad: 45000,
    script: 15000
  });

  return driver;
}