---
title: useLocalStorage hook
description: Manage localStorage data with custom useLocalStorage hook in React.
date: 2024-04-24T20:03:25Z
published: true
---

```ts
import { Dispatch, SetStateAction, useState } from "react";

/**
 * A custom hook to store state in local storage.
 * @template T The type of the state value.
 * @param {string} key The key under which the state will be stored in local storage.
 * @param {T} initialValue The initial value of the state.
 * @returns {[T, Dispatch<SetStateAction<T>>]} An array containing the current state value and a function to update that value.
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(() => {
    // Initialize the state
    try {
      const value = window.localStorage.getItem(key);
      // Check if the local storage already has any values,
      // otherwise initialize it with the passed initialValue
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.error(error);
    }
  });

  /**
   * Function to set a new value for the state, updating both the state and local storage.
   * @param {T | SetStateAction<T>} value The new value for the state, or a function that returns the new value.
   */
  const setValue = (value: T | SetStateAction<T>) => {
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [state, setValue];
}

```
