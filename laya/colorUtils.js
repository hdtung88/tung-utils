export default {

    initialize: function () {

        Laya.ColorUtils.prototype.toVector4 = function () {
            return new Laya.Vector4(this.arrColor[0], this.arrColor[1], this.arrColor[2], this.arrColor[3]);
        };

        // Laya.ColorUtils.fromAlbedoColor = function (v4) {
        //     if (!(v4 instanceof Laya.Vector4)) {
        //         v4 = new Laya.Vector4(255, 255, 255, 1);
        //     }

        // };

    }

};