// Components are declared, Modules are imported, and Services are provided. 
import { ArticlesService } from './home/articles.service';
import { ProjectPanelsComponent } from './projects/project/project-panels/project-panels.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { PanellinksComponent } from './home/panellinks/panellinks.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectPanelsService } from './projects/project-panels.service';
import { ProjectArticlesComponent } from './projects/project/project-articles/project-articles.component';
import { HomeArticlesComponent } from './home/home-articles/home-articles.component';
import { SafePipe } from './safe.pipe';
import { MatProgressSpinnerModule, MatPaginatorModule} from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutMeComponent,
    TutorialsComponent,
    PanellinksComponent,
    ErrorPageComponent,
    CalendarComponent,
    ProjectPanelsComponent,
    ProjectArticlesComponent,
    HomeArticlesComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [ProjectPanelsService, ArticlesService]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
