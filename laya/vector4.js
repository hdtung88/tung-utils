export default {

    initialize: function () {

        Laya.Vector4.isEqual = function (v1, v2) {
            return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z && v1.w === v2.w;
        };

    }

};