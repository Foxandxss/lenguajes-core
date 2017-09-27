# .NET core 2.0 + Angular example

This is based on the official Microsoft [template](https://github.com/aspnet/JavaScriptServices).

There are a few differences.

* `Api` directory to add all the Api controllers
* `angular-router-loader` to allow lazy loading in dev mode (configured at webpack.config)
* Support for sass files at the webpack config
* Global sass style for the entire application configured at the webpack config.
* Images are supported by default, but I swapped that support for the CopyWebpackPlugin that copies them directly to the dist folder.
* A clean script for npm to delete both `dist` folders. They sometimes get out of sync and fails.
* I removed the Min response time from Kestrel. There is no need, it is only to show that SSR works without timeouts.
