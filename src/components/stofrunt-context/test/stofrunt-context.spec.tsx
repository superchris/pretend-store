import { newSpecPage } from '@stencil/core/testing';
import { StofruntContext } from '../stofrunt-context';

describe('stofrunt-context', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StofruntContext],
      html: `<stofrunt-context></stofrunt-context>`,
    });
    expect(page.root).toEqualHtml(`
      <stofrunt-context>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stofrunt-context>
    `);
  });
});
