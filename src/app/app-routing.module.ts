import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillComponent } from './pages/skill/skill.component';



const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "projects", component: ProjectComponent},
  {path: "skills", component: SkillComponent},
  {path: "contact", component: ContactComponent},
  {path: "experiences", component: ExperiencesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
