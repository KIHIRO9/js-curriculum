// 画面がロードされた時の処理をリスな登録。
window.addEventListener("DOMContentLoaded", function() {

    // 入力エリア要素を取得して、入力エリアにinputリスナ登録。
    document.getElementById("messageArea").addEventListener("input", function() {

        // 入力された文字数を取得。
        let msgLength = messageArea.value.length;
        // 文字数表示要素を取得。
        let showMessageLength = document.getElementById("showMessageLength");
        // 文字数を表示。
        showMessageLength.textContent = msgLength + "/70";
        // 文字数が70を超えたら背景を赤に。それ以外は元通りに。
        if (msgLength > 70) {
            messageArea.classList.add("alertBg");
        } else {
            messageArea.classList.remove("alertBg");
        }
    });
});
