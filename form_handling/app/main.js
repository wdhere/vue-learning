const ButtonRaw = {
  template: `
    <div>
      <button @click="onButtonClick"
        name="button-hoodie"
        value="fullstack-hoodie"
        class="ui button">Hoodie</button>
      <button @click="onButtonClick"
        name="button-tee"
        value="fullstack-tee"
        class="ui button">Tee</button>
      <button @click="onButtonClick"
        name="button-fitted-cap"
        value="fullstack-fitted-cap"
        class="ui button">Fitted Cap</button>
      <button @click="onButtonClick"
        name="button-jacket"
        value="fullstack-jacket"
        class="ui button">Jacket</button>
    </div>`,
  methods: {
    onButtonClick(evt) {
      const button = evt.target;
      console.log(`The user clicked ${button.name}: ${button.value}`);
    },
  },
};

const InputForm = {
  template: `
    <div class="input-form">
      <form @submit="submitForm" class="ui form">
        <div class="field">
          <label>New Item</label>
          <input v-model="field.newItem" type="text" placeholder="Add an item!" />
        </div>
        <div class="field">
          <label>Email</label>
          <input v-model="field.email" type="text" placeholder="What's your email?" />
        </div>
        <button class="ui button">Submit</button>
      </form>
      <div class="ui segment">
        <h4 class="ui header">Items</h4>
        <ul>
          <li v-for="item in items" class="item">{{ item }}</li>
        </ul>
      </div>
    </div>`,
  data() {
    return {
      fields: {
        newItem: "",
        email: "",
      },
      items: [],
    };
  },
  methods: {
    submitForm(evt) {
      evt.preventDefault();
      this.items.push(this.newItem);
      this.newItem = "";
    },
  },
};

Vue.createApp({
  components: {
    "button-row": ButtonRaw,
    "input-form": InputForm,
  },
}).mount("#app");
