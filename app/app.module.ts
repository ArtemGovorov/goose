import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameModule } from './frame/frame.module';
import { GooseModule } from '../src/goose.module';
import { IntroModule } from './pages/intro/intro.module';
import { ModulesModule } from './pages/modules/modules.module';
import { GlobalModule } from './pages/global/global.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        BrowserAnimationsModule,
        FrameModule,
        IntroModule,
        ModulesModule,
        GlobalModule,
        AppRoutingModule,
        SharedModule,
        GooseModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
