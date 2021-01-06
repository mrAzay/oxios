<template>
  <div>
    <Header />
    <main class="works">
      <div class="container">
        <section class="works__inner">
          <h1 class="works__title">
            {{ $t('WorkTitle') }}
          </h1>
          <article class="works-item">
            <img class="works-item__img" src="~/static/images/services.png" alt="">
            <div class="works-item__text">
              <h2 class="works-item__title">
                {{ $t('WorktitleOne') }}
              </h2>
              <ul class="works-item__list">
                <li class="works-item__list-item">
                  Backend
                </li>
                <li class="works-item__list-item">
                  Frontend
                </li>
                <li class="works-item__list-item">
                  UX
                </li>
              </ul>
              <button class="works-item__button button">
                {{ $t('WorkBtn') }}
              </button>
            </div>
          </article>
          <article class="works-item">
            <img class="works-item__img" src="~/static/images/web-development.png" alt="">
            <div class="works-item__text">
              <h2 class="works-item__title">
                {{ $t('WorktitleTwo') }}
              </h2>
              <ul class="works-item__list">
                <li class="works-item__list-item">
                  Backend
                </li>
                <li class="works-item__list-item">
                  Frontend
                </li>
                <li class="works-item__list-item">
                  UX
                </li>
                <li class="works-item__list-item">
                  UI
                </li>
              </ul>
              <button class="works-item__button button">
                {{ $t('WorkBtn') }}
              </button>
            </div>
          </article>
          <article class="works-item">
            <img class="works-item__img" src="~/static/images/mobile-development.png" alt="">
            <div class="works-item__text">
              <h2 class="works-item__title">
                {{ $t('WorktitleThree') }}
              </h2>
              <ul class="works-item__list">
                <li class="works-item__list-item">
                  UX
                </li>
                <li class="works-item__list-item">
                  UI
                </li>
                <li class="works-item__list-item">
                  Frontend
                </li>
              </ul>
              <button class="works-item__button button">
                {{ $t('WorkBtn') }}
              </button>
            </div>
          </article>
        </section>
      </div>
      <ContactText />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  .works {
    padding-top: 70px;
   &__inner{
     padding-bottom: 20px;
     display: block
   }

    &__title {
      font-weight: 500;
      font-size: 36px;
      line-height: 120%;
      color: #7873AA;
      margin-top: 30px;
    }

    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &+&{
        margin-top: 40px;
      }

      &__img {
        margin-left: -60px;
      }

      &__text {
        border: 1px solid #AFABD4;
        border-radius: 8px;
        max-width: 410px;
        padding: 40px 30px 40px 40px;
        min-height: 500px;
      }
      &__title{
        font-weight: 500;
        font-size: 24px;
        line-height: 140%;
        color: #1F1235;
        margin-bottom: 30px;
      }
      &__list{
        margin-bottom: 50px;
        &-item{
          color: #1B1425;
          font-size: 18px;
          line-height: 140%;
          position: relative;
          padding-left: 35px;
          &:before{
            content: '';
            position: absolute;
            background: #AFABD4;
            width: 20px;
            height: 2px;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          &+&{
            margin-top: 11px;
          }
        }
      }

    }
  }

  @media (max-width: 1150px){

    .works-item__img{
      margin-left: 0;
      width: 100%;
      max-width: 50%;
    }
    .works-item{
      flex-direction: column;
      &__img{
        max-width: none;
      }
    }
  }

  @media (max-width: 600px){
    .works{
      padding-top: 30px;
    }
  }

</style>
