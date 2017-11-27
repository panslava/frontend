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

function setStyle (newNoteContainer) {
    auto_grow(newNoteContainer.$header);
    auto_grow(newNoteContainer.$text);
    if (newNoteContainer.$text.value.length + newNoteContainer.$header.value.length>0) {
        newNoteContainer.$button.style.visibility='visible';
        newNoteContainer.$note.classList.add(colors[newNoteContainer.colorNumber]);
        newNoteContainer.$header.classList.add(colors[newNoteContainer.colorNumber]);
        newNoteContainer.$text.classList.add(colors[newNoteContainer.colorNumber]);
    }
    else {
        newNoteContainer.$button.style.visibility='hidden';
        newNoteContainer.$note.classList.remove(colors[newNoteContainer.colorNumber]);
        newNoteContainer.$header.classList.remove(colors[newNoteContainer.colorNumber]);
        newNoteContainer.$text.classList.remove(colors[newNoteContainer.colorNumber]);
    }
}

NewNoteContainer.Prior.$header.addEventListener('input', function() {
    setStyle(NewNoteContainer.Prior);
})

NewNoteContainer.Prior.$text.addEventListener('input', function() {
    setStyle(NewNoteContainer.Prior);
})

NewNoteContainer.Common.$header.addEventListener('input', function() {
    setStyle(NewNoteContainer.Common);
})

NewNoteContainer.Common.$text.addEventListener('input', function() {
    setStyle(NewNoteContainer.Common);
})