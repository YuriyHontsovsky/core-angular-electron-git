import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppApiService } from '../../providers/app-api.service';
import { ConvertParams } from '../../classes/ConvertParams';
import { AppModelService } from '../../providers/app-model.service';

@Component({
  selector: 'app-convert-to',
  templateUrl: './convert-to.component.html',
  styleUrls: ['./convert-to.component.scss']
})
export class ConvertToComponent implements OnInit {

  outputFolderTitle = 'Output Folder';

  constructor(
    private appApiService: AppApiService,
    private ref: ChangeDetectorRef,
    private appModel: AppModelService) {

  }

  ngOnInit() {
  }

  onConvert() {
    const convertParams = new ConvertParams();
    convertParams.folderFrom = '';
    convertParams.folderTo = '';
    convertParams.extentions = [''];

    this.appApiService.postConvert(convertParams).subscribe((value: ConvertParams) => {
      this.ref.detectChanges();
    });
  }

  onFolderSelected($folderSelected: string) {
    this.appModel.folderTo = $folderSelected;
  }

}
