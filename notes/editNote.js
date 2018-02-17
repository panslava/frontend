function makeNoteEditable (NoteContainer) {
    NoteContainer.$header.visibility='hidden';
    NoteContainer.$headerInput.visibility='visible';
    if (NoteContainer.$header.value === undefined)
    NoteContainer.$headerInput.value = NoteContainer.$header.value;
    NoteContainer.$text.visibility='hidden';
    NoteContainer.$textInput.visibility='visible';
    NoteContainer.$textInput.value = NoteContainer.$text.value;
    NoteContainer.buttons.$addNote.style.visibility = 'visible';
    if (NoteContainer.imageSrc!="") NoteContainer.buttons.$deleteImage.style.visibility = 'visible';
    NoteContainer.$actions.style.visibility = 'visible';

}