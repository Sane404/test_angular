import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { AboutInterface } from './about.interface';
@Injectable({
    providedIn: 'root'
})
export class CollegeService {

    test: AboutInterface = {
        id: 1,
        name: "Test Name",
        photo: "photo",
        about: "About this college",
        media_type: 1,
        vimeo_video_id: 1
    }
    constructor() { }
    getCollegeObservable():Observable<AboutInterface> {
        return of(this.test);
    }
}

