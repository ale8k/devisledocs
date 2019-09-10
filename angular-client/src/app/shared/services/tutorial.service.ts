import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ITutorial } from "../models/ITutorial";
import { ApiService } from "./api.service";


@Injectable({
    providedIn: "root"
})
export class TutorialService {
    /**
     * To clarify, when clicking on a section view-tutorial,
     * this is our current tutorial. We will use this
     * to map our what section we are on.
     */
    public currentTutorial: Observable<ITutorial>;

    constructor(
        private apiService: ApiService
    ) { }

    public getAllTutNamesIdsAndCats() {
        return this.apiService.getAllTutorialNamesIdsAndCategories();
    }

    public getTutById(id) {
        return this.apiService.getTutorialById(id.tutId as String);
    }

    public getCurrentSection(activeSectionName) {
        return this.currentTutorial.pipe(
            map((data) => {
                return data[0].sections.filter(section => section.sectionName === activeSectionName);
            })
        );
    }

}
