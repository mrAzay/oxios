<template>
  <div v-body-scroll-lock="$store.state.techModal" class="tech-modal" :class="{'tech-modal--active' : $store.state.techModal }">
    <div class="tech-modal__inner">
      <button class="tech-modal__close" @click="$store.commit('modal', 'techModal')">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.4211 1.24232e-06L30 1.57895L1.57895 30L0 28.4211L28.4211 1.24232e-06Z" fill="#1F1235" />
          <path d="M30 28.4211L28.4211 30L1.17331e-06 1.57895L1.57895 0L30 28.4211Z" fill="#1F1235" />
        </svg>
      </button>
      <div class="tech-modal__top">
        <img src="~/static/images/icons-tech/react-native-big.png" alt="" class="tech-modal__top-img">
        <div class="tech-modal__top-text">
          <div class="tech-modal__top-title">
            Choose Our Vetted React Native App Developers To Work On Your Project
          </div>
          <div class="tech-modal__top-subtitle">
            Our experts are in close cooperation and capable of delivering end to end software solutions that best suit your business model and result in success.
          </div>
        </div>
      </div>
      <div class="tech-modal__examples">
        <div class="tech-modal__examples-title">
          Examples
        </div>
        <ul class="tech-modal__examples-list">
          <li v-for="(item, index) in examples" :key="index" class="tech-modal__examples-list-item">
            <span class="tech-modal__examples-numb">0{{ index }}</span><span class="tech-modal__examples">{{ item.name }}</span>
            <a href="item.link" class="tech-modal__examples-btn button">
              <span class="desc">View the Presentation</span>
              <span class="mob">View</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      examples: {
        1: {
          name: 'The Best App Ever',
          link: '#'
        },
        2: {
          name: 'The Best App Ever 1',
          link: '#'
        },
        3: {
          name: 'The Best App Ever 2',
          link: '#'
        },
        4: {
          name: 'The Best App Ever 3',
          link: '#'
        },
        5: {
          name: 'The Best App Ever 4',
          link: '#'
        },
        6: {
          name: 'The Best App Ever 6',
          link: '#'
        }

      }
    }
  }
}
</script>
<style lang="sass">
  .mob
    display: none
  .tech-modal
    z-index: 100
    max-height: 100vh
    width: 100vw
    position: fixed
    top: 50%
    transform: translate(-200%, -50%)
    padding: 100px
    background-color: #fff
    left: 50%
    transition: 0.5s all ease
    visibility: hidden
    &__inner
      max-width: 950px
      margin: 0 auto
    &--active
      visibility: visible
      transform: translate(-50%, -50%)
    &__close
      position: absolute
      top: 30px
      right: 30px
      border: none
      background: none
    &__top
      display: flex
      align-items: flex-start
      margin-bottom: 145px
      &-text
        margin-left: 30px
      &-title
        margin-bottom: 30px
        font-weight: 500
        font-size: 36px
        line-height: 120%
        color: #1F1235
        max-width: 570px
        width: 100%
      &-subtitle
        max-width: 560px
        font-size: 18px
        line-height: 140%
        color: #1B1425
    &__examples
      &-title
        font-size: 18px
        line-height: 140%
        color: #1F1235
        padding-left: 60px
        margin-bottom: 30px
      &-list
        height: 300px
        overflow: auto
        &::-webkit-scrollbar
          background: rgb(255, 255, 255)
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 33%, rgba(175, 171, 212, 1) 34%, rgba(175, 171, 212, 1) 65%, rgba(255, 255, 255, 0) 66%, rgba(255, 255, 255, 0) 100%)
          width: 3px
        &::-webkit-scrollbar-thumb
          width: 3px
          background-color: #7873AA
        &-item
          padding: 27px 100px 27px 60px
          display: flex
          align-items: center
          justify-content: space-between
@media (max-width: 900px)
  .tech-modal
    padding: 70px 30px 30px 30px
  .tech-modal__top
    margin-bottom: 50px
  .tech-modal__examples-list-item,
  .tech-modal__examples-title
    padding-left: 0
@media (max-width: 750px)
  .tech-modal__top-text
    margin-left: 0
  .tech-modal__top-title
    font-size: 24px
  .tech-modal__examples-list-item
    padding: 10px 10px 10px 0
  .tech-modal
    padding: 40px 20px 20px 20px
    overflow: auto
    min-width: 100vw
  .tech-modal__close
    top: 15px
    right: 15px
    svg
      width: 15px
      height: 15px
@media (max-width: 600px)
  .technologies__text,
  .technologies
    margin-bottom: 30px
  .stack__item
    width: 157px
    height: 100px
  .tech-modal__top
    flex-direction: column
  .tech-modal__top-img
    margin:  0 auto 20px
  .tech-modal__examples-btn
    padding: 10px 30px
  .mob
    display: block
  .desc
    display: none
@media (max-width: 400px)
  .tech-modal
    padding: 40px 10px 10px 10px
@media (max-width: 354px)
.stack__items
  justify-content: center
</style>
