<template>
  <section class="contact-text">
    <div class="container">
      <div class="contact-text__inner">
        <div class="contact-text__title">
          Do you wnat to discuss your project?
        </div>
        <nuxt-link to="/contacts" class="contact-text__button button-link">
          Contact Us
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
  .contact-text
    background: #F4F3F8
    padding-top: 100px
    padding-bottom: 111px
    text-align: center
    &__title
      font-weight: 500
      font-size: 36px
      line-height: 120%
      margin-bottom: 60px
    &__button
      margin: 0 auto
  @media (max-width: 425px)
    .contact-text
      padding: 50px 0
      &__title
        font-size: 24px
</style>
