"use strict";
exports.__esModule = true;
exports.store = exports.key = void 0;
var vuex_1 = require("vuex");
exports.key = Symbol();
exports.store = vuex_1.createStore({
    state: function () {
        return {
            count: 0,
            locale: 'en'
        };
    },
    getters: {
        getCurrentLocale: function (state) {
            return state.locale;
        }
    },
    actions: {
        changeLocalAction: function (_a, locale) {
            var commit = _a.commit;
            console.log('changeLocalAction: ', locale);
            commit('changeLocale', locale);
        }
    },
    mutations: {
        increment: function (state) {
            state.count++;
        },
        changeLocale: function (state, payload) {
            console.log('changeLocale payload: ', payload);
            state.locale = payload;
        }
    }
});
