<template>
  <div>
    <Header />
    <main>
      <section class="mission">
        <div class="container">
          <div class="mission__inner">
            <p class="mission__quote">
              All that we do is guided by delivering solutions so that you can smoothly run your business everywhere, with no worries, without any barriers.
            </p>
            <div class="mission__content">
              <img src="~/static/images/mission.png" alt="" class="mission__img">
              <div class="mission__content-text">
                <h2 class="mission__title">
                  Our Mission
                </h2>
                <p class="mission__text">
                  As Bill Gates stated, ‘There will be two types of businesses in the next five years, those that are on the Internet, and those that are out of business.’
                </p>
                <p class="mission__text">
                  We help improve and bring your business online through custom software solutions. The greatest achievement for us is to make maximum profit for your business, drive real value for your users, and ensure your product hits the top ratings.
                </p>
                <p class="mission__text">
                  We provide web and mobile tools and deliver advanced tech solutions to be implemented to guarantee high-quality, fast, seamless, flexible, and easy-to-use final product. Our mission is to create not just apps. We will help you implement solutions that everyone always is going to want.
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
                  Our Vision
                </h2>
                <p class="vision__text">
                  People now need not only highly effective products but fast and convenient as well.
                </p>
                <p class="vision__text">
                  With the rapid technologies expansion and intrusion of online solutions, the market has drastically changed. Offline spheres primarily constituting users’ everyday lives now suffer from devouring by mobile segment.
                </p>
                <p class="vision__text">
                  Here end to end solutions arise, representing a new, increasingly developing field of innovative products.
                </p>
                <p class="vision__text">
                  At OpenGeeksLab, we offer top-end solutions on the web and mobile development market, which will help your idea grow and conquer business hills by breathing new life into your customers’ daily routine.
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
              Our Values
            </h2>
            <ul class="value__items">
              <li class="value__item">
                <div class="value__numb">
                  01
                </div>
                <div class="value__item-title">
                  OXIOS is about top-end service and results
                </div>
                <div class="value__item-text">
                  We will develop your product so great that you do not want to make changes. We do not pursue quantity—we value high-end quality and results.
                </div>
              </li>
              <li class="value__item">
                <div class="value__numb">
                  02
                </div>
                <div class="value__item-title">
                  OXIOS  is about trust
                </div>
                <div class="value__item-text">
                  Year after year, OpenGeeksLab has been recognized as one of Europe’s most talented developers. We have clientele across the globe that highly evaluates services we deliver and return to us to create new amazing products.
                </div>
              </li>
              <li class="value__item">
                <div class="value__numb">
                  03
                </div>
                <div class="value__item-title">
                  OXIOS is about transparency
                </div>
                <div class="value__item-text">
                  Due to transparency, we achieve the effect of your real presence in our workflow. We are working with two-week sprints accompanied by everyday meetups. After each sprint, we have a retrospective call and discuss the work segment—what was done well and what should be improved. As we are in the heart of Europe, we work during your working hours.
                </div>
              </li>
              <li class="value__item">
                <div class="value__numb">
                  04
                </div>
                <div class="value__item-title">
                  OXIOS is about getting a step ahead
                </div>
                <div class="value__item-text">
                  We are on a wave of emerging and changing trends to ensure a competitive advantage for your business that is not available to an average person. Therefore, you get the technical solutions that best suit your business model so that you can get a step ahead of competitors.
                </div>
              </li>
              <li class="value__item">
                <div class="value__numb">
                  05
                </div>
                <div class="value__item-title">
                  OXIOS is about offering your
                  customers a lifelike immersive experience
                </div>
                <div class="value__item-text">
                  The modern market is wide-open to innovative digital solutions. We know how to transform your business to offer your customers a lifelike immersive experience and breathe new life into your customer’s daily routine.
                </div>
              </li>
              <li class="value__item">
                <div class="value__numb">
                  06
                </div>
                <div class="value__item-title">
                  OXIOS is about moving beyond standard business models
                </div>
                <div class="value__item-text">
                  We know how to use the software in the right way to move your business beyond standard models and revolutionize your opportunities. Choosing us, you help your organization grow and adapt to new dynamics, not just to fit in.
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
  padding-bottom: 100px
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
  padding-bottom: 150px
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
