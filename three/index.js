import vector3 from './vector3';
import quaternion from './quaternion';
import euler from './euler';
import color from './color';
import object3d from './object3d';

export default {

    initialize: function () {
        if (!isset(window.THREE)) return;

        if (!THREE.Vector3.ZERO) THREE.Vector3.ZERO = new THREE.Vector3(0, 0, 0);
        if (!THREE.Vector3.X) THREE.Vector3.X = new THREE.Vector3(1, 0, 0);
        if (!THREE.Vector3.Y) THREE.Vector3.Y = new THREE.Vector3(0, 1, 0);
        if (!THREE.Vector3.Z) THREE.Vector3.Z = new THREE.Vector3(0, 0, 1);
        if (!THREE.Vector3.UP) THREE.Vector3.UP = new THREE.Vector3(0, 1, 0);
        if (!THREE.Vector3.DOWN) THREE.Vector3.DOWN = new THREE.Vector3(0, -1, 0);
        if (!THREE.Vector3.RIGHT) THREE.Vector3.RIGHT = new THREE.Vector3(1, 0, 0);
        if (!THREE.Vector3.LEFT) THREE.Vector3.LEFT = new THREE.Vector3(-1, 0, 0);
        if (!THREE.Vector3.FORWARD) THREE.Vector3.FORWARD = new THREE.Vector3(0, 0, -1);
        if (!THREE.Vector3.BACKWARD) THREE.Vector3.BACKWARD = new THREE.Vector3(0, 0, 1);

        vector3.initialize();
        quaternion.initialize();
        euler.initialize();
        color.initialize();
        object3d.initialize();
    }

};