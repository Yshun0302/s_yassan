$('.burger-btn').on('click' , function(){
    if ($('.burger-btn').hasClass('cross')){
    $('.burger-btn').removeClass('cross');
    $('.nav-list').slideUp();
    }
    else {
      $('.burger-btn').addClass('cross');
      $('.nav-list').slideDown();
    }
  });
  
  $(window).on('load scroll', function(){
    var value = $(window).scrollTop();
    var headerTop = $('.header')
    if ($(this).width() > 768){
        if (value > 50){
          $('.header').addClass('sticky');
          $('.nav , .site-logo').addClass('sticky-color');
        }
        else{
          $('.header').removeClass('sticky');
          $('.nav , .site-logo').removeClass('sticky-color');
        }
    }
});
  
  $('.nav').hover(
    function() {
    var Turn = $('.nav-item').index(this);
        $(this).eq(Turn).addClass('nav-hover');
    },
    function() {
      var Turn = $('.nav-item').index(this);
      $(this).eq(Turn).removeClass('nav-hover');
    }
);


  $('.contact-btn a').hover(
    function() {
        $(this).css({'background-color':'#FFF' , 'color':'#333'});
    },
    function() {
        $(this).css({'color':"#f5f5f5" , 'background-color': 'transparent'});
    }
);


        var topBtn = $('.top-btn');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
　　　　　　　//フェードインで表示
            topBtn.fadeIn();
        } else {
　　　　　　　//フェードアウトで非表示
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップへ戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    
    
    
function animation(){
    $('.about-box , .products-box , .services-box , .contact-box').each(function(){
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var windowHeight = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - windowHeight){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
}
  animation();
  $(window).scroll(function (){
    animation();
  });

//タイピング風プログラム
const typing = ( e, e_array ) => {
                // 一文字ずつ分解して入れた配列が空っぽになったら終了
                if( e_array.length == 0 ) return;
                // span要素を作る（ここに一文字ずつ入れる）
                const letter = document.createElement('span');
                
                // 一文字ずつspanで囲うとクローラーが文章として認識してくれないかもしれないので、aria-hidden属性をつける
                letter.setAttribute( 'aria-hidden', 'true' );
                // span要素に配列の一文字目を入れる
                letter.innerHTML = e_array[0];
                
                // sentenceクラスの要素にspan要素を入れる
                e.appendChild(letter);
                // もし文字が句点（。）だったら500ミリ秒後に次の文字の処理、違ったら100ミリ秒後に次の文字の処理
                if( e_array[0] == '。' ) {
                    setTimeout( typing, 650, e, e_array );
                } else {
                    setTimeout( typing, 120, e, e_array );
                }
                // 配列の最初を削除
                e_array.shift();
            }
            /*
            *  タイピング風プログラムを実行する前の下準備
            */
            const init = ( e ) => {
                // 要素内の文字列を一文字ずつ分解して配列に入れる
                const sentence_array = e.innerHTML.split('');
                // 要素内を空にする
                e.innerHTML = '';
                // タイピング風プログラムを1000ミリ秒後に実行する（時間を空ける理由は、それっぽいから…）
                setTimeout( typing, 2500, e, sentence_array );
            }
            /*
            *  sentenceクラスの要素を取得して、それら全ての要素に対してinit関数を実行
            */
            const sentence = document.getElementsByClassName('sentence');
            for( let i = 0; i < sentence.length; i++ ) {
                init( sentence[i] );
            }
            

$(function () {
  var set = 200;//ウインドウ上部からどれぐらいの位置で変化させるか
  var boxTop = new Array;
  var current = -1;
  //各要素の位置
  //position-nowは場所を取得したい対象の要素に付ける
  $('.position-now').each(function (i) {
    boxTop[i] = $(this).offset().top;
  });
  //最初の要素にclass="positiion-now"をつける
  changeBox(0);
  //スクロールした時の処理
  $(window).scroll(function () {
    scrollPosition = $(window).scrollTop();
    for (var i = boxTop.length - 1; i >= 0; i--) {
      if ($(window).scrollTop() > boxTop[i] - set) {
        changeBox(i);
        break;
      }
    };
  });
  //ナビの処理
  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;
      secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
      $('.nav-item a').removeClass('active');

      //位置によって個別に処理をしたい場合　
      if (current == 0) {
        $('#home-link').addClass('active');
        // 現在地がsection1の場合の処理
      } else if (current == 1) {
        $('#about-link').addClass('active');
        // 現在地がsection2の場合の処理
      } else if (current == 2) {
        // 現在地がsection3の場合の処理
        $('#services-link').addClass('active');
      }
      else if (current == 3) {
        // 現在地がsection4の場合の処理
        $('#products-link').addClass('active');
      }
      else if (current == 4) {
        // 現在地がsection4の場合の処理
        $('#contact-link').addClass('active');
      }

    }
  };
});
$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = -75;
    var adjust1 = -55;
    var speed = 1500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    if ($(window).width() > 768){
    var position = target.offset().top + adjust;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
    }
    else {
      var position = target.offset().top + adjust1;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
     return false;
    }
  });
});
