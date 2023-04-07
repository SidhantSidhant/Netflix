import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetflexService } from 'src/app/service/netflex.service';
import { country } from '../../module/country';
import { SendmsgService } from 'src/app/service/sendmsg.service';

@Component({
  selector: 'app-netflex',
  templateUrl: './netflex.component.html',
  styleUrls: ['./netflex.component.scss']
})
export class NetflexComponent implements OnInit {
   netflexarr !: country[]; 
   imgPath : string | undefined;
    inputval !: string;

  constructor(private service : NetflexService,
      private route : Router,
      private sendmsgservice : SendmsgService
    ) { }

  ngOnInit(): void {
    this.netflexarr = this.service.getAllusersData();
    console.log(this.netflexarr);
   
    this.sendmsgservice.sendMsg$.subscribe(res=>{
      // console.log(res);
      this.inputval = res;
    })

  }
 
  // getColor(elementRef:HTMLElement,nums:number) :string{
  //     if(nums > 5){
  //       return "backgroundColor : 'red'";
  //     }
  // }
 
  sendPath(path: string){
    console.log(path, typeof path);
    this.imgPath = "https://image.tmdb.org/t/p/w1280/" + path;
     console.log(this.imgPath);
     this.route.navigate(["/card", this.imgPath])
  }

}
