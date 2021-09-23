import { Directive, ElementRef, Input, OnChanges, SimpleChange } from '@angular/core';

@Directive({
  selector: '[appMessagebox]'
})
export class MessageboxDirective {
  @Input() appHighlight:string;
  constructor(public ref:ElementRef ) {
    this.ref.nativeElement.style.color = this.appHighlight;
   }
      
   ngOnChanges(changes: SimpleChange){
    if(changes['appHighlight']){
      this.ref.nativeElement.style.color = this.appHighlight;
    }
  }
   

}
