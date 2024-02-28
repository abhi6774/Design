let dropfield = document.getElementById("dropfield");
let fileInput = document.getElementById("file");

dropfield.ondragover = (e) => e.preventDefault();

dropfield.ondrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.dataTransfer.files.length == 0) return;
    console.log(e.dataTransfer.files);
    uploadfile(e.dataTransfer.files);
}