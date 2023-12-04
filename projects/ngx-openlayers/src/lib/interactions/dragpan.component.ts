import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import Kinetic from 'ol/Kinetic';
import { Condition } from 'ol/events/condition';
import { DragPan } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragpan',
  template: '',
})
export class DragPanInteractionComponent implements OnInit, OnDestroy {
  @Input()
  condition: Condition;
  @Input()
  kinetic: Kinetic;
  @Input()
  onFocusOnly: boolean;

  instance: DragPan;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragPan(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
