// 應用程序的 URL Scheme
const APP_SCHEME = "ihappytrade://";
// App Store 的 URL
const APP_STORE_URL = "https://apps.apple.com/tw/app/%E7%BE%A4%E7%9B%8A%E8%A1%8C%E5%8B%95%E8%B4%8F%E5%AE%B6/id1469014227";

function handleUniversalLink() {
    const currentUrl = window.location.href;
    const appUrl = currentUrl.replace(window.location.protocol + "//", APP_SCHEME);

    const start = new Date().getTime();
    window.location.href = appUrl;

    setTimeout(function() {
        if (new Date().getTime() - start < 2000) {
            showConfirmDialog();
        }
    }, 1500);
}

function showConfirmDialog() {
    if (confirm("是否跳轉到 App Store 下載？")) {
        redirectToAppStore();
    } else {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
}

function redirectToAppStore() {
    window.location.href = APP_STORE_URL;
}

window.onload = handleUniversalLink;