(function (w) {
    function Text(options) {
        this.canvas = options.canvas;
        this.context = options.context;
        this.text = options.text;
        this.x = options.x;
        this.y = options.y;
        this.font = options.font;
        this.color = options.color;
        this.align = options.align;
        this.baseline = options.baseline;
    }
    Text.prototype = {
        constructor : Text,
        draw : function () {
            this.context.save();

            this.context.font = this.font;
            this.context.fillStyle = this.color;
            this.context.textAlign = this.align;
            this.context.textBaseline = this.baseline;
            this.context.fillText(this.text,this.x,this.y);
            this.context.restore();
        }
    };
    w.Text = Text;
})(window);