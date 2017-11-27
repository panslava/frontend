const $applyButtonPrior = document.getElementById("applyButtonPrior");
const $applyButtonCommon = document.getElementById("applyButtonCommon");

$applyButtonPrior.addEventListener('click', function () { 
    if (($addPriorHeader.value.length + $addPriorText.value.length) > 0) {
        let note_obj = new Object();
        if ($addPriorHeader.value.length > 0) note_obj.header = $addPriorHeader.value;
        if ($addPriorText.value.length > 0) note_obj.text = $addPriorText.value;
        console.log(note_obj);
        let newNote = makeNewNote(note_obj);
        newNote.group = 'priority';
        newNote.classList.add(colors[colorNumber]);
        priority.insertBefore(newNote,priority.nextSubling);
        $applyButtonPrior.style.visibility='hidden';
        $addPriorNote.classList.remove(colors[colorNumber]);
        $addPriorHeader.classList.remove(colors[colorNumber]);
        $addPriorHeader.value='';
        $addPriorText.classList.remove(colors[colorNumber]);
        $addPriorText.value='';
        colorNumber++;
        colorNumber %= colors.length;
    } 
})

$applyButtonCommon.addEventListener('click', function () { 
    if (($addCommonHeader.value.length + $addCommonText.value.length) > 0) {
        let note_obj = new Object();
        if ($addCommonHeader.value.length > 0) note_obj.header = $addCommonHeader.value;
        if ($addCommonText.value.length > 0) note_obj.text = $addCommonText.value;
        console.log(note_obj);
        let newNote = makeNewNote(note_obj);
        newNote.group = 'normal';
        newNote.classList.add(colors[colorNumber]);
        normal.appendChild(newNote);
        $applyButtonCommon.style.visibility='hidden';
        $addCommonNote.classList.remove(colors[colorNumber]);
        $addCommonHeader.classList.remove(colors[colorNumber]);
        $addCommonText.classList.remove(colors[colorNumber]);
        colorNumber++;
        colorNumber %= colors.length;
    } 
})

function makeNewNote(note_obj) {

    let note = document.createElement('div');
    note.classList.add('notes');
   // note.classList.add(note_obj.color);

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
    actions.textContent="Actions";

    note.appendChild(contentOverlay);
    note.appendChild(actions);

    return note;
}

