<template>
  <efsane-layout-local>
    <template #top>
      <efsane-navbar-local></efsane-navbar-local>
    </template>

    <router-view />
  </efsane-layout-local>
</template>

<script>
export default {
  name: "main-layout",
  components: {},
};
</script>

<style lang="scss"></style>
