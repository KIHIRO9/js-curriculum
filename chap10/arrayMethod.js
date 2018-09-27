let nameList = ["松田", "田中", "中山", "山本", "本田"];

// 配列からCSV文字列を生成するメソッド
let nameListStr = nameList.toString();

console.log("配列nameList：" + nameList);
console.log("文字列nameListStr：" + nameListStr);

// 指定要素のインデックスが分かるメソッド
let nameIdx = nameList.indexOf("中山");
console.log("中山さんのインデックス：" + nameIdx);

nameIdx = nameList.indexOf("本田");
console.log("本田さんのインデックス：" + nameIdx);

// 指定要素が存在するかが分かるメソッド
let includeResult = nameList.includes("山本");
console.log("山本さんは含まれているか：" + includeResult);

if (nameList.includes("松田")) {
    console.log("松田さんは存在します。");
} else {
    console.log("松田さんは存在しません。");
}
