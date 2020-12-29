import { newE2EPage } from '@stencil/core/testing';

describe('stofrunt-context', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <stofrunt-context product="123">
      <h1><storefrunt-product attr="title"></h1>
    </stofrunt-context>
    `);

    const element = await page.find('stofrunt-product');
    expect(element).toEqualText('Good stuff');
  });
});
