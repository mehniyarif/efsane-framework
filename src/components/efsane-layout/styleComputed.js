export default {
  computed: {
    styles() {
      return {
        "--efsane-layout-grid-templates-areas": this.gridTemplateAreas,
        "--efsane-layout-grid-templates-rows": this.gridTemplateRows,
        "--efsane-layout-grid-templates-columns": this.gridTemplateColumns,
      };
    },
    gridTemplateAreas() {
      return `
          "left top right"
          "left main right"
          "left bottom right"
      `;
    },
    gridTemplateRows() {
      return `${this.topExists ? "50px" : 0} 1fr ${
        this.bottomExists ? "50px" : 0
      }`;
    },
    gridTemplateColumns() {
      return `${this.leftExists ? "20%" : 0} 1fr ${
        this.rightExists ? "20%" : 0
      }`;
    },
  },
};
