import parseSTL from 'parse-stl';
import viewport from './viewport.js';
import ui from './ui.js';

document.getElementById("upload").onchange = function(event) {
    let fileInput = document.getElementById("upload");
    let file = fileInput.files[0];

    ui.setStatus("Loading...");
    ui.disableButtons();

    let reader = new FileReader();

    reader.onload = function() {
        let buf = new Uint8Array(reader.result);
        let mesh = parseSTL(buf);

        document.getElementById("filename").value = file.name.slice(0, -4);

        viewport.loadMesh(mesh);

        ui.setStatus("");
        ui.enableButtons();
    }
    reader.readAsArrayBuffer(file);
}
