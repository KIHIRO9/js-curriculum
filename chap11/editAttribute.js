// [上の文字を赤に]ボタンクリック時の処理。
function onP2RedButtonClick() {
    // idがshowTextのp要素を取得。
    let showText = document.getElementById("showText");
    // 取得したp要素のclass属性にredTextクラスを設定。
    showText.setAttribute("class", "redText");
}

function onP2DefaultButtonClick() {
    // idがshowTextのp要素を取得。
    showText = document.getElementById("showText");
    // 取得したp要素のclass属性を削除。
    showText.removeAttribute("class");
}
