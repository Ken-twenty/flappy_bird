(function (w) {
    function Text_date(options) {
        Text.call(this,options);
    }
    Text_date.prototype = Object.create(Text.prototype);
    util.extend(Text_date.prototype,{
        serializeDate : function () {
            var hours = Math.floor(this.time / (1000 * 60 * 60));
            var minutes = Math.floor(this.time % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(this.time % (1000 * 60) / 1000);
            this.text = '成功作死' + hours + '小时' + minutes + '分钟' + seconds + '秒';
        },
        drawDate : function () {
            this.serializeDate();
            this.draw();
        }
    });
    w.Text_date = Text_date;
})(window);