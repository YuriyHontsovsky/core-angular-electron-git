import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-select-folder',
  templateUrl: './select-folder.component.html',
  styleUrls: ['./select-folder.component.scss']
})
export class SelectFolderComponent implements OnInit {

  public sourceFolder: string;

  @Input() inputTitle: string;
  @Output() folderSelected = new EventEmitter<string>();

  constructor(public electronService: ElectronService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  addFolderClick() {
    if (this.electronService.isElectron()) {
      this.electronService.remote.dialog.showOpenDialog({
        title: 'Output Folder', properties: ['openDirectory'] },
        (folders) => {
          if ((folders) && (folders.length > 0)) {
            this.sourceFolder = folders[0];
            this.folderSelected.emit(this.sourceFolder);
            this.ref.detectChanges();
          }
        });
    }
  }

}
