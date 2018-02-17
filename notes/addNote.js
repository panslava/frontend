function addNewNote (inputNoteContainer) {
    let newNote = makeNewNote(inputNoteContainer);
    if (inputNoteContainer.groupName === undefined) {
        inputNoteContainer.groupName = "Common";
    }
    inputNoteContainer.$group = NewNoteContainer[inputNoteContainer.groupName].$group;
    newNote.group = inputNoteContainer.groupName;
    inputNoteContainer.$group.insertBefore(newNote.$note, inputNoteContainer.$group.children[1]);
}

/*
// кнопка добавления заметки
NewNoteContainer.Prior.buttons.$addNote.addEventListener('click', function () {
    uncolorNote(NewNoteContainer.Prior);
    let addingData = getDataFromContainer(NewNoteContainer.Prior);
    addNewNote(addingData);
    clearNote(NewNoteContainer.Prior);
})
*/
/*
NewNoteContainer.Common.buttons.$addNote.addEventListener('click', function () { 
    uncolorNote(NewNoteContainer.Common);
    let addingData = getDataFromContainer(NewNoteContainer.Common);
    addNewNote(addingData);
    clearNote(NewNoteContainer.Common);
})
*/
//кнопка добавления картинки (открытие popup меню)
/*
NewNoteContainer.Prior.buttons.$addImage.addEventListener('click', function () {
    NewNoteContainer.Prior.buttons.$addImage.state = 
    (NewNoteContainer.Prior.buttons.$addImage.state + 1) % 2;
    if (NewNoteContainer.Prior.buttons.$addImage.state == 1) {
        colorNote(NewNoteContainer.Prior);
        openImagePopupBar(NewNoteContainer.Prior);
    }
    else {
        uncolorNote(NewNoteContainer.Prior);
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
*/
function makeNewNote(note_obj) {
    console.log(note_obj);
    let resultNote = createNoteElements();

    if ("header" in note_obj) {
        resultNote.$header.textContent = note_obj.header;
        resultNote.$contentOverlay.appendChild(resultNote.$header);
    }

    if ("text" in note_obj) {
        resultNote.$text.textContent = note_obj.text;
        resultNote.$contentOverlay.appendChild(resultNote.$text); 
    }

    if ("imageSrc" in note_obj) {
        resultNote.$image.src = note_obj.imageSrc;
        resultNote.$note.appendChild(resultNote.$imageOverlay);
    }

    if ("colorNumber" in note_obj) {
        resultNote.colorNumber = note_obj.colorNumber;
    }

    resultNote.$actions.classList.add('actions');
    resultNote.colorNumber = note_obj.colorNumber;
    resultNote.$note.classList.add(colors[resultNote.colorNumber]);
    return resultNote;
}
    
function createNoteElements () {
    let resultNote = new Object();
    resultNote.buttons = new Object();
    resultNote.$note = document.createElement('div');
    resultNote.$note.classList.add('notes');
    resultNote.buttons.$addNote = document.createElement('div');
    resultNote.buttons.$addNote.classList.add("applyButton");
    resultNote.buttons.$addNoteImg = document.createElement('img');
    resultNote.buttons.$addNoteImg.src = tickButtonImgPath;
    resultNote.buttons.$addNote.appendChild(resultNote.buttons.$addNoteImg);
    resultNote.$note.appendChild(resultNote.buttons.$addNote);
    resultNote.$header = document.createElement('div');
    resultNote.$header.classList.add('header');
    resultNote.$headerInput = document.createElement('textarea');
    resultNote.$headerInput.classList.add("header");
    resultNote.$headerInput.visibility='hidden';
    resultNote.$headerInput.placeholder="Заголовок";
    resultNote.$headerInput.value="";
    resultNote.$header.appendChild(resultNote.$headerInput);
    resultNote.$text = document.createElement('div');
    resultNote.$text.classList.add("text")
    resultNote.$textInput = document.createElement('textarea');
    resultNote.$textInput.classList.add('text');
    resultNote.$textInput.value="";
    resultNote.$textInput.visibility='hidden';
    resultNote.$textInput.placeholder="Текст заметки";
    resultNote.$text.appendChild(resultNote.$textInput);
    resultNote.imageSrc = "";

    //all service elements
    resultNote.$contentOverlay = document.createElement('div');
    resultNote.$contentOverlay.appendChild(resultNote.$header);
    resultNote.$contentOverlay.appendChild(resultNote.$text);
    resultNote.$contentOverlay.classList.add('contentOverlay');
    resultNote.$imageOverlay = document.createElement('div');
    resultNote.$imageOverlay.classList.add('image');
    resultNote.$image = document.createElement('img');
    resultNote.$image.classList.add('image');
    resultNote.$imageOverlay.appendChild(resultNote.$image);


    //actions
    resultNote.$actions = document.createElement('div');
    resultNote.$actions.classList.add('actions');

    //addImage
    resultNote.$addImage = document.createElement('div');
    resultNote.$addImage.classList.add('addImage');
    resultNote.$actions.appendChild(resultNote.$addImage);
    resultNote.$addImagePopupDiv = document.createElement('div');
    resultNote.$addImagePopupDiv.classList.add('addImagePopupDiv');
    resultNote.$addImage.appendChild(resultNote.$addImagePopupDiv);
    resultNote.$addImageSrcPopup = document.createElement('input');
    resultNote.$addImageSrcPopup.classList.add("addImageSrcPopup");
    resultNote.$addImageSrcPopup.placeholder = "Ссылка на картинку";
    resultNote.$addImagePopupDiv.appendChild(resultNote.$addImageSrcPopup);
    resultNote.buttons.$addImagePopupApply = document.createElement('img');
    resultNote.buttons.$addImagePopupApply.src = applyAddingImageButtonImgPath;
    resultNote.$addImagePopupDiv.appendChild(resultNote.buttons.$addImagePopupApply);
    resultNote.buttons.$addImagePopupApply.addEventListener('click',function() {
        if (resultNote.imageSrc.value != "") {
            addImage(resultNote, resultNote.imageSrc);
        }
        resultNote.buttons.$addImage.state = 0;
        resultNote.$addImagePopupDiv.style.visibility = "hidden";
        resultNote.$addImageSrcPopup.value = "";
    })
    resultNote.buttons.$addImage = document.createElement('div');
    resultNote.buttons.$addImage.classList.add('addImageButton');
    resultNote.buttons.$addImageImg = document.createElement('img');
    resultNote.buttons.$addImageImg.src = addImageButtonImgPath;
    resultNote.buttons.$addImage.appendChild(resultNote.buttons.$addImageImg);
    resultNote.$addImage.appendChild(resultNote.buttons.$addImage);
    resultNote.buttons.$addImage.state = 0;
    resultNote.buttons.$addImage.addEventListener('click',function() {
        resultNote.buttons.$addImage.state = (resultNote.buttons.$addImage.state + 1)%2;
        if (resultNote.buttons.$addImage.state == 1) openImagePopupBar(resultNote);
        else closeImagePopupBar(resultNote);
    })



    resultNote.buttons.$deleteImage = document.createElement('img');
    resultNote.buttons.$deleteImage.src = deleteImageButtonPath;
    resultNote.buttons.$deleteImage.classList.add('deleteImageButton');
    resultNote.buttons.$deleteImage.addEventListener('click', function() {
        deleteImage(resultNote)
    });
    resultNote.$imageOverlay.appendChild(resultNote.buttons.$deleteImage);
    resultNote.buttons.$editButtonDiv = document.createElement('div');
    resultNote.buttons.$editButtonImage = document.createElement('img');
    resultNote.buttons.$editButtonImage.src = editButtonImgPath;
   // resultNote.buttons.$deleteImage = 
    resultNote.$addImageSrcPopup = document.createElement('input');
    resultNote.$addImageSrcPopup.classList.add('addImageSrcPopup');
    resultNote.$editButtonDiv = document.createElement('div');
    resultNote.$editButtonDiv.classList.add('editButton');
    resultNote.$editButtonImage = document.createElement('img');
    resultNote.colorNumber = 0;

    resultNote.$note.appendChild(resultNote.$contentOverlay);
    resultNote.$note.appendChild(resultNote.$actions);  
    return resultNote;
}

function getDataFromContainer (newNoteContainer) {
    let data = new Object();
    data.header = newNoteContainer.$header.value;
    data.text = newNoteContainer.$text.value;
    data.groupName = newNoteContainer.groupName;
    data.imageSrc = newNoteContainer.imageSrc;
    data.colorNumber = newNoteContainer.colorNumber;
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
    if (imageSrc != "") {
        NoteContainer.$text.style.height = "20px";
        NoteContainer.$header.style.minHeight = "40px";
        NoteContainer.$header.style.height = "40px";
        NoteContainer.buttons.$deleteImage.style.visibility = 'visible';
        auto_grow(NoteContainer.$header);
        auto_grow(NoteContainer.$text);
        NoteContainer.$contentOverlay.style.paddingTop = "0.8rem";
        NoteContainer.imageSrc = imageSrc;
        NoteContainer.$image.src = imageSrc;
        NoteContainer.$note.insertBefore(
            NoteContainer.$imageOverlay, NoteContainer.$contentOverlay);
    }
}

function deleteImage (NoteContainer) {
    if (NoteContainer.$image!=undefined) NoteContainer.$image.remove();
    if (NoteContainer.$imageOverlay!=undefined) NoteContainer.$imageOverlay.remove();
    NoteContainer.$contentOverlay.removeAttribute("style")
    NoteContainer.$note.removeAttribute("style");
    NoteContainer.$header.removeAttribute("style");
    NoteContainer.$text.removeAttribute("style");
    NoteContainer.imageSrc = "";
    auto_grow(NoteContainer.$header);
    auto_grow(NoteContainer.$text);
    NoteContainer.$image = undefined;
    NoteContainer.$imageOverlay = undefined;
    uncolorNote(NoteContainer);
}