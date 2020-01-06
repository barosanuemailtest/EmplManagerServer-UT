exports.join = function (...strArray) {
    const argsArray = [...strArray];
    const finalUrl = [];
    for (const arg of argsArray) {
        if (arg) {
            finalUrl.push(addSlashAtEnd(arg));
        }
    }
    return finalUrl.join('');
};

function addSlashAtEnd(url) {
    const urlAsString = String(url);
    if (!urlAsString.endsWith('/') && !urlAsString.startsWith('?')) {
        return urlAsString.concat('/');
    } else {
        return urlAsString;
    }
}
