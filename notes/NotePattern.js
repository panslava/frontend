class NotePattern {
    constructor (note, header, text, group, editButton, addImageButton, colorNumber, groupName) {
        this.$note = note;
        this.$header = header;
        this.$text = text;
        this.$group = group;
        this.$editButton = editButton;
        this.$addImageButton = addImageButton;
        this.colorNumber = colorNumber;
        this.groupName = groupName;
    }
}