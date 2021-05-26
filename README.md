# react-click-outside-wrapper

A react wrapper component to detect and trigger a callback once clicked outside it's children.

# Install

Using [npm](http://npmjs.org):

```
npm i react-click-outside-wrapper
```

## Usage

Import with ES6 modules:

```js
import ClickOutsideWrapper from "react-click-outside-wrapper";
```

Example usage:

```js
function App() {
  return (
    <div className="app">
      <ClickOutsideWrapper onClickOutside={() => alert("You clicked outside!")}>
        <div className="item">
          <p>Click outside me!</p>
        </div>
      </ClickOutsideWrapper>
    </div>
  );
}
```

## Props

| Name           |   Value    |                                             Description |
| -------------- | :--------: | ------------------------------------------------------: |
| onClickOutside | `function` | Callback triggered on every click outside the component |

# License

MIT
