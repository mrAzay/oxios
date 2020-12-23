<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link class="header__logo" to="/">
          <img class="logo__img" src="~/static/images/logo.svg">
        </nuxt-link>
        <ul class="header__burger" @click="mobileMenu = !mobileMenu">
          <li class="header__burger-item" />
          <li class="header__burger-item" />
          <li class="header__burger-item" />
        </ul>
        <nav v-body-scroll-lock="mobileMenu" class="header__nav" :class="{active: mobileMenu}">
          <ul class="header__nav-list">
            <li class="close">
              <button @click="mobileMenu = !mobileMenu">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.4211 1.24232e-06L30 1.57895L1.57895 30L0 28.4211L28.4211 1.24232e-06Z" fill="#1F1235" />
                  <path d="M30 28.4211L28.4211 30L1.17331e-06 1.57895L1.57895 0L30 28.4211Z" fill="#1F1235" />
                </svg>
              </button>
            </li>
            <li class="header__nav-item">
              <nuxt-link to="/our_works" class="header__nav-link">
                Our Works
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link to="/technologies" class="header__nav-link">
                Technologies
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <button class="header__nav-link header__nav-link-btn" :class="{'header__nav-link-btn--active': dropdown}" @click="dropdown = !dropdown">
                About Us<img class="header__nav-link-btn-img" src="~/static/images/arrow-down.svg">
              </button>
              <div class="header__nav-item-droppdown" :class="{'header__nav-item-droppdown--active': dropdown}">
                <nuxt-link to="/we" class="header__nav-item-droppdown-link">
                  Who We Are
                </nuxt-link>
                <nuxt-link to="/career" class="header__nav-item-droppdown-link">
                  Career
                </nuxt-link>
                <nuxt-link to="/mission" class="header__nav-item-droppdown-link">
                  Our Mission
                </nuxt-link>
              </div>
            </li>
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="/blog">
                Blog
              </nuxt-link>
            </li>
          </ul>
          <nuxt-link class="header__link button-link" to="/contacts">
            Hire Us
          </nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style  lang="sass">
  .close
    display: none
  .header
    padding: 27px 0
    &__inner
      display: flex
      align-items: center
    &__burger
      display: none
      margin-left: auto
      &-item
        background: #FF6E6C
        width: 24px
        height: 2px
        &+&
          margin-top: 4px
    &__nav
      margin-left: auto
      display: flex
      justify-content: space-between
      align-items: center
      &.active
        display: flex
      &-list
        display: flex
        align-items: center
      &-item
        color: #1F1235
        position: relative
        & + &
          margin-left: 60px
        &-droppdown
          padding: 30px
          background: #F4F3F8
          border-radius: 6px
          display: none
          flex-direction: column
          position: absolute
          width: max-content
          top: calc(100% + 15px)
          &--active
            display: flex
          &-link
            color: #1F1235
            &+&
              margin-top: 30px
      &-link
        color: #1F1235
        &-btn
          background: none
          border: none
          margin: 0
          padding: 0
          display: flex
          align-items: center
          &-img
            margin-left: 10px
    &__link
      margin-left: 106px

@media (max-width: 1200px)
  .header__link
    margin-left: 40px
  .header__nav-item + .header__nav-item
    margin-left: 40px
@media (max-width: 900px)
  .header__nav
    display: none
    width: 100vw
    height: 100vh
    z-index: 22
    position: fixed
    top: 0
    left: 0
    align-items: center
    justify-content: center
    background: #ffffff
    flex-direction: column
    &-list
      display: flex
      flex-direction: column
      align-items: flex-start
    &-item
      width: 100%
      text-align: center
    &-item+&-item
      margin-left: 0
  .header__burger
    display: block
  .header__nav-item
    font-size: 22px
    margin-bottom: 20px
  .header__nav-item-droppdown
    display: flex
    position: static
    padding: 0
    background-color: transparent
  .header__nav-item-droppdown-link + .header__nav-item-droppdown-link
    margin-top: 20px
  .header__nav-link-btn
    display: none
  .close
    display: block
    position: absolute
    width: fit-content
    transform: translate(190px, -60px)
    button
      background: transparent
      border: none
      padding: 0
      margin: 0
    svg
      width: 20px
      height: 20px
  .button-link
    margin-left: 0
</style>

<script>
export default {
  data () {
    return {
      dropdown: false,
      mobileMenu: false
    }
  }
}
</script>
