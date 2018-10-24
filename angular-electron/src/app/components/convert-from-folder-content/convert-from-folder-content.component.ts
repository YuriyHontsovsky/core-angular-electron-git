import { Component, OnInit, ViewChildren, ViewChild, QueryList, ChangeDetectorRef } from '@angular/core';
import { AppApiService } from '../../providers/app-api.service';
import { ImageType } from '../../classes/ImageType';
import { ConvertFromImageTypeComponent } from '../convert-from-image-type/convert-from-image-type.component';
import { ConvertFromImageTypeTotalComponent } from '../convert-from-image-type-total/convert-from-image-type-total.component';
import { AppModelService } from '../../providers/app-model.service';

@Component({
  selector: 'app-convert-from-folder-content',
  templateUrl: './convert-from-folder-content.component.html',
  styleUrls: ['./convert-from-folder-content.component.scss']
})
export class ConvertFromFolderContentComponent implements OnInit {

  imageTypes: Array<ImageType>;

  @ViewChildren(ConvertFromImageTypeComponent)
  private convertFromImageTypeComponents: QueryList<ConvertFromImageTypeComponent>;

  @ViewChild(ConvertFromImageTypeTotalComponent)
  private convertFromImageTypeTotalComponent: ConvertFromImageTypeTotalComponent;

  constructor(
    private appApiService: AppApiService,
    private ref: ChangeDetectorRef,
    private appModel: AppModelService) { }

  public getFileExtentionsCount(folderSelected: string): void {
    this.appApiService.getFileExtentionsCount(folderSelected).subscribe((data:  Array<ImageType>) => {
      this.imageTypes = data;
      this.ref.detectChanges();
    });
  }

  onChanged($imageType: ImageType) {
    this.appModel.SetSelectionImageType($imageType);
    this.convertFromImageTypeTotalComponent.totalSelected = this.appModel.GetTotalSelectedCount();
  }

  TotalSelected(): number {
    let selectedCount = 0;
    this.convertFromImageTypeComponents.forEach(element => {
      if (element.imageType.selected) {
        selectedCount += element.imageType.count;
      }
    });
    return selectedCount;
  }

  ngOnInit() {
  }

}
