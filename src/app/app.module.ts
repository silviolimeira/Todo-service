import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { SocketIoConfig, SocketIoModule } from "ng-socket-io";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import {
  ControllersModule
} from "./controllers/controllers.module";

const config: SocketIoConfig = { url: "http://localhost:3001", options: {} };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    ControllersModule,
    ComponentsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
