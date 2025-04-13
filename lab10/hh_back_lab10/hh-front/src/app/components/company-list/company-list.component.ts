import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { Vacancy } from 'src/app/models/vacancy.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompany: Company | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
    });
  }

  showVacancies(company: Company): void {
    this.selectedCompany = company;
    this.companyService.getCompanyVacancies(company.id).subscribe((data: Vacancy[]) => {
      this.vacancies = data;
    });
  }
}
