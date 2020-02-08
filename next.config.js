const withSourceMaps = require('@zeit/next-source-maps');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const withOffline = require('next-offline');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([
  [withSourceMaps],
  [withFonts],
  [withImages],
  [withCSS],
  [withSass],
  [
    withOffline,
    {
      transformManifest: manifest => ['/'].concat(manifest),
      workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'https-calls',
              networkTimeoutSeconds: 15,
              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 30 * 24 * 60 * 60
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    }
  ]
]);
