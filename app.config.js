export default () => ({
  "expo": {
    name: "wype-app",
    slug: "wype",
    owner: "usmanzulfi1997",
    version: "1.0.0",
    sdkVersion: "50.0.17",
    orientation: "portrait",
    // icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      // image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    extra: {
      production: false,
      expoClient: {
        version: "1.0.0",
      },
      eas: {
        projectId: "94219e73-f2eb-474b-aec6-8357589b443a",
      },
    },
    updates: {
      enabled: true,
      fallbackToCacheTimeout: 0,
      url: "https://u.expo.dev/94219e73-f2eb-474b-aec6-8357589b443a",
    },
    ios: {
      supportsTablet: true,
      buildNumber: "1",
      bundleIdentifier: "com.wype.com"
    },
    android: {
      package: "com.wype.com",
      versionCode: 1,
      adaptiveIcon: {
        // foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    runtimeVersion: "exposdk:50.0.17",
  }
});
