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

NewNoteContainer.Prior.$button.addEventListener('click', function () {
    let addingData = getDataFromContainer(NewNoteContainer.Prior);
    NewNoteContainer.Prior.$button.style.visibility = "hidden";
    NewNoteContainer.Prior.$note.classList.remove(colors[NewNoteContainer.Prior.colorNumber]);
    NewNoteContainer.Prior.$header.classList.remove(colors[NewNoteContainer.Prior.colorNumber]);
    NewNoteContainer.Prior.$text.classList.remove(colors[NewNoteContainer.Prior.colorNumber]);
    addNewNote(addingData);
    NewNoteContainer.Prior.$header.value = "";
    NewNoteContainer.Prior.$text.value = "";
})

NewNoteContainer.Common.$button.addEventListener('click', function () { 
    let addingData = getDataFromContainer(NewNoteContainer.Common);
    NewNoteContainer.Common.$button.style.visibility = "hidden";
    NewNoteContainer.Common.$note.classList.remove(colors[NewNoteContainer.Common.colorNumber]);
    NewNoteContainer.Common.$header.classList.remove(colors[NewNoteContainer.Common.colorNumber]);
    NewNoteContainer.Common.$text.classList.remove(colors[NewNoteContainer.Common.colorNumber]);
    addNewNote(addingData);
    NewNoteContainer.Common.$header.value = "";
    NewNoteContainer.Common.$text.value = "";
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

    if ("image" in note_obj) {
        let image = document.createElement('img');
        let imageOverlay = document.createElement('div');
        image.src = note_obj.image;
        imageOverlay.classList.add('image');
        imageOverlay.appendChild(image);
        note.appendChild(imageOverlay);
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
    return data;
}