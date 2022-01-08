import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashComponent } from './dash/dash.component';
import { TruncPipe } from './shared/pipes/trunc.pipe';
import { ButtonComponent } from './core-components/button/button.component';
import { LoaderComponent } from './core-components/loader/loader.component';
import { AutoFocusDirective } from './shared/directives/auto-focus.directive';
import { SpanAndInputComponent } from './core-components/span-and-input/span-and-input.component';
import { BoardOverviewComponent } from './board-overview/board-overview.component';
import { ColumnComponent } from './board-overview/column/column.component';
import { IdPrefixPipe } from './shared/pipes/id-prefix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoaderComponent,
    SpanAndInputComponent,
    NavbarComponent,
    DashComponent,
    BoardOverviewComponent,
    ColumnComponent,
    TruncPipe,
    IdPrefixPipe,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
