<template>
  <div class="homa-page">
    <div class="title">Добро пожаловать на neirodialog!</div>

    <!-- Наши плюсы -->
    <section>
      <div class="subtitle">Почему нужно выбрать именно neirodialog?</div>
      <Plus />
    </section>

    <!-- Посетите наш магазин< -->
    <section>
      <MiniShopfrom />
    </section>

    <!-- Направления -->
    <section>
      <div class="subtitle">Чем мы заниамемся?</div>
      <Directions />
    </section>

    <!-- О нас -->
    <section>
      <div class="subtitle">Хотите узнать немного про нас?</div>
      <About />
    </section>

    <!-- Мы на карте -->
    <!-- <section>
      <Map />
    </section> -->
  </div>
</template>

<script>
import Directions from "./home/directions"
import Plus from "./home/plus"
import MiniShopfrom from "./home/min.shop"
// import Map from "./home/map";
import About from "./home/about.vue"

export default {
  name: "home",
  data() {
    return {
      main: '',
      profiles: '',
      pluces: '',
      directions: ''
    }
  },
  components: { Directions, Plus, MiniShopfrom, About },
  methods: {
    title() {
      document.title = "Neirodialog Главная";
    },
    async getNotes() {
      const responce = await fetch('http://localhost:80/api/find/notes', {
        method: 'GET'
      })

      
      const candidate = await responce.json()
      
      const notes = candidate.notes
      console.log(notes)

      notes.forEach( el => {
        if(el.type == 'main') this.main = el
        if(el.type == 'profiles') this.profiles = el
        if(el.type == 'pluces') this.pluces = el
        if(el.type == 'directions') this.directions = el
      })
      
    }
  },
  mounted() {
    this.title()
    this.getNotes()
  },
}
</script>