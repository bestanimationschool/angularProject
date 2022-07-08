import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newProject';
  data = "Arena Animation";
  examp=500;
  newexamp=["South Extension","Preet Vihar", "Kohat Enclave", "Chandigarh"];
  location={
    location1: "South Extension",
    location2: "Preet Vihar",
    location3: "Kohat Enclave",
    location4: "Chandigarh"
  };
  myFunction()
  {
    alert("error message");
  }
}
