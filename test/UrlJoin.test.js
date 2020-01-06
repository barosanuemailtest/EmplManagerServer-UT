const assert = require('assert');

const urlJoin = require('../src/UrlJoin');

describe('UrlJoin', () => {
    it('should join url-s', () => {
        const joinedUrl = urlJoin.join('baseUrl', '-secondUrl');
        assert.equal(joinedUrl, 'baseUrl-secondUrl');
        assert.equal(urlJoin.join(), '');
    });
});
