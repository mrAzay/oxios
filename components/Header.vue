<template lang="pug">
  header.header
    .container
      .header__inner
        a.header__logo(href="#")
          img.logo__img(src="~/static/images/logo.svg")
        nav.header__nav
          ul.header__nav-list
            li.header__nav-item
              a.header__nav-link(href="#") Our Works
            li.header__nav-item
              a.header__nav-link(href="#") Technologies
            li.header__nav-item
              button.header__nav-link.header__nav-link-btn
                |About Us
                img.header__nav-link-btn-img(src="~/static/images/arrow-down.svg")
              .header__nav-item-droppdown
            li.header__nav-item
              a.header__nav-link(href="#") Blog
        a.header__big-link.button-link(href="#") Hire Us
</template>

<style  lang="sass">
  .container
    max-width: 1170px
    width: 100%
    margin: 0 auto

  .header
    padding: 27px 0
    &__inner
      display: flex
      align-items: center
    &__nav
      margin-left: auto
      margin-right: 106px
      &-list
        display: flex
        align-items: center
      &-item
        color: #1F1235
        & + &
          margin-left: 60px
      &-link
        color: #1F1235
        &-btn
          background: none
          border: none
          margin: 0
          padding: 0
          display: flex
          &-img
            margin-left: 10px

</style>
