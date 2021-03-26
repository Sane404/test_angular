import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { CollegeComponent } from './college/college.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
    declarations: [CollegeComponent, ContactsComponent, TeachersComponent, CoursesComponent, AboutComponent, NotfoundComponent],
    providers:[],
    imports: [CommonModule, AboutRoutingModule]
})
export class AboutModule {
}
