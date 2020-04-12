export default {

    initialize: function () {

        Laya.Mesh.prototype.getPositions2 = function () {
            let positions = [];
            this.getPositions(positions);
            return positions;
        };

        Laya.Mesh.prototype.getNormals2 = function () {
            let normals = [];
            this.getNormals(normals);
            return normals;
        };

        Laya.Mesh.prototype.reCalculateNormals = function (positions, indices, normals) {
            positions = positions || this.getPositions2();
            indices = indices || this.getIndices();
            normals = normals || this.getNormals2();
            // For each face, compute the face normal, and accumulate it into each vertex.
            for (let index = 0; index < indices.length; index += 3) {
                let vertexA = indices[index];
                let vertexB = indices[index + 1];
                let vertexC = indices[index + 2];

                let edgeBA = Laya.Vector3.subtract2(positions[vertexB], positions[vertexA]);
                let edgeCA = Laya.Vector3.subtract2(positions[vertexC], positions[vertexA]);

                // The cross product is perpendicular to both input vectors (normal to the plane).
                // Flip the argument order if you need the opposite winding.    
                let areaWeightedNormal = Laya.Vector3.cross2(edgeCA, edgeBA);

                // Don't normalize this vector just yet. Its magnitude is proportional to the
                // area of the triangle (times 2), so this helps ensure tiny/skinny triangles
                // don't have an outsized impact on the final normal per vertex.

                // i normalize it anyway, reduce loop count
                areaWeightedNormal.normalize();

                // Accumulate this cross product into each vertex normal slot.
                normals[vertexA] = areaWeightedNormal;
                normals[vertexB] = areaWeightedNormal;
                normals[vertexC] = areaWeightedNormal;
            }

            // // Finally, normalize all the sums to get a unit-length, area-weighted average.
            // for (let vertex = 0; vertex < positions.length; vertex++) {
            //     normals[vertex].normalize();
            // }

            this.setNormals(normals);
        };

    }

};