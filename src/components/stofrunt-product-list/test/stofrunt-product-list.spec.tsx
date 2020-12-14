import { newSpecPage } from '@stencil/core/testing';
import { StofruntProductList } from '../stofrunt-product-list';

describe('stofrunt-product-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StofruntProductList],
      html: `<stofrunt-product-list></stofrunt-product-list>`,
    });
    page.rootInstance.products = [{name: 'Stuff'}, {name: 'Other Stuff'}];
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <stofrunt-product-list>
        <mock:shadow-root>
          <ul>
            <li>Stuff</li>
            <li>Other Stuff</li>
          </ul>
        </mock:shadow-root>
      </stofrunt-product-list>
    `);
  });
});
