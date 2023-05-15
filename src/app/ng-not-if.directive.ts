import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNgNotIf]'
})
export class NgNotIfDirective {

  constructor(private templateRef: TemplateRef<any>, 
    private viewContainerRef: ViewContainerRef) { }

  @Input('appNgNotIf') set propertyCondition(condition: boolean){
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
