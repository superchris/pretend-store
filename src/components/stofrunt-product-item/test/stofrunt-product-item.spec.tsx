import { newSpecPage } from '@stencil/core/testing';
import { StofruntProductItem } from '../stofrunt-product-item';

describe('stofrunt-product-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StofruntProductItem],
      html: `<stofrunt-product-item></stofrunt-product-item>`,
    });
    expect(page.root).toEqualHtml(`
      <stofrunt-product-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stofrunt-product-item>
    `);
  });
});
