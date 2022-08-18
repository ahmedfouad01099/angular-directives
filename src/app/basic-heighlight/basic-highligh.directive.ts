import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  // custom property binding
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "green";

  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.elementRef.nativeElement.style.backgroundColor = "green";
    // this.elementRef.nativeElement.style.color = "white";
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.elementRef.nativeElement.style.backgroundColor = "green";
    // this.backgroundColor = "green";
    this.backgroundColor = this.highlightColor;
    this.elementRef.nativeElement.style.color = "white";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.elementRef.nativeElement.style.backgroundColor = "transparent";
    // this.backgroundColor = "transparent";
    this.backgroundColor = this.defaultColor;
    this.elementRef.nativeElement.style.color = "#000";
  }
}
