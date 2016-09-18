(function (w) {
    function Bird (x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 0.6;
        this.as = 0.1;
        this.frame = 0;
    }
    Bird.init = function (canvas,context,img) {
        Bird.canvas = canvas;
        Bird.context = context;
        Bird.img = img;
        Bird.imgWidth = img.width / 3;
        Bird.imgHeight = img.height;
    };
    util.extend(Bird.prototype,{
        draw : function () {
            Bird.context.save();
            var birdCenterX = this.x + this.w / 2;
            var birdCenterY = this.y + this.h / 2;
            Bird.context.translate(birdCenterX,birdCenterY);
            var angle = this.speed * 10;
            angle = angle > 35 ? 35 : angle;
            Bird.context.rotate(util.angleToRadian(angle));
            Bird.context.drawImage(Bird.img,
                Bird.imgWidth * this.frame,0,Bird.imgWidth,Bird.imgHeight,
                - this.w / 2,- this.h / 2,this.w,this.h);
            Bird.context.restore();
        },
        update : function () {
            this.frame = ++this.frame > 2 ? 0 : this.frame;
            this.y += this.speed;
            this.speed += this.as;
        },
        bind : function () {
            var self = this;
            Bird.canvas.addEventListener('click',function () {
                self.speed = -2.3;
            });
        }
    });
    w.Bird = Bird;
})(window);