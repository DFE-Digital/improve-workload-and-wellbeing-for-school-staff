import {
  getAnalyticsCookie,
  setAnalyticsCookie,
} from "./utils/anaytics_cookie_helper.js";

const ACCEPT_VALUE = "yes";
const REJECT_VALUE = "no";

class CookieBanner {
  static init() {
    return new CookieBanner();
  }

  constructor() {
    this.$banner = document.querySelector('[data-module="cookie-banner"]');
    if (!this.$banner) return;

    if (this.consentRequired()) {
      this.showBanner();
    }

    this.$acceptButton = this.$banner.querySelector(
      `[value="${ACCEPT_VALUE}"]`
    );
    this.$rejectButton = this.$banner.querySelector(
      `[value="${REJECT_VALUE}"]`
    );
    this.$afterBanner = document.querySelector(
      '[data-module="after-consent-cookie-banner"]'
    );
    this.$hideButton = this.$afterBanner.querySelector("button");

    this.bindEvents();
  }

  bindEvents() {
    this.$acceptButton.addEventListener("click", () => this.accept());
    this.$rejectButton.addEventListener("click", () => this.reject());
    this.$hideButton.addEventListener("click", () => this.hideAfterBanner());
  }

  consentRequired() {
    return getAnalyticsCookie() === null;
  }

  consentGiven() {
    return getAnalyticsCookie() === ACCEPT_VALUE;
  }

  saveAnswer(answer) {
    setAnalyticsCookie(answer);
    this.hideBanner();
    this.$afterBanner.setAttribute("consented", answer);
    this.showAfterBanner();
  }

  accept() {
    this.saveAnswer(ACCEPT_VALUE);
    startGoogleAnalytics();
  }

  reject() {
    this.saveAnswer(REJECT_VALUE);
  }

  showBanner() {
    this.$banner.hidden = false;
  }

  hideBanner() {
    this.$banner.hidden = true;
  }

  showAfterBanner() {
    this.$afterBanner.hidden = false;
  }

  hideAfterBanner() {
    this.$afterBanner.hidden = true;
  }
}

CookieBanner.init();
