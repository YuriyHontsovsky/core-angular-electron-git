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
  convertTestFeadback = 'empty convertTestFeadback';

  constructor(
    private appApiService: AppApiService,
    private ref: ChangeDetectorRef,
    private appModel: AppModelService) {
  }

  ngOnInit() {
  }

  onConvert() {
    this.appApiService.postConvert(this.appModel.GetConvertParams()).subscribe((result: any) => {
      this.convertTestFeadback = JSON.stringify(result);
      this.ref.detectChanges();
    });
  }

  onFolderSelected($folderSelected: string) {
    this.appModel.folderTo = $folderSelected;
  }

}
