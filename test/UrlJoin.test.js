const assert = require('assert');

const urlJoin = require('../src/UrlJoin');

describe('UrlJoin', function () {
    context('context', function () {
        it('should join url-s', function () {
            const joinedUrl = urlJoin.join(['baseUrl', '-secondUrl']);
            assert.equal(joinedUrl, 'baseUrl-secondUrl');
        });
    });
});
