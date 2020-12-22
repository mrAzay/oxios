<template>
  <div>
    <Header />
    <main>
      <section class="blog">
        <div class="container">
          <div class="blog__inner">
            <div class="blog__preview">
              <img src="~/static/images/blog1-big.jpg" alt="" class="blog__img">
              <h1 class="blog__title">
                Checklist On App Analytics To Get Maximum Out Of Your Project
              </h1>
            </div>
            <ul class="blog__socials">
              <li class="blog__social-title">
                Share
              </li>
              <li class="blog__social">
                <a href="#" class="blog__link">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0ZM12.1519 10.5925L12.1256 10.16C12.0469 9.03893 12.7377 8.01498 13.8306 7.61776C14.2328 7.47653 14.9148 7.45887 15.3607 7.58245C15.5356 7.63542 15.8678 7.81196 16.1039 7.97085L16.5323 8.26214L17.0045 8.11208C17.2668 8.03264 17.6165 7.90023 17.7739 7.81196C17.9226 7.73251 18.0537 7.68838 18.0537 7.71486C18.0537 7.86492 17.7302 8.37689 17.4592 8.65936C17.0919 9.05658 17.1969 9.09189 17.94 8.82708C18.386 8.67702 18.3947 8.67702 18.3073 8.84473C18.2548 8.933 17.9838 9.24195 17.6952 9.52442C17.2056 10.0099 17.1794 10.0629 17.1794 10.4689C17.1794 11.0956 16.8821 12.4021 16.5848 13.117C16.034 14.4588 14.8536 15.8446 13.6732 16.542C12.012 17.5218 9.79986 17.7689 7.93749 17.1952C7.31671 17.001 6.25 16.5067 6.25 16.4184C6.25 16.3919 6.57351 16.3566 6.96697 16.3478C7.78885 16.3301 8.61074 16.1006 9.31022 15.6946L9.78237 15.4121L9.24027 15.2267C8.47085 14.9619 7.78011 14.3528 7.60524 13.7791C7.55278 13.5937 7.57027 13.5849 8.0599 13.5849L8.56703 13.5761L8.13859 13.373C7.63147 13.117 7.16807 12.6845 6.94074 12.2432C6.77461 11.9254 6.56477 11.1221 6.62597 11.0603C6.64346 11.0339 6.82707 11.0868 7.03691 11.1574C7.64021 11.3781 7.71891 11.3251 7.36917 10.9544C6.71341 10.2835 6.5123 9.28609 6.82707 8.34159L6.97571 7.91788L7.55278 8.49165C8.73315 9.648 10.1234 10.3365 11.7147 10.5395L12.1519 10.5925Z" fill="#7873AA" />
                  </svg>
                  <span class="blog__link-text">Twitter</span>
                </a>
              </li>
              <li class="blog__social">
                <a href="#" class="blog__link">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0ZM13.8029 13.0491V19.8497H10.9891V13.0493H9.58332V10.7058H10.9891V9.29873C10.9891 7.38687 11.7829 6.25 14.0381 6.25H15.9157V8.59381H14.7421C13.8641 8.59381 13.8061 8.92132 13.8061 9.53256L13.8029 10.7055H15.9289L15.6802 13.0491H13.8029Z" fill="#7873AA" />
                  </svg>
                  <span class="blog__link-text">Facebook</span>
                </a>
              </li>
              <li class="blog__social">
                <a href="#" class="blog__link">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0ZM6.00085 10.353H8.83362V18.8643H6.00085V10.353ZM9.02021 7.72016C9.00183 6.88563 8.40505 6.25 7.43598 6.25C6.4669 6.25 5.83336 6.88563 5.83336 7.72016C5.83336 8.5374 6.44818 9.19133 7.39921 9.19133H7.41731C8.40505 9.19133 9.02021 8.5374 9.02021 7.72016ZM15.7881 10.1532C17.6522 10.1532 19.0497 11.3699 19.0497 13.9842L19.0496 18.8643H16.2169V14.3108C16.2169 13.167 15.807 12.3866 14.7815 12.3866C13.9989 12.3866 13.5328 12.9127 13.328 13.4209C13.2531 13.603 13.2347 13.8568 13.2347 14.1112V18.8646H10.4016C10.4016 18.8646 10.439 11.1519 10.4016 10.3533H13.2347V11.5588C13.6107 10.9793 14.2841 10.1532 15.7881 10.1532Z" fill="#7873AA" />
                  </svg>

                  <span class="blog__link-text">Linkedin</span>
                </a>
              </li>
            </ul>
            <div class="discription">
              <p class="discription__text">
                Intense intrusion of smartphones onto digital market resulted in quick brunch development. Things that ten years ago were inconceivable, now are commonly received.
              </p>
              <p class="discription__text">
                Since its appearance mobile segment grew and expanded turning into one of the most profitable modern market spheres. Last year, it gained 461.7 billion dollars in revenue. This amount is forecasted to grow up to more than 935 billion dollars by 2023.
              </p>
              <p class="discription__text">
                Mobile applications penetrate into our daily life making routines less tedious. According to statistics, Google Play and Apple App Store offer about 2 million various apps that are called to make customers’ life better. We have already discussed important criteria to rely on while choosing application type and singled out trends for mobile development, spotlighting most efficient mobile app KPIs.
              </p>
              <p class="discription__text">
                Still, just having an application is not enough for successful business running. To get maximum out of project you have to know how efficient it is. Thus, profound app analytics understanding stands for one more step towards your success.
              </p>
              <p class="discription__text">
                In this post, OpenGeekLab will tell about key mobile app analytics metrics and disclose secrets on how different mobile app metrics tools actually work. Keep on reading!
              </p>
              <div class="discription-analitic">
                <h2 class="discription-analitic__title">
                  App Analytics Metrics You Should Consider to Boost Your Product Success
                </h2>
                <ul class="discription-analitic__list">
                  <li class="discription-analitic__item">
                    <h3 class="discription-analitic__item-title">
                      1. Downloads
                    </h3>
                    <p class="discription-analitic__item-text">
                      Installs number stands among basic metrics to trace product’s success. It shows how many users actually downloaded the app from mobile store. These numbers are called to represent most general picture concerning analytics without further details. Downloads also influence app’s position in rating or search results.
                    </p>
                    <p class="discription-analitic__item-text">
                      However, downloads number is not synonymous to app active users. This metrics does not reflect whether the customer uses program or not. It might be installed due to peculiar promotion company and deleted right after downloading, or simply did not reach user satisfaction. On the basis of download analytics further metrics are counted.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.blog
  padding-top: 120px
  padding-bottom: 200px
  &__inner
    display: flex
    flex-wrap: wrap
  &__preview
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 60px
    width: 100%
  &__title
    max-width: 500px
    font-weight: 500
    font-size: 36px
    line-height: 120%
    color: #7873AA
  &__social
    margin-top: 40px
    &-title
      font-weight: 500
      font-size: 24px
      line-height: 140%
      color: #000
      margin-bottom: 40px
  &__link
    display: flex
    align-items: center
    font-size: 18px
    line-height: 140%
    color: #7873AA
    svg
      margin-right: 15px
