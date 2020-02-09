import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxLoadingModule } from 'ngx-loading';
import { ExportAsModule } from 'ngx-export-as';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ImageCropperModule,
    BrowserModule,
    DragDropModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,  
    MatExpansionModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDialogModule,
    ExportAsModule,
    NgxLoadingModule.forRoot({}),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
