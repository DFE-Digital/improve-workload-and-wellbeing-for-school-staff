import { getCookie, setCookie } from "./utils/cookie_helper.js";

const COOKIE_NAME = "_consented_to_analytics_cookies";
const COOKIE_EXPIRY_DAYS = "365";

class CookieBanner {
  static init() {
    return new CookieBanner();
  }

  constructor() {
    this.$banner = document.querySelector('[data-module="cookie-banner"]');
    if (!this.$banner) return;

    if (this.consentAnswerRequired()) {
      this.showBanner();
    }

    this.$acceptButton = this.$banner.querySelector('[value="yes"]');
    this.$rejectButton = this.$banner.querySelector('[value="no"]');
    this.$afterConsentBanner = document.querySelector(
      '[data-module="after-consent-cookie-banner"]'
    );
    this.$hideButton = this.$afterConsentBanner.querySelector("button");

    this.bindEvents();
  }

  bindEvents() {
    this.$acceptButton.addEventListener("click", () => this.accept());
    this.$rejectButton.addEventListener("click", () => this.reject());
    this.$hideButton.addEventListener("click", () =>
      this.hideAfterConsentBanner()
    );
  }

  cookiesAlreadySet() {
    return getCookie(COOKIE_NAME) === null;
  }

  consentAnswerRequired() {
    return getCookie(COOKIE_NAME) === null;
  }

  saveAnswer(answer) {
    setCookie(COOKIE_NAME, answer, { days: COOKIE_EXPIRY_DAYS });
    this.hideBanner();
    this.$afterConsentBanner.setAttribute("consented", answer);
    this.showAfterConsentBanner();
  }

  accept() {
    this.saveAnswer(this.$acceptButton.value);
  }

  reject() {
    this.saveAnswer(this.$rejectButton.value);
  }

  showBanner() {
    this.$banner.hidden = false;
  }

  hideBanner() {
    this.$banner.hidden = true;
  }

  showAfterConsentBanner() {
    this.$afterConsentBanner.hidden = false;
  }

  hideAfterConsentBanner() {
    this.$afterConsentBanner.hidden = true;
  }
}

CookieBanner.init();
