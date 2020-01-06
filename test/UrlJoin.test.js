const assert = require('assert');

const urlJoin = require('../src/UrlJoin');

describe.skip('UrlJoin', () => {
    it('should join url-s', () => {
        const joinedUrl = urlJoin.join('baseUrl', 'secondUrl');
        assert.equal(joinedUrl, 'baseUrl/secondUrl/');
    });

    it('should return empty for no args', () => {
        assert.equal(urlJoin.join(), '');
    });

    it('should handle slashes correctly', () => {
        const joinedUrl = urlJoin.join('baseUrl/', 'secondUrl/');
        assert.equal(joinedUrl, 'baseUrl/secondUrl/');
    });

    it('should handle url parameters correctly', () => {
        const joinedUrl = urlJoin.join('baseUrl/', '//secondUrl/');
        assert.equal(joinedUrl, 'baseUrl/secondUrl/');
    });
});
