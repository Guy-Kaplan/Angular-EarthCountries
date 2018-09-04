import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {

    public counter: number = 0; // small pic

    @Input()
    public source: string; // Image source.

    @Input()
    public width: number; // Width

    @Input()
    public height: number; // Height

    @Output()
    public enter: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public leave: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public click: EventEmitter<string> = new EventEmitter<string>();

    public mouseenter(): void{
        // Raising an event which gets the image source
        this.enter.emit(this.source);
        //alert("Entered");
    }

    public mouseleave(): void{
        // Raising an event which gets the image source
        this.leave.emit(this.source);
        //alert("Mouse Left");
    }

    public onclick(): void{
        // Raising an event which gets the image source
        //this.click.emit(this.source);
        if(this.counter===0){ // if pic is small
            this.width = 160;
            this.height = 100;
            this.counter = 1; // pic is now big
        }
        else{ // if pic is big
            this.width = 80;
            this.height = 50;
            this.counter = 0; // pic is now small
        }
        //alert("You clicked a pic");
    }


    
}
