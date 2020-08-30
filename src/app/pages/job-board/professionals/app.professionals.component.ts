import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { JobBoardService } from '../../../services/job-board/job-board.service';
import { Professional } from '../../../models/job-board/models.index';

@Component({
  selector: 'app-professionals',
  templateUrl: './app.professionals.component.html'
})
export class AppProfessionalsComponent implements OnInit {

  items: MenuItem[];
  professionals: Professional[];
  totalCompanies: number;
  totalProffesionals: number;
  totalOffers: number;

  constructor(private jobBoardService: JobBoardService) {
    this.items = [
      {
        label: 'EDUCACION',
        icon: 'pi pi-pw pi-file',
        items: [
          { label: 'ASISTENTE PEDAGOGICO CON NIVEL EQUIVALENTE A TECNOLOGO SUPERIOR', icon: 'pi pi-fw pi-plus' },
          { label: 'ASISTENTE EN EDUCACION INCLUSIVA CON NIVEL EQUIVALENTE A TECNOLOGO SUPERIOR', icon: 'pi pi-fw pi-external-link' }
        ]
      },
      {
        label: 'CIENCIAS SOCIALES, PERIODISMO E INFORMACION',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'PRODUCTOR Y CONDUCTOR DE RADIO CON NIVEL EQUIVALENTE A TECNOLOGO SUPERIOR', icon: 'pi pi-fw pi-trash' },
          { label: 'PRODUCTOR Y CONDUCTOR DE TELEVISION CON NIVEL EQUIVALENTE A TECNOLOGO SUPERIOR', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'ADMINISTRACION',
        icon: 'pi pi-fw pi-question',
        items: [
          { label: 'TECNOLOGO SUPERIOR EN TRIBUTACION', icon: 'pi pi-pi pi-bars' },
          { label: 'TECNOLOGO SUPERIOR EN AUDITORIA', icon: 'pi pi-pi pi-search' }
        ]
      }
    ];
  }

  ngOnInit() {
    this.getTotal();
    this.getProfessionals();
  }

  getProfessionals(): void {
    this.jobBoardService.get('postulants').subscribe(
      resolve => this.professionals = resolve['postulants']['data'],
      error => console.error(error)
    );
  }

  getTotal(): void {
    this.jobBoardService.get('total').subscribe(
      resolve => {
        this.totalCompanies = resolve['totalCompanies'];
        this.totalOffers = resolve['totalOffers'];
        this.totalProffesionals = resolve['totalProfessionals'];
      },
      error => console.error(error)
    );
  }

}
