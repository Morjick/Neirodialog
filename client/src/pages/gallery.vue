<template>
  <div class="gallery-page">
    <div class="gallery-inner">

      <div class="gallery-container">
        <div class="subtitle">Галерея:</div>
        <div class="gallery-wrapper">

          <div v-for="image in images" :key="image.img" @click="openItem" class="gallery_item">
            <img class="item-img" :src=image.image alt="Hello">
          </div>

          <div 
            class="galley-title"
            v-if="this.imageLenght > 0"
          >Ничего не подошло под ваши критерии</div>

        </div>
      </div>
    

    </div>
    <div class="gallery-active">
      <div class="active-img-container"></div>
      <div class="gellery-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam quas voluptatem nulla debitis beatae!</div>
    </div>
  </div>
</template>

<script>
// import gallery from '@/data/gallery.js'

export default {
  name: 'gallery',
  data() {
    return {
      imageLenght: 0,
      filter: {
        children: false,
        courses: true,
        classes: true,
        lectures: true,
        curators: true,
      },
      images: []
    }
  },
  methods: {
    openItem(e) {
      let Item = e.target
      const galleryActive = document.querySelector('.gallery-active')
      const activeImgContainer = document.querySelector('.active-img-container')
      galleryActive.style.display = 'block'

      let Image = Item.getElementsByTagName('img')[0]
      
      const screenWidth = window.screen.width /2
      console.log(screenWidth)

      if(screenWidth >= 500) {
        activeImgContainer.style.width = screenWidth + 'px'
      } else {
        activeImgContainer.style.width = '100vw'
      }
      
      activeImgContainer.appendChild(Image)

      galleryActive.onclick = (e) => {
        if(e.target == activeImgContainer) {
          return false
        } else {
          galleryActive.style.display = 'none'
          activeImgContainer.removeChild(Image)
          Item.appendChild(Image)
        }
      }
    },
    title() {
      document.title = 'Neirodialog Галлерея'
    },
    async getGallry() {
      const responce = await fetch('/api/find/gallery', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      
      const candidate = await responce.json()

      this.images = candidate.gallery
      console.log(this.images)
    }
  },
  mounted() {
    this.title()
    this.getGallry()
  }
}
</script>