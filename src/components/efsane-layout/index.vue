<template>
  <div id="efsane-layout-wrapper" :style="styles">
    <slot v-if="topExists" class="efsane-layout-top" name="top"></slot>
    <div v-else class="efsane-layout-top"></div>

    <slot v-if="leftExists" class="efsane-layout-left" name="left"></slot>
    <div v-else class="efsane-layout-left"></div>

    <main id="efsane-layout-main">
      <slot></slot>
    </main>

    <slot v-if="rightExists" class="efsane-layout-right" name="right"></slot>
    <div v-else class="efsane-layout-right"></div>

    <slot v-if="bottomExists" class="efsane-layout-bottom" name="bottom"></slot>
    <div v-else class="efsane-layout-bottom"></div>
  </div>
</template>

<script>
import styleComputed from "./styleComputed";
export default {
  name: "efsane-layout",
  mixins: [styleComputed],
  computed: {
    topExists() {
      return "top" in this.$slots;
    },
    bottomExists() {
      return "bottom" in this.$slots;
    },
    leftExists() {
      return "left" in this.$slots;
    },
    rightExists() {
      return "right" in this.$slots;
    },
  },
};
</script>

<style lang="scss" scoped>
#efsane-layout-wrapper {
  display: grid;
  grid-template-areas: var(--efsane-layout-grid-templates-areas);
  grid-template-rows: var(--efsane-layout-grid-templates-rows);
  grid-template-columns: var(--efsane-layout-grid-templates-columns);
  grid-gap: 5px;
  height: 100vh;
  margin: 0;
  .efsane-layout-top {
    grid-area: top;
    width: 100%;
  }
  .efsane-layout-left {
    grid-area: left;
  }
  .efsane-layout-right {
    grid-area: right;
  }
  .efsane-layout-main {
    grid-area: main;
  }
  .efsane-layout-bottom {
    grid-area: bottom;
  }
}
</style>
