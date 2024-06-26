'use client';
import React from 'react';
import {Provider} from 'react-redux'
import {store} from './store'

export function StoreProvider({
  children
}: {
  children: JSX.Element
}) {
  return <Provider store={store}>{children}</Provider>
}