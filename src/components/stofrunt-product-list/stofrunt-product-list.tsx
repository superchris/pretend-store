import { Component, Host, h, Prop, State } from '@stencil/core';
import { Channel } from 'phoenix';
import socket from '../../socket';

export interface Product {
  title: string;
  sku: string;
  price: number;
  // imageUrl: string;
}

@Component({
  tag: 'stofrunt-product-list',
  styleUrl: 'stofrunt-product-list.css',
  shadow: true,
})
export class StofruntProductList {

  @Prop() products: Product[];

  @State() channel : Channel;

  @State() cart: Product[];

  componentWillLoad() {
    this.channel = socket.channel("product_list:all", {})
    this.channel.join().receive("ok", ({products}) => {
      this.products = products;
    });
    this.channel.on("cart:change", ({cart}) => {
      this.cart = cart;
    });
  }

  addProductToCart(event: CustomEvent<Product>) {
    console.log(`adding ${event.detail.title}`);
    this.channel.push('addProductToCart', event.detail);
  }

  render() {
    return (
      <Host>
        Products:
        <ul>
          {this.products?.map(product => <stofrunt-product-item onAddProductToCart={(ev) => this.addProductToCart(ev)} product={product}></stofrunt-product-item>)}
        </ul>
        Cart:
        <ul>
          {this.cart?.map(product => <li>{product.title}</li>)}
        </ul>
      </Host>
    );
  }

}
