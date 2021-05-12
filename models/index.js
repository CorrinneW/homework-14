const User = require('./User.js');
const Entry = require('./Entry.js');
const Comment = require('./Comment.js');

User.hasMany(Entry, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Entry.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Entry, {
    through: Comment
})

Entry.hasMany(Comment, {
    foreignKey: 'entry_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Entry, {
    foreignKey: 'entry_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Entry, Comment };