// next.config.js
const withPlugins = require("next-compose-plugins");
const withSourceMaps = require("@zeit/next-source-maps");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const withManifest = require("next-manifest");

const NextAppConfig = ({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  }
});

const manifestOptions = {
  // next-manifest options
  output: "./static/", // The folder where the manifest will be generated.
  // manifest options
  name: "Registration Card on React",
  short_name: "RegistrationCard",
  icons: [
    {
      "src": "/static/icons/favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "/static/icons/logo192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/static/icons/logo512.png",
      "sizes": "512x512",
      "type": "image/png",
    }
  ]
}

module.exports = withPlugins([
  [withManifest, {
    manifest: {
      ...manifestOptions
    }
  }], [withSourceMaps], [withTypescript], [withCSS], [withSass, {
    sassLoaderOptions: {}
  }]
], NextAppConfig);
