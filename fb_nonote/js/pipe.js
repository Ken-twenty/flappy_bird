(function (w) {
    function Pipe(x) {
        if (!Pipe.isInit) {
            throw '请先初始化管道类！';
        }
        this.x = x;
        this.space = 102;
        this.speed = -1.2;
        this.as = 0.00000008;
        this._randomY();
    }
    Pipe.init = function (canvas,context,imgUp,imgDown) {
        if (canvas && context && imgUp && imgDown) {
            Pipe.isInit = true;
        }
        Pipe.canvas = canvas;
        Pipe.context = context;
        Pipe.imgUp = imgUp;
        Pipe.imgDown = imgDown;
        Pipe.imgWidth = imgUp.width;
        Pipe.imgHeight = imgUp.height;
    };
    Pipe.prototype = {
        constructor : Pipe,
        _randomY : function () {
            this.viewHeight = Math.random() * 200 + 100;
            this.yUp = - Pipe.imgHeight + this.viewHeight;
            this.yDown = this.viewHeight + this.space;
        },
        _strokePath : function () {
            Pipe.context.rect(this.x,this.yUp,Pipe.imgWidth,Pipe.imgHeight);
            Pipe.context.rect(this.x,this.yDown,Pipe.imgWidth,Pipe.imgHeight);
        },
        draw : function () {
            Pipe.context.drawImage(Pipe.imgUp,this.x,this.yUp);
            Pipe.context.drawImage(Pipe.imgDown,this.x,this.yDown);
            this._strokePath();
        },
        update : function () {
            this.x += this.speed;
            this.speed += this.as;
            if (this.x < -Pipe.imgWidth) {
                this.x += Pipe.imgWidth * 3 * 6;
                this._randomY();
            }
        }
    };
    w.Pipe = Pipe;
})(window);