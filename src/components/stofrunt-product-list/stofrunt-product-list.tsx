import { Component, Host, h, Prop, State } from '@stencil/core';
import { Channel } from 'phoenix';
import socket from '../../socket';
import css from '@blaze/css/dist/blaze/blaze.css'

export interface Product {
  title: string;
  sku: string;
  price: number;
  description: string;
  // imageUrl: string;
}

const subscribeState = (socket, channelName, onStateChange) => {
  const channel = socket.channel(channelName, {});
  channel.join().receive("ok", () => console.log('joined'));
  channel.on("state:change", (state) => onStateChange(state));
  return channel;
}

const pushEvent = (channel, event: CustomEvent) => channel.push(event.type, event.detail);

@Component({
  tag: 'stofrunt-product-list',
  styleUrl: 'stofrunt-product-list.css',
  shadow: false,
})
export class StofruntProductList {

  @Prop() products: Product[];

  @State() channel: Channel;

  @State() cart: Product[];

  componentWillLoad() {
    this.channel = subscribeState(socket, "product_list:all", ({ cart, products }) => {
      console.log(cart, products);
      this.products = products;
      this.cart = cart;
    })
  }

  addProductToCart(event: CustomEvent<Product>) {
    pushEvent(this.channel, event);
  }

  render() {
    return (
      <Host>
        <style>
          {css}
        </style>
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
        <ul>
          {this.cart && this.cart?.map(product => <li>{product.title}</li>)}
        </ul>
      </Host>
    );
  }

}
