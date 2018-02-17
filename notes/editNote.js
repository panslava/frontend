function makeNoteEditable (NoteContainer) {
    NoteContainer.$header.style.visibility='hidden';
    NoteContainer.$headerInput.style.visibility='visible';
    NoteContainer.$headerInput.innerHTML = NoteContainer.$header.innerHTML;
    NoteContainer.$text.style.visibility='hidden';
    NoteContainer.$textInput.style.visibility='visible';
    NoteContainer.$textInput.value = NoteContainer.$text.innerHTML;
    NoteContainer.buttons.$addNote.style.visibility = 'visible';
    if (NoteContainer.imageSrc!="") NoteContainer.buttons.$deleteImage.style.visibility = 'visible';
    NoteContainer.$actions.style.visibility = 'visible';

}