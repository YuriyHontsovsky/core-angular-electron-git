import { Injectable } from '@angular/core';
import { ImageType } from '../classes/ImageType';
import { ConvertParams } from '../classes/ConvertParams';

@Injectable({
  providedIn: 'root'
})
export class AppModelService {

  folderFrom: string;
  folderTo: string;
  imageTypesAll: Array<ImageType> = new Array<ImageType>();
  imageTypesSelected: Array<ImageType> = new Array<ImageType>();

  constructor() { }

  GetTotalSelectedCount(): number {
    let selectedCount = 0;
    this.imageTypesSelected.forEach(element => {
      if (element.selected) {
        selectedCount += element.count;
      }
    });
    return selectedCount;
  }

  SetSelectionImageType($imageType: ImageType) {
    const index = this.imageTypesSelected.indexOf($imageType);
    if (index >= 0) {
      this.imageTypesSelected.splice(index, 1);
    }
    if ($imageType.selected === true) {
      this.imageTypesSelected.push($imageType);
    }
  }

  GetConvertParams(): ConvertParams {
    const convertParams = new ConvertParams();
    convertParams.folderFrom = this.folderFrom;
    convertParams.folderTo = this.folderTo;
    convertParams.extentions = this.imageTypesSelected.map(value => value.extention);
    return convertParams;
  }

}
