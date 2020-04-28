import string from './string';
import array from './array';
import math from './math';

export default {

    initialize: function () {
        const wd = window;


        wd.doNothing = function () {

        };


        wd.isset = function (variable) {
            return !(typeof variable === 'undefined' || variable === undefined || variable === null);
        };


        const LLOG_DEFAULT_MAX_COUNT = 1000;

        wd.llogCount = function (count) {
            wd.__llog_max_count__ = parseInt(count);
            wd.__llog_max_count__ = isNaN(wd.__llog_max_count__) ? LLOG_DEFAULT_MAX_COUNT : Math.abs(wd.__llog_max_count__);
        };

        wd.llog = function () {
            wd.__llog_count__ = parseInt(wd.__llog_count__);
            wd.__llog_count__ = isNaN(wd.__llog_count__) ? 0 : Math.abs(wd.__llog_count__);
            wd.__llog_max_count__ = parseInt(wd.__llog_max_count__);
            wd.__llog_max_count__ = isNaN(wd.__llog_max_count__) ? LLOG_DEFAULT_MAX_COUNT : Math.abs(wd.__llog_max_count__);
            if (wd.__llog_count__ < wd.__llog_max_count__) {
                console.log.apply(console, arguments);
                wd.__llog_count__++;
            }
        };


        /**
         * Get the integer value out of a variable. 
         * If the variable is not a number, return nanValue param.
         * @param	variable The variable to get integer from.
         * @param	nanValue Returned value if input variable is not a number.
         * @return The integer value.
         */
        wd.getInt = function (variable, nanValue = 0) {
            let myInt = parseInt(variable);
            return isNaN(myInt) ? nanValue : myInt;
        };


        /**
         * Same like getInt() but return an absolute value
         */
        wd.getAbsInt = function (variable, nanValue = 0) {
            return Math.abs(wd.getInt(variable, nanValue));
        };


        /**
         * Get the float value out of a variable. 
         * If the variable is not a number, return nanValue param.
         * @param	variable The variable to get float from.
         * @param	nanValue Returned value if input variable is not a number.
         * @return The float value.
         */
        wd.getFloat = function (variable, nanValue = 0) {
            let myFloat = parseFloat(variable);
            return isNaN(myFloat) ? nanValue : myFloat;
        };



        /**
         * Same like getFloat() but return an absolute value
         */
        wd.getAbsFloat = function (variable, nanValue = 0) {
            return Math.abs(wd.getFloat(variable, nanValue));
        };


        /**
         * Get a random integer between int1 and int2. If int2 not set, it will return between 0 and int1.
         * If int2 not set and int1 is smaller than 0, function will return 0.
         * @param	int2 integer1
         * @param	int2 integer2
         * @return The randomed integer
         */
        wd.randomInt = function (int1, int2) {
            int1 = wd.getInt(int1);
            if (arguments.length < 2) {
                return int1 <= 0 ? 0 : Math.floor(Math.random() * (int1 + 1));
            }
            int2 = wd.getInt(int2);
            return int2 >= int1 ?
                Math.floor(Math.random() * (int2 - int1 + 1)) + int1 :
                Math.floor(Math.random() * (int1 - int2 + 1)) + int2;
        };


        /**
         * Get a random float between float1 and float2. If float2 not set, it will return between 0 and float1.
         * If float2 not set and float1 is smaller than 0, function will return 0.
         * @param	float1 float 1
         * @param	float2 float 2
         * @return The randomed float
         */
        wd.randomFloat = function (float1, float2) {
            float1 = wd.getFloat(float1);
            if (arguments.length < 2) {
                return float1 <= 0 ? 0 : Math.random() * float1;
            }
            float2 = wd.getFloat(float2);
            return Math.random() * (float2 - float1) + float1;
        };


        /**
         * Convert miliseconds to seconds
         * @param	milisecs Miliseconds value
         * @return The seconds value.
         */
        wd.milisecsToSecs = function (ms) {
            return Math.abs(wd.getAbsInt(ms) / 1000);
        };


        wd.executeOnce = function (fn, delay, context) {
            [].shift.apply(arguments);
            [].shift.apply(arguments);
            [].shift.apply(arguments);
            return setTimeout(function () {
                fn.apply(context, arguments);
            }, delay);
        };


        wd.executeLoop = function (fn, interval, context) {
            [].shift.apply(arguments);
            [].shift.apply(arguments);
            [].shift.apply(arguments);
            return setInterval(function () {
                fn.apply(context, arguments);
            }, interval);
        };


        /**
         * Checks if a font is available to be used on a web page.
         *
         * @param {String} fontName The name of the font to check
         * @return {Boolean}
         * @license MIT
         * @copyright Sam Clarke 2013
         * @author Sam Clarke <sam@samclarke.com>
         */
        (function (document) {
            var width;
            var body = document.body;

            var container = document.createElement('span');
            container.innerHTML = Array(100).join('wi');
            container.style.cssText = [
                'position:absolute',
                'width:auto',
                'font-size:128px',
                'left:-99999px'
            ].join(' !important;');

            var getWidth = function (fontFamily) {
                container.style.fontFamily = fontFamily;

                body.appendChild(container);
                width = container.clientWidth;
                body.removeChild(container);

                return width;
            };

            // Pre compute the widths of monospace, serif & sans-serif
            // to improve performance.
            var monoWidth = getWidth('monospace');
            var serifWidth = getWidth('serif');
            var sansWidth = getWidth('sans-serif');

            wd.isFontAvailable = function (font) {
                return monoWidth !== getWidth(font + ',monospace') ||
                    sansWidth !== getWidth(font + ',sans-serif') ||
                    serifWidth !== getWidth(font + ',serif');
            };

            wd.getFont = function (fonts = []) {
                for (let i = 0; i < fonts.length; i++) {
                    if (wd.isFontAvailable(fonts[i]) === true)
                        return fonts[i];
                }
                return null;
            };

        })(document);
        
    },

};