import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './pages/about/about.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { ProjectComponent } from './pages/project/project.component';
import { SkillComponent } from './pages/skill/skill.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DownloadButtonComponent } from './components/download-button/download-button.component';
@NgModule({
  declarations: [

    AppComponent,
    MenuComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SimpleCardComponent,
    ProjectComponent,
    SkillComponent,
    ContactComponent,
    ExperiencesComponent,
    ExperienceCardComponent,
    SkillCardComponent,
    ProjectCardComponent,
    DownloadButtonComponent
  ],
  imports: [
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
