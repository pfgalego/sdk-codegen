/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2020 Looker Data Sciences, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { theme, ComponentsProvider } from '@looker/components'
import { ThemeProvider } from 'styled-components'
import App, { ApiExplorerProps } from './App'
import { ExplorerStyle } from './components'
import './styles.css'

const specs: ApiExplorerProps = {
  specs: {
    '3.0': {
      status: 'stable',
      specURL: 'https://self-signed.looker.com:19999/api/3.0/swagger.json',
      specContent: require('../specs/Looker.3.0.oas.json'),
    },
    '3.1': {
      status: 'current',
      isDefault: true,
      specURL: 'https://self-signed.looker.com:19999/api/3.1/swagger.json',
      specContent: require('../specs/Looker.3.1.oas.json'),
    },
    '4.0': {
      status: 'experimental',
      specURL: 'https://self-signed.looker.com:19999/api/4.0/swagger.json',
      specContent: require('../specs/Looker.4.0.oas.json'),
    },
  },
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ComponentsProvider />
    <ExplorerStyle />
    <App {...specs} />
  </ThemeProvider>,
  document.getElementById('container')
)
