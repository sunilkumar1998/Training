import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects-in-angular',
  templateUrl: './subjects-in-angular.component.html',
  styleUrls: ['./subjects-in-angular.component.css']
})
export class SubjectsInAngularComponent implements OnInit {


  showsubjectgDemo=true;
  showbehaviourgDemo=false;
  showReplaygDemo=false;
  showasyncDemo=false;

  showsubjectdemo():void
  {
    this.showsubjectgDemo=true;
    this.showbehaviourgDemo=false;
    this.showReplaygDemo=false;
    this.showasyncDemo=false;
   
  }

  showbehavioursubjectdemo():void
  {
    this.showsubjectgDemo=false;
    this.showbehaviourgDemo=true;
    this.showReplaygDemo=false;
    this.showasyncDemo=false;
   
  }

  showreplaydemo():void
  {
    this.showsubjectgDemo=false;
    this.showbehaviourgDemo=false;
    this.showReplaygDemo=true;
    this.showasyncDemo=false;
   
  }

  showasyncdemo():void
  {
    this.showsubjectgDemo=false;
    this.showbehaviourgDemo=false;
    this.showReplaygDemo=false;
    this.showasyncDemo=true;
   
  }
  constructor() { }

  ngOnInit(): void {
  }

}
