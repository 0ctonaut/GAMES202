class DirectionalLight {

    constructor(lightIntensity, lightColor, lightPos, focalPoint, lightUp, hasShadowMap, gl) {
        this.mesh = Mesh.cube(setTransform(0, 0, 0, 0, 0, 0, 0.2, 0.2, 0.2, 0));
        this.mat = new EmissiveMaterial(lightIntensity, lightColor);
        this.lightPos = lightPos;
        this.focalPoint = focalPoint;
        this.lightUp = lightUp

        this.hasShadowMap = hasShadowMap;
        this.fbo = new FBO(gl);
        if (!this.fbo) {
            console.log("无法设置帧缓冲区对象");
            return;
        }
    }

    CalcLightMVP(translate, rotate, scale) {
        let lightMVP = mat4.create();
        let modelMatrix = mat4.create();
        let viewMatrix = mat4.create();
        let projectionMatrix = mat4.create();

        // Model transform
        modelMatrix = mat4.translate(modelMatrix, modelMatrix, translate);
        modelMatrix = mat4.rotateX(modelMatrix, modelMatrix, rotate[0])
        modelMatrix = mat4.rotateY(modelMatrix, modelMatrix, rotate[1])
        modelMatrix = mat4.rotateZ(modelMatrix, modelMatrix, rotate[2])
        modelMatrix = mat4.scale(modelMatrix, modelMatrix, scale);
        // View transform
        viewMatrix = mat4.lookAt(viewMatrix, this.lightPos, this.focalPoint, this.lightUp);
        // Projection transform
        
        var r = 100;
        var l = -r;
        var t = 100;
        var b = -t;
        var n = 0.01;
        var f = 1000;
        
        projectionMatrix = mat4.ortho(projectionMatrix, l, r, b, t, n, f);
        // projectionMatrix = mat4.perspective(projectionMatrix, Math.PI / 2, r / t, n, f);

        mat4.multiply(lightMVP, projectionMatrix, viewMatrix);
        mat4.multiply(lightMVP, lightMVP, modelMatrix);

        return lightMVP;
    }
}
