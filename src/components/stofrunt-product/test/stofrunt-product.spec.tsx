import { newSpecPage } from '@stencil/core/testing';
import { StofruntProduct } from '../stofrunt-product';

describe('stofrunt-product', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StofruntProduct],
      html: `<stofrunt-product></stofrunt-product>`,
    });
    expect(page.root).toEqualHtml(`
      <stofrunt-product>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stofrunt-product>
    `);
  });
});
