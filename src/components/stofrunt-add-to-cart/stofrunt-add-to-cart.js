import { LitElement, html } from 'lit-element';
import { contextConsumerMixin } from '@kuscamara/context-provider';

const Base = contextConsumerMixin(LitElement);

export class StofruntAddToCart extends Base {

  get product() {
    return this['context'].product;
  }

  addToCart() {
    this.dispatchEvent(new CustomEvent('addProductToCart', {detail: this.product}))
  }

  render() {
    return html`<button type="button" class="c-button c-button--brand" @click="${this.addToCart}"><slot></slot></button>`;
  }

  onContextChanged() {
    this.requestUpdate();
  }
}

customElements.define("stofrunt-add-to-cart", StofruntAddToCart);
