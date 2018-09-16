import React from 'react';
import { expect } from 'chai';
import Pagination from '.';

describe('Pagination', () => {
  it('Pagination should be a function', () => {
    expect(Pagination).to.be.a('function');
  });

  test('pagination({total: 1, acitivePage: 1}) should return [1]', () => {
    const params = { total: 1, acitivePage: 1 };
    const result = [1];

    expect(Pagination(params)).to.be.deep.equal(result);
  });

  test('pagination({total: 2, acitivePage: 1}) should return [1, 2]', () => {
    const params = { total: 2, acitivePage: 1 };
    const result = [1, 2];

    expect(Pagination(params)).to.be.deep.equal(result);
  });
});
