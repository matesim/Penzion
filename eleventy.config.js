export default async function (eleventyConfig) {
    //configure eleventy
  
  
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    
    return {
        //define what engines will be used for which files
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
      };
  }
  