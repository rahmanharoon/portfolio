import { lazy } from 'react';

export const HomePage = lazy(() => import('./home').then(module => ({ default: module.HomePage })));
export const ProjectsPage = lazy(() => import('./projects').then(module => ({ default: module.ProjectsPage })));
