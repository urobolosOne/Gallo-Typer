import { createStore } from 'vuex';

export default createStore({
  state: {
    sentence: 'The quick brown fox jumps over the lazy dog',
    words: [],
    currentWordIndex: 0,
    typedText: "AA",
    isFinished: false,
  },
  mutations: {
    setTypedText(state, typedText) {
      console.log('TEST1')
      console.log('index', String(state.typedText));  // This will convert it to a string if it's not already.
      state.typedText = typedText;
    },
    setCurrentWordCorrect(state) {
      console.log('TEST2')

      state.words[state.currentWordIndex].correct = true;
    },
    nextWord(state) {
      console.log('TEST3')

      if (state.currentWordIndex < state.words.length - 1) {
        state.currentWordIndex++;
        state.typedText = ''; // reset for the next word
      } else {
        state.isFinished = true;
      }
    },
    reset(state) {
      state.currentWordIndex = 0;
      state.isFinished = false;
      // Initialize words with their correct state
      state.words = state.sentence.split(' ').map(word => ({
        word,
        correct: false,
      }));
      state.typedText = '';  // clear typed text on reset
    },
  },
  actions: {
    initializeSentence({ commit }) {
      commit('reset');
    },
  }
});
