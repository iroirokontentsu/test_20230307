window.onload = function() {
  // ダウンロードボタンを押した際のイベントを登録
  $btn.onclick = () => {
    // blob オブジェクトを生成
    var content = $input.value;
    var blob = new Blob([content], { type: 'text/plain' });
    
    // download の href に object url を設定
    $btn.href = window.URL.createObjectURL(blob);
  };
};