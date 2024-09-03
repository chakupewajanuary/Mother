import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']  // Corrected to styleUrls
})
export class SampleComponent {

  // Corrected the object syntax and moved it as a class property
  Customer = {
    name: '',
    orderId: '',
    orderType:''
  };

}
