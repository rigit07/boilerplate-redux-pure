import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/counterActions'
import { multiple_2, multiple_3, multipleAsync } from './actions/multipleActions'
import { toZero } from './actions/generalActions'

export function Counter() {
  const myState = useSelector((state) => JSON.stringify(state))
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <div><code>{myState}</code></div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Multiple 2"
          onClick={() => dispatch(multiple_2())}
        >
          Multiple 2
        </button>
        <button
          aria-label="Multiple 3"
          onClick={() => dispatch(multiple_3())}
        >
          Multiple 3
        </button>
        <button
          aria-label="Multiple by 10 Async"
          onClick={() => dispatch(multipleAsync({nested_group: 'group_2', target_value: 10}))}
        >
          Multiple by 10 Async
        </button>
        <button
          aria-label="To Zero"
          onClick={() => dispatch(toZero())}
        >
          toZero
        </button>
      </div>
    </div>
  )
}