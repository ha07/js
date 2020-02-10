//ハンバーガー//
$(function () {
  $(".menu-trigger").on("click", function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".Hambuger").addClass("active");
      $('.Hambuger__bk').addClass('active');//クラスを付与
      $('body,html').css({ "overflow": "hidden", "height": "100%" });
    } else {
      $('body,html').css({ "overflow": "visible", "height": "auto" });
      $(".Hambuger").removeClass("active");
      $(".Hambuger__bk").removeClass("active");//クラスを外す
    }
  });
  $(".Hambuger__bk").on("click", function () {
    $('body,html').css({ "overflow": "visible", "height": "auto" });
    $(".Hambuger__bk").removeClass("active");
    $(".Hambuger").removeClass("active");
    $(".menu-trigger").removeClass("active");
  });
});

//メガメニュー
$(function () {

  // ①マウスをボタンに乗せた際のイベントを設定
  $('#menu li').hover(function () {

    // ②乗せたボタンに連動したメガメニューをスライドで表示させる
    $(this).find('.menu_contents').stop().slideDown();

    // ③マウスをボタンから離した際のイベントを設定
  }, function () {

    // ④マウスを離したらメガメニューをスライドで非表示にする
    $(this).find('.menu_contents').stop().slideUp();

  });
});

//すらいだー//
$(function () {
  //（１）ページの概念・初期ページを設定
  var page = 0;

  //（２）イメージの数を最後のページ数として変数化
  var lastPage = parseInt($(".slide img").length - 1);

  //（３）最初に全部のイメージを一旦非表示にします
  $(".slide img").css("display", "none");

  //（４）初期ページを表示
  $(".slide img").eq(page).css("display", "block");

  //（５）ページ切換用、自作関数作成
  function changePage() {
    $(".slide img").fadeOut(1000);
    $(".slide img").eq(page).fadeIn(1000);
  };

  //（６）～秒間隔でイメージ切換の発火設定
  var Timer;
  function startTimer() {
    Timer = setInterval(function () {
      if (page === lastPage) {
        page = 0;
        changePage();
      } else {
        page++;
        changePage();
      };
    }, 5000);
  }
  //（７）～秒間隔でイメージ切換の停止設定
  function stopTimer() {
    clearInterval(Timer);
  }

  //（８）タイマースタート
  startTimer();

  /*オプションを足す場合はここへ記載*/
  //（９）「次へ」をクリック
  $(".nav-r a").click(function () {
    //タイマー停止＆スタート（クリックした時点から～秒とする為）
    stopTimer();
    startTimer();
    if (page === lastPage) {
      page = 0;
      changePage();
    } else {
      page++;
      changePage();
    };
  });
  //「戻る」をクリック
  $(".nav-l a").click(function () {
    //タイマー停止＆スタート（クリックした時点から～秒とする為）
    stopTimer();
    startTimer();
    if (page === 0) {
      page = lastPage;
      changePage();
    } else {
      page--;
      changePage();
    };
  });

});


//swipe
$(function () {
  $(".swipeshow").swipeshow({
    autostart: true, // 自動スタートするか否か。する場合はtrue、しない場合はfalse
    interval: 3000, // スライド切替のインターバル
    initial: 0, // スライドインデックス
    speed: 1000, // アニメーションスピード
    friction: 0.3, // バウンスバック動作
    mouse: true, // マウスのドラッグでの操作を有効にするかどうか
  });
});



//アコーディオン
$(function () {
  $('.toggle').on('click', function () {
    $(this).addClass('is-active');//toggleClassでも良い
    $(this).next('.toggle_contents')//(slideToggle()で、クリックされた)this=「.toggle」の次の要素である「.toggle_contents」のオープン・クローズの切り替え
      .slideToggle(600);
  });
});


//タブ切り替え//
$(function () {
  $('.tab').click(function () {
    $('.is-active').removeClass('is-active');
    //一旦クラスを消す
    $(this).addClass('is-active');
    //クリック時のクラスを与える
    $('.is-show').removeClass('is-show');
    //コンテンツも一旦クラスを非表示
    var index = $(this).index();

    // クリックされた順番を取得
    $('.panel').eq(index).addClass('is-show');
    // クリックされた順番のコンテンツのみを表示
  });
});

//モーダル//
$(function () {
  $(".js-modal-toggle").each(function () {
    $(this).on("click", function () {

      var target = $(this).data("target");
      var modal = document.getElementById(target);
      // スクロール禁止
      $('html, body').css('overflow', 'hidden');
      $(modal).fadeIn();
      return false;
    });
  });
  $(".js-modal-close").on("click", function () {
    $('body,html').css({ "overflow": "visible", "height": "auto" });
    $(".js-modal").fadeOut();
    return false;
  });
});

