export default async function (eleventyConfig) {
    //configure eleventy
    eleventyConfig.setInputDirectory("./src");
    
    eleventyConfig.setIncludesDirectory("./templates");

    
    eleventyConfig.setTemplateFormats("html,njk");
    
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");
    
    return {
        //define what engines will be used for which files
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
      };
  }
  