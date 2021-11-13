window.addEventListener('load', function() {
    var scroll = document.querySelector('.scroll');
    // registerTime.innerHTML = '2021-11-13 21:12:12';

    // animate(registerTime.children[0],100);
    var span = scroll.children[0];

    circle();
    // window.setTimeout(function() {clock.display(registerTime);}, 1000);

    function circle() {
        var clock = new Clock();
        span.innerHTML = clock.toDetailDate();
        audioTitleScroll();
    }
    var timer = setInterval(circle, 1000);

    function Clock() {
        var date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.date = date.getDate();
        this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
        this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

        this.toString = function() {
            return "现在是:" + this.year + "年" + this.month + "月" + this.date + "日 " + this.hour + ":" + this.minute + ":" + this.second + " " + this.day;
        };

        this.toSimpleDate = function() {
            return this.year + "-" + this.month + "-" + this.date;
        };

        this.toDetailDate = function() {
            return this.year + "-" + this.month + "-" + this.date + " " + this.hour + ":" + this.minute + ":" + this.second;
        };

    }


    function audioTitleScroll() {
        // console.log(22222);
        var audio_title = $(".wrap");
        audio_title.each(function() {
            setInterval(titleScroll(this), 1000);
        });

        function titleScroll(wrap) {
            var div = wrap.getElementsByTagName('div')[0];
            var span = div.getElementsByTagName('span')[0];
            var span_w = 1000;
            if (span) {
                span_w = span.offsetWidth;
            }
            var div_w = wrap.offsetWidth;
            if (div_w > span_w || div.getElementsByTagName('span').length >= 2) {
                console.log(777);
                return false;
            }
            console.log(666);
            div.innerHTML += div.innerHTML;

            var timer = setInterval(goLeft, 20);
            $(wrap).hover(function() {
                clearInterval(timer);
            }, function() {
                timer = setInterval(goLeft, 20);
            });

            function goLeft() {
                if (span_w <= wrap.scrollLeft) {
                    wrap.scrollLeft -= span_w;
                } else {
                    wrap.scrollLeft++;
                }
            }
        }
    };

})