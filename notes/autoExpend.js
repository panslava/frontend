function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

//we need to run it on load, to make fields right size
auto_grow(NewNoteContainer.Prior.$header);
auto_grow(NewNoteContainer.Prior.$text);
auto_grow(NewNoteContainer.Common.$header);
auto_grow(NewNoteContainer.Common.$text);