"use strict";
var Photo = (function () {
    function Photo(id, title, uri, albumId, albumTitle, dateUploaded) {
        this.Id = id;
        this.Title = title;
        this.Uri = uri;
        this.AlbumId = albumId;
        this.AlbumTitle = albumTitle;
        this.DateUploaded = dateUploaded;
    }
    return Photo;
}());
exports.Photo = Photo;
