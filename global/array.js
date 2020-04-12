export default {

    initialize: function () {

        if (!isset(Array.isArray)) {
            Array.isArray = function (variable) {
                return variable instanceof Array;
            };
        }

        Array.prototype.first = function () {
            return this[0];
        };

        Array.prototype.last = function () {
            return this[this.length - 1];
        };

        Array.prototype.random = function () {
            return this[w.randomInt(this.length - 1)];
        };

        Array.prototype.shuffle = function () {
            let i = this.length;
            while (i) {
                let j = Math.floor(Math.random() * i),
                    t = this[--i];
                this[i] = this[j];
                this[j] = t;
            }
            return this;
        };

        Array.prototype.rotate = function (startIndex) {
            let arr1 = this.splice(0, startIndex);
            arr1.forEach(e => {
                this.push(e);
            }, this);
            return this;
        };

        Array.prototype.removeAt = function (index) {
            return this.splice(index, 1)[0];
        };

    }

};
