import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {SecondPage} from "../second/second";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;
  addcomments:string;
  student_name:string;
  student_batch:string;
  student_year:string;
  comment: any = ["dfg", "rrgfd", "rg"];
  students: any = [{"name": "xyz", "batch": "2015", "year": "second"},
    {"name": "xy",
    "batch": "2015",
    "year": "sec"}, {"name": "z", "batch": "2015", "year": "seco"}];


  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  go() {
    if (this.username == "arpan" && this.password == "123456") {
      this.navCtrl.push(SecondPage, {"username": this.username});
    }

   }
addcomment()
  {
    this.comment.push(this.addcomments);
    this.addcomments="";
  }
confirm()
{



  let confirm = this.alertCtrl.create({
    title: 'Delete?',
    message: 'Do you agree to delete the last comment?',
    buttons: [
      {
        text: 'Disagree',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: 'Agree',
        handler: () => {
          console.log('Agree clicked');
          this.comment.pop();
        }
      }
    ]
  });
  confirm.present();
}
addstudent()
{
  this.students.push({"name":this.student_name,"batch":this.student_batch,"year":this.student_year});
}

}

