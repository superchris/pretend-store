import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';
import { Product } from '../stofrunt-product-list/stofrunt-product-list';

@Component({
  tag: 'stofrunt-product-item',
  shadow: true,
})
export class StofruntProductItem {

  @Prop() product: Product

  @Event() addProductToCart: EventEmitter<Product>;

  render() {
    return (
      <Host>
        <li onClick={_ev => this.addProductToCart.emit(this.product)}>{this.product?.title}</li>
      </Host>
    );
  }

}
