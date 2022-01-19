<template>
  <div class="shop-page">

    <div class="shop_container">
      <div class="shop_container_inner">

        <div class="shop-wrapper">

          <div class="flexer">
            <div class="subtitle">Магазин</div>
          </div>

          <div class="shop-content">
            <div class="shop-content-inner">

              <div v-for="product of products" :key="product.id" class="shop_item">
                <div class="shop_item_inner">
                  <div  class="shop_item_name">{{product.title}}</div>
                  <div class="shop_item_image">
                    <img :src=product.image  alt="">
                  </div>
                  <div v-if="!product.inThe" class="add_to_basket">
                    <span>{{ numberWithSpaces(product.price) + 'рублей'}}</span>
                    <button :id=product.id @click="addToBasket(product)">В корзину</button>
                  </div>
                  <div v-if="product.inThe" class="add_to_basket checked">
                    <img class="product_check" src="@/assets/sprytes/check-2.png" alt="">
                    <p>Уже в корзине</p>
                  </div>
                </div>
              </div>
              

            </div>
          </div>

        </div>

      </div>
    </div>

    

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "shop",
  data() {
    return {
      basket: [],
      basketSummPrice: 0,
      products: []
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS',
      'ADD_TO_BASKET'
    ]),
    addToBasket(product) {
      this.ADD_TO_BASKET(product)
      this.$toast.success('Товар добавлен в корзину')
      // console.log(product)
    },
    numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    title() {
      document.title = 'Neirodialog Магазин'
    },
    async getShop() {
      const responce = await fetch('/api/find/products', {
        method: 'GET'
      })
      
      const candidate = await responce.json()
      console.log(candidate)

      this.products = candidate.products
    }
  },
  mounted() {
    this.title()
    this.getShop()
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
  }
}
</script>