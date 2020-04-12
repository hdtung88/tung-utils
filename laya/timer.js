export default {

    initialize: function () {

        const oldTimerUpdate = Laya.Timer.prototype._update;
        Laya.Timer.prototype._update = function () {
            oldTimerUpdate.apply(this);
            if (!isset(this.firstTimer)) {
                this.firstTimer = Date.now();
            }
            this.time = this.currTimer - this.firstTimer;
        };

    }

};