import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component'; // Asegúrate de que la ruta sea correcta
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        ListarPacientesComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
