import { newE2EPage } from '@stencil/core/testing';

describe('stofrunt-product', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stofrunt-product></stofrunt-product>');

    const element = await page.find('stofrunt-product');
    expect(element).toHaveClass('hydrated');
  });
});
