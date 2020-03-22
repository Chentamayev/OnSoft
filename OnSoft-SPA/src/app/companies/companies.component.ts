import { Component, OnInit } from '@angular/core';
import { Company } from '../_models/company';
import { CompanyService } from '../_services/company.service';
import { AlertifyService } from '../_services/alertify.service';

import { AddCompanyComponent } from '../add-company/add-company.component';
import { Bank } from '../_models/bank';
import { BankService } from '../_services/bank.service';
import { timer } from 'rxjs'






@Component({
  selector: 'app-company',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  selectedCompany: Company;
  companies: Company[];
  banks: any;
  selectedCompanyBank: Bank[];
  bankvalueid: number;

  bankName: string;
  constructor(private companyService: CompanyService, private alertify: AlertifyService, private bankService: BankService) { }





  ngOnInit() {
    this.loadCompanies();
    this.loadBanks();




  }

  async loadCompanies() {
    this.companyService.getCompanies().subscribe((companies: Company[]) => {
      this.companies = companies;

    }, error => {
      this.alertify.error(error);
    });
  }

  async loadBanks() {
    this.bankService.getBanks().subscribe((banks: Bank[]) => {
      this.banks = banks;

    }, error => {
      this.alertify.error(error);
    });
  }

  companyChange(){
    if(this.banks.length >0){
    this.bankName=this.banks.find((bank)=> bank.id ===
    this.selectedCompany.id).bankName;
    } 
    }
}
