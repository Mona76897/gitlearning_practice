export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly"
      }
    }
  }
];

