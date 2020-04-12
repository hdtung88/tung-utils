export default {

    initialize: function () {

        Laya.MeshSprite3D.prototype.computeActualBBox = function () {
            const meshRenderer = this.meshRenderer;
            const bounds = meshRenderer.bounds;
            const wtfValue = 2;
            this.bbox = meshRenderer.bbox = {};
            // this.bbox.min = new Laya.Vector3(
            //     bounds.getMin().x * wtfValue,
            //     bounds.getMin().y * wtfValue,
            //     bounds.getMin().z * wtfValue,
            // );
            // this.bbox.max = new Laya.Vector3(
            //     bounds.getMax().x * wtfValue,
            //     bounds.getMax().y * wtfValue,
            //     bounds.getMax().z * wtfValue,
            // );
            this.bbox.extent = new Laya.Vector3(
                bounds.getExtent().x * wtfValue,
                bounds.getExtent().y * wtfValue,
                bounds.getExtent().z * wtfValue,
            );
        };

    }

};