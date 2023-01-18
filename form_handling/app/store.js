const state = {
  fields: {
    newItem: "",
    email: "",
    urgency: "",
    termsAndConditions: false,
  },
  items: [],
};

const mutations = {};

const actions = {};

const getters = {};

window.store = Vuex.createStore({
  state,
  mutations,
  actions,
  getters,
});

let apiClient = {
  loadItem: function () {
    return {
      then: function (cb) {
        setTimeout(() => {
          cb(JSON.parse(localStorage.items || "[]"));
        }, 1000);
      },
    };
  },

  saveItems: function (items) {
    const success = !!(this.count++ % 2);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!success) return reject({ success });

        localStorage.items = JSON.stringify(items);
        return resolve({ success });
      }, 1000);
    });
  },

  count: 1,
};
