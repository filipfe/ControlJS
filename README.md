
# ControlJS

React library for creating animations


## Installation

Install ControlJS with npm

```bash
  npm install control
```
    
## API Reference

#### Import Control component

```http
  import Control from 'control'
```

#### Select animated element

```http
  <Control element={<div>Hello World</div>} />
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `element` | `JSX.Element` | **Required**. Animated element. |

#### Animate opacity of the element

```http
  <Control element={<div>Hello World</div>} opacity={0.42} />
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `opacity`      | `number` | *Optional.* Opacity that element would be transformed to. |
