<template>
  <div class="basket-page">
    <div class="basket_inner">

      <Content />

      <Sidebar />

    </div>
  </div>
</template>

<script>
import Content from './cart/cart.content'
import Sidebar from './cart/cart.sidebar'

export default {
  name: "basket",
  data() {
    return {}
  },
  methods: {
    title() {
      document.title = "Neirodialog Корзина"
    }
  },
  mounted() {
    this.title()
  },
  components: { Content, Sidebar, }
}
</script>