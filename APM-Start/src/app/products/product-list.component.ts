import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    // styles: ['thead {color: #337AB7;']
    styleUrls: ['product-list.component.css']
    
})
export class ProductListComponent implements OnInit {    
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMarging: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[] = [];

    // private _productService;
    // constructor(productService: ProductService){
    //     this._productService = productService;
    // }    
    constructor(private _productService: ProductService){    
    }
        
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
                
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

} 