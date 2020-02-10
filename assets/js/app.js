(function ($) {
  //スムーズスクロール
  var runScroll = function () {
    $('a[href^="#"]').click(function () {
      var speed = 400; // ミリ秒で記述
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 100;

      $('body,html').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    });
  };

  // callback用ナビメニュー文言
  var changeTxt = function (trigger) {
    let $targetTxt = $('.header__btn__txt');

    if (trigger.hasClass('is-close')) {
      $targetTxt.text('CLOSE');
    } else {
      $targetTxt.text('MENU');
    }
  };

  // ハンバーガーメニュー開閉処理
  var openHamburger = function (callback) {
    let $trigger = $('[data-hamburger="trigger"]');
    let $target = $('[data-hamburger="target"]');
    let $body = $('body');

    $trigger.on('click', function () {
      $(this).toggleClass('is-close');
      $target.toggleClass('is-active');
      $body.toggleClass('is-active');
      callback($trigger);
    });

    $target.on('click', function () {
      $(this).removeClass('is-active');
      $trigger.removeClass('is-close');
      $body.removeClass('is-active');
      callback($trigger);
    });

    $target.find('a').on('click', function () {
      $target.removeClass('is-active');
      $trigger.removeClass('is-close');
      $body.removeClass('is-active');
      callback($trigger);
    });
  };

  // ふわっとtextアニメーション
  var huwaAnimation = function () {
    $('.animation').css('visibility', 'hidden');

    $(window).scroll(function () {
      var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
      $('.animation').each(function () {
        var targetPosition = $(this).offset().top;
        if (topWindow > targetPosition - windowHeight + 100) {
          $(this).addClass("fadeInDown");
        }
      });
    });
  };

  // document ready
  $(function () {
    runScroll();
    openHamburger(changeTxt);
    huwaAnimation();
  });
})(window.jQuery);
