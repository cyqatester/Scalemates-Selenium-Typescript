const timeout = Number(process.env.DEFAULT_TIMEOUT ?? 20000);
export const config = {
  baseUrl: process.env.BASE_URL ?? "https://www.scalemates.com/",
  browser: (process.env.BROWSER ?? "chrome").toLowerCase(),
  headless: false, //headless: true will not work because the website has server-side security system (Akamai)
  defaultTimeout: Number.isFinite(timeout) && timeout > 0 ? timeout : 20000
};
if (!["chrome", "firefox"].includes(config.browser)) throw new Error("BROWSER must be chrome or firefox");
