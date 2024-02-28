# TypeScript 이론

## TypeScript란?

1. TypeScript는 JavaScript에 추가적인 구문을 추가하여 editor와의 단단한 통합을 지원합니다. editor에서 초기에 오류를 잡을 수 있습니다.

2. TypeScript 코드는 JavaScript가 실행되는 모든 곳(브라우저, Node.js 또는 Deno 및 앱 등)에서 JavaScript로 변환될 수 있습니다.

3. TypeScript는 JavaScript를 이해하고 타입 추론(type inference)을 사용하여 추가 코드 없이도 훌륭한 도구를 제공합니다.

### Type 시스템

└ 명시적 정의(변수 선언 시 타입 정의)
let a: boolean = "x" <br>
→ 🚫 boolean 타입에 string타입 할당 불가 알림

└ 변수만 생성(타입 추론)
let b = "hello"<br>
→ b가 string 타입이라고 추론
b = 1<br>
→ 🚫 string 타입에 number타입 할당 불가 알림

## 📌 Types of TS(기본)

- ✅ 배열: 자료형[]
- ✅ 숫자: number
- ✅ 문자열: string
- ✅ 논리: boolean
- ✅ optional

```js
const player: {
  name: string,
  age?: number,
} = {
  name: "nico",
};
```

- ❌ player.age가 undefined일 가능성 알림

```js
if (player.age < 10) {
}
```

- ⭕ player.age가 undefined일 가능성 체크

```js
if (player.age && player.age < 10) {
}
```

- ❗ ?를 :앞에 붙이면 optional

### ✅ Alias(별칭) 타입

```js
type Player = {
    name: string,
    age?:number
}

const player : Player = {
    name: "nico"
}

⭐ 함수에서는 어떻게 쓸까
type Player = {
    name: string,
    age?:number
}

function playerMaker1(name:string) : Player {
    return {
        name
    }
}

const playerMaker2 = (name:string) : Player => ({name})

const nico = playerMaker1("nico")
nico.age = 12
```

### ✅ readonly 사용하기

```js
type Player = {
    readonly name:string
    age?:number
}

const playerMaker = (name: string): Player => ({name})

const nico = playerMaker("nico")
🚫 nico.name = "aa"

const numbers: readonly number[] = [1, 2, 3, 4]
🚫 numbers.push(1)
❗ readonly가 있으면 최초 선언 후 수정 불가
    ⇒ immutability(불변성) 부여
        but, javascript에서는 그냥 배열
```

### ✅ Tuple

- 정해진 개수와 순서에 따라 배열 선언

```js
const player: [string, number, boolean] = ["nico", 1, true]
❗ readonly도 사용가능 ⇒ readonly [...] 형태
```

### ✅ undefined, null, any

- any: 아무 타입
- undefined: 선언X 할당X
- null: 선언O 할당X

### ✅ unknown

```js
let a:unknown

if(typeof a === 'number'){
    let b = a + 1
}
if(typeof a === 'string'){
    let b = a.toUpperCase()
}
🚫 let b = a + 1
```

### ✅ void

- 아무것도 return하지 않는 함수에서 반환 자료형

```js
function hello() {
    console.log('x')
}
const a = hello()
🚫 a.toUpperCase()
```

### ✅ never

- 함수가 return하지 않을 때

```js
function hello():never {
    throw new Error("zzz")
    🚫return "a"
}

function temp(name:string|number):never {
    if(typeof name === "string"){
        name
    } else if(typeof name === "number"){
        name
    } else {
        name
    }
}

if 안에서는 string형의 name 반환
else if 안에서는 number형의 name 반환
else 안에서는 never형의 name 반환
⇒ 즉, 제대로 인자가 전달되었다면 else로 올 수 없음
```

# Redux 이론

## Store

- ✅ **data**(application 에서 바뀌는 data) 를 넣는곳 **state** 담는다 <br>
  data를 넣을 수 있는 장소를 생성,
- ✅ **store**은 function(함수) 로 생성 되어야 한다 data를 **modify**하는
  **reducer** 나 **modify** 는 처음으로 **data** 를 바꿔준다.<br>
- ✅ 하지만 뭐든지 return하는 것은 **application**에 있는 **data**
  counterModifier 가 “hello” 라고 return 한다면 application의 **data**가 된다.<br>
- ✅ **modify** 가 1을 return 한다면 **application**의 상태는 1이 된다.
  결과적으로 **reducer** 나 **modify** 가 return 하는 것은 **application**의 **data**가 되는것이다.

## Action

- ✅ **Action** : **redux**에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 **reducer**와 소통하기 위한 방법
- ✅ **Reducer**에게 **Action**을 보내는 방법 : store.dispatch({key: value});

## Subscribe

- ✅ **Subscribe** : **store** 안에 있는 변화 감지
  store.subscribe(func); // store안의 변화를 감지하면 func 실행

## Recap

- ✅ **reducer** : 현재 상태의 **application**과 함께 불려지는 function (+ with action)
  return하는 것은 **application**의 state가 됨
- ✅ **action** : **reducer**와 소통하는 방법으로 **Object**여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)
- ✅ **dispatch** : **reducer**에게 **action**을 보내는 방법
- ✅ **subscribe** : **store**의 변화를 감지하면 인자값으로 준 함수를 실행
- ✅ **switch**가 자주 쓰임<br>

```JavaScript
switch(action.type){
    case ADD_TODO:
        return smth
    case DELETE_TODO:
        return smth2
    default:
        return smth3
}
```

- ✅ string으로 바로 쓰는 대신에 const variable로 선언해서 사용하기 -> 에러 발견 용이

# Redux-Toolkit

## createReducer()

- https://redux-toolkit.js.org/api/createReducer

## "Map Object" 표기법과 함께 사용​

이 표기법은 조금 더 짧지만 TypeScript가 아닌 JavaScript에서만 작동하고 IDE와의 통합이 적으므로 대부분의 경우 "Builder Callback" 표기법을 권장합니다.

- https://redux-toolkit.js.org/api/createReducer#usage-with-the-map-object-notation

"Builder 콜백" 표기법과 함께 사용 (타입스크립트 사용시 추천 방법)
createReducer를 사용하는 권장 방법은 TypeScript 및 대부분의 IDE에서 가장 잘 작동하는 "Builder Callback" 표기법입니다.

- https://redux-toolkit.js.org/api/createReducer#usage-with-the-builder-callback-notation

## immer

현재 상태를 변경하여 다음 불변 상태를 만듭니다.

- https://github.com/immerjs/immer

## Array.prototype.unshift()

unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
