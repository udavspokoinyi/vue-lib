Vue.createApp({
  data: () => ({
    counter: 0,
    placeholderInput: "Enter urs note",
    title: "Note maker",
    inputValue: "",
    notes: [],
  }),

  methods: {
    /*  inputChangeHandler(event) {
      this.inputValue = event.target.value;
    }, */
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    /* inputKeyPress(e) {
      if (e.key === "Enter") {
        this.addNewNote();
      }
    }, */

    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
    doubleCount() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = "";
      }
    },
  },
}).mount("#App");
