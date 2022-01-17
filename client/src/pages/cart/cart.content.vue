<template>
  <div class="basket_wrapper">
    <h1 class="basket_title">Корзина</h1>

    <div v-for="item in basketList" :key="item.id" class="basket_item">
      <div class="basket_item_iner">

        <div class="basket_flexer">
          <div class="basket_item_img">
            <img :src="item.image" alt="">
          </div>

          <div class="basket_item_name minititle">{{item.title}}</div>
        </div>

        <div>
          <div class="basket_item_price">
            {{ numberWithSpaces(item.price) + 'рублей'}}
          </div>
          <button @click="deleteFromBasket(item)" class="delete-btn">Удалить</button>
        </div>

      </div>
    </div>

    <p class="basket_empty" v-if="!this.basketList.length" >Корзина пуста</p>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Content',
  data() {
    return {
      basketList: []
    }
  },
  computed: {
    ...mapGetters([
      'BASKET'
    ])
  },
  methods: {
    basket() {
      this.basketList = this.BASKET
    },
    numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    ...mapActions ([
      'DELETE_FROM_BASKET', 'INCREMENT'
    ]),
    deleteFromBasket(item) {
      this.DELETE_FROM_BASKET(item)
      this.$toast.warning('Товар удалён')
    },
  },
  mounted() {
    this.basket()
  }
}
</script>