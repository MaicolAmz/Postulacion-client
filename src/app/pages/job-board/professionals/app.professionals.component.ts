import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { JobBoardService } from '../../../services/job-board/job-board.service';
import { Professional } from '../../../models/job-board/models.index';

@Component({
  selector: 'app-professionals',
  templateUrl: './app.professionals.component.html'
})
export class AppProfessionalsComponent implements OnInit {

  items: MenuItem[] = [];
  professionals: Professional[];
  totalCompanies: number;
  totalProffesionals: number;
  totalOffers: number;
  blocked: boolean;

  constructor(private jobBoardService: JobBoardService) { }

  ngOnInit() {
    this.getTotal();
    this.getProfessionals();
    this.getCatalogue();
  }

  getProfessionals(): void {
    this.blocked = true;
    this.jobBoardService.get('postulants').subscribe(
      resolve => {
        this.professionals = resolve['postulants']['data']
        this.blocked = false;
      },
      error => {
        console.error(error)
        this.blocked = false;
      }
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

  getCatalogue(): void {
    this.jobBoardService.get('catalogues').subscribe(
      resolve => {
        for (let index of resolve['catalogues']){
          this.items.push({label: index.name, icon: 'pi pi-pw pi-home', items: [{label: 'Sub-categoría', icon: 'pi pi-pw pi-file'}]});
        }
      },
      error => console.error(error)
    );
  }

}
