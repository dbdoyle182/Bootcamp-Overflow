module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.TEXT,
        }
    });
    return Post
}