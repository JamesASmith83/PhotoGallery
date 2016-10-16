"use strict";
var Album = (function () {
    function Album(id, title, description, thumbnail, dateCreated, totalPhotos) {
        this.Id = id;
        this.Title = title;
        this.Description = description;
        this.Thumbnail = thumbnail;
        this.DateCreated = dateCreated;
        this.TotalPhotos = totalPhotos;
    }
    return Album;
}());
exports.Album = Album;
//# sourceMappingURL=album.js.map