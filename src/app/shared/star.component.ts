import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
   
    @Input()
    rating: number;
    starWidth: number;
    @Output() notify: EventEmitter<String> =new EventEmitter<String>();

    ngOnChanges(): void {
        this.starWidth=this.rating * 75/5;
    }

    onClick():void{
        this.notify.emit(`The rating ${this.rating} was clicked`);
    }

}