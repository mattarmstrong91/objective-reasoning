// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
{
    firstName: String,
    lastname: String,
    userRole: String
}
```

**Examples**
```
isAdmin({
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
})
=> false
isAdmin({
    firstName: 'Ian',
    lastName: 'Rogers', 
    userRole: 'USER_MANAGER'
})
=> false
isAdmin({
    firstName: 'Jeff',
    lastName: 'Wilson', 
    userRole: 'ADMIN'
})
=> true
```

## `getEmail`



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};
