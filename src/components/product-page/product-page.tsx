import { Component, Host, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import css from '@blaze/css/dist/blaze/blaze.css';
import '@blaze/atoms';
import '../stofrunt-context/stofrunt-context';
import '../stofrunt-product/stofrunt-product';
import '../stofrunt-cart/stofrunt-cart';
import '../stofrunt-add-to-cart/stofrunt-add-to-cart';

@Component({
  tag: 'product-page',
  shadow: true,
})
export class ProductPage {
  @Prop() match: MatchResults;

  render() {
    return (
      <Host>
        <style>
          {css}
        </style>
        <stofrunt-context>
          <div class="o-grid">
            <div class="o-grid__cell--width-65">
              <blaze-card>
                <blaze-image filter="cheese" height={300} width={500}></blaze-image>
                <blaze-card-header>
                  <h2 class="c-heading u-xlarge">
                    <stofrunt-product attr="title"></stofrunt-product>
                    <div class="c-heading__sub"><stofrunt-product attr="title"></stofrunt-product></div>
                  </h2>
                </blaze-card-header>
                <blaze-card-body>
                  <p class="c-paragraph">
                    This is some descriptive text about the cheese.
                  </p>
                </blaze-card-body>
                <blaze-card-footer>
                  <stofrunt-add-to-cart>Add to cart</stofrunt-add-to-cart>
                </blaze-card-footer>
              </blaze-card>
            </div>
            <div class="o-grid__cell">
              <stofrunt-cart></stofrunt-cart>
            </div>
          </div>
        </stofrunt-context>

      </Host>
    );
  }

}
