import { Component, OnInit } from '@angular/core';
import { MyErrorhandlerService } from '../my-errorhandler.service';

@Component({
  selector: 'app-errorhandling',
  templateUrl: './errorhandling.component.html',
  styleUrls: ['./errorhandling.component.css']
})
export class ErrorhandlingComponent implements OnInit {

  constructor(private handleerror:MyErrorhandlerService) { }

  ngOnInit(): void {
  }
  data:any=undefined;
   generateerror(): void{
    
    this.data.sort();
    
   }

}
