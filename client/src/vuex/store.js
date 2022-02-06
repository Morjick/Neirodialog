import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let url = 'http://localhost:80'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    products: [],
    basket: [],
    summBasket: 0
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_BASKET: (state, product) => {
      if(state.basket)
      product.quantity = 1
      product.inThe = true
      state.basket.push(product)
    },
    SET_DELETE_BASKET: (state, product) => {
      product.quantity = 0
      product.inThe = false
      state.basket.splice(product[product.id], 1)
    },
    SET_INCREMENT: (state, item) => {
      state.product[item.id].quantity++
    },
    SET_SUMM_BASKET: (state) => {
      let count
      state.basket.forEach( el => {
        count += el.price 
        console.log(state.summBasket)
      })
      state.summBasket = count
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    BASKET(state) {
      return state.basket
    },
    INCREMENT(state) {
      return state.products
    },
    SUMM_BASKET(state) {
      return state.summBasket
    }
  },
  actions: {
    GET_PRODUCTS({commit}) {
      return axios(url + '/api/getProducts', {
        method: 'GET'
      }).then((products) => {
        commit('SET_PRODUCTS', products.data.data)
        return products
      }).catch((e) => {
        console.log(e)
        return e
      })
    },
    ADD_TO_BASKET({commit}, product) {
      commit('SET_BASKET', product)
    },
    DELETE_FROM_BASKET({commit}, product) {
      commit('SET_DELETE_BASKET', product)
    },
    INCREMENT_QUANTITY({commit}, item) {
      commit('SET_INCREMENT', item)
    },
    GET_SUMM_BASKET({commit}) {
      commit('SET_SUMM_BASKET')
    }
  }
})

export default store