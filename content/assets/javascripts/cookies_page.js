import {
  getAnalyticsCookie,
  setAnalyticsCookie,
} from "./utils/anaytics_cookie_helper.js";

class CookiesPage {
  static init() {
    return new CookiesPage();
  }

  constructor() {
    const $page = document.querySelector('[data-module="js-cookies-page"]');
    if (!($page instanceof HTMLElement)) {
      return this;
    }

    this.$page = $page;
    this.$form = this.$page.querySelector(".js-cookies-page-form");
    this.$formButton = this.$form.querySelector(".js-cookies-page-form-button");
    this.$formRadios = this.$form.querySelector(".js-cookies-page-form-radios");
    const cookieConsent = getAnalyticsCookie();

    this.showUserAnswer(this.$formRadios, cookieConsent);
    this.$form.addEventListener("submit", (event) => this.saveAnswer(event));
  }

  saveAnswer(event) {
    event.preventDefault();

    const $selectedItem = this.$formRadios.querySelector(
      `input[name="analytics-cookies"]:checked`
    );

    setAnalyticsCookie($selectedItem.value);
  }

  showUserAnswer($formRadios, answer) {
    const radioValue = answer ? answer : "no";
    const $radio = $formRadios.querySelector(
      `input[name="analytics-cookies"][value=${radioValue}]`
    );

    $radio.checked = true;
  }
}

CookiesPage.init();
