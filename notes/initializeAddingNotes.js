let AddingPriorNote = createNoteElements();
makeNoteEditable(AddingPriorNote);
AddingPriorNote.buttons.$addNote.style.visibility = "hidden";

/*
AddingPriorNote.buttons.$addNote = document.createElement('div');
AddingPriorNote.buttons.$addNote.classList.add("applyButton");
AddingPriorNote.buttons.$addNoteImg = document.createElement('img');
AddingPriorNote.buttons.$addNoteImg.src = tickButtonImgPath;
AddingPriorNote.buttons.$addNote.appendChild(AddingPriorNote.buttons.$addNoteImg);
AddingPriorNote.$note.appendChild(AddingPriorNote.buttons.$addNote);
*/

AddingPriorNote.buttons.$addNote.addEventListener('click', function () {
    uncolorNote(AddingPriorNote);
    let addingData = getDataFromContainer(AddingPriorNote);
    addNewNote(addingData);
    clearNote(AddingPriorNote);
})

AddingPriorNote.buttons.$addImage.addEventListener('click', function () {
    if (AddingPriorNote.buttons.$addImage.state == 1) {
        colorNote(AddingPriorNote);
    }
    else {
        uncolorNote(AddingPriorNote);
    }
})

let AddingCommonNote = createNoteElements();
makeNoteEditable(AddingCommonNote);

AddingCommonNote.buttons.$addNote = document.createElement('div');
AddingCommonNote.buttons.$addNoteImg = document.createElement('img');
AddingCommonNote.buttons.$addNoteImg.src = tickButtonImgPath;
AddingCommonNote.buttons.$addNote.appendChild(AddingCommonNote.buttons.$addNoteImg);

AddingCommonNote.buttons.$addNote.addEventListener('click', function () {
    uncolorNote(AddingCommonNote);
    let addingData = getDataFromContainer(AddingCommonNote);
    addNewNote(addingData);
    clearNote(AddingCommonNote);
})

AddingCommonNote.buttons.$addImage.addEventListener('click', function () {
    if (AddingCommonNote.buttons.$addImage.state == 1) {
        colorNote(AddingCommonNote);
    }
    else {
        uncolorNote(AddingCommonNote);
    }
})

AddingPriorNote.$headerInput.addEventListener('focus', function() {
    colorNote(AddingPriorNote);
})

AddingPriorNote.$textInput.addEventListener('focus', function() {
    colorNote(AddingPriorNote);
})

AddingCommonNote.$headerInput.addEventListener('focus', function() {
    colorNote(AddingCommonNote);
})

AddingCommonNote.$textInput.addEventListener('focus', function() {
    colorNote(AddingCommonNote);
})



AddingPriorNote.$headerInput.addEventListener('blur', function() {
    if (AddingPriorNote.$textInput.value.length + AddingPriorNote.$headerInput.value.length===0)
    uncolorNote(AddingPriorNote);
})

AddingPriorNote.$textInput.addEventListener('blur', function() {
    if (AddingPriorNote.$textInput.value.length + AddingPriorNote.$headerInput.value.length===0)
    uncolorNote(AddingPriorNote);
})

AddingCommonNote.$headerInput.addEventListener('blur', function() {
    if (AddingCommonNote.$textInput.value.length + AddingCommonNote.$headerInput.value.length===0)
    uncolorNote(AddingCommonNote);
})

AddingCommonNote.$textInput.addEventListener('blur', function() {
    if (AddingCommonNote.$textInput.value.length + AddingCommonNote.$headerInput.value.length===0)
    uncolorNote(AddingCommonNote);
})



auto_grow(AddingPriorNote.$header);
auto_grow(AddingPriorNote.$text);
auto_grow(AddingCommonNote.$header);
auto_grow(AddingCommonNote.$text);
document.getElementById("priority").appendChild(AddingPriorNote.$note);
document.getElementById("normal").appendChild(AddingCommonNote.$note);