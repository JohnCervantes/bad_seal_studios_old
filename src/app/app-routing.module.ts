import { ProjectArticlesComponent } from './projects/project/project-articles/project-articles.component';
import { HomeArticlesComponent } from './home/home-articles/home-articles.component';
import { ProjectPanelsComponent } from './projects/project/project-panels/project-panels.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { PanellinksComponent } from './home/panellinks/panellinks.component';
import { CalendarComponent } from './calendar/calendar.component';







const appRoutes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full' },
  {
    path: 'news', component: HomeComponent, data: { animation: 'news' },
    children: [
      {
        path: '', component: PanellinksComponent, pathMatch: 'full'
      },
      {
        path: ':articleName', component: HomeArticlesComponent
      }
    ]
  },
  {
    path: 'projects',
    component: ProjectsComponent, data: { animation: 'projects' },
    children: [
      { path: '', component: ProjectPanelsComponent, pathMatch: 'full' },
      { path: ':category', component: ProjectPanelsComponent },
      { path: ':category/:projectName', component: ProjectArticlesComponent },
    ]
  },
  {
    path: 'aboutme',
    component: AboutMeComponent, data: { animation: 'aboutme' }
  },
  {
    path: 'calendar',
    component: CalendarComponent, data: { animation: 'calendar' }
  },
  {
    path: 'tutorials',
    component: TutorialsComponent, data: { animation: 'tutorials' }
  },
  // handle errors by using static data
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Sorry, that page does not exist!' } },
  // make sure this is at the bottom of the routes
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
