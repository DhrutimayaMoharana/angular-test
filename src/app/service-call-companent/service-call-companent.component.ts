import { Component } from '@angular/core';
import { flip } from '@popperjs/core';
import { UsersDataService } from '../users-data.service'

@Component({
  selector: 'app-service-call-companent',
  templateUrl: './service-call-companent.component.html',
  styleUrls: ['./service-call-companent.component.css']
})
export class ServiceCallCompanentComponent {

  filter:boolean= false
  noneFilter:boolean=false
  data: any
  company:any= []
  constructor(private user: UsersDataService) {
    // console.warn("Data" + this.user.getData.name)
    // this.data = this.user.getData();
    this.user.getCompanyData().subscribe(data => {
      console.warn(data)
      this.company = data;
    }
    );
  }

  setOnchange(value:any){
    if(value==='true'){
      this.filter=true
      this.noneFilter=false
    }
    else if(value==='false'){
      this.filter=false
      this.noneFilter=false
    }else{
      this.noneFilter=true
    }
    console.log(" NoneFileter : "+this.noneFilter);
   
  }

}
