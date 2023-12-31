jQuery(function ($) { // $はjQueryを表す
    // この中にコードを書く

    // 例：クラスがc-btnのcolorを黒色にする
    // $(".c-btn").css("color","black")

    // 例：idがbuttonのテキストを変更
    // $("#button").text("ボタンのテキストを変更");

    // 例：クラスがc-btnをクリックした場合、コンソールログを出力
    // $(".c-btn").click(function() {
    //     console.log("ボタンがクリックされました！");
    // });
    
    // ハンバーガーメニュー
    $(function () {
        $(".js-hamburger").on("click", function () {
            $(this).toggleClass("is-open");
            if ($(this).hasClass("is-open")) {
                openDrawer();
            } else {
                closeDrawer();
            }
        });

        // backgroundまたはページ内リンクをクリックで閉じる
        $(".js-drawer a[href]").on("click", function () {
            closeDrawer();
        });

        // resizeイベント
        $(window).on('resize', function() {
            if (window.matchMedia("(min-width: 768px)").matches) {
                closeDrawer();
            }
        });
    });

    function openDrawer() {
        $(".js-drawer").fadeIn();
        $(".js-hamburger").addClass("is-open");
    }

    function closeDrawer() {
            $(".js-drawer").fadeOut();
        $(".js-hamburger").removeClass("is-open");
    }
});