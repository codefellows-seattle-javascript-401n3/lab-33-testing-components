'use strict';
describe('Edit Gallery Component', function(){

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    })
  });
  it('should contain the proper component bindings', () => {
  let mockBindings = {
    gallery: {
      name: 'test gallery name',
      desc: 'test gallery description'
    }
  };

  // describe('testing typeof, which should be an object', function() {
  //   it('should be an object', () => {
  //     let galleryItemCtrl = this.$componentController('editGallery', null, mockBindings);
  //     expect(typeof galleryItemCtrl).toEqual(null);
  //   });
  // });

});
});
