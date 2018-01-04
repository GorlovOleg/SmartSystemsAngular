import { Component, ViewChild, HostListener } from '@angular/core';
import { NgbTooltip, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

export enum KEY_CODE {
  ESC = 27
}

@Component({
  selector: 'tooltip-trigger',
  templateUrl: './tooltip-trigger.html',
  providers: [NgbPopoverConfig]
})
export class NgbdTooltipBasic {

  value = 0;

  @HostListener('click') onClick() {

    //this.tooltip_a.close();
    //this.tooltip_b.close();
  }

  @HostListener('window:keyup', ['$event'])  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (event.keyCode === KEY_CODE.ESC) {
      this.esc_close_tooltip();
    }
  }


  esc_close_tooltip() {
    this.tooltip_a.close();
    this.tooltip_b.close();
  }

  text = {};
  name = 'Button';

  @ViewChild('a') public tooltip_a: NgbTooltip;
  @ViewChild('b') public tooltip_b: NgbTooltip; 

  //---
  trigger_button_b (text: any): void {
    const isOpen = this.tooltip_b.isOpen();
    this.tooltip_b.close();

    if (text !== this.text || !isOpen) {
      this.text = text;
      this.tooltip_a.open(text);
    }
  }

  trigger_button_a(text: any): void {
    const isOpen = this.tooltip_a.isOpen();
    this.tooltip_a.close();

    if (text !== this.text || !isOpen) {
      this.text = text;
      this.tooltip_b.open(text);
    }

  }

}
