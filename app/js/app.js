import viewport from './viewport.js';
import parseSTL from 'parse-stl';
import './upload.js';
import './slicer.js';

let sample = false;

function main()
{
    viewport.init();
    window.requestAnimationFrame(function() {
        if (sample)
        {
            let buf = new Uint8Array(sample);
            let mesh = parseSTL(buf);
            viewport.loadMesh(mesh);
        }});
}

main();
