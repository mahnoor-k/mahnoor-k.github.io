import ghpages from "gh-pages";

ghpages.publish("dist", { src: ["**/*", "!**/*.tif", "!**/*.tiff"] }, (error) => {
  if (error) {
    console.error(error);
    process.exitCode = 1;
  } else {
    console.log("Published website successfully.");
  }
});
