<template>
  <div class="typing-test">
    <WordDisplay :words="words" :currentWordIndex="currentWordIndex" />
    <input
      type="text"
      v-model="typedText"
      @input="handleInput"
      @keyup.enter="handleEnter"
      placeholder="Start typing..."
    />
    <Result v-if="isFinished" :words="words" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import WordDisplay from "./WordDisplay.vue";
import Result from "./Result.vue";

export default {
  components: { WordDisplay, Result },
  computed: {
    ...mapState(["words", "currentWordIndex", "isFinished", "typedText"]),
  },
  methods: {
    ...mapMutations(["setTypedText", "setCurrentWordCorrect", "nextWord"]),
    handleInput() {
      this.setTypedText(this.typedText);

      // Check if the typed text matches the current word
      if (this.typedText === this.words[this.currentWordIndex].word) {
        this.setCurrentWordCorrect(); // mark the current word as correct
      }
    },
    handleEnter() {
      // If the word is correct and Enter is pressed, move to the next word
      if (this.typedText === this.words[this.currentWordIndex].word) {
        this.setCurrentWordCorrect(); // mark the current word as correct
        this.nextWord(); // move to the next word
        this.setTypedText(""); // clear typed text for the next word
      }
    },
  },
  mounted() {
    this.$store.dispatch("initializeSentence");
  },
};
</script>

<style scoped>
.typing-test {
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  font-family: Arial, sans-serif;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 18px;
  margin-top: 20px;
}
</style>
