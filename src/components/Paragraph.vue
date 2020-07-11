<template>
  <div>
    <input type="range" min="1" max="10" step="1" v-model="value" />
    {{ value }}
    <input type="range" min="1" max="10" step="1" v-model="numOfItems" />
    {{ numOfItems }}
    <div>
      <p v-for="p in Number(numOfItems)" :key="p">{{ lorem(value) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { AmenoIpsum } from "ameno-ipsum";

export default Vue.extend({
  name: "Paragraph",

  data: function() {
    return {
      value: 4 as number,
      numOfItems: 2 as number
    };
  },

  methods: {
    lorem: function(num: number) {
      return new AmenoIpsum().generateParagraphs(num);
    }
  },

  computed: {}
});
</script>

<style scoped lang="scss"></style>
