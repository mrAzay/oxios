<template>
  <section class="map">
    <picture>
      <source srcset="~/static/images/map-bg-mobile.svg" media="(max-width: 800px)">
      <img class="map__bg" src="~/static/images/map-bg.png" alt="">
    </picture>
    <div class="container">
      <div class="map__inner">
        <h2 class="map__title">
          {{ $t('Email') }}
        </h2>
        <a href="mailto:info@oxios.com" class="map__text map__text-link">
          info@oxios.com
        </a>
        <h2 class="map__title">
          {{ $t('Office') }}
        </h2>
        <p class="map__text">
          {{ $t('OfficeAdressOne') }} <br>
          {{ $t('OfficeAdressTwo') }} <br>
          69000
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
  .map
    height: 500px
    padding-top: 60px
    position: relative
    &__title
     color: #1B1425
     margin-bottom: 30px
    &__text
      font-weight: 500
      font-size: 24px
      line-height: 140%
      color: #7873AA

      &-link
        margin-bottom: 40px
        display: block
    &__bg
      position: absolute
      height: 100%
      width: 100%
      top: 0
      right: 0
      object-position: right
      object-fit: contain
      max-width: 70%
      z-index: -1
@media (max-width: 800px)
  .map__bg
    max-width: none
    top: -140px
  .map
    padding-top: 150px
    padding-bottom: 50px
    box-sizing: content-box
    height: auto
    overflow: hidden
  .map__inner
    padding-top: 250px
</style>
