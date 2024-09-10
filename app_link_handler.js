const APP_SCHEME = "ihappytrade://order?";
const APP_STORE_URL = "https://apps.apple.com/tw/app/%E7%BE%A4%E7%9B%8A%E8%A1%8C%E5%8B%95%E8%B4%8F%E5%AE%B6/id1469014227";

function handleUniversalLink() {
    const currentUrl = decodeURIComponent(window.location.href);

    // 檢查是否為手機瀏覽器
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // 獲取網址中的參數並附加到 APP Scheme URL
        const queryParams = currentUrl.split('?')[1]; // 提取 ? 之後的參數部分
        const appUrl = `${APP_SCHEME}${queryParams}`;

        const start = new Date().getTime();
        window.location.href = appUrl;

        // 在1.5秒後檢查是否成功跳轉，如果沒有，顯示提示
        setTimeout(function() {
            if (new Date().getTime() - start < 2000) {
                showConfirmDialog();  // 跳轉失敗，顯示提示
            }
        }, 1500);
    } else {
        // 如果不是手機瀏覽器，顯示網頁內容
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
}

function showConfirmDialog() {
    // 提示用戶是否跳轉到 App Store
    if (confirm("是否跳轉到 App Store 下載 群益行動贏家？")) {
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
