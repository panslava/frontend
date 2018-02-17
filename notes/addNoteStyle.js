/*
class NotePattern {
    constructor (note, header, text, imageSrc,
        contentOverlay, imageOverlay, image,
        applyButton, addImageButton, deleteImageButton,
        addImagePopupDiv, addImageSrcPopup, addImagePopupApply, 
        group, colorNumber, groupName) {
        //content
        this.$note = note;
        this.$header = header;
        this.$text = text;
        this.imageSrc = imageSrc;

        //all service elements
        this.$contentOverlay = contentOverlay;
        this.$imageOverlay = imageOverlay;
        this.$image = image;

        this.buttons = new Object();
        this.buttons.$addNote = applyButton;
        this.buttons.$addImage = addImageButton;
        this.buttons.$addImage.state = 0;
        this.buttons.$deleteImage = deleteImageButton;
        this.buttons.$addImagePopupApply = addImagePopupApply;
       // this.buttons.$deleteImage = 
        this.$addImagePopupDiv = addImagePopupDiv;
        this.$addImageSrcPopup = addImageSrcPopup;
        this.$group = group;
        this.colorNumber = colorNumber;
        this.groupName = groupName;
    
        if (this.$note   !=undefined) this.$note.classList.add("notes");
        if (this.$header !=undefined) this.$header.classList.add("header");
        if (this.$text   !=undefined) this.$text.classList.add("text");
        if (this.$сontentOverlay   !=undefined) this.$contentOverlay.classList.add("contentOverlay");
        if (this.$imageOverlay   !=undefined) this.$imageOverlay.classList.add("image");
        if (this.$image   !=undefined) this.$image.classList.add("image");
        if (this.buttons.$addNote   !=undefined) this.buttons.$addNote.classList.add("applyButton");
        if (this.buttons.$addImage   !=undefined) this.buttons.$addImage.classList.add("addImageButton");
        if (this.buttons.$deleteImage   !=undefined) this.buttons.$deleteImage.classList.add("deleteImageButton");
        if (this.buttons.$addImagePopupDiv   !=undefined) this.buttons.$addImagePopupDiv.add("addImageSrcPopup");
        if (this.$addImagePopupDiv!=undefined) this.$addImagePopupDiv.classList.add("addImagePopupDiv");
        if (this.$addImageSrcPopup != undefined) this.$addImageSrcPopup.classList.add("addImageSrcPopup");
    }
}

var NewNoteContainer = new Object();

NewNoteContainer.Prior = new NotePattern(
    document.getElementById("addPriorNote"),
    document.getElementById("addPriorHeader"),
    document.getElementById("addPriorText"),
    "", //image src

    document.getElementById("contentOverlayPrior"),
    undefined, //imageOverlay
    undefined, //image
    document.getElementById("applyButtonPrior"),
    document.getElementById("addImageButtonPrior"),
    undefined, //deleteImageButton
    document.getElementById("addImagePopupPrior"),
    document.getElementById("addImageSrcPopupPrior"),
    $addImagePopupTickPrior,
    document.querySelector('.priority'),
    0,
    "Prior"
);

NewNoteContainer.Common = new NotePattern(
    document.getElementById("addCommonNote"),
    document.getElementById("addCommonHeader"),
    document.getElementById("addCommonText"),
    "",  //image src

    document.getElementById("contentOverlayCommon"),
    undefined, //imageOverlay
    undefined, //image
    document.getElementById("applyButtonCommon"),
    document.getElementById("addImageButtonCommon"),
    undefined, //deleteImageButton
    document.getElementById("addImagePopupCommon"),
    document.getElementById("addImageSrcPopupCommon"),
    $addImagePopupTickCommon,
    document.querySelector('.normal'),
    0,
    "Common",
    ""
);
*/
var colors = ['basic', 'red','orange','yellow','lightgreen','blue','pink'];

function colorNote (newNoteContainer) {
    console.log("vis");
    newNoteContainer.buttons.$addNote.style.visibility='visible';
    newNoteContainer.$note.classList.add(colors[newNoteContainer.colorNumber]);
}

function uncolorNote (newNoteContainer) {
    if (!(newNoteContainer.$header.value != "" || newNoteContainer.$text.value != "" 
        || newNoteContainer.imageSrc != "")) {
        console.log("unvis");
        newNoteContainer.buttons.$addNote.style.visibility='hidden';
        newNoteContainer.$note.classList.remove(colors[newNoteContainer.colorNumber]);
    }
}