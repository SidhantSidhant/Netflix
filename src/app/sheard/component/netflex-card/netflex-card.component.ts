import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
   selector: 'app-netflex-card',
   templateUrl: './netflex-card.component.html',
   styleUrls: ['./netflex-card.component.scss']
})
export class NetflexCardComponent implements OnInit {
   img_path !: string;

   constructor(private route: ActivatedRoute) { }

   ngOnInit(): void {
      
      this.route.params.subscribe((params : Params)=>{
          console.log(params["img"]);
         this.img_path = params["img"]
      })

   }

}
