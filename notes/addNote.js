function addNewNote (inputNoteContainer) {
    let newNote = makeNewNote(inputNoteContainer);
    if (inputNoteContainer.groupName === undefined) {
        inputNoteContainer.groupName = "Common";
    }
    inputNoteContainer.$group = NewNoteContainer[inputNoteContainer.groupName].$group;
    inputNoteContainer.colorNumber = NewNoteContainer[inputNoteContainer.groupName].colorNumber;
    newNote.classList.add(colors[inputNoteContainer.colorNumber]);
    inputNoteContainer.$group.insertBefore(newNote, inputNoteContainer.$group.children[1]);
    
    NewNoteContainer[inputNoteContainer.groupName].colorNumber++;
    NewNoteContainer[inputNoteContainer.groupName].colorNumber %= colors.length;
}

// кнопка добавления заметки
NewNoteContainer.Prior.buttons.$addNote.addEventListener('click', function () {
    let addingData = getDataFromContainer(NewNoteContainer.Prior);
    uncolorAddingNote(NewNoteContainer.Prior);
    addNewNote(addingData);
    NewNoteContainer.Prior.$header.value = "";
    NewNoteContainer.Prior.$text.value = "";
})

NewNoteContainer.Common.buttons.$addNote.addEventListener('click', function () { 
    let addingData = getDataFromContainer(NewNoteContainer.Common);
    uncolorAddingNote(NewNoteContainer.Common);
    addNewNote(addingData);
    NewNoteContainer.Common.$header.value = "";
    NewNoteContainer.Common.$text.value = "";
})

//кнопка добавления картинки (открытие popup меню)
NewNoteContainer.Prior.buttons.$addImage.addEventListener('click', function () {
    NewNoteContainer.Prior.buttons.$addImage.state = 
    (NewNoteContainer.Prior.buttons.$addImage.state + 1) % 2;
    if (NewNoteContainer.Prior.buttons.$addImage.state == 1) {
        colorAddingNote(NewNoteContainer.Prior);
        openImagePopupBar(NewNoteContainer.Prior);
    }
    else {
        uncolorAddingNote(NewNoteContainer.Prior);
        closeImagePopupBar(NewNoteContainer.Prior);
    }
})

//кнопка добавления картинки внутри popup (apply)
NewNoteContainer.Prior.buttons.$addImagePopupApply.addEventListener('click', function () {
    if (document.getElementById('addImageSrcPopupPrior').value != "") {
        addImage(NewNoteContainer.Prior, document.getElementById('addImageSrcPopupPrior').value);
    }
    NewNoteContainer.Prior.buttons.$addImage.state = 0;
    NewNoteContainer.Prior.$addImagePopupDiv.style.visibility = "hidden";
    NewNoteContainer.Prior.$addImageSrcPopup.value = "";
})

function makeNewNote(note_obj) {
    console.log(note_obj);
    let note = document.createElement('div');
    note.classList.add('notes');

    let contentOverlay = document.createElement('div');
    contentOverlay.classList.add('contentOverlay');

    if ("header" in note_obj) {
        let header = document.createElement('div');
        header.classList.add('header');
        header.textContent = note_obj.header;
        contentOverlay.appendChild(header);
    }

    if ("text" in note_obj) {
        let text = document.createElement('div');
        text.textContent = note_obj.text;
        contentOverlay.appendChild(text); 
    }

    if ("imageSrc" in note_obj) {
        let image = document.createElement('img');
        let imageOverlay = document.createElement('div');
        image.src = note_obj.imageSrc;
        image.classList.add('image');
        //imageOverlay.classList.add('image');
        //imageOverlay.appendChild(image);
        note.appendChild(image);
    }

    let actions = document.createElement('div');
    actions.classList.add('actions');
  //  actions.textContent="Actions";
    
    let editButtonDiv = document.createElement('div');
    let editButtonImage = document.createElement('img');
    editButtonImage.src = editButtonImgPath;
    editButtonDiv.classList.add("editButton");
    editButtonDiv.appendChild(editButtonImage);
    actions.appendChild(editButtonDiv);

    note.appendChild(contentOverlay);
    note.appendChild(actions);

    return note;
}

function getDataFromContainer (newNoteContainer) {
    let data = new Object();
    data.header = newNoteContainer.$header.value;
    data.text = newNoteContainer.$text.value;
    data.groupName = newNoteContainer.groupName;
    data.imageSrc = newNoteContainer.imageSrc;
    return data;
}

function clearNote (NoteContainer) {
    NoteContainer.$header.value = "";
    NoteContainer.$text.value = "";
    deleteImage(NoteContainer);
}

function openImagePopupBar (NoteContainer) {
    NoteContainer.$addImagePopupDiv.style.visibility = 'visible';
}

function closeImagePopupBar (NoteContainer) {
    NoteContainer.$addImagePopupDiv.style.visibility = 'hidden';
}

function addImage (NoteContainer, imageSrc) {
    if (imageSrc!="") {
        NoteContainer.$text.style.height = "20px";
        NoteContainer.$header.style.minHeight = "40px";
        NoteContainer.$header.style.height = "40px";
        auto_grow(NoteContainer.$header);
        auto_grow(NoteContainer.$text);
        NoteContainer.$contentOverlay.style.paddingTop = "0.8rem";
        NoteContainer.imageSrc = imageSrc;
        let $newImageOverlay = document.createElement('div');
        let $newImage = document.createElement('img');
        let $deleteImageButton = document.createElement('img');
        $newImageOverlay.classList.add("image");
        $newImage.classList.add("image");
        $newImage.src = imageSrc;
        $newImageOverlay.appendChild($newImage);
        NoteContainer.$imageOverlay = $newImageOverlay;
        NoteContainer.$image = $newImage;
        $deleteImageButton.addEventListener('click', function() {
            deleteImage(NoteContainer)
        });
        $deleteImageButton.src = deleteImageButtonPath;
        $deleteImageButton.classList.add('deleteImageButton');
        $newImageOverlay.appendChild($deleteImageButton);
        NoteContainer.$note.insertBefore(
            $newImageOverlay, NoteContainer.$contentOverlay);
    }
}

function deleteImage (NoteContainer) {
    NoteContainer.$image.remove();
    NoteContainer.$imageOverlay.remove();
    NoteContainer.$contentOverlay.removeAttribute("style")
    NoteContainer.$note.removeAttribute("style");
    NoteContainer.$header.removeAttribute("style");
    NoteContainer.$text.removeAttribute("style");
    NoteContainer.imageSrc = "";
    auto_grow(NoteContainer.$header);
    auto_grow(NoteContainer.$text);
    NoteContainer.$image = undefined;
    NoteContainer.$imageOverlay = undefined;
    uncolorAddingNote(NoteContainer);
}