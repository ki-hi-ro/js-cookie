// 入力した時にエラーメッセージを消す処理
function keyup(input, error) {
  $(input).keyup(function(){
    $(`${error}.invalid-feedback`).css('display', 'none');
  })
}
keyup('.cookie-name', '.set-name');
keyup('.cookie-value', '.set-value');
keyup('.remove-cookie-name', '.remove');

// 入力値が空の時に、エラーメッセージを表示する処理
function blur(input, error) {
  $(input).blur(function(){
    if($(this).val() == "") {
      $(`${error}.invalid-feedback`).css('display', 'block');
    }
  })
}
blur('.cookie-name', '.set-name');
blur('.cookie-value', '.set-value');
blur('.remove-cookie-name', '.remove');