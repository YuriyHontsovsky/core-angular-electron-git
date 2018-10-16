import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { AppApiService } from '../../providers/app-api.service';
import { ImageType } from '../../classes/ImageType';
import { ConvertFromImageTypeComponent } from '../convert-from-image-type/convert-from-image-type.component';
import { ConvertFromImageTypeTotalComponent } from '../convert-from-image-type-total/convert-from-image-type-total.component';

@Component({
  selector: 'app-convert-from-folder-content',
  templateUrl: './convert-from-folder-content.component.html',
  styleUrls: ['./convert-from-folder-content.component.scss']
})
export class ConvertFromFolderContentComponent implements OnInit {

  imageTypes: Array<ImageType>;

  @ViewChildren(ConvertFromImageTypeComponent)
  private convertFromImageTypeComponents: ConvertFromImageTypeComponent;

  @ViewChild(ConvertFromImageTypeTotalComponent)
  private convertFromImageTypeTotalComponent: ConvertFromImageTypeTotalComponent;

  constructor(private appApiService: AppApiService) { }

  public getFileExtentionsCount(folderSelected: string): void {
    this.appApiService.getFileExtentionsCount(folderSelected).subscribe((data:  Array<ImageType>) => {
      this.imageTypes = data;
    });
  }

  onChecked($imageType: ImageType) {
    this.convertFromImageTypeTotalComponent.totalSelected = this.TotalSelected();
  }

  TotalSelected(): number {

    return 0;
  }

  ngOnInit() {
  }

}
