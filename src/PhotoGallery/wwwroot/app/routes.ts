import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { PhotosComponent } from './components/photos.component';
import { AlbumsComponent } from './components/albums.component';
import { AlbumsPhotosComponent } from './components/album-photos.component';
import { accountRoutes, accountRouting } from './components/accounts/routes';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'photos',
        component: PhotosComponent
    },
    {
        path: 'albums',
        component: AlbumsComponent
    },
    {
        path: 'albums/:id/photos',
        component: AlbumsPhotosComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


