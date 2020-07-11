<template>
  <div class="app">
    <Paragraph />
    <List />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Paragraph from "@/components/Paragraph.vue";
import List from "@/components/List.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Paragraph,
    List
  }
});
</script>

<style scoped lang="scss">
.app {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
