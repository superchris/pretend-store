import { LitElement, html } from 'lit-element';
import { contextConsumerMixin } from '@kuscamara/context-provider';
import { StofruntCartItem } from '../stofrunt-cart-item/stofrunt-cart-item';

export class StofruntCart extends contextConsumerMixin(LitElement) {

  get cart() {
    return this['context'].cart;
  }

  render() {
    return html`<div class="c-table c-table--striped">
      <div class="c-table__caption">Cart</div>
      <div class="c-table__row c-table__row--heading">
        <span class="c-table__cell">Item</span>
        <span class="c-table__cell">Price</span>
      </div>
      ${this.cart && this.cart.map((item) => html`<stofrunt-cart-item .cartItem=${item}></stofrunt-cart-item>`)}
    </div>`;
  }

  onContextChanged() {
    ((this as unknown) as LitElement).requestUpdate();
  }

  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like
     * encapsulated CSS and slots are unavailable.
     */
    return this;
  }
}

customElements.define("stofrunt-cart", (StofruntCart as unknown) as CustomElementConstructor);