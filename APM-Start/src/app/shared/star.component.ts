import { Component, OnChanges } from '@angular/core';

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    rating: number = 4;
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
}