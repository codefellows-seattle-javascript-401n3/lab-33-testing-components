'use strict';

let __API_URL__ = 'http:localhost://3000';
require('../app/component/gallery/gallery-item/gallery-item.js');


describe('testing GalleryItemController', function() {
  it('should be an object', => {
    expect(galleryItemCtrl)toBe(typeof == 'object');
  });
});
