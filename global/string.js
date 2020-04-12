export default {

    initialize: function () {


        String.val = function (variable) {
            return isset(variable) ? variable.toString() : '';
        };


        String.prototype.contains = function (substr) {
            return this.indexOf(substr) !== -1;
        };


        String.prototype.limit = function (maxChars) {
            maxChars = parseInt(maxChars);
            if (maxChars < 0) return this;
            return this.length <= maxChars ? this : this.substring(0, maxChars) + '...';
        };


        String.prototype.capitalize = function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        };

    }

};
