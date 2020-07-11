<template>
  <div>
    <input type="range" min="5" max="70" step="1" v-model="value" />
    {{ value }}
    <input type="range" min="1" max="5" step="1" v-model="numOfItems" />
    {{ numOfItems }}
    <div>
      <p v-for="p in Number(numOfItems)" :key="p">{{ lorem(value) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Generator } from "@/generator";

export default Vue.extend({
  name: "Paragraph",

  data: function() {
    return {
      value: 35 as number,
      numOfItems: 3 as number
    };
  },

  methods: {
    lorem: function(num: number) {
      const minWords = 3;
      const maxWords = 10;

      return new Generator(minWords, maxWords).generateSentences(num);
    }
  },

  computed: {}
});
</script>

<style scoped lang="scss"></style>
