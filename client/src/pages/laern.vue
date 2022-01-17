<template>
  <div class="learn-page">
    <div class="learn_container">
      <div class="learn_container_inner">

        <router-link 
          v-for="course in courses" 
          :key="course.id" 
          :id="'course' + course.id"
          class="learn_item"
          :to="{name: 'course', params:{ course: course.id }}"
        >
          <div class="learn-title">{{course.name}}</div>
          <div class="learn_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ratione reiciendis labore error cupiditate dicta.
          </div>
          <button class="none-btn">Подробнее</button>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
import courses from '@/data/learn'

export default {
  name: 'learn',
  data() {
    return {
      courses: []
    }
  },
  methods: {
    getCourses() {
      this.courses = courses
    },
    title() {
      document.title = 'Neirodialog Обучение'
    },
  },
  mounted() {
    this.getCourses()
    this.title()
  }
}
</script>