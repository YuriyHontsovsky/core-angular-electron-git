import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-select-folder',
  templateUrl: './select-folder.component.html',
  styleUrls: ['./select-folder.component.scss']
})
export class SelectFolderComponent implements OnInit {

  sourceFolder: string;

  constructor(public electronService: ElectronService) { }

  ngOnInit() {
  }

  addFholderClick() {
    if (this.electronService.isElectron()) {
      this.electronService.remote.dialog.showOpenDialog({
        title: 'Output Folder', properties: ['openDirectory'] },
        (folders) => {
          if ((folders) && (folders.length > 0)) {
            this.sourceFolder = folders[0];
          }
        });
    }
  }

}
