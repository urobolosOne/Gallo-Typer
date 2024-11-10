<template>
  <div class="result">
    <h2>Results</h2>
    <p>Words per minute: {{ wpm }}</p>
    <button @click="restart">Restart</button>
  </div>
</template>

<script>
export default {
  props: {
    words: Array,
  },
  computed: {
    wpm() {
      // Assuming total time is tracked in the store or you have a timer in place
      return Math.round((this.words.length / 1) * 60); // Simplified WPM calculation for demonstration
    },
  },
  methods: {
    restart() {
      this.$store.commit("reset");
    },
  },
};
</script>

<style scoped>
.result {
  margin-top: 20px;
  text-align: center;
}
</style>
