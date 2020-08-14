module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      include: "includes",
    },
    // markdownTemplateEngine: 'njk',
    templateFormats: ["html","njk","md"],
    passthroughFileCopy: true,
  };
};
