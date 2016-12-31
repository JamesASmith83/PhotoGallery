"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var paginated_1 = require('../core/common/paginated');
var data_service_1 = require('../core/services/data.service');
var PhotosComponent = (function (_super) {
    __extends(PhotosComponent, _super);
    function PhotosComponent(photosService) {
        _super.call(this, 0, 0, 0);
        this.photosService = photosService;
        this._photosAPI = 'api/photos';
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.photosService.set(this._photosAPI, 12);
        this.getPhotos();
    };
    PhotosComponent.prototype.getPhotos = function () {
        var self = this;
        self.photosService.get(self._page)
            .subscribe(function (res) {
            var data = res.json();
            self._photos = data.TotalPages;
            self._page = data.Page;
            self._pagesCount = data.TotalPages;
            self._totalCount = data.TotalCount;
        }, function (error) { return console.error('Error: ' + error); });
    };
    PhotosComponent.prototype.search = function (i) {
        _super.prototype.search.call(this, i);
        this.getPhotos();
    };
    ;
    PhotosComponent = __decorate([
        core_1.Component({
            selector: 'photos',
            templateUrl: './app/components/photo.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], PhotosComponent);
    return PhotosComponent;
}(paginated_1.Paginated));
exports.PhotosComponent = PhotosComponent;
