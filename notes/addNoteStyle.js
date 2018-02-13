class AddContainer {
    constructor (note, header, text, button, group, colorNumber, groupName) {
        this.$note = note;
        this.$header = header;
        this.$text = text;
        this.$button = button;
        this.$group = group;
        this.colorNumber = colorNumber;
        this.groupName = groupName;
    }
}

var NewNoteContainer = new Object();


NewNoteContainer.Prior = new AddContainer(
    document.getElementById("addPriorNote"),
    document.getElementById("addPriorHeader"),
    document.getElementById("addPriorText"),
    document.getElementById("applyButtonPrior"),
    document.querySelector('.priority'),
    0,
    "Prior"
);

NewNoteContainer.Common = new AddContainer(
    document.getElementById("addCommonNote"),
    document.getElementById("addCommonHeader"),
    document.getElementById("addCommonText"),
    document.getElementById("applyButtonCommon"),
    document.querySelector('.normal'),
    0,
    "Common"
);

var colors = ['red','orange','yellow','lightgreen','blue','pink'];

function colorNote (newNoteContainer) {
    newNoteContainer.$button.style.visibility='visible';
    newNoteContainer.$note.classList.add(colors[newNoteContainer.colorNumber]);
    newNoteContainer.$header.classList.add(colors[newNoteContainer.colorNumber]);
    newNoteContainer.$text.classList.add(colors[newNoteContainer.colorNumber]);
}

function uncolorNote (newNoteContainer) {
    newNoteContainer.$button.style.visibility='hidden';
    newNoteContainer.$note.classList.remove(colors[newNoteContainer.colorNumber]);
    newNoteContainer.$header.classList.remove(colors[newNoteContainer.colorNumber]);
    newNoteContainer.$text.classList.remove(colors[newNoteContainer.colorNumber]);
}

function setSize (newNoteContainer) {
    auto_grow(newNoteContainer.$header);
    auto_grow(newNoteContainer.$text);
}

NewNoteContainer.Prior.$header.addEventListener('input', function() {
    setSize(NewNoteContainer.Prior);
})

NewNoteContainer.Prior.$text.addEventListener('input', function() {
    setSize(NewNoteContainer.Prior);
})

NewNoteContainer.Common.$header.addEventListener('input', function() {
    setSize(NewNoteContainer.Common);
})

NewNoteContainer.Common.$text.addEventListener('input', function() {
    setSize(NewNoteContainer.Common);
})



NewNoteContainer.Prior.$header.addEventListener('focus', function() {
    colorNote(NewNoteContainer.Prior);
})

NewNoteContainer.Prior.$text.addEventListener('focus', function() {
    colorNote(NewNoteContainer.Prior);
})

NewNoteContainer.Common.$header.addEventListener('focus', function() {
    colorNote(NewNoteContainer.Common);
})

NewNoteContainer.Common.$text.addEventListener('focus', function() {
    colorNote(NewNoteContainer.Common);
})



NewNoteContainer.Prior.$header.addEventListener('blur', function() {
    if (NewNoteContainer.Prior.$text.value.length + NewNoteContainer.Prior.$header.value.length===0)
    uncolorNote(NewNoteContainer.Prior);
})

NewNoteContainer.Prior.$text.addEventListener('blur', function() {
    if (NewNoteContainer.Prior.$text.value.length + NewNoteContainer.Prior.$header.value.length===0)
    uncolorNote(NewNoteContainer.Prior);
})

NewNoteContainer.Common.$header.addEventListener('blur', function() {
    if (NewNoteContainer.Common.$text.value.length + NewNoteContainer.Common.$header.value.length===0)
    uncolorNote(NewNoteContainer.Common);
})

NewNoteContainer.Common.$text.addEventListener('blur', function() {
    if (NewNoteContainer.Common.$text.value.length + NewNoteContainer.Common.$header.value.length===0)
    uncolorNote(NewNoteContainer.Common);
})
