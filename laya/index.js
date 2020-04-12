import timer from './timer';
import timeline from './timeline';
import vector3 from './vector3';
import vector4 from './vector4';
import colorUtils from './colorUtils';
import camera from './camera';
import mesh from './mesh';
import meshSprite3d from './meshSprite3d';

export default {

    initialize: function () {

        if (!isset(window.Laya)) return;

        timer.initialize();
        timeline.initialize();
        vector3.initialize();
        vector4.initialize();
        colorUtils.initialize();
        camera.initialize();
        mesh.initialize();
        meshSprite3d.initialize();

    },

};