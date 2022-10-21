
# ControlJS

ControlJS is a react library allowing you to create animations on components with possibility to trigger them on scroll.


## Installation

Install ControlJS with npm

```bash
  npm install react-control-js
```
    
## Usage/Examples

```javascript
import Control from 'react-control-js'

function App() {
  return <Control element={<p>Hello World!</p>} x={20} onScroll={true} />
}
```

## API Reference

### element
Passed as a property to the Control component. Defines element that would be rendered to the DOM and controlled with animations.
```javascript
  <Control element={<div>Hello World</div>} />
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `element` | `JSX.Element` | **Required**. Animated element. |

### opacity
Used to animate opacity, if it exists on Control component it will transition element's opacity from the value of 0 to the one passed in the property. 

```javascript
  <Control element={<div>Hello World</div>} opacity={0.42} />
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `opacity`      | `number` | *Optional.* Opacity element would be transformed to. |

### x, y

X and y are properties passed to the Control component which define the position that controlled element would be transformed to relative  to its position in DOM.

You can either pass a number which will work as px unit or a string if you'd like something like percentage value.


```javascript
  <Control element={<div>Hello World</div>} x={-10} />
```
```javascript
  <Control element={<div>Hello World</div>} x={20} y={'40%'} />
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x, y`      | `number / string` | *Optional.* Translating element. |

### rotate

Rotate defines if controlled element should be rotated. You can pass it a number which will act as deg unit.


```javascript
  <Control element={<div>Hello World</div>} rotate={90} />
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `rotate`      | `number` | *Optional.* Rotation of the element. |

### onScroll

Boolean value which tells Control if the animation should occur as animated component enters the viewport or directly after render.


```javascript
  <Control element={<div>Hello World</div>} onScroll={true} />
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `onScroll`      | `boolean` | *Optional.* Enter viewport animation. |

### viewPort

Related to onScroll, passed as a number which defines at what point of viewport which element enters should the animation occur.


```javascript
  <Control element={<div>Hello World</div>} onScroll={true} viewPort={0.4} />
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `onScroll`      | `boolean` | *Optional.* Enter viewport animation. |

## OnScroll
You have an access to the OnScroll component which can wrap multiple Control components giving each of them onScroll property.
Notice you can pass other viewPort values to each of wrapped components and every of them would respect its own value.

Using OnScroll is recommended only if you'd like to give one component from the group scroll animation which is relative to the other component in the group.
Otherwise you can pass onScroll to every each of the animated components.

```javascript
  import Control, { OnScroll } from 'react-control-js'

  function App() {
      return (
          <OnScroll>
            <Control element={<p>Hello World!</p>} opacity={1} viewPort={0.2} />
            <Control element={<p>Hello World!</p>} opacity={1} viewPort={0.6} />
          </OnScroll>
      )
  }
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `OnScroll`      | `Component` | Wrap multiple elements with onScroll property |

### className

You can pass className property to OnScroll component which acts exactly as normal className React property.

```javascript
  import Control, { OnScroll } from 'react-control-js'

  function App() {
      return (
          <OnScroll className="flex flex-col">
            <Control element={<p>Hello World!</p>} opacity={1} viewPort={0.2} />
            <Control element={<p>Hello World!</p>} opacity={1} viewPort={0.6} />
          </OnScroll>
      )
  }
```
### stagger

Stagger is a property for OnScroll component which defines delay for every component in a group.
For example if you pass it a value of 1, every component would start its animation when the previous one finishes.

```javascript
  import Control, { OnScroll } from 'react-control-js'

  function App() {
      return (
          <OnScroll stagger={1}>
            <Control element={<p>Hello World!</p>} opacity={1} viewPort={0.2} />
            <Control element={<p>Hello World!</p>} opacity={1} viewPort={0.6} />
          </OnScroll>
      )
  }
```
## Issues

If you'd like to position controlled element absolutely,
don't put that style on the element but rather wrap
the whole Control component in a div and put the style on it.

```javascript

function WrongAbsolute() {
  return <Control element={<p style={{ position: absolute }}>Hello World!</p>} />
}

function GoodAbsolute() {
  return (
      <div style={{ position: absolute }}>
        <Control element={<p>Hello World!</p>} />
      </div>
  )
}
```
