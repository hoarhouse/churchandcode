module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (data.permalink) {
        return data.permalink;
      }
      return data.page.filePathStem.replace(/^\//, '') + (data.page.outputFileExtension ? '.' + data.page.outputFileExtension : '');
    }
  });

  const clusters = [
    "pope-leo-xiv",
    "ai-and-being-human",
    "ai-and-kids",
    "ai-and-work",
    "ai-and-the-world",
    "reference"
  ];

  clusters.forEach(clusterName => {
    eleventyConfig.addCollection(clusterName, function(collectionApi) {
      return collectionApi.getAll()
        .filter(item => item.data.cluster === clusterName)
        .sort((a, b) => (b.data.date || 0) - (a.data.date || 0));
    });
  });

  eleventyConfig.addCollection("allCornerstone", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.cluster)
      .sort((a, b) => (b.data.date || 0) - (a.data.date || 0));
  });

  // News collection: any page with `category: news` in front matter
  eleventyConfig.addCollection("news", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.category === "news")
      .sort((a, b) => (b.data.date || 0) - (a.data.date || 0));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
