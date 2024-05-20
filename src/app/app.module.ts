import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http"; //Angular API for client-server/API communication
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        AppRoutingModule, 
    ],
    providers:[],
    bootstrap:[AppComponent]  
})
export class AppModule { }