import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

loadedFeature;
  onNavigate(arg:string){
    this.loadedFeature=arg;
    console.log(this.loadedFeature)
  }
 
}
