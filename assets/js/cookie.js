$(function() {

  // 「Cookieを設定する」を押した時
  $('.set-cookie-btn').click(function() {
    var cookieName = $('.cookie-name').val();
        cookieValue = $('.cookie-value').val();

    if(cookieName !== "" && cookieValue !== "") {
      Cookies.set(cookieName, cookieValue);
      var mycookie = Cookies.get(cookieName);
      alert(`${cookieName}=${mycookie}; を設定しました。`);
      location.reload();
    } else if (cookieName == "" && cookieValue !== "") {
      $('.set-name.invalid-feedback').css('display', 'block');
    } else if (cookieName !== "" && cookieValue == "") {
      $('.set-value.invalid-feedback').css('display', 'block');
    } else {
      $('.set.invalid-feedback').css('display', 'block');
    }
  })

  // 「Cookieを削除する」を押した時
  $('.remove-cookie-btn').click(function() {

    var removeCookieName = $('.remove-cookie-name').val();
        cookieValue = decodeURIComponent( Cookies.get(removeCookieName) );

    if( removeCookieName !== "") {

      var msg = `${removeCookieName}=${cookieValue}; を削除してもよろしいですか？`;

      if( confirm( msg ) ) {
        Cookies.remove(removeCookieName);
        alert("削除しました");
        location.reload();
        // $('.remove-cookie-name').val("");
      } else {
        return "";
      }

      $('.remove.invalid-feedback').css('display', 'none');
    } else {
      $('.remove.invalid-feedback').css('display', 'block');
    }

  })

  // 「全てのCookieを表示する」を押した時
  $('.all-cookie-btn').click(function() {
    var allCookie = decodeURIComponent( JSON.stringify( Cookies.get() ) );
    if(Object.keys(Cookies.get()).length == 0) {
      $('.all-cookie-output').text("Cookieはありません");
    } else {
      $('.all-cookie-output').text(allCookie);
    }
  })

})
