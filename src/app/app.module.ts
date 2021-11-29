import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MemoryModule } from './layout/container/memories/memory.module';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './layout/container/container.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import * as fromApp from './app.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MemoryEffects } from './layout/container/memories/store/memory.effects';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ContainerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MemoryModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([MemoryEffects]),
    MenubarModule,
    NgbModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
