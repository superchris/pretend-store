import { newE2EPage } from '@stencil/core/testing';

describe('stofrunt-product-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stofrunt-product-list></stofrunt-product-list>');

    const element = await page.find('stofrunt-product-list');
    expect(element).toHaveClass('hydrated');
  });
});
