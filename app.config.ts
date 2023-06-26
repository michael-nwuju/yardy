module.exports = {
  expo: {
    name: "yardy",
    slug: "yardy",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/icon.png",
    userInterfaceStyle: "light",
    jsEngine: "hermes",
    splash: {
      image: "./src/assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#e63c4b",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      jsEngine: "jsc",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./src/assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.yardy.michael",
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
    web: {
      favicon: "./src/assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "6715f707-9fc8-4fbf-b56b-32b01b7f887f",
      },
    },
    runtimeVersion: {
      policy: "sdkVersion",
    },
    updates: {
      url: "https://u.expo.dev/6715f707-9fc8-4fbf-b56b-32b01b7f887f",
    },
  },
};
