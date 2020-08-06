/**
 * Function which prompts user to download .png/
 */
export const downloadURI = (uri: String, name: String) => {
    const downloadPrompt = document.createElement("a");
    downloadPrompt.download = name;
    downloadPrompt.href = uri;
    document.body.appendChild(downloadPrompt);
    downloadPrompt.click();
    document.body.removeChild(downloadPrompt);
}

/**
 * Function which converts canvas renders to a dataURI.
 * Prompts user to download png.
 */
export const handleExport = (stageRef) => {
    const stage = stageRef.current;
    // console.log(stage.toDataURL());
    const dataURI = stage.toDataURL();
    downloadURI(dataURI, "molecule.png");
}