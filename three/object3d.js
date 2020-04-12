export default {

    initialize: function () {


        (function (add) {
            THREE.Object3D.prototype.add = function () {
                add.apply(this, arguments);
                for (let i = 0; i < arguments.length; i++) {
                    let adding = arguments[i];
                    if (adding && adding.isObject3D && adding.id !== this.id) {
                        if (this.isScene) {
                            adding.traverse(function (obj) {
                                obj.scene = this;
                            }.bind(this));
                        } else {
                            if (this.scene && this.scene.isScene) {
                                adding.traverse(function (obj) {
                                    obj.scene = this.scene;
                                }.bind(this));
                            }
                        }
                    }
                }
                return this;
            };
        })(THREE.Object3D.prototype.add);

        (function (remove) {
            THREE.Object3D.prototype.remove = function () {
                remove.apply(this, arguments);
                for (let i = 0; i < arguments.length; i++) {
                    let removing = arguments[i];
                    if (removing && removing.isObject3D) {
                        removing.traverse(function (obj) {
                            obj.scene = undefined;
                        });
                    }
                }
                return this;
            };
        })(THREE.Object3D.prototype.remove);

        THREE.Object3D.prototype.removeAll = function (filterFn) {
            let total = this.children.length;
            for (let i = 0; i < total; i++) {
                let child = this.children[i];
                if (!child) return this;
                if (typeof filterFn === 'function') {
                    if (filterFn(child) === true) {
                        this.remove(child);
                        i--;
                    }
                } else {
                    this.remove(child);
                    i--;
                }
            }
            return this;
        };



    }

};