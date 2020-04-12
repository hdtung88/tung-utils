export default {

    initialize: function () {

        Laya.Vector3.subtract2 = function (a, b) {
            var o = new Laya.Vector3();
            Laya.Vector3.subtract(a, b, o);
            return o;
        };

        Laya.Vector3.add2 = function (a, b) {
            var o = new Laya.Vector3();
            Laya.Vector3.add(a, b, o);
            return o;
        };
    
        Laya.Vector3.multiplyScalar = function (v3, scalar, out) {
            if (!(out instanceof Laya.Vector3)) {
                out = new Laya.Vector3();
            }
            out.x = v3.x * scalar;
            out.y = v3.y * scalar;
            out.z = v3.z * scalar;
            return out;
        };

        Laya.Vector3.cross2 = function (a, b) {
            var o = new Laya.Vector3();
            Laya.Vector3.cross(a, b, o);
            return o;
        };
    
        Laya.Vector3.setLength = function (v3, length, out) {
            if (!(out instanceof Laya.Vector3)) {
                out = new Laya.Vector3();
            }
            v3.cloneTo(out);
            out.setLength(length);
            return out;
        };

        Laya.Vector3.prototype.copy = function (v) {
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;
        };

        Laya.Vector3.prototype.cross = function (v) {
            var ax = this.x, ay = this.y, az = this.z, bx = v.x, by = v.y, bz = v.z;
            this.x = ay * bz - az * by;
            this.y = az * bx - ax * bz;
            this.z = ax * by - ay * bx;
        };

        Laya.Vector3.prototype.normalize = function () {
            var x = this.x, y = this.y, z = this.z;
            var len = x * x + y * y + z * z;
            if (len > 0) {
                len = 1 / Math.sqrt(len);
                this.x = x * len;
                this.y = y * len;
                this.z = z * len;
            }
        };

        Laya.Vector3.prototype.multiplyScalar = function (scalar) {
            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;
        };
    
        Laya.Vector3.prototype.getLength = function () {
            return Laya.Vector3.scalarLength(this);
        };
    
        Laya.Vector3.prototype.setLength = function (length) {
            this.normalize();
            this.multiplyScalar(length);
        };

    }

};