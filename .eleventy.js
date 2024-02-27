const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (config) {
  config.addPlugin(eleventyNavigationPlugin);

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    }
  };
};