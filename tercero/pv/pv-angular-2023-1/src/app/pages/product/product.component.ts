import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent {
  constructor (private httpClient:HttpCLient){
  }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    const response = this.htttpClient.get('https://api.escuelajs.co/api/v1/products').subscribe(
      response: => {
        console.log(response)
      }
    );
  }

}
