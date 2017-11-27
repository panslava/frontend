function makeNote(note_obj) {

    let note = document.createElement('div');
    note.classList.add('notes');
    note.classList.add(note_obj.color);

    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = note_obj.title;

    let text = document.createElement('div');
    text.textContent = note_obj.content;

    let contentOverlay = document.createElement('div');
    contentOverlay.classList.add('contentOverlay');

    contentOverlay.appendChild(header);
    contentOverlay.appendChild(text); 
    
    let actionsOverlay = document.createElement('div');
    actionsOverlay.classList.add('actionsOverlay');

    let actions = document.createElement('div');
    actions.classList.add('actions');
    actions.textContent="Actions";

    if ("image" in note_obj) {
        let image = document.createElement('img');
        image.src = note_obj.image;
        let imageOverlay = document.createElement('div');
        imageOverlay.classList.add('image');
        imageOverlay.appendChild(image);
        note.appendChild(imageOverlay);
    }

    note.appendChild(contentOverlay);
    note.appendChild(actions);
    return note;
}

let main = document.querySelector('.main');
let priority = document.querySelector('.priority');
let normal = document.querySelector('.normal');

for (let note of data) {
    if (note.group=='priority') priority.appendChild(makeNote(note))
    else normal.appendChild(makeNote(note));
}