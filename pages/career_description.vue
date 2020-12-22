<template>
  <div>
    <Header />
    <main>
      <section class="preview">
        <div class="container">
          <div class="preview__inner">
            <h1 class="preview__title">
              Project Manager
            </h1>
            <div class="preview__text">
              We are looking for you to become a part of our team!
            </div>
            <button class="preview__button button-link">
              Send CV
            </button>
          </div>
        </div>
      </section>
      <section class="demands">
        <div class="container">
          <div class="demands__inner">
            <article class="demands__block">
              <span class="demands__title">Qualifications</span>
              <ul class="demands__list">
                <li class="demands__list-item">
                  1+ year project management experience
                </li>
                <li class="demands__list-item">
                  fluent English
                </li>
                <li class="demands__list-item">
                  technical background
                </li>
                <li class="demands__list-item">
                  in-depth understanding of PM guidelines & experience with PM methodologies
                </li>
                <li class="demands__list-item">
                  experience in collecting business requirements and writing tech specs
                </li>
                <li class="demands__list-item">
                  software product lines analysis
                </li>
                <li class="demands__list-item">
                  great communication, organizational, presentation, management, facilitation, negotiation skills
                </li>
              </ul>
            </article>
            <article class="demands__block">
              <span class="demands__title">Essential Duties & Responsibilities</span>
              <ul class="demands__list">
                <li class="demands__list-item">
                  managing multiple projects simultaneously
                </li>
                <li class="demands__list-item">
                  planning & directing work efforts & motivating teammates
                </li>
                <li class="demands__list-item">
                  develop & manage project schedules to ensure its successful & timely completion
                </li>
                <li class="demands__list-item">
                  maintaining project documentation
                </li>
                <li class="demands__list-item">
                  managing changes on work projects
                </li>
                <li class="demands__list-item">
                  managing project financials
                </li>
                <li class="demands__list-item">
                  generation & approval of interim & final project reports with CPM
                </li>
                <li class="demands__list-item">
                  submitting interim reports
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <section class="join">
        <div class="container">
          <div class="join__inner">
            <h2 class="join__title">
              Join Us
            </h2>
            <div class="join__images">
              <img src="~/static/images/join1.jpg" class="join__img">
              <img src="~/static/images/join2.jpg" class="join__img">
              <img src="~/static/images/join3.jpg" class="join__img">
              <img src="~/static/images/join1.jpg" class="join__img">
              <img src="~/static/images/join2.jpg" class="join__img">
              <img src="~/static/images/join3.jpg" class="join__img">
            </div>
          </div>
          <div class="progress">
            <div class="line" />
          </div>
        </div>
      </section>
      <Map />
    </main>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>

.preview
  padding-top: 90px
  padding-bottom: 138px
  &__title
    margin-bottom: 20px
  &__text
    font-size: 18px
    line-height: 140%
    margin-bottom: 40px
.demands
  padding-bottom: 200px
  &__block
    display: flex
    align-items: flex-start
    justify-content: space-between
    max-width: 795px
    &+&
      margin-top: 100px
  &__title
    font-weight: 500
    font-size: 24px
    line-height: 140%
    width: 218px
  &__list
    &-item
      font-size: 18px
      line-height: 140%
      color: #1B1425
      position: relative
      padding-left: 22px
      max-width: 495px
      &:before
        content: ''
        position: absolute
        width: 10px
        height: 1px
        background-color: #1B1425
        top: 50%
        left: 0
        transform: translateY(-50%)
    &+&
      margin-top: 20px
.join
  overflow: hidden
  padding-bottom: 100px
  &__title
    margin-bottom: 90px
  &__images
    overflow: scroll
    width: 100vw
    display: flex
    justify-content: flex-start
    align-items: center
    position: relative
    padding-bottom: 90px
    &::-webkit-scrollbar
      background: rgb(255, 255, 255)
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 33%, rgba(175, 171, 212, 1) 34%, rgba(175, 171, 212, 1) 65%, rgba(255, 255, 255, 0) 66%, rgba(255, 255, 255, 0) 100%)
      height: 3px
    &::-webkit-scrollbar-thumb
      height: 3px
      background-color: #7873AA
  &__img
    margin-right: 30px
    &:last-child
      opacity: 0
      visibility: hidden

@media (max-width: 800px)
  .demands
    padding-bottom: 50px
  .demands__block
    flex-direction: column
  .demands__title
    margin-bottom: 40px
@media(max-width: 460px)
  .join__img
    width: calc(100vw - 60px)
    &:last-child
      width: 20px
</style>
