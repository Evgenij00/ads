import React from 'react'
import { Provider } from 'react-redux'

import 'normalize.css'
import 'assets/styles/styles.css'

import { store } from 'store'
import { AppContent } from './AppContent'

export function AppShell(): JSX.Element {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}
