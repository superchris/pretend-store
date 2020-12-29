import { LitElement, html } from 'lit-element';
import { contextConsumerMixin } from '@kuscamara/context-provider';

export class StofruntProduct extends contextConsumerMixin(LitElement) {

  get product() {
    return this['context'].product;
  }

  render() {
    return html`<span>${this.product?.title}</span>`;
  }

  onContextChanged() {
    ((this as unknown) as LitElement).requestUpdate();
  }
}

customElements.define("stofrunt-product", (StofruntProduct as unknown) as CustomElementConstructor);
