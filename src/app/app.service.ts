import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class AppService{
    events:EventEmitter<string> = new EventEmitter<string>();

    constructor(){
        
    }


}