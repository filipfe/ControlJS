
# ControlJS

React library for creating animations


## Installation

Install ControlJS with npm

```bash
  npm install control
```

## Running Tests

To run tests, run the following commands

```bash
  
  npm install
  npm run
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
| `opacity`      | `number` | *Optional.* Opacity element would be transformed to. |
