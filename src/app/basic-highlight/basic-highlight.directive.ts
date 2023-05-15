import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlight implements OnInit{

    constructor(private elementRef: ElementRef){}
    
    ngOnInit(): void {
        console.log('hi');
        this.elementRef.nativeElement.style.backgroundColor = 'red';
    }

    
}