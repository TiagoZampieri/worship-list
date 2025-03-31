import { BrowserModule } from "@angular/platform-browser";
import { ApplicationConfig, NgModule, provideZoneChangeDetection } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
// import { SongService } from "./services/song.service";
import { getFirestore, initializeFirestore } from "@firebase/firestore";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideFirebaseApp } from "@angular/fire/app";
import { initializeApp } from "firebase/app";
import { provideFirestore } from "@angular/fire/firestore";

const appConfig: ApplicationConfig = { 
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ]
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [appConfig.providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
