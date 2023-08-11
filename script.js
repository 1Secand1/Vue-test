const Counter = {
  data() {
    return {
      referencePassword: 1234,
      password: 1234,
      valueStatus: false,
      lessonsActive: [],
      lessons: ["Математика", "Русский", "Физика", "Абобалогия"],
    };
  },
  computed: {
    verification: function () {
      return {
        "login__input login__input--accept ":
          this.referencePassword == this.password,
        "login__input login__input--no-accept ":
          this.referencePassword != this.password,
      };
    },
  },
  methods: {
    check() {
      this.valueStatus = +this.password === +this.referencePassword;
    },
    listOutput() {
      this.lessons.forEach((e) => {
        console.log(e);
        this.lessonsActive.push(e);
      });
    },
  },
};

Vue.createApp(Counter).mount("#main");
