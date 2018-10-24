import { Injectable } from '@angular/core';
import { ImageType } from '../classes/ImageType';

@Injectable({
  providedIn: 'root'
})
export class AppModelService {

  folderFrom: string;
  folderTo: string;
  imageTypesAll: Array<ImageType>;
  imageTypesSelected: Array<ImageType>;

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

  SetSelectionImageType($imageType: ImageType): any {
    const index = this.imageTypesSelected.indexOf($imageType);
    if (index < 0) {
      this.imageTypesSelected.splice(index, 1);
    }
    if ($imageType.selected) {
      this.imageTypesSelected.push($imageType);
    }
  }

}
