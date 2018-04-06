module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('Comment', {
        content: {
            type: DataTypes.TEXT,
        }
    });
    return Comment
}