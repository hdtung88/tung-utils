export default {

    initialize: function () {

        const basePlay = Laya.TimeLine.prototype.play;
        Laya.TimeLine.prototype.play = function () {
            basePlay.apply(this, arguments);
            this._isActive = true;
            return this;
        };

        const _baseComplete = Laya.TimeLine.prototype._complete;
        Laya.TimeLine.prototype._complete = function () {
            _baseComplete.apply(this);
            if (this._loopKey !== true) {
                this._isActive = false;
            }
        };

        const baseReset = Laya.TimeLine.prototype.reset;
        Laya.TimeLine.prototype.reset = function () {
            baseReset.apply(this);
            this.offAll();
            this._isActive = false;
        };

        Laya.TimeLine.prototype.isActive = function () {
            return (this._isActive === true || this._isActive === false) ? this._isActive : false;
        };

    }

};