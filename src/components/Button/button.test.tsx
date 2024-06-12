
import {describe, expect} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


import React from 'react';

import {Button} from './Button';

describe('render Button', () => {
  beforeEach(() => {
    // write someting before each test
  });

  afterEach(() => {
    // write someting after each test
  });

  it('Renders correctly initial document', () => {
    render(
      <Button label={'test'}/>
    );
  });
});