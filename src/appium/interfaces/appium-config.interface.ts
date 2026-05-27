export interface AppiumConfig {
  capabilities: {
    platformName: string;
    'appium:deviceName': string;
    'appium:platformVersion': string;
    'appium:appPackage': string;
    'appium:appActivity': string;
    'appium:automationName': string;
    'appium:noReset': boolean;
    'appium:skipServerInstallation': boolean;
  };
  services: string[];
  logLevel: string;
  port: number;
  path: string;
  connectionRetryCount: number;
}