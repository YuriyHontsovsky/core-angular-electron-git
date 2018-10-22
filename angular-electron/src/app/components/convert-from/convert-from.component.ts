import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectFolderComponent } from '../select-folder/select-folder.component';
import { ConvertFromFolderContentComponent } from '../convert-from-folder-content/convert-from-folder-content.component';

@Component({
  selector: 'app-convert-from',
  templateUrl: './convert-from.component.html',
  styleUrls: ['./convert-from.component.scss']
})
export class ConvertFromComponent implements OnInit {

  sourceFolderTitle = 'Source Folder';

  @ViewChild(SelectFolderComponent)
  private selectFolderComponent: SelectFolderComponent;

  @ViewChild(ConvertFromFolderContentComponent)
  private convertFromFolderContentComponent: ConvertFromFolderContentComponent;

  constructor() { }

  ngOnInit() {
  }

  onFolderSelected($folderSelected: string) {
    this.convertFromFolderContentComponent.getFileExtentionsCount($folderSelected);
  }

}
