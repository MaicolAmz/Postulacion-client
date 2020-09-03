import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { JobBoardService } from '../../../services/job-board/job-board.service';
import { Professional } from '../../../models/job-board/models.index';

@Component({
  selector: 'app-professionals',
  templateUrl: './app.professionals.component.html'
})
export class AppProfessionalsComponent implements OnInit {

  categories: TreeNode[] = [];
  categorySelected: TreeNode;
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
    this.jobBoardService.get('postulants?field=updated_at&order=desc&limit=10').subscribe(
      resolve => {
        this.professionals = resolve['postulants']['data'];
        this.blocked = false;
        console.log(resolve['postulants']['data']);
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
    this.jobBoardService.get('categories').subscribe(
      resolve => {
        resolve['data']['categories'].forEach(category => {
          let categoryChildren = [];
          category['children'].forEach(child => {
            categoryChildren.push({label: child.name});
          });
          this.categories.push({label: category.name, children: categoryChildren});
        });
      },
      error => console.error(error)
    );
  }

}
