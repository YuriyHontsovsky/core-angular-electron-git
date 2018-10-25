import { Injectable } from '@angular/core';
import { ImageType } from '../classes/ImageType';

@Injectable({
  providedIn: 'root'
})
export class AppModelService {

  private _propfolderFrom: string;
  public get vpropfolderFrom(): string {
    return this._propfolderFrom;
  }
  public set vpropfolderFrom(v: string) {
    this._propfolderFrom = v;
  }

  public folderFrom: string;
  public folderTo: string;
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

  SetSelectionImageType($imageType: ImageType): any {
    const index = this.imageTypesSelected.indexOf($imageType);
    if (index >= 0) {
      this.imageTypesSelected.splice(index, 1);
    }
    if ($imageType.selected === true) {
      this.imageTypesSelected.push($imageType);
    }
  }

}
