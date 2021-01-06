<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="links">
          <div class="footer__links-title footer__title">
            {{ $t('FooterLinks') }}
          </div>
          <div class="footer__links">
            <nuxt-link :to="localePath('/our__works')" class="footer__link">
              {{ $t('FooterLinkWorks') }}
            </nuxt-link>
            <nuxt-link :to="localePath('/blog')" class="footer__link">
              {{ $t('FooterLinkBlog') }}
            </nuxt-link>
            <nuxt-link :to="localePath('/technologies')" class="footer__link">
              {{ $t('FooterLinkTechnologies') }}
            </nuxt-link>
            <nuxt-link :to="localePath('/contacts')" class="footer__link">
              {{ $t('FooterLinkContact') }}
            </nuxt-link>
            <nuxt-link :to="localePath('/we')" class="footer__link">
              {{ $t('FooterLinkAbout') }}
            </nuxt-link>
            <nuxt-link :to="localePath('/#')" class="footer__link">
              {{ $t('FooterLinkGet') }}
            </nuxt-link>
          </div>
        </div>
        <div class="follow">
          <div class="footer__follow-title footer__title">
            {{ $t('FooterFollows') }}
          </div>
          <div class="footer__follow-links">
            <a class="footer__follow-link" href="#">
              <svg
                class="footer__follow-link-img"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0ZM12.1519 10.5925L12.1256 10.16C12.0469 9.03893 12.7377 8.01498 13.8306 7.61776C14.2328 7.47653 14.9148 7.45887 15.3607 7.58245C15.5356 7.63542 15.8678 7.81196 16.1039 7.97085L16.5323 8.26214L17.0045 8.11208C17.2668 8.03264 17.6165 7.90023 17.7739 7.81196C17.9226 7.73251 18.0537 7.68838 18.0537 7.71486C18.0537 7.86492 17.7302 8.37689 17.4592 8.65936C17.0919 9.05658 17.1969 9.09189 17.94 8.82708C18.386 8.67702 18.3947 8.67702 18.3073 8.84473C18.2548 8.933 17.9838 9.24195 17.6952 9.52442C17.2056 10.0099 17.1794 10.0629 17.1794 10.4689C17.1794 11.0956 16.8821 12.4021 16.5848 13.117C16.034 14.4588 14.8536 15.8446 13.6732 16.542C12.012 17.5218 9.79986 17.7689 7.93749 17.1952C7.31671 17.001 6.25 16.5067 6.25 16.4184C6.25 16.3919 6.57351 16.3566 6.96697 16.3478C7.78885 16.3301 8.61074 16.1006 9.31022 15.6946L9.78237 15.4121L9.24027 15.2267C8.47085 14.9619 7.78011 14.3528 7.60524 13.7791C7.55278 13.5937 7.57027 13.5849 8.0599 13.5849L8.56703 13.5761L8.13859 13.373C7.63147 13.117 7.16807 12.6845 6.94074 12.2432C6.77461 11.9254 6.56477 11.1221 6.62597 11.0603C6.64346 11.0339 6.82707 11.0868 7.03691 11.1574C7.64021 11.3781 7.71891 11.3251 7.36917 10.9544C6.71341 10.2835 6.5123 9.28609 6.82707 8.34159L6.97571 7.91788L7.55278 8.49165C8.73315 9.648 10.1234 10.3365 11.7147 10.5395L12.1519 10.5925Z" fill="white" />
              </svg>

              <span class="footer__follow-link-text">Twitter</span>
            </a>
            <a class="footer__follow-link" href="#">
              <svg
                class="footer__follow-link-img"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0ZM9.75173 5.87352C10.4628 5.84116 10.6901 5.83324 12.5006 5.83324H12.4986C14.3097 5.83324 14.5361 5.84116 15.2472 5.87352C15.9569 5.90602 16.4417 6.01838 16.8667 6.18324C17.3056 6.35338 17.6764 6.58116 18.0472 6.952C18.4181 7.32256 18.6459 7.69451 18.8167 8.13299C18.9806 8.55688 19.0931 9.04133 19.1264 9.75106C19.1584 10.4622 19.1667 10.6894 19.1667 12.5C19.1667 14.3106 19.1584 14.5372 19.1264 15.2483C19.0931 15.9578 18.9806 16.4424 18.8167 16.8664C18.6459 17.3047 18.4181 17.6767 18.0472 18.0473C17.6768 18.4181 17.3054 18.6464 16.8671 18.8167C16.4429 18.9816 15.9579 19.0939 15.2482 19.1264C14.5371 19.1588 14.3105 19.1667 12.4998 19.1667C10.6894 19.1667 10.4623 19.1588 9.75118 19.1264C9.04158 19.0939 8.557 18.9816 8.13283 18.8167C7.69463 18.6464 7.32268 18.4181 6.95226 18.0473C6.58156 17.6767 6.35378 17.3047 6.18336 16.8663C6.01864 16.4424 5.90627 15.9579 5.87364 15.2482C5.84141 14.5371 5.83336 14.3106 5.83336 12.5C5.83336 10.6894 5.84169 10.462 5.8735 9.75092C5.90544 9.04147 6.01794 8.55688 6.18322 8.13285C6.35406 7.69451 6.58184 7.32256 6.95267 6.952C7.32323 6.5813 7.69518 6.35352 8.13366 6.18324C8.55755 6.01838 9.042 5.90602 9.75173 5.87352Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9026 7.03487C12.0187 7.03469 12.1436 7.03474 12.2784 7.0348L12.5006 7.03487C14.2806 7.03487 14.4916 7.04126 15.1945 7.0732C15.8445 7.10293 16.1973 7.21154 16.4323 7.30279C16.7434 7.42362 16.9652 7.56807 17.1984 7.80141C17.4318 8.03474 17.5762 8.25697 17.6973 8.56808C17.7886 8.8028 17.8973 9.15559 17.9269 9.80559C17.9589 10.5084 17.9658 10.7195 17.9658 12.4987C17.9658 14.2779 17.9589 14.489 17.9269 15.1918C17.8972 15.8418 17.7886 16.1945 17.6973 16.4293C17.5765 16.7404 17.4318 16.9619 17.1984 17.1951C16.9651 17.4284 16.7436 17.5729 16.4323 17.6937C16.1976 17.7854 15.8445 17.8937 15.1945 17.9235C14.4917 17.9554 14.2806 17.9623 12.5006 17.9623C10.7205 17.9623 10.5095 17.9554 9.8067 17.9235C9.15669 17.8935 8.80391 17.7848 8.56877 17.6936C8.25765 17.5728 8.03543 17.4283 7.80209 17.195C7.56876 16.9616 7.42431 16.74 7.3032 16.4287C7.21195 16.194 7.1032 15.8412 7.07361 15.1912C7.04167 14.4884 7.03528 14.2773 7.03528 12.497C7.03528 10.7167 7.04167 10.5067 7.07361 9.80393C7.10333 9.15392 7.21195 8.80114 7.3032 8.56614C7.42403 8.25502 7.56876 8.0328 7.80209 7.79946C8.03543 7.56613 8.25765 7.42168 8.56877 7.30057C8.80377 7.2089 9.15669 7.10056 9.8067 7.0707C10.4217 7.04293 10.66 7.03459 11.9026 7.0332V7.03487ZM16.0593 8.14187C15.6176 8.14187 15.2592 8.49979 15.2592 8.9416C15.2592 9.38327 15.6176 9.74161 16.0593 9.74161C16.5009 9.74161 16.8593 9.38327 16.8593 8.9416C16.8593 8.49993 16.5009 8.14159 16.0593 8.14159V8.14187ZM9.07697 12.5004C9.07697 10.6097 10.6098 9.07682 12.5005 9.07674C14.3912 9.07674 15.9237 10.6097 15.9237 12.5004C15.9237 14.3911 14.3913 15.9233 12.5006 15.9233C10.6099 15.9233 9.07697 14.3911 9.07697 12.5004Z" fill="white" />
                <path d="M12.5006 10.2783C13.7278 10.2783 14.7228 11.2732 14.7228 12.5006C14.7228 13.7278 13.7278 14.7228 12.5006 14.7228C11.2732 14.7228 10.2783 13.7278 10.2783 12.5006C10.2783 11.2732 11.2732 10.2783 12.5006 10.2783Z" fill="white" />
              </svg>

              <span class="footer__follow-link-text">Instagram</span>
            </a>
            <a class="footer__follow-link" href="#">
              <svg
                class="footer__follow-link-img"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0ZM13.8029 13.0491V19.8497H10.9891V13.0493H9.58332V10.7058H10.9891V9.29873C10.9891 7.38687 11.7829 6.25 14.0381 6.25H15.9157V8.59381H14.7421C13.8641 8.59381 13.8061 8.92132 13.8061 9.53256L13.8029 10.7055H15.9289L15.6802 13.0491H13.8029Z" fill="white" />
              </svg>

              <span class="footer__follow-link-text">Facebook</span>
            </a>
            <a class="footer__follow-link" href="#">
              <svg
                class="footer__follow-link-img"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0ZM6.00085 10.353H8.83362V18.8643H6.00085V10.353ZM9.02021 7.72016C9.00183 6.88563 8.40505 6.25 7.43598 6.25C6.4669 6.25 5.83336 6.88563 5.83336 7.72016C5.83336 8.5374 6.44818 9.19133 7.39921 9.19133H7.41731C8.40505 9.19133 9.02021 8.5374 9.02021 7.72016ZM15.7881 10.1532C17.6522 10.1532 19.0497 11.3699 19.0497 13.9842L19.0496 18.8643H16.2169V14.3108C16.2169 13.167 15.807 12.3866 14.7815 12.3866C13.9989 12.3866 13.5328 12.9127 13.328 13.4209C13.2531 13.603 13.2347 13.8568 13.2347 14.1112V18.8646H10.4016C10.4016 18.8646 10.439 11.1519 10.4016 10.3533H13.2347V11.5588C13.6107 10.9793 14.2841 10.1532 15.7881 10.1532Z" fill="white" />
              </svg>

              <span class="footer__follow-link-text">Linkedin</span>
            </a>
          </div>
        </div>
        <div class="logo">
          <img src="../static/images/footer-logo.png" alt="" class="footer__logo-img">
        </div>
        <div class="copy">
          <div class="footer__logo-copyright">
            {{ $t('FooterCopy') }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>

  .links
    grid-area: links

  .follow
    grid-area: follow

  .logo
    grid-area: logo
    display: flex
    align-items: center

  .copy
    grid-area: copy

  .footer
    padding-top: 60px
    padding-bottom: 60px
    color: #fff
    background: #7873AA
    &__inner
      display: grid
      grid-template-columns: 1.5fr 2fr 1fr
      grid-template-rows: 1fr 1fr
      gap: 0px 0px
      grid-template-areas: "logo links follow" "logo links follow" "copy copy copy"
    &__logo-img
      width: 55%
    &__title
      margin-bottom: 60px
      font-weight: 500
      font-size: 24px
      line-height: 140%
    &__links
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      margin-bottom: -20px
      max-width: 450px
    &__link
      flex-basis: 50%
      margin-bottom: 20px
      font-size: 18px
      line-height: 140%
      color: #F4F3F8
    &__follow-links
      display: flex
      flex-direction: column
    &__follow-link
      font-size: 18px
      line-height: 140%
      color: #F4F3F8
      display: flex
      align-items: center
      &+&
        margin-top: 20px
      &-img
        margin-right: 15px
@media (max-width: 950px)
  .footer
    padding-bottom: 20px
  .footer__inner
    display: grid
    grid-template-columns: auto
    grid-template-rows: auto
    gap: 0px 0px
    grid-template-areas: "logo logo" "links follow" "copy copy"
  .follow
    justify-self: center
  .footer__logo-copyright
    text-align: center
    margin-top: 50px
  .logo
    justify-self: center
@media (max-width: 600px)
  .footer__inner
    display: grid
    grid-template-columns: 1fr
    gap: 0px 0px
    grid-template-areas: "logo" "links" "follow" "copy"
  .footer__links
    max-width: auto
  .links
    margin-bottom: 50px
  .logo,
  .follow
    justify-self: auto
  .footer__follow-links
    flex-direction: row
    flex-wrap: wrap
  .footer__follow-link
    flex-basis: 50%
    margin-bottom: 40px
  .footer__follow-link + .footer__follow-link
    margin-top: 0
  .footer__logo-copyright
    margin-top: 50px
  .footer__title
    margin-bottom: 50px
</style>
