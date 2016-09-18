(function (w) {
    function Sky(x,y) {
        if (!Sky.isInit) {
            throw '请先初始化类！';
        }
        this.x = x;
        this.y = y;
        this.speed = -1.2;
    }
    Sky.init = function (canvas,context,img) {
        Sky.canvas = canvas;
        Sky.context = context;
        Sky.img = img;
        Sky.imgWidth = img.width;
        Sky.imgHeight = img.height;
        if (canvas && context && img) {
            Sky.isInit = true;
        }
    };
    Sky.prototype = {
        constructor : Sky,
        draw : function () {
            Sky.context.drawImage(Sky.img,this.x,this.y);
        },
        update : function () {
            this.x += this.speed;
            if (this.x <= -Sky.imgWidth){
                this.x += Sky.imgWidth * 2;
            }
        }
    };
    w.Sky = Sky;
})(window);
