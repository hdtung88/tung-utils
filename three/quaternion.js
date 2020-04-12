export default {

    initialize: function () {

        THREE.Quaternion.prototype.toEuler = function (order = THREE.Euler.DefaultOrder) {
            return (new THREE.Euler()).setFromQuaternion(this, order);
        };

    }

};