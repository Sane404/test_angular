import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";

import { CollegeComponent } from "./college/college.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { CoursesComponent } from "./courses/courses.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { TeachersComponent } from "./teachers/teachers.component";

const routes: Routes = [
  {path: "",component: CollegeComponent},
  {path: "contacts",component: ContactsComponent},
  {path: "about",component: AboutComponent},
  {path: "courses",component: CoursesComponent},
  {path: "teachers",component: TeachersComponent},
  {path: "notfound",component: NotfoundComponent},
  { path: "**", redirectTo: "notfound" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
