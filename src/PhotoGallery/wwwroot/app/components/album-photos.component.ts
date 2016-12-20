import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Photo } from '../core/domain/photo';
import { Paginated } from '../core/common/paginated';
import { DataService } from '../core/services/data.service';
import { UtilityService } from '../core/services/utility.service';
import { NotificationService } from '../core/services/notification.service';
import { OperationResult } from '../core/domain/operationResult';
import { Subscription } from '../rxjs/Subscription';

@Component({
    selector: 'album-photo',
    providers: [NotificationService],
    templateUrl: './app/components/album-photos.component.html'
})
export class AlbumPhotosComponent extends Paginated implements OnInit {
    private _albumsAPI: string = 'api/albums/';
    private _photosAPI: string = 'api/photos/';
    private _albumId: string;
    private _photos: Array<Photo>;
    private _displayingTotal: number;
    private _albumTitle: string;
    private sub: Subscription;


    constructor(public dataService: DataService,
                public utilityService: UtilityService,
                public notificationService: NotificationService,
                private route: ActivatedRoute,
                private router: Router) {
                super(0, 0, 0);
    }

    ngOnInit() {
    }