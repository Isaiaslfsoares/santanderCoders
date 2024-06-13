import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from './app.component';
import { FirstModuleModule } from './first-module/first-module.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FirstModuleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }