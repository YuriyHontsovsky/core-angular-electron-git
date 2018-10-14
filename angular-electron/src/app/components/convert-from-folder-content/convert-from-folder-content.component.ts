import { Component, OnInit } from '@angular/core';
import { AppApiService } from '../../providers/app-api.service';

@Component({
  selector: 'app-convert-from-folder-content',
  templateUrl: './convert-from-folder-content.component.html',
  styleUrls: ['./convert-from-folder-content.component.scss']
})
export class ConvertFromFolderContentComponent implements OnInit {

  dir_path: Array<object>;

  public get dir_path_str() : string {
    return JSON.stringify(this.dir_path);
  }

  constructor(private appApiService: AppApiService) { }

  getDirPath(): void {
    this.appApiService.getContacts().subscribe((data:  Array<object>) => {
      this.dir_path  =  data;
    });
  }

  public getFileExtentionsCount(folderSelected: string): void {
    this.appApiService.getFileExtentionsCount(folderSelected).subscribe((data:  Array<object>) => {
      this.dir_path  =  data;
    });
  }

  ngOnInit() {
    //this.getDirPath();
    //this.getFileExtentionsCount();
  }

}
