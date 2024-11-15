class ShadowMaterial extends Material {

    constructor(light, translate, rotate, scale, vertexShader, fragmentShader, lightIndex) {
        let lightMVP = light.CalcLightMVP(translate, rotate, scale);

        super({
            'uLightMVP': { type: 'matrix4fv', value: lightMVP }
        }, [], vertexShader, fragmentShader, light.fbo, lightIndex);
    }
}

async function buildShadowMaterial(light, translate, rotate, scale, vertexPath, fragmentPath, lightIndex) {


    let vertexShader = await getShaderString(vertexPath);
    let fragmentShader = await getShaderString(fragmentPath);

    return new ShadowMaterial(light, translate, rotate, scale, vertexShader, fragmentShader, lightIndex);

}