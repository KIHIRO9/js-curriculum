let randoms = [];
let max = 0;
let sum = 0;
let ave = 0;

for (let i = 0; i < 30; i++) {
    randoms[i] = Math.round(Math.random() * 100);
    console.log(i + 1 + "番目の値：" + randoms[i]);
    if (max < randoms[i]) {
        max = randoms[i];
    }
    sum = sum + randoms[i];
}
ave = sum / randoms.length;

console.log("最大値：" + max);
console.log("合計値：" + sum);
console.log("平均値：" + ave);

