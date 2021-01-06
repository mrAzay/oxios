<template>
  <div>
    <Header />
    <section class="technologies">
      <div class="container">
        <div class="technologies__inner">
          <h1 class="technologies__title">
            {{ $t('TechnologiesTitle') }}
          </h1>
          <div class="technologies__text">
            {{ $t('TechnologiesText') }}
          </div>
          <Tech />
        </div>
      </div>
    </section>
    <ContactText />
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
  .technologies
    padding-top: 90px
    padding-bottom: 120px
    &__title
      font-weight: 500
      font-size: 36px
      line-height: 120%
      color: #1F1235
      margin-bottom: 40px
    &__text
      font-weight: 500
      font-size: 24px
      line-height: 140%
      margin-bottom: 90px
      max-width: 520px
</style>
