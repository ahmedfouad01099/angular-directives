import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  nums = [1, 2, 3, 4, 5];

  oddNums = [1, 3, 5];
  evenNums = [2, 4];
  onlyOdd = false;

  value = 5;
  constructor() {}
}
