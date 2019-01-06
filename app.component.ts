import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-dream-app flynewsky';
  submit1ButtonText: string = ' submit ';
  n2Hoo:string = 'n2 Hoo Text';
  
  onTog1Click() {
    document.querySelector('.cgCon1').classList.toggle("-tog1");
    if (this.n2Hoo.length > 0) 
      {this.n2Hoo = ''}
    else
      {this.n2Hoo = 'back to hoooo'}
  }
 onTog2(){
   alert('running onTog2');
  //{document.getElementById("labelFname").innerHTML = 'tog2'}
 }
 onSubmit1Click(){
   //alert('onSubmit1 was clicked');
  //  take all the form fields and json-ize them
  //  do a fancy api call asyncronously
  this.submit1ButtonText = ' submitting... ';
  // when done, this.submit1ButtonText = ' submitted ';
   
 }
}
