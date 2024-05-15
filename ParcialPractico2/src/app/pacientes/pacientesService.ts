import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';

@Injectable({
    providedIn: 'root'
})
export class PacientesService {
    private pacientesUrl = 'assets/pacientes.json'; 

    constructor(private http: HttpClient) {}

    getPacientes(): Observable<Paciente[]> {
        return this.http.get<Paciente[]>(this.pacientesUrl);
    }
}
