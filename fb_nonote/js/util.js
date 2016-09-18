var util = {
    extend : function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key]
        }
    },
    angleToRadian : function (angle) {
        return Math.PI / 180 * angle;
    }
};