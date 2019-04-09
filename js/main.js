$(function () {
    //当文档加载完成才会执行
    //根据屏幕宽度的变化决定轮播图应该展示什么
    function resize() {
        //获取屏幕宽度
        var windowWidth = $(window).width();
        //判断屏幕属于大，小屏
        var isSmallScreen = windowWidth < 768;
        //小屏
        $('#main-ad >.carousel-inner > .item').each(function (i, item) {
            /*
            * $element.data()
            * 一个函数，专门用于取元素上的自定义属性（data-xxx）
            * 函数的参数是我们要取得属性名称(xxx)
            * */
            var $item = $(item)
            var imgSrc = $item.data(isSmallScreen ? 'img-xs' : 'img-lg')

            $item.css('backgroundImage', "url('" + imgSrc + "')"
            );
            //我们需要小图时，尺寸等比例变化，所以小图我们使用img方式
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt=""/>')
            } else {
                $item.empty();
            }

        })
        //根据大小为界面上的每一张轮播图设置背景
    }

    function init() {
        var aObjs = document.querySelectorAll(".wjs_news .nav-tabs a");
        var title = document.querySelector(".wjs_news .wjs_news_title");
        for(var i=0;i<aObjs.length;i++){
            $(aObjs[i]).on("click",function(){
                $(title).text($(this).data("title"));
            })
        }
    }

    //让windows对象立触发resize
    $(window).on('resize', resize).trigger('resize')
init();
});
