const Counter = {
  data() {
    return {
      referencePassword: 1234,
      password: undefined,
      isActive: true,
    };
  },
  computed: {
    verification: function () {
      return {
        "login__input login__input--accept ": this.referencePassword == this.password,
        "login__input login__input--no-accept ": this.referencePassword != this.password,
      };
    },
  },
  methods: {},
};

Vue.createApp(Counter).mount("#main");
