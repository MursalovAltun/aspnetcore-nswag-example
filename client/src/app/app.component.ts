import {Component, OnInit} from '@angular/core';
import {ProductsService} from './core/services/service-proxies';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'nswag-example';

    constructor(private productsService: ProductsService) {
    }

    public async ngOnInit(): Promise<void> {
        const allProducts = await this.productsService.getAll().toPromise();
        console.log('ALL PRODUCTS - ', allProducts);
    }

}
