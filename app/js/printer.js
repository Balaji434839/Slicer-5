let resolution = {"x": 1280, "y": 800};
let width_mm = 25.4 * 3;

function aspectRatio()
{
    return resolution.x / resolution.y;
}

function pixels()
{
    return resolution.x * resolution.y;
}

function getGLscale()
{
    return 2 * aspectRatio() / width_mm;
}

export default {
    resolution,
    aspectRatio,
    pixels,
    getGLscale
};
