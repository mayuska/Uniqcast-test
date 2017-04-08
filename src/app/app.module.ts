import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChannelsComponent } from './create-channel/create-channel.component';
import { TableComponent } from './table/table.component';
import { UpdateChannelComponent } from './update-channel/update-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelsComponent,
    TableComponent,
    UpdateChannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