.discription
  max-width: 770px
  margin-left: 72px
  &__text
    font-size: 18px
    line-height: 140%
    color: #1B1425
    &+&
      margin-top: 10px
  &-analitic
    padding-top: 120px
    &__title
      padding-bottom: 60px
      font-weight: 500
      font-size: 36px
      line-height: 120%
      color: #1F1235
    &__item
      &-title
        margin-bottom: 40px
        font-weight: 500
        font-size: 24px
        line-height: 140%
        color: #1F1235
      &-text
        font-size: 18px
        line-height: 140%
        color: #1B1425
        &+&
          margin-top: 15px
@media (max-width: 1170px)
.blog__preview
  flex-direction: column-reverse
.blog__title
  max-width: 700px
  margin-bottom: 35px
  align-self: flex-start
.discription
  flex: 1 1 0
.blog__img
  width: 100%
  object-fit: cover
@media (max-width: 900px)
.blog
  padding-top: 50px
  padding-bottom: 50px
@media (max-width: 650px)
.blog__socials
  width: 100%
  padding-bottom: 20px
.blog__social
  display: inline-block
  margin-top: 20px
  &+&
    margin-left: 20px
.blog__social-title
  margin-bottom: 0
.discription
  margin-left: 0
.discription-analitic
  padding-top: 60px
@media (max-width: 450px)
.blog__link-text
  display: none
</style>
