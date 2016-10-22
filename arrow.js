var inputs = process.argv.slice(2);
var result = inputs.map(/* ここにアロー関数を使って一文字だけ取得しましょう */)
.reduce(/* ここにアロー関数を使って文字列結合しましょう */);
console.log(result);
