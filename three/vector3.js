export default {

    initialize: function () {

        THREE.Vector3.prototype.addX = function (value) {
            this.x += getFloat(value);
            return this;
        };

        THREE.Vector3.prototype.subX = function (value) {
            this.x -= getFloat(value);
            return this;
        };

        THREE.Vector3.prototype.multiplyX = function (value) {
            this.x *= getFloat(value);
            return this;
        };

        THREE.Vector3.prototype.divideX = function (value) {
            this.x /= getFloat(value);
            return this;
        };

        THREE.Vector3.prototype.addY = function (value) {
            this.y += getFloat(value);
            return this;
        };

        THREE.Vector3.prototype.subY = function (value) {
            this.y -= getFloat(value);
            return this;
        };

        THREE.Vector3.prototype.multiplyY = function (value) {
            this.y *= getFloat(value);
            return this;
        };

        THREE.Vector3.prototype.divideY = function (value) {
            this.y /= getFloat(value);
            return this;
        };

        THREE.Vector3.prototype.addZ = function (value) {
            this.z += getFloat(value);
            return this;
        };

        THREE.Vector3.prototype.subZ = function (value) {
            this.z -= getFloat(value);
            return this;
        };

        THREE.Vector3.prototype.multiplyZ = function (value) {
            this.z *= getFloat(value);
            return this;
        };

        THREE.Vector3.prototype.divideZ = function (value) {
            this.z /= getFloat(value);
            return this;
        };

    }

};