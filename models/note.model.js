module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define("notes", {
        userid: {
            type: Sequelize.STRING
        },
        noteTitle: {
            type: Sequelize.STRING
        },
        noteDescription: {
            type: Sequelize.STRING
        }
    });

    return Note;
};