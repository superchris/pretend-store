import { createContextProvider } from '@kuscamara/context-provider';
import { subscribeState, pushEvent } from '../../live_context';
import { Channel } from 'phoenix';

const globals = {};
const ContextProvider: CustomElementConstructor = createContextProvider(globals);

export class StofruntContext extends ContextProvider {
  channel: Channel;

  connectedCallback() {
    this.channel = subscribeState("product:1", (state) => { this['value'] = state; });
    this.addEventListener('addProductToCart', (e) => {
      pushEvent(this.channel, e as CustomEvent);
    }, true);
    this.addEventListener('success', (e: CustomEvent) => {
      console.log(e);
      e.detail.complete();
    }, true);
    this.addEventListener('paymentmethod', (e) => {
      console.log(e);
    }, true);
  }

  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like
     * encapsulated CSS and slots are unavailable.
     */
    return this;
  }
}

window.customElements.define('stofrunt-context', StofruntContext);
