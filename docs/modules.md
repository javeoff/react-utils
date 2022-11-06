[react-utils-jave](README.md) / Exports

# react-utils-jave

## Table of contents

### Functions

- [useAsync](modules.md#useasync)
- [useAwait](modules.md#useawait)
- [useClickOutside](modules.md#useclickoutside)
- [useDebounce](modules.md#usedebounce)
- [useIsFirstMount](modules.md#useisfirstmount)
- [useLayoutAsync](modules.md#uselayoutasync)
- [useMount](modules.md#usemount)
- [useMountEffect](modules.md#usemounteffect)
- [useProtectedRef](modules.md#useprotectedref)
- [useRemount](modules.md#useremount)
- [useSetState](modules.md#usesetstate)
- [useThrottle](modules.md#usethrottle)
- [useUnmount](modules.md#useunmount)
- [useUpdate](modules.md#useupdate)

## Functions

### useAsync

▸ **useAsync**(`effect`, `deps`): `void`

**`Example`**

```ts
useAsync(async () => {
  await Promise.resolve();
})
Provide asynchronous callback to useEffect
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | () => `Promise`<`void` \| `VoidFunction`\> |
| `deps` | `DependencyList` |

#### Returns

`void`

#### Defined in

[hooks/sideEffects/useAsync.ts:12](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/sideEffects/useAsync.ts#L12)

___

### useAwait

▸ **useAwait**<`Result`\>(`fn`, `args`): `IResult`<`Result`\>

**`Example`**

```ts
const [state, setState] = useAwait(async () => {
  await new Promise((resolve) => {
    resolve()
  })
}, [])
```

#### Type parameters

| Name |
| :------ |
| `Result` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Promise`<``null`` \| `Result`\> | callback function that accepting an asynchronous function |
| `args` | `unknown`[] | rerender requirements, which batch the rerender |

#### Returns

`IResult`<`Result`\>

;

#### Defined in

[hooks/sideEffects/useAwait.ts:24](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/sideEffects/useAwait.ts#L24)

___

### useClickOutside

▸ **useClickOutside**(`ref`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `RefObject`<`HTMLElement`\> |
| `callback` | `Dispatch`<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[hooks/ui/useClickOutside.ts:8](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/ui/useClickOutside.ts#L8)

___

### useDebounce

▸ **useDebounce**(): `void`

#### Returns

`void`

#### Defined in

[hooks/sideEffects/useDebounce.ts:1](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/sideEffects/useDebounce.ts#L1)

___

### useIsFirstMount

▸ **useIsFirstMount**(): `void`

#### Returns

`void`

#### Defined in

[hooks/lifecycles/useIsFirstMount.ts:1](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/lifecycles/useIsFirstMount.ts#L1)

___

### useLayoutAsync

▸ **useLayoutAsync**(`effect`, `deps`): `void`

**`Example`**

```ts
useLayoutAsync(async () => {
  await Promise.resolve();
})
Provide asynchronous callback to useEffect
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | () => `Promise`<`void` \| `VoidFunction`\> |
| `deps` | `DependencyList` |

#### Returns

`void`

#### Defined in

[hooks/sideEffects/useLayoutAsync.ts:12](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/sideEffects/useLayoutAsync.ts#L12)

___

### useMount

▸ **useMount**(): `void`

#### Returns

`void`

#### Defined in

[hooks/lifecycles/useMount.ts:1](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/lifecycles/useMount.ts#L1)

___

### useMountEffect

▸ **useMountEffect**(`callback`, `deps`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `undefined` \| `Partial`<`ICallbackResult`\> |
| `deps` | `DependencyList` |

#### Returns

`void`

#### Defined in

[hooks/lifecycles/useMountEffect.ts:10](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/lifecycles/useMountEffect.ts#L10)

___

### useProtectedRef

▸ **useProtectedRef**<`Data`\>(`data`): `MutableRefObject`<``null`` \| `Data`\>

Memoize data on every data remount
When component is unmounted, but
useEffect is triggered, data make exists itself

**`Example`**

```ts
const ref = useProtectedRef(() => {
  setState(state);
})
```

#### Type parameters

| Name |
| :------ |
| `Data` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Data` | some data to memoize on remount |

#### Returns

`MutableRefObject`<``null`` \| `Data`\>

#### Defined in

[hooks/sideEffects/useProtectedRef.ts:14](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/sideEffects/useProtectedRef.ts#L14)

___

### useRemount

▸ **useRemount**(): `void`

#### Returns

`void`

#### Defined in

[hooks/lifecycles/useRemount.ts:1](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/lifecycles/useRemount.ts#L1)

___

### useSetState

▸ **useSetState**<`InitialState`\>(`initialState`): (`TUnknownState` \| (`partialState`: `Partial`<`TUnknownState`\> \| (`state`: `TUnknownState`) => `TUnknownState`) => `TUnknownState`)[]

**`Example`**

```ts
const [state, setState] = useSetState({
  initialParam: 0,
  secondParam: 2,
});

setState({
  initialParam: 1,
}) // { initialParam: 1, secondParam: 2 }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InitialState` | extends `TUnknownState` = `TUnknownState` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `InitialState` | initial object state |

#### Returns

(`TUnknownState` \| (`partialState`: `Partial`<`TUnknownState`\> \| (`state`: `TUnknownState`) => `TUnknownState`) => `TUnknownState`)[]

#### Defined in

[hooks/state/useSetState.ts:20](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/state/useSetState.ts#L20)

___

### useThrottle

▸ **useThrottle**(): `void`

#### Returns

`void`

#### Defined in

[hooks/sideEffects/useThrottle.ts:1](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/sideEffects/useThrottle.ts#L1)

___

### useUnmount

▸ **useUnmount**(): `void`

#### Returns

`void`

#### Defined in

[hooks/lifecycles/useUnmount.ts:1](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/lifecycles/useUnmount.ts#L1)

___

### useUpdate

▸ **useUpdate**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[hooks/sideEffects/useUpdate.ts:5](https://github.com/javeoff/react-utils/blob/d018b0d/src/hooks/sideEffects/useUpdate.ts#L5)
