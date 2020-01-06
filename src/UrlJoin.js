exports.join = function (...strArray) {
    const argsArray = [...strArray];
    if (argsArray.length > 0) {
        return argsArray[0] + argsArray[1];
    } else {
        return '';
    }
};

function addSlashAtEnd(url) {
    const urlAsString = String(url);
    if (!urlAsString.endsWith('/')) {
        return urlAsString.concat('/');
    }
}
