import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';

import { MdInputModule } from '@angular2-material/input';
import { MdRadioModule, MdUniqueSelectionDispatcher } from '@angular2-material/radio';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';


@NgModule({
    imports: [ 
        BrowserModule, 
        MdButtonModule,
        MdInputModule,
        MdRadioModule
    ],
    declarations: [ 
        AppComponent
    ],
    bootstrap: [ 
        AppComponent
    ],
    providers: [
        MdUniqueSelectionDispatcher,
        MdIconRegistry
    ]
})
export class AppModule { }
