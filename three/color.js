export default {

    initialize: function () {

        THREE.Color.random = function () {
            return new THREE.Color(Math.random(), Math.random(), Math.random());
        };

    }

};