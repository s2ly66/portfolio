(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#elStatus').fadeOut();
		$('#wrPreloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.elScrollUp').fadeIn();
			} else {
				$('.elScrollUp').fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navigation
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.wrNav',
			offset: 70
		})


		/* ---------------------------------------------- /*
		 * Top Background
		/* ---------------------------------------------- */

		$(".imageHeight").height($(window).height());

		$(window).resize(function(){
			$(".imageHeight").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#top').css({'background-attachment': 'scroll'});
		} else {
			$('#top').parallax('50%', 0.1);
		}


		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();


	});

})(jQuery);

/* ---------------------------------------------- /*
 * works
/* ---------------------------------------------- */

var searchItem = '.elSearchItem';   // 絞り込む項目を選択するエリア
var listItem = '.elWorksList';       // 絞り込み対象のアイテム
var hideClass = 'elHide';         // 絞り込み対象外の場合に付与されるclass名
var activeClass = 'elActive';     // 選択中のグループに付与されるclass名

$(function() {
    // 絞り込みを変更した時
    $(searchItem).on('click', function() {
        $(searchItem).removeClass(activeClass);
        var group = $(this).addClass(activeClass).data('group');
        search_filter(group);
    });
});

/**
 * リストの絞り込みを行う
 * @param {String} group data属性の値
 */
function search_filter(group) {
    // 非表示状態を解除
    $(listItem).removeClass(hideClass);
    // 値が空の場合はすべて表示
    if(group === '') {
        return;
    }
    // リスト内の各アイテムをチェック
    for (var i = 0; i < $(listItem).length; i++) {
        // アイテムに設定している項目を取得
        var itemData = $(listItem).eq(i).data('group');
        // 絞り込み対象かどうかを調べる
        if(itemData !== group) {
            $(listItem).eq(i).addClass(hideClass);
        }
    }
}

/* ---------------------------------------------- /*
 * password
/* ---------------------------------------------- */

// onclick="tbox()" が押されたら
    function tbox(){

       // <form name="pwform">内の <input name="txtb">　の値を取得
       var str = document.pwform.txtb.value;

       // もし　<input name="txtb">　の値が半角英数字以外だったら、アラートを出す
       if( /\W+/g.test(str) ) {
          alert("半角英数字のみを入力して下さい。");
       }

       // もし　<input name="txtb">　の値に何かしら入っていたら、入力値.htmlに移動する
       else if( str != null ) {
            location.href = str + ".html";
       }

    }

    // onclick="clr()" が押されたら、フォームの値を消す
    function clr(){
      document.pwform.txtb.value="";
    }