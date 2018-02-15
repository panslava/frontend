class AddingNotePattern {
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
    }
}

var NewNoteContainer = new Object();

NewNoteContainer.Prior = new AddingNotePattern(
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

NewNoteContainer.Common = new AddingNotePattern(
    document.getElementById("addCommonNote"),
    document.getElementById("addCommonHeader"),
    document.getElementById("addCommonText"),
    "",  //image src
    document.getElementById("applyButtonCommon"),
    document.getElementById("addImageButtonCommon"),
    document.getElementById("addImagePopupCommon"),
    $addImagePopupTickCommon,
    document.querySelector('.normal'),
    0,
    "Common",
    ""
);

var colors = ['red','orange','yellow','lightgreen','blue','pink'];

function colorAddingNote (newNoteContainer) {
    newNoteContainer.buttons.$addNote.style.visibility='visible';
    newNoteContainer.$note.classList.add(colors[newNoteContainer.colorNumber]);
    newNoteContainer.$header.classList.add(colors[newNoteContainer.colorNumber]);
    newNoteContainer.$text.classList.add(colors[newNoteContainer.colorNumber]);
}

function uncolorAddingNote (newNoteContainer) {
    if (!(newNoteContainer.$header.value != "" || newNoteContainer.$text.value != "" 
    || newNoteContainer.imageSrc != "")) {
        newNoteContainer.buttons.$addNote.style.visibility='hidden';
        newNoteContainer.$note.classList.remove(colors[newNoteContainer.colorNumber]);
        newNoteContainer.$header.classList.remove(colors[newNoteContainer.colorNumber]);
        newNoteContainer.$text.classList.remove(colors[newNoteContainer.colorNumber]);
    }
}

NewNoteContainer.Prior.$header.addEventListener('input', function() {
    auto_grow(NewNoteContainer.Prior.$header);
})

NewNoteContainer.Prior.$text.addEventListener('input', function() {
    auto_grow(NewNoteContainer.Prior.$text);
})

NewNoteContainer.Common.$header.addEventListener('input', function() {
    auto_grow(NewNoteContainer.Common.$header);
})

NewNoteContainer.Common.$text.addEventListener('input', function() {
    auto_grow(NewNoteContainer.Common.$text);
})



NewNoteContainer.Prior.$header.addEventListener('focus', function() {
    colorAddingNote(NewNoteContainer.Prior);
})

NewNoteContainer.Prior.$text.addEventListener('focus', function() {
    colorAddingNote(NewNoteContainer.Prior);
})

NewNoteContainer.Common.$header.addEventListener('focus', function() {
    colorAddingNote(NewNoteContainer.Common);
})

NewNoteContainer.Common.$text.addEventListener('focus', function() {
    colorAddingNote(NewNoteContainer.Common);
})



NewNoteContainer.Prior.$header.addEventListener('blur', function() {
    if (NewNoteContainer.Prior.$text.value.length + NewNoteContainer.Prior.$header.value.length===0)
    uncolorAddingNote(NewNoteContainer.Prior);
})

NewNoteContainer.Prior.$text.addEventListener('blur', function() {
    if (NewNoteContainer.Prior.$text.value.length + NewNoteContainer.Prior.$header.value.length===0)
    uncolorAddingNote(NewNoteContainer.Prior);
})

NewNoteContainer.Common.$header.addEventListener('blur', function() {
    if (NewNoteContainer.Common.$text.value.length + NewNoteContainer.Common.$header.value.length===0)
    uncolorAddingNote(NewNoteContainer.Common);
})

NewNoteContainer.Common.$text.addEventListener('blur', function() {
    if (NewNoteContainer.Common.$text.value.length + NewNoteContainer.Common.$header.value.length===0)
    uncolorAddingNote(NewNoteContainer.Common);
})