<template>
  <div>
    <Header />
    <main>
      <section class="blog">
        <div class="container">
          <div class="blog__inner">
            <h2 class="blog__title">
              {{ $t('BlogTitle') }}
            </h2>
            <div class="blog__filter">
              <button class="blog__filter-content" @click="$store.commit('modal', 'blogFilter')">
                {{ $t('FilterOne') }}
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 0.701218L7 6.83061L1 0.701218" stroke="#FF6E6C" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <ul v-if="$store.state.blogFilter" class="blog__filter-list">
                <li class="blog__filter-item">
                  <button class="blog__filter-content" @click="$store.commit('modal', 'blogFilter')">
                    {{ $t('FilterOne') }}
                  </button>
                </li>
                <li class="blog__filter-item">
                  <button class="blog__filter-content" @click="$store.commit('modal', 'blogFilter')">
                    {{ $t('FilterOne') }}
                  </button>
                </li>
                <li class="blog__filter-item">
                  <button class="blog__filter-content" @click="$store.commit('modal', 'blogFilter')">
                    {{ $t('FilterOne') }}
                  </button>
                </li>
              </ul>
            </div>
            <div class="blog__items">
              <article class="blog__item">
                <nuxt-link :to="localePath('/blog_item')">
                  <img src="~/static/images/blog1.jpg" alt="" class="blog__item-img">
                  <h3 class="blog__item-title">
                    {{ $t('BlogTitleItemOne') }}
                  </h3>
                  <p class="blog__item-text">
                    {{ $t('BlogTextItemOne') }}
                  </p>
                </nuxt-link>
              </article>
              <article class="blog__item">
                <nuxt-link :to="localePath('/blog_item')">
                  <img src="~/static/images/blog2.jpg" alt="" class="blog__item-img">
                  <h3 class="blog__item-title">
                    {{ $t('BlogTitleItemTwo') }}
                  </h3>
                  <p class="blog__item-text">
                    {{ $t('BlogTextItemTwo') }}
                  </p>
                </nuxt-link>
              </article>
              <article class="blog__item">
                <nuxt-link :to="localePath('/blog_item')">
                  <img src="~/static/images/blog3.jpg" alt="" class="blog__item-img">
                  <h3 class="blog__item-title">
                    {{ $t('BlogTitleItemThree') }}
                  </h3>
                  <p class="blog__item-text">
                    {{ $t('BlogTextItemThree') }}
                  </p>
                </nuxt-link>
              </article>
              <article class="blog__item">
                <nuxt-link :to="localePath('/blog_item')">
                  <img src="~/static/images/blog4.jpg" alt="" class="blog__item-img">
                  <h3 class="blog__item-title">
                    {{ $t('BlogTitleItemFour') }}
                  </h3>
                  <p class="blog__item-text">
                    {{ $t('BlogTextItemFour') }}
                  </p>
                </nuxt-link>
              </article>

              <article class="blog__item">
                <nuxt-link :to="localePath('/blog_item')">
                  <img src="~/static/images/blog5.jpg" alt="" class="blog__item-img">
                  <h3 class="blog__item-title">
                    {{ $t('BlogTitleItemFive') }}
                  </h3>
                  <p class="blog__item-text">
                    {{ $t('BlogTextItemFive') }}
                  </p>
                </nuxt-link>
              </article>
              <article class="blog__item">
                <nuxt-link :to="localePath('/blog_item')">
                  <img src="~/static/images/blog6.jpg" alt="" class="blog__item-img">
                  <h3 class="blog__item-title">
                    {{ $t('BlogTitleItemSix') }}
                  </h3>
                  <p class="blog__item-text">
                    {{ $t('BlogTextItemSix') }}
                  </p>
                </nuxt-link>
              </article>
            </div>
            <button class="blog__more">
              {{ $t('ShowMore') }}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#FF6E6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Contact />
    </main>
    <Foter />
  </div>
</template>

<script>

</script>

<style lang="sass" scoped>
  button
    background-color: transparent
    border: none
    outline: transparent
    &:focus,
    &:active
      outline: transparent
  .blog
    padding-top: 90px
    padding-bottom: 30px
    &__inner
      display: flex
      align-items: center
      justify-content: space-between
      flex-wrap: wrap
    &__title
      margin-bottom: 60px
    &__filter
      display: flex
      align-items: center
      margin-bottom: 60px
      font-size: 18px
      line-height: 140%
      color: #FF6E6C
      position: relative
      &-content
        color: #FF6E6C
      svg
        margin-left: 20px
      &-list
        position: absolute
        top: calc(100% + 15px)
        background-color: #F4F3F8
        padding: 10px
        border-radius: 8px
        width: 100%
      &-item
        &+&
          margin-top: 10px
    &__items
      display: flex
      justify-content: space-between
      align-items: flex-start
      margin-bottom: -70px
      flex-wrap: wrap
      padding-bottom: 60px
    &__item
      flex-basis: 30%
      margin-bottom: 70px
      &-img
        margin-bottom: 40px
        width: 100%
        object-fit: cover
      &-title
        font-weight: 500
        font-size: 24px
        line-height: 140%
        color: #1F1235
        margin-bottom: 20px
      &-text
        font-size: 18px
        line-height: 140%
        color: #1B1425
    &__more
      font-weight: 500
      font-size: 24px
      line-height: 140%
      color: #FF6E6C
      margin: 0 auto
@media (max-width: 1100px)
  .blog__items
    justify-content: space-around
  .blog__item
    flex-basis: 40%
@media (max-width: 800px)
  .blog__item
    flex-basis: 80%
    margin-left: 0
    margin-right: 0
</style>
