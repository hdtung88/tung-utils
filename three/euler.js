export default {

    initialize: function () {


        Object.defineProperties(THREE.Euler.prototype, {
            'degX': {
                get: function () {
                    return THREE.Math.radToDeg(this.x);
                }
            },
            'degY': {
                get: function () {
                    return THREE.Math.radToDeg(this.y);
                }
            },
            'degZ': {
                get: function () {
                    return THREE.Math.radToDeg(this.z);
                }
            }
        });


        THREE.Euler.prototype.setFromDegAngles = function (degX, degY, degZ) {
            return this.set(
                THREE.Math.degToRad(degX),
                THREE.Math.degToRad(degY),
                THREE.Math.degToRad(degZ),
                THREE.Euler.DefaultOrder
            );
        };
        

    }

};