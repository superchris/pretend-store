import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'stofrunt-cart-item',
  shadow: false,
})
export class StofruntCartItem {

  @Prop() cartItem: any;

  render() {
    return (
      <Host class="c-table__row">
        <span class="c-table__cell">{this.cartItem.title}</span>
        <span class="c-table__cell">${this.cartItem.price}</span>
      </Host>
    );
  }

}
