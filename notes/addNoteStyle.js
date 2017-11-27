const $addPriorHeader = document.getElementById("addPriorHeader");
const $addPriorText = document.getElementById("addPriorText");
const $addCommonHeader = document.getElementById("addCommonHeader");
const $addCommonText = document.getElementById("addCommonText");
const $addPriorNote = document.getElementById("addPriorNote");
const $addCommonNote = document.getElementById("addCommonNote");

var colorNumber=0;
var colors = ['red','orange','yellow','lightgreen','blue','pink'];

function setStyle (addNoteContent) {
    auto_grow(addNoteContent.header);
    auto_grow(addNoteContent.text);
    if (addNoteContent.text.value.length + addNoteContent.header.value.length>0) {
        addNoteContent.button.style.visibility='visible';
        addNoteContent.note.classList.add(colors[colorNumber]);
        addNoteContent.header.classList.add(colors[colorNumber]);
        addNoteContent.text.classList.add(colors[colorNumber]);
    }
    else {
        addNoteContent.button.style.visibility='hidden';
        addNoteContent.note.classList.remove(colors[colorNumber]);
        addNoteContent.header.classList.remove(colors[colorNumber]);
        addNoteContent.text.classList.remove(colors[colorNumber]);
    }
}

function addPrior () {
    let newPriorNote = new Object();
    newPriorNote.note = $addPriorNote;
    newPriorNote.header = $addPriorHeader;
    newPriorNote.text = $addPriorText;
    newPriorNote.button = $applyButtonPrior;
    setStyle(newPriorNote);
}

function addCommon () {
    let newCommonNote = new Object();
    newCommonNote.note = $addCommonNote;
    newCommonNote.header = $addCommonHeader;
    newCommonNote.text = $addCommonText;
    newCommonNote.button = $applyButtonCommon;
    setStyle(newCommonNote);
}

$addPriorHeader.addEventListener('keyup', function() {
    addPrior();
})

$addPriorText.addEventListener('keyup', function() {
    addPrior();
})

$addCommonHeader.addEventListener('keyup', function() {
    addCommon();
})

$addCommonText.addEventListener('keyup', function() {
    addCommon();
})