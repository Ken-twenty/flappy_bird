(function (w) {
    function Land(x,y) {
        if (!Land.isInit) {
            throw '请初始化大地类！';
        }
        this.x = x;
        this.y = y;
        this.speed = -1.2;
    }
    Land.init = function (canvas, context, img) {
        if (canvas && context && img) {
            Land.isInit = true;
        }
        Land.canvas = canvas;
        Land.context = context;
        Land.img = img;
        Land.imgWidth = img.width;
        Land.height = img.height;
    };
    util.extend(Land.prototype,{
        draw : function () {
            Land.context.drawImage(Land.img,this.x,this.y)
        },
        update : function () {
            this.x += this.speed;
            if (this.x <= - Land.imgWidth) {
                this.x += Land.imgWidth * 4;
            }
        }
    });
    w.Land = Land;
})(window);