import React from 'react';
import { Loading } from '../components/Loading';

export const withNull = (Component) => (props) =>
  !props.list
    ? null
    : <Component { ...props } />

export  const withEmpty = (Component) => (props) =>
  !props.list.length
    ? <div><p>You have no item.</p></div>
    : <Component { ...props } />

export const withLoadingIndicator = (Component) => ({ isLoadingList, ...list }) =>
  isLoadingList
    ? <Loading />
    : <Component { ...list } />