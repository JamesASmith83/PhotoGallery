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
var router_1 = require('@angular/router');
var paginated_1 = require('../core/common/paginated');
var data_service_1 = require('../core/services/data.service');
var utility_service_1 = require('../core/services/utility.service');
var notification_service_1 = require('../core/services/notification.service');
var operationResult_1 = require('../core/domain/operationResult');
var AlbumPhotosComponent = (function (_super) {
    __extends(AlbumPhotosComponent, _super);
    function AlbumPhotosComponent(dataService, utilityService, notificationService, route, router) {
        _super.call(this, 0, 0, 0);
        this.dataService = dataService;
        this.utilityService = utilityService;
        this.notificationService = notificationService;
        this.route = route;
        this.router = router;
        this._albumsAPI = 'api/albums/';
        this._photosAPI = 'api/photos/';
    }
    AlbumPhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this._albumId = params['id'];
            _this._albumsAPI += _this._albumId + '/photos/';
            _this.dataService.set(_this._albumsAPI, 12);
            _this.getAlbumPhotos();
        });
    };
    AlbumPhotosComponent.prototype.getAlbumPhotos = function () {
        var _this = this;
        this.dataService.get(this._page)
            .subscribe(function (res) {
            var data = res.json();
            _this._photos = data.Items;
            _this._displayingTotal = _this._photos.length;
            _this._page = data.page;
            _this._pagesCount = data.TotalPages;
            _this._totalCount = data.TotalCount;
            _this._albumTitle = _this._photos[0].AlbumTitle;
        }, function (error) {
            if (error.status == 401 || error.status == 302) {
                _this.utilityService.navigateToSignIn();
            }
            console.error('Error: ' + error);
        }, function () { return console.log(_this._photos); });
    };
    AlbumPhotosComponent.prototype.search = function (i) {
        _super.prototype.search.call(this, i);
        this.getAlbumPhotos();
    };
    ;
    AlbumPhotosComponent.prototype.convertDateTime = function (date) {
        return this.utilityService.convertDateTime(date);
    };
    AlbumPhotosComponent.prototype.delete = function (photo) {
        var _this = this;
        var _removeResult = new operationResult_1.OperationResult(false, '');
        this.notificationService.printConfirmationDialog('Are you sure you want to delete this photo?', function () {
            _this.dataService.deleteResource(_this._photosAPI + photo.Id)
                .subscribe(function (res) {
                _removeResult.Succeeded = res.Succeeded;
                _removeResult.Message = res.Message;
            }, function (error) { return console.error('Error: ' + error); }, function () {
                if (_removeResult.Succeeded) {
                    _this.notificationService.printSuccessMessage(photo.Title + ' removed from gallery.');
                    _this.getAlbumPhotos();
                }
                else {
                    _this.notificationService.printErrorMessage('Failed to remove photo');
                }
            });
        });
    };
    AlbumPhotosComponent = __decorate([
        core_1.Component({
            selector: 'album-photo',
            providers: [notification_service_1.NotificationService],
            templateUrl: './app/components/album-photos.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, utility_service_1.UtilityService, notification_service_1.NotificationService, router_1.ActivatedRoute, router_1.Router])
    ], AlbumPhotosComponent);
    return AlbumPhotosComponent;
}(paginated_1.Paginated));
exports.AlbumPhotosComponent = AlbumPhotosComponent;
