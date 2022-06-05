export const filters = {
  install(app) {
    app.config.globalProperties.$filters = {
      capitalize(value) {
        const capitalize = (s) => {
          if (typeof s !== "string") return "";
          return s.charAt(0).toUpperCase() + s.slice(1);
        };

        if (value) {
          let lowerTexts = value.toLowerCase().split(" ");
          let titleTexts = lowerTexts.map((item) => {
            return capitalize(item);
          });
          return titleTexts.join(" ");
        }
      },
    };
  },
};
