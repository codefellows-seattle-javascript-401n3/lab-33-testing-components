'use strict';

describe('Gallery Item Component', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });

  it('should contain the proper component bindings', () => {
    let mockBindings = {
      gallery: {
        name: 'test gallery name',
        desc: 'test gallery description'
      }
    };

    let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
    expect(galleryItemCtrl.gallery.name).toEqual(mockBindings.gallery.name);
    expect(galleryItemCtrl.gallery.desc).toEqual(mockBindings.gallery.desc);

    this.$rootScope.$apply();
  });

  describe('initial properties', () => {
    it('showEditGallery property should be false', () => {
      let mockBindings = {
        gallery: {
          name: 'test gallery name',
          desc: 'test gallery description'
        }
      };

      let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
      expect(galleryItemCtrl.showEditGallery).toEqual(false);

      this.$rootScope.$apply();
    });
  });

  describe('galleryItemCtrl.deleteGallery()', () => {
    // it('should call deleteGallery', () => {
    //   let mockBindings = {
    //     gallery: {
    //       _id: '12345',
    //       name: 'test name',
    //       desc: 'test description',
    //       pics: [],
    //     },
    //     deleteGallery: function(data){
    //       expect(data.galleryData._id).toEqual('12345');
    //     }
    //   };
    //
    //   let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
    //   galleryItemCtrl.deleteDone({galleryData: galleryItemCtrl.gallery});
    //
    //   this.$rootScope.$apply();
    // });
    // });
  //
  // it('should call deleteDone with gallery after galleryDelete', () => {
  //   let url = 'http://localhost:8000/api/gallery/12345';
  //   let headers = {
  //     Authorization: 'Bearer test token',
  //     Accept: 'application/json, text/plain, */*'
  //   };
  //
  //   let mockBindings = {
  //     gallery: {
  //       _id: '12345',
  //       name: 'test name',
  //       desc: 'test description',
  //       pics: []
  //     },
  //     deleteDone: function(data){
  //       expect(data.galleryData._id).toEqual(mockBindings.gallery._id);
  //     }
  //   };
  //
  //   this.$httpBackend.expectDELETE(url, headers).respond(204);
  //
  //   let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
  //   galleryItemCtrl.deleteGallery();
  //
  //   this.$httpBackend.flush();
  //   this.$rootScope.$apply();
  });
});
