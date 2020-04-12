export default {

    initialize: function () {

        Laya.Camera.prototype.convertStagePointToViewportPoint = function (stagePoint, out) {
            if (!isset(out)) {
                out = new Laya.Vector2();
            }
            out.x = stagePoint.x * Laya.stage.clientScaleX;
            out.y = stagePoint.y * Laya.stage.clientScaleY;
            return out;
        };

    }

};