import sprite from './sprite';

export default {

    initialize: function () {
        if (!isset(window.PIXI)) return;

        PIXI.TOP_LEFT = 1;
        PIXI.TOP_CENTER = 2;
        PIXI.TOP_RIGHT = 3;
        PIXI.MIDDLE_LEFT = 4;
        PIXI.MIDDLE_CENTER = 5;
        PIXI.MIDDLE_RIGHT = 6;
        PIXI.BOTTOM_LEFT = 7;
        PIXI.BOTTOM_CENTER = 8;
        PIXI.BOTTOM_RIGHT = 9;

        sprite.initialize();
    }

};