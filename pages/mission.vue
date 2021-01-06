<template>
  <div>
    <Header />
    <main>
      <section class="mission">
        <div class="container">
          <div class="mission__inner">
            <p class="mission__quote">
              {{ $t('MissionCitata') }}
            </p>
            <div class="mission__content">
              <img src="~/static/images/mission.png" alt="" class="mission__img">
              <div class="mission__content-text">
                <h2 class="mission__title">
                  {{ $t('MissionTitleOne') }}
                </h2>
                <p class="mission__text">
                  {{ $t('MissionTextOneOne') }}
                </p>
                <p class="mission__text">
                  {{ $t('MissionTextOneTwo') }}
                </p>
                <p class="mission__text">
                  {{ $t('MissionTextOneThree') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="vision">
        <div class="container">
          <div class="vision__inner">
            <div class="vision__content">
              <img src="~/static/images/vision.png" alt="" class="vision__img">
              <div class="vision__content-text">
                <h2 class="vision__title">
                  {{ $t('MissionTitleTwo') }}
                </h2>
                <p class="vision__text">
                  {{ $t('MissionTextTwoOne') }}
                </p>
                <p class="vision__text">
                  {{ $t('MissionTextTwoTwo') }}
                </p>
                <p class="vision__text">
                  {{ $t('MissionTextTwoThree') }}
                </p>
                <p class="vision__text">
                  {{ $t('MissionTextTwoFour') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="value">
        <div class="container">
          <div class="value__inner">
            <h2 class="value__title">
              {{ $t('MissionValue') }}
            </h2>
            <ul class="value__items">
              <li class="value__item">
                <div class="value__numb">
                  01
                </div>
                <div class="value__item-title">
                  {{ $t('MissionValueTitleOne') }}
                </div>
                <div class="value__item-text">
                  {{ $t('MissionValueTextOne') }}
                </div>
              </li>
              <li class="value__item">
                <div class="value__numb">
                  02
                </div>
                <div class="value__item-title">
                  {{ $t('MissionValueTitleTwo') }}
                </div>
                <div class="value__item-text">
                  {{ $t('MissionValueTextTwo') }}
                </div>
              </li>
              <li class="value__item">
                <div class="value__numb">
                  03
                </div>
                <div class="value__item-title">
                  {{ $t('MissionValueTitleThree') }}
                </div>
                <div class="value__item-text">
                  {{ $t('MissionValueTextThree') }}
                </div>
              </li>
              <li class="value__item">
                <div class="value__numb">
                  04
                </div>
                <div class="value__item-title">
                  {{ $t('MissionValueTitleFour') }}
                </div>
                <div class="value__item-text">
                  {{ $t('MissionValueTextFour') }}
                </div>
              </li>
              <li class="value__item">
                <div class="value__numb">
                  05
                </div>
                <div class="value__item-title">
                  {{ $t('MissionValueTitleFive') }}
                </div>
                <div class="value__item-text">
                  {{ $t('MissionValueTextFive') }}
                </div>
              </li>
              <li class="value__item">
                <div class="value__numb">
                  06
                </div>
                <div class="value__item-title">
                  {{ $t('MissionValueTitleSix') }}
                </div>
                <div class="value__item-text">
                  {{ $t('MissionValueTextSix') }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Map />
      <Contact />
    </main>
    </main>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.mission
  padding-top: 90px
  padding-bottom: 100px
  &__quote
    max-width: 470px
    font-size: 18px
    line-height: 140%
    font-family: Arial
    font-style: italic
    color: #9A98AE
    margin-bottom: 40px
  &__content
    display: flex
    align-items: center
    justify-content: space-between
    &-text
      max-width: 570px
  &__title
    margin-bottom: 80px
  &__text
    font-size: 18px
    line-height: 140%
    color: #1B1425
    &+&
      padding-top: 15px
  &__img
    margin-left: -100px
.vision
  padding-bottom: 50px
  &__content
    display: flex
    align-items: center
    flex-direction: row-reverse
    justify-content: space-between
    &-text
      max-width: 570px
  &__title
    margin-bottom: 80px
  &__text
    font-size: 18px
    line-height: 140%
    color: #1B1425
    &+&
      padding-top: 15px
  &__img
    margin-right: -70px
.value
  padding-bottom: 50px
  &__title
    margin-bottom: 100px
  &__item
    padding-left: 100px
    position: relative
    max-width: 630px
    &+&
      margin-top: 60px
    &-title
      font-weight: 500
      font-size: 24px
      line-height: 140%
      color: #1F1235
      margin-bottom: 20px
    &-text
      font-size: 18px
      line-height: 140%
  &__numb
    position: absolute
    left: 0
    font-weight: 500
    font-size: 24px
    line-height: 140%
    color: #9A98AE
    &:after
      content: ''
      position: absolute
      right: -60px
      top: 50%
      transform: translateY(-50%)
      width: 47px
      height: 2px
      background-color: #9A98AE
@media (max-width: 1100px)
  .mission__content
    flex-direction: column
  .vision__content
    flex-direction: column
  .mission__content-text,
  .vision__content-text
    max-width: none
  .mission__title,
  .vision__title
    margin-bottom: 20px
  .value__inner
    display: flex
    flex-direction: column
    align-items: center
  .mission__img,
  .vision__img
    margin: 0 auto
    max-width: 100%
@media (max-width: 425px)
  .value
    padding-bottom: 50px
  .value__numb:after
    display: none
  .value__item
    padding-left: 50px
</style>
