<template>
  <div class="basket_sidebar">

    <span>Итого: </span>
    <span> {{ this.fullPrice }} рублей </span>

    <button>Оплатить</button>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cart-sidebar',
  data() {
    return {
      fullPrice: 0
    }
  },
  methods: {
    basketSumm() {
      this.fullPrice = this.SUMM_BASKET
    }
  },
  mounted() {
    this.basketSumm()
  },
  computed: {
    ...mapGetters([
      'SUMM_BASKET'
    ])
  },
}
</script>