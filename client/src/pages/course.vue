<template>
  <div class="course-page">
    <h1 class="title">Курс по направлению "{{ this.Page.name }}" </h1>
    <div class="course_sm_desck"> {{this.Page.description}} </div>

    <div class="page_curator">
      <div class="page_curator_inner">
        <div class="curator_desc">
          <div class="curator_name">{{ this.Page.curator.name }}</div>
          <div class="page_curator_motto">
            {{ this.Page.curator.motto }}
          </div>
          <div class="page_curator_desc">
            {{ this.Page.curator.desc }}
          </div>
        </div>
        <div class="curator_avatar">
          <img :src=this.Page.curator.avatar alt="">
        </div>
      </div>
    </div>

    <div class="subtitle">Что будет на курсе?</div>

    <div class="page_full_desc">{{ this.Page.fullDesc }}</div>
  </div>
</template>

<script>
import learn from '@/data/learn' 

export default {
  name: 'course',
  data() {
    return {
      Page: {}
    }
  },
  methods: {
    getPage() {
      const pageId = this.$route.params.course
      const Page = learn[pageId]
      this.Page = Page
    },
    title() {
      document.title = 'Neirodialog Неиродиагностика'
    },
  },
  mounted() {
    this.title()
    this.getPage()
  },
}
</script>