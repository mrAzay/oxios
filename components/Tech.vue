<template>
  <div>
    <ul class="stack__items">
      <li class="stack__item">
        <picture>
          <source srcset="~/static/images/icons-tech/mongoDB-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/mongoDB.png" alt="" class="stack__item-img">
        </picture>
      </li>
      <li class="stack__item">
        <picture>
          <source srcset="~/static/images/icons-tech/react-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/react.png" alt="" class="stack__item-img">
        </picture>
      </li>
      <li class="stack__item">
        <picture>
          <source srcset="~/static/images/icons-tech/nodeJS-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/nodeJS.png" alt="" class="stack__item-img">
        </picture>
      </li>
      <li class="stack__item">
        <picture>
          <source srcset="~/static/images/icons-tech/js-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/js.png" alt="" class="stack__item-img">
        </picture>
      </li>
      <li class="stack__item">
        <picture>
          <source srcset="~/static/images/icons-tech/vue-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/vue.png" alt="" class="stack__item-img">
        </picture>
      </li>
      <li class="stack__item">
        <picture>
          <source srcset="~/static/images/icons-tech/python-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/python.png" alt="" class="stack__item-img">
        </picture>
      </li>
      <li class="stack__item">
        <picture>
          <source srcset="~/static/images/icons-tech/angular-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/angular.png" alt="" class="stack__item-img">
        </picture>
      </li>
      <li class="stack__item">
        <picture>
          <source srcset="~/static/images/icons-tech/umbraco-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/umbraco.png" alt="" class="stack__item-img">
        </picture>
      </li>
      <li class="stack__item">
        <picture>
          <source srcset="~/static/images/icons-tech/php-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/php.png" alt="" class="stack__item-img">
        </picture>
      </li>
      <li class="stack__item">
        <picture>
          <source srcset="~/static/images/icons-tech/flutter-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/flutter.png" alt="" class="stack__item-img">
        </picture>
      </li>
      <li class="stack__item">
        <picture>
          <source srcset="~/static/images/icons-tech/ts-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/ts.png" alt="" class="stack__item-img">
        </picture>
      </li>
      <li class="stack__item" @click="$store.commit('modal', 'techModal')">
        <picture>
          <source srcset="~/static/images/icons-tech/react-native-mobile.png" media="(max-width: 600px)">
          <img src="~/static/images/icons-tech/react-native.png" alt="" class="stack__item-img">
        </picture>
      </li>
    </ul>
    <TechModal />
  </div>
</template>

<script>
export default {
  data () {
    return {
      modal: false,
      tech: ''
    }
  }
}
</script>

<style lang="sass">
.stack
  &__items
    display: flex
    flex-wrap: wrap
    justify-content: space-between
  &__item
    width: 270px
    height: 170px
    display: flex
    align-items: center
    justify-content: center
    transition: all .2s ease
    filter: grayscale(1)
    cursor: pointer
    &:hover
      box-shadow: 0px 5px 20px rgba(52, 49, 80, 0.1)
      border-radius: 8px
      filter: grayscale(0)
</style>
