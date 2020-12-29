import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';
import { Product } from '../stofrunt-product-list/stofrunt-product-list';

@Component({
  tag: 'stofrunt-product-item',
  shadow: false,
})
export class StofruntProductItem {

  @Prop() product: Product

  @Event() addProductToCart: EventEmitter<Product>;

  render() {
    return (
      <Host class="c-table__row">
        <span class="c-table__cell">{this.product?.title}</span>
        <span class="c-table__cell">{this.product?.description}</span>
        <span class="c-table__cell">{this.product?.price}</span>
        <span class="c-table__cell"><button class="c-button" onClick={_ev => this.addProductToCart.emit(this.product)}>Add to cart</button></span>
      </Host>
    );
  }

}
