const { build } = require("esbuild");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");
const plugins = process.env.WITH_PLUGIN ? [pnpPlugin()] : undefined;

console.log("building...");

build({
  plugins,
  entryPoints: [`./main.ts`],
  bundle: true,
  sourcemap: true,
  platform: "node",
  target: ["node14.15.1"],
  outfile: "./out/main.js",
  watch: {
    onRebuild(error, result) {
      if (error) console.error("watch build failed:", error);
      else console.log("watch build succeeded:", result);
    },
  },
})
  .then((result) => {
    console.log("build result:", result);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
