import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute } from '@angular/router';
import { ProductsManagementService } from '../../../services/products-management.service';
@Component({
  selector: 'nest-product-details',
  standalone: true,
  imports: [ImageModule, ButtonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  productinfo: any ;
  productdata:any;
  constructor(private route:ActivatedRoute, private productManagement:ProductsManagementService){}
  ngOnInit(): void {
    this.initproduct()
  }
  initproduct() {
    this.product = this.route.snapshot.paramMap.get('id')

    this.fetchproductinfo()
  }
  fetchproductinfo() {
    this.productManagement.getProductbyId(this.product).subscribe(
      (data:any)=>{
        // console.log(data)
        this.productinfo = data.product
        this.productdata = data.data
      },
      (error:any) =>{
        console.error(error)
      }
    )
  }
}
