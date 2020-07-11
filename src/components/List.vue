<template>
  <div>
    <input type="range" min="1" max="10" step="1" v-model="minWords" />
    minWords : {{ minWords }}
    <div>
      <input type="range" min="1" max="10" step="1" v-model="maxWords" />
      maxWords: {{ maxWords }}
    </div>
    <input type="range" min="1" max="30" step="1" v-model="numOfParagraphs" />
    {{ numOfParagraphs }}
    <div>
      <ul>
        <li v-for="p in Number(numOfParagraphs)" :key="p">{{ lorem() }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Generator } from "@/generator";

export default Vue.extend({
  name: "List",

  data: function() {
    return {
      numOfParagraphs: 30 as number,
      minWords: 1 as number,
      maxWords: 3 as number
    };
  },

  methods: {
    lorem: function() {
      const test = new Generator(this.minWords, this.maxWords).generateSentences(1);
      return test.slice(0, -1);
    }
  },

  computed: {}
});
</script>

<style scoped lang="scss"></style>
