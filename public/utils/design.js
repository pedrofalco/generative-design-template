import { seed } from "./random.js";

export const designCanvas = (dim, ratio, mode) => {
    if (mode === undefined){
        createCanvas(dim * ratio , dim);
    } else {
        createCanvas(dim * ratio, dim, mode);
    }
}

export const styledCanvas = (size) => {
    let CS = document.getElementById('defaultCanvas0').style;

    CS.position = "absolute";
    CS.display = "block";
    CS.inset = "0";
    CS.width = CS.margin = "auto";
    CS.height = `${size}%`;
}

export const getDateAndTime = () => { 
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);
    
    return `${year}.${month}.${day}-${hours}.${minutes}.${seconds}`;
};

export const createFileName = () => {
    let date = getDateAndTime();
    let file_name = `${date}-${seed}.png`;

    return file_name;
};

export const canvasToPNG = async () => {
    const canvas = document.getElementById("defaultCanvas0");
    const dataURL = await canvas.toDataURL();
    
    const base64Response = await fetch(dataURL);
    const blob_object = await base64Response.blob();
    let blob = await window.URL.createObjectURL(blob_object);
    const anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = blob;
    anchor.download = createFileName();
    document.body.appendChild(anchor);
    anchor.click();
    window.URL.revokeObjectURL(blob);
};

export const responsive = (res, ratio) => {

    let default_size = 1000;
    let hh = res;
    let ww = hh * ratio;
    let dim = Math.min(ww, hh);
    let m = dim / default_size;

    return [ww, hh, m];
}