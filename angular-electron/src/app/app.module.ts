import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConvertFromComponent } from './components/convert-from/convert-from.component';
import { ConvertToComponent } from './components/convert-to/convert-to.component';
import { SelectFolderComponent } from './components/select-folder/select-folder.component';
import { AppModelService } from './providers/app-model.service';
import { ConvertFromFolderContentComponent } from './components/convert-from-folder-content/convert-from-folder-content.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ConvertComponent } from './components/convert/convert.component';
import { ConvertFromImageTypeComponent } from './components/convert-from-image-type/convert-from-image-type.component';
import { ConvertFromImageTypeTotalComponent } from './components/convert-from-image-type-total/convert-from-image-type-total.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    ConvertFromComponent,
    ConvertToComponent,
    SelectFolderComponent,
    ConvertFromFolderContentComponent,
    SettingsComponent,
    ProgressComponent,
    ConvertComponent,
    ConvertFromImageTypeComponent,
    ConvertFromImageTypeTotalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ElectronService,
    AppModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
