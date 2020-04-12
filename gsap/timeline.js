export default {

    initialize: function () {

        const Timeline = window.TimelineLite || window.TimelineMax;
        if (isset(Timeline)) {
            Timeline.prototype.clearAll = function () {
                this._prom = null;
                return this.clear()
                    .eventCallback("onComplete", null)
                    .eventCallback("onUpdate", null)
                    .eventCallback("onStart", null)
                    .eventCallback("onReverseComplete", null)
                    .eventCallback("onRepeat", null);
            };
        }

    }

};