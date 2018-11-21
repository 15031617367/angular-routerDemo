import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-logoin',
  templateUrl: './logoin.component.html',
  styleUrls: ['./logoin.component.css']
})
export class LogoinComponent implements OnInit {

  constructor(private myRputer:Router) { }

  ngOnInit() {}

  logoinBtn(){
    console.log("asdasd");
    this.myRputer.navigate(['index'])
  }

}
