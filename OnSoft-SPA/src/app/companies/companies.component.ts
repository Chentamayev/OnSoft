import { Component, OnInit } from '@angular/core';
import { Company } from '../_models/company';
import { CompanyService } from '../_services/company.service';
import { AlertifyService } from '../_services/alertify.service';





@Component({
  selector: 'app-company',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  selectedCompany: Company;
   companies: Company[];




  constructor(private companyService: CompanyService, private alertify: AlertifyService) { }




  ngOnInit() {
    this.loadCompanies();


  }

  async loadCompanies() {
    this.companyService.getCompanies().subscribe((companies: Company[]) => {
      this.companies = companies;

    }, error => {
      this.alertify.error(error);
    });
  }

  // selectedChangeHandler(event: any) {
  //   this.selectedCompany = event.target.value;
  // }

}
