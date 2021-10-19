# recoil-practice

## Atom

```js
export const userDataState = atom({
  key: "userDataState",
  default: { id: "", nickname: "", birth: "" },
});
```

사용자의 정보(ID, 닉네임, 생년월일)에 대한 Atom을 생성해 사용한다.

Recoil에서 Atom은 상태의 단위이다.

## Selector

```js
export const userBirthState = selector({
  key: "userBirthState",
  get: ({ get }) => {
    // ...
  },
});

export const userAgeState = selector({
  key: "userAgeState",
  get: ({ get }) => {
    // ...
  },
});
```

`userBirthState` Selector는 위에서 생성한 `userDataState` Atom의 값을 가져와 `yyyy. mm. dd.` 포맷의 날짜 스트링을 반환한다.

`userAgeState` Selector 역시 `userDataState` Atom을 통해 나이를 계산해 반환한다.

Recoil에서 Selector는 다른 Atom이나 Selector의 상태를 통해 유도 가능한 값들을 반환하는 순수 함수이다. 날짜 스트링과 사용자의 나이는 `userDataState` Atom의 `birth` 값에서 유도될 수 있는 값이다. Atom에는 `birth`라는 최소한의 값만을 저장하고, 그로부터 유도 가능한 값들을 Selector로 작성하였다.

## useRecoilState(RECOIL_STATE)

상태값과 setter 함수를 리턴한다.

```js
const [userData, setUserData] = useRecoilState(userDataState);
```

## useRecoilValue(RECOIL_STATE)

상태값을 반환한다.

```js
const userBirth = useRecoilValue(userBirthState);
const userAge = useRecoilValue(userAgeState);
```

두 Selector가 Writable하지 않기 때문에 `useRecoilState()`를 사용하지 않고 `useRecoilValue()`를 사용하였다. (Writable한 Selector를 생성하려면 Selector에 set 속성을 추가!)

Writable한 State도 인자로 받을 수 있다. State를 수정하고 싶지 않은 경우 `useRecoilValue()`로 상태값만 받아올 수 있을 것 같다.

## 리렌더링

맞게 이해하고 있는지 모르겠다.

0. Player는 Atom, Selector, Component 셋.
1. Component는 Atom이나 Selector를 구독한다.
2. Selector는 Atom이나 다른 Selector를 구독한다.
3. Atom 상태값이 변경되면 구독자들에게 전파되어 최종적으로는 Component의 리렌더링이 발생한다.
