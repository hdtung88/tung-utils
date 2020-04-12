export default {

    initialize: function () {

        Math.DEG2RAD = Math.PI / 180;
        Math.RAD2DEG = 180 / Math.PI;

        Math.degToRad = function (degrees) {
            degrees = w.getFloat(degrees);
            return degrees * Math.DEG2RAD;
        };

        Math.radToDeg = function (radians) {
            radians = w.getFloat(radians);
            return radians * Math.RAD2DEG;
        };

    }

};
