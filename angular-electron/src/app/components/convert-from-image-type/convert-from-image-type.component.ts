import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageType } from '../../classes/ImageType';

@Component({
  selector: 'app-convert-from-image-type',
  templateUrl: './convert-from-image-type.component.html',
  styleUrls: ['./convert-from-image-type.component.scss']
})
export class ConvertFromImageTypeComponent implements OnInit {

  @Input() imageType: ImageType;
  @Output() imageTypeChecked = new EventEmitter<ImageType>();

  constructor() { }

  ngOnInit() {
  }

  doOnSelect(): void {
    this.imageTypeChecked.emit(this.imageType);
  }

  onChange() {
    this.imageType.selected = !this.imageType.selected;
    this.imageTypeChecked.emit(this.imageType);
  }

}
