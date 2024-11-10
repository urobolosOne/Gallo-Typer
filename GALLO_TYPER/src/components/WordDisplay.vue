<template>
  <div class="word-display">
    <span
      v-for="(wordObj, index) in words"
      :key="index"
      :class="{
        correct: wordObj.correct,
        current: index === currentWordIndex && !wordObj.correct,
        incorrect:
          index === currentWordIndex &&
          !wordObj.correct &&
          typedText !== wordObj.word,
        default: !wordObj.correct && index !== currentWordIndex,
      }"
    >
      {{ wordObj.word }}
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    words: Array,
    currentWordIndex: Number,
  },
  computed: {
    ...mapState(["typedText"]),
  },
};
</script>

<style scoped>
.word-display {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.correct {
  color: green;
}

.incorrect {
  color: red;
}

.current {
  color: blue;
}

.default {
  color: #333; /* Matte black */
}
</style>
