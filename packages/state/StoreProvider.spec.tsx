import React from 'react';
import {render} from '@testing-library/react';

import {StoreProvider} from './StoreProvider';

describe('StoreProvider', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<StoreProvider><div /></StoreProvider>);
    expect(baseElement).toBeTruthy();
  });
});
