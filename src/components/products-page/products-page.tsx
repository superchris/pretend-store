import { Component, Host, h } from '@stencil/core';
import css from '@blaze/css/dist/blaze/blaze.css'

@Component({
  tag: 'products-page',
  shadow: true,
})
export class ProductsPage {

  render() {
    return (

      <Host>
        <style>
          {css}
        </style>
        <div class="o-grid">
          <div class="o-grid__cell--width-65">
            <stofrunt-product-list></stofrunt-product-list>
          </div>
          <div>
            <stofrunt-cart></stofrunt-cart>
          </div>
        </div>
      </Host>
    );
  }

}
