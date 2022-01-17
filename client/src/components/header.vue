<template>
  <div>
    <header>
      <div class="header_inner">
        <div class="logo_container">
          <img class="logo-img" src="@/assets/logo.png" alt="Neirodialog">
        </div>
        
        <nav class="menu_desctop">
          <ul class="menu_header">
            <li class="menu_item">
              <router-link to="/" > Главная </router-link>
            </li>
            <li class="menu_item">
              <router-link to="/learn" > Обучение </router-link>
            </li>
            <li class="menu_item">
              <router-link to="/gallery" > Галлерея </router-link>
            </li>
            <li class="menu_item">
              <router-link to="/shop" > Магазин </router-link>
            </li>
            <li class="menu_item_i">
              <router-link to="/basket" > 
                <img class="menu_item_img" src="@/assets/sprytes/basket.png" alt="">
              </router-link>
            </li>
          </ul>
        </nav>

        <button @click="burger" class="burder_menu">
          <span></span>
        </button>

      </div>
    </header>

    <div class="burger_list">
      <div class="burger_list_inner">
        <nav>
          <ul class="menu_burger">
            <li @click="closeBurger" class="menu_burger_item">
              <router-link to="/">Главная</router-link>
            </li>
            <li @click="closeBurger" class="menu_burger_item">
              <router-link to="/learn">Обучение</router-link>
            </li>
            <li @click="closeBurger" class="menu_burger_item">
              <router-link to="/gallery">Галлерея</router-link>
            </li>
            <li @click="closeBurger" class="menu_burger_item">
              <router-link to="/shop">Магазин</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import basket from '@/data/basket'

export default {
  name: 'header',
  data() {
    return {
      basketMount: basket.length
    }
  },
  methods: {
    burger() {
      const Burger = document.querySelector('.burder_menu')
      const BurgerList = document.querySelector('.burger_list')
      
      Burger.classList.toggle('burgerActive')
      BurgerList.classList.toggle('burgerListActive')
    },
    closeBurger() {
      const Burger = document.querySelector('.burder_menu')
      const BurgerList = document.querySelector('.burger_list')
      
      Burger.classList.remove('burgerActive')
      BurgerList.classList.remove('burgerListActive')
    }
  },
}
</script>