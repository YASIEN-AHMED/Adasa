import { Routes } from '@angular/router';
import { blogRoutes } from './pages/blog/blog.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.Home),
  },
  {
    path: 'blog',
    children: blogRoutes,
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.About),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.component').then((m) => m.Privacy),
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component').then((m) => m.Terms),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFound),
  },
];
