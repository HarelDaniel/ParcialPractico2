// Importa PacientesService y Paciente correctamente
import { Component, OnInit } from '@angular/core';
import { PacientesService } from './pacientesService';
import { Paciente } from './paciente';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listarPacientes.html',
})
export class ListarPacientesComponent implements OnInit {
    pacientes: Paciente[]; // Sin inicialización aquí
  
    constructor(private pacientesService: PacientesService) {
      this.pacientes = []; // Inicialización en el constructor
    }

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(): void {
    this.pacientesService.getPacientes().subscribe(pacientes => (this.pacientes = pacientes));
  }
}
