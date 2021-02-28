import { LitElement, html, property } from 'lit-element';
import liveState from '../../live_state';
import formatPrice from '../../formatPrice';

interface CartItem {
  title: string;
  price: number;
}

export class StofruntCart extends LitElement {

  @property()
  cart: Array<CartItem> = [];

  get total() {
    return this.cart.reduce((acc, cartItem) => acc + cartItem.price, 0)
  }

  publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;

  connectedCallback() {
    super.connectedCallback();
    liveState.subscribe(({ cart }) => {
      this.cart = cart;
    })
  }

  render() {
    return html`
    <div class="c-table c-table--striped">
      <div class="c-table__caption">Cart</div>
      <div class="c-table__row c-table__row--heading">
        <span class="c-table__cell">Item</span>
        <span class="c-table__cell">Price</span>
      </div>
      ${this.cart && this.cart.map((item) => html`<stofrunt-cart-item .cartItem=${item}></stofrunt-cart-item>`)}
      <div class="c-table__row c-table__row--footer">Total: ${formatPrice(this.total)}</div>
    </div>
    `;
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
