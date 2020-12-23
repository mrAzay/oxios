<template>
  <section class="contact">
    <div class="container">
      <div class="contact__inner">
        <div class="contact__wrapper-form">
          <h2 class="contact__title">
            Tell us about your project
          </h2>
          <div class="contact__form">
            <input type="text" class="contact__form-input" placeholder="*Your Name">
            <input type="email" class="contact__form-input" placeholder="*E-mail">
            <input type="tel" class="contact__form-input" placeholder="*Phone">
            <input type="text" class="contact__form-input" placeholder="Project details">
            <label class="contact__form-input contact__form-input-file-wrapper">
              <span class="contact__form-input-file-text">
                {{ fileName === '' ? 'Attach file' : fileName }}
              </span>
              <input id="fileId" class="contact__form-input-file" type="file" name="attachment[]" @change="onFileChange">
              <svg
                class="contact__form-input-img"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 9.43839L9.96279 17.4644C8.97817 18.4476 7.64274 19 6.25028 19C4.85782 19 3.52239 18.4476 2.53777 17.4644C1.55315 16.4811 1 15.1476 1 13.7571C1 12.3665 1.55315 11.033 2.53777 10.0497L10.575 2.02375C11.2314 1.36825 12.1217 1 13.05 1C13.9783 1 14.8686 1.36825 15.525 2.02375C16.1814 2.67924 16.5502 3.56829 16.5502 4.4953C16.5502 5.42231 16.1814 6.31135 15.525 6.96685L7.47904 14.9928C7.15083 15.3206 6.70569 15.5047 6.24154 15.5047C5.77738 15.5047 5.33224 15.3206 5.00403 14.9928C4.67583 14.6651 4.49144 14.2206 4.49144 13.7571C4.49144 13.2935 4.67583 12.849 5.00403 12.5213L12.429 5.11537" stroke="#9A98AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </label>
            <p class="contact__form-text">
              max filesize 50Mb
            </p>
            <button class="button-link contact__form-button">
              Send
            </button>
            <p class="contact__form-policy">
              By clicking on the button you agree with <a class="contact__form-policy-link" href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
        <div class="contact__content">
          <h3 class="contact__content-title">
            Contacts
          </h3>
          <a href="mailto:info@oxios.com" class="contact__content-link contact__content-email">info@oxios.com</a>
          <a href="tel:+380991234567" class="contact__content-link contact__content-tel">+380 (99) 123 45 67</a>
          <h3 class="contact__content-text-title">
            Startup Investment Checklist
          </h3>
          <p class="contact__content-text">
            Product pitch or product spec is not enough. You must prove that the value you bring is worth funding. And that’s how.
          </p>
          <button class="contact__content-button button">
            Get a Checklist
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
  .contact
    padding-top: 90px
    padding-bottom: 145px
    &__inner
      display: flex
      justify-content: space-between
    &__title
      color: #7873AA
      margin-bottom: 60px
    &__form
      display: flex
      flex-direction: column
      &-input
        padding: 14px 20px
        border: 1px solid #AFABD4
        box-sizing: border-box
        border-radius: 4px
        font-size: 18px
        max-width: 470px
        width: 100%
        &::placeholder
          color: #9A98AE
        &+&
          margin-top: 30px
        &-file-wrapper
          cursor: pointer
          display: flex
          align-items: center
          justify-content: space-between
        &-file
          visibility: hidden
          opacity: 0
          width: 0
          height: 0
          position: absolute
          left: 0
          &-text
            color: #9A98AE
            max-width: 90%
            word-break: break-all
      &-text
        margin-top: 10px
        margin-bottom: 35px
        font-size: 14px
        color: #9A98AE
        text-align: right
      &-button
        width: 100%
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
        margin-bottom: 15px
      &-policy
        font-size: 14px
        color: #9A98AE
        text-align: center
        &-link
          text-decoration-line: underline
          color: #FF6E6C
    &__content
      &-title,
      &-text-title
        font-weight: 500
        font-size: 24px
        line-height: 140%
        color: #1F1235
      &-title
        margin-bottom: 60px
      &-text-title
        margin-top: 141px
        margin-bottom: 30px
      &-link
        line-height: 140%
        color: #1B1425
        display: block
        &+&
          margin-top: 20px
      &-text
        max-width: 469px
        font-size: 18px
        line-height: 140%
        margin-bottom: 60px
    &__wrapper-form
      max-width: 470px
      width: 100%
@media (max-width: 1050px)
  .contact__inner
    flex-direction: column
    align-items: center
  .contact__form
    margin-bottom: 50px
  .contact
    margin-top: 0
  .contact__content-text-title
    margin-top: 40px
  .contact__content-title
    margin-bottom: 20px
    margin-top: 15px
@media (max-width: 1040px)
  .contact__content
    margin-left: 40px
  .contact
    padding-bottom: 50px

  @media (max-width: 840px)
  .contact
    padding-top: 0
  .contact__inner
    align-items: center
    flex-direction: column
  .contact__content
    margin-left: 0
  .contact__form
    margin-bottom: 90px
  .contact__content-text-title
    margin-top: 60px

</style>

<script>

export default {

  data () {
    return {
      fileName: ''
    }
  },
  methods: {
    onFileChange (event) {
      const fileData = event.target.files[0]
      this.fileName = fileData.name
    }
  }
}
</script>
