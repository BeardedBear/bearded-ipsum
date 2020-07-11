<template>
  <div>
    <input type="range" min="1" max="10" step="1" v-model="value" />
    {{ value }}
    <input type="range" min="1" max="30" step="1" v-model="numOfParagraphs" />
    {{ numOfParagraphs }}
    <div>
      <ul>
        <li v-for="p in Number(numOfParagraphs)" :key="p">{{ lorem(value) }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { AmenoIpsum } from "ameno-ipsum";

export default Vue.extend({
  name: "List",

  data: function() {
    return {
      value: 4 as number,
      numOfParagraphs: 20 as number
    };
  },

  methods: {
    lorem: function(num: number) {
      return new AmenoIpsum().generateWords(num);
    }
  },

  computed: {}
});
</script>

<style scoped lang="scss"></style>
