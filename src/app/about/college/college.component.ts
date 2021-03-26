import {Component, OnInit} from '@angular/core';
import { AboutInterface } from '../about.interface';
import { default_college_translations } from '../translations';
import { CollegeService } from '../about.providers';


@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.scss'],

})
export class CollegeComponent implements OnInit {
    college?:AboutInterface;
    isLoading = true;

    translations?: Object;
    defaultTranslations = default_college_translations;

    constructor(
        private college$:CollegeService
    ) {
    }

    ngOnInit() {
        this.translations = default_college_translations;
        this.getCollege();
    }


    getCollege() {
        this.isLoading = true;
        this.college$.getCollegeObservable().subscribe(college => {
            
            
            setTimeout(() => {
                this.isLoading = false;
                this.college = college;
            }, 1000);
        });
    }
}
