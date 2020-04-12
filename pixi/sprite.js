export default {

    initialize: function () {

        PIXI.Sprite.prototype.setTint = function (color, tintChildren = true) {
            this.tint = color;
            if (tintChildren === true) {
                this.children.forEach(child => {
                    if (child.isSprite) {
                        child.tint = color;
                        child.setTint(color, true);
                    }
                });
            }
        }

    }

};