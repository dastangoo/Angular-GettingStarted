import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
}