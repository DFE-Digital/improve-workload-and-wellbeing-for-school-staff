const COOKIE_NAME = "_consented_to_analytics_cookies";
const COOKIE_EXPIRY_DAYS = "365";

function setAnalyticsCookie(answer) {
  return setCookie(COOKIE_NAME, answer, { days: COOKIE_EXPIRY_DAYS });
}

function getAnalyticsCookie() {
  return getCookie(COOKIE_NAME);
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0, len = cookies.length; i < len; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
}

function setCookie(name, value, options) {
  if (typeof options === "undefined") {
    options = {};
  }
  let cookieString = name + "=" + value + "; path=/";
  if (options.days) {
    const date = new Date();
    date.setTime(date.getTime() + options.days * 24 * 60 * 60 * 1000);
    cookieString = cookieString + "; expires=" + date.toGMTString();
  }
  if (document.location.protocol === "https:") {
    cookieString = cookieString + "; Secure";
  }
  document.cookie = cookieString;
}

export { getAnalyticsCookie, setAnalyticsCookie };
