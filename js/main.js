const { createApp } = Vue;

createApp({
  data() {
    return {
      randomEmailList: [],
    };
  },
  methods: {
    GenerateRandomListEmail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((result) => {
            this.randomEmailList.push(result.data.response);
          });
      }
    },
  },
}).mount("#root");
