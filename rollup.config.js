import scss from "rollup-plugin-scss";

export default {
  input: "./src/scripts/main.js",
  plugins: [
    scss({
      include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
      output: "build/style.min.css",
      failOnError: true,
      outputStyle: "compressed",
    }),
  ],
};