import { Component, Host, h, Prop, State } from '@stencil/core';
import { Channel, Socket } from 'phoenix';
import liveState from '../../live_state';
import "../stofrunt-cart/stofrunt-cart";

export interface Product {
  title: string;
  sku: string;
  price: number;
  description: string;
  // imageUrl: string;
}

@Component({
  tag: 'stofrunt-product-list',
  styleUrl: 'stofrunt-product-list.css',
  shadow: false,
})
export class StofruntProductList {

  @State() products: Product[];

  @State() totalPages: number;

  @State() pageNumber: number;

  @State() channel: Channel;

  componentWillLoad() {
    liveState.subscribe(({ products, total_pages, page_number }) => {
      this.products = products;
      this.pageNumber = page_number;
      this.totalPages = total_pages;
    })
  }

  addProductToCart(event: CustomEvent<Product>) {
    liveState.pushEvent(event);
  }

  pageChange(event: CustomEvent<number>) {
    liveState.pushEvent(event);
  }

  render() {
    return (
      <Host>
        <div class="c-table c-table--striped">
          <div class="c-table__caption">Products</div>
          <div class="c-table__row c-table__row--heading">
            <span class="c-table__cell">Product</span>
            <span class="c-table__cell">Description</span>
            <span class="c-table__cell">Price</span>
            <span class="c-table__cell"></span>
          </div>
          {this.products && this.products?.map(product => <stofrunt-product-item onAddProductToCart={(ev) => this.addProductToCart(ev)} product={product}></stofrunt-product-item>)}
        </div>
        <blaze-pagination page={this.pageNumber} pages={this.totalPages} onChanged={(ev) => this.pageChange(ev)}></blaze-pagination>
      </Host>
    );
  }

}
