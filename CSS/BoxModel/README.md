# Box Model

Containers use display block and they have 4(four) "components".

If the box-sizing if change to box-sizing: border-box it will calculate the
diference to try mantain the container width and height setted.

### 1. Content

text, images, videos, etc...

```sh
Width: 100px;
Height: 100px;
```

### 2. Padding

For padding are 4(four) properties: Top|Rigth|Bottom|Left
With long hand:

```sh
padding-top: XX;
padding-right: XX;
padding-bottom: XX;
padding-left: XX;
```

and in short hand:

> padding: top right bottom left

```sh
padding: 100px 250px 150px 300px;
```

If the right and left will be the same size use this:

> padding: top right-left bottom

```sh
padding: 100px 250px 150px;
```

If the top and bottom will have the same size and the right and left have the same size use this:

> padding: top-bottom right-left

```sh
padding: 100px 150px;
```

### 3. Border

For border are 4(four) properties: Top|Rigth|Bottom|Left
For which border:

```sh
border-top: 5px dashed rgba(255, 255, 255, 0.4);
border-right: 5px dashed rgba(255, 255, 255, 0.4);
border-bottom: 5px dashed rgba(255, 255, 255, 0.4);
border-left: 5px dashed rgba(255, 255, 255, 0.4);
```

For all border:

```sh
border: 5px dashed rgba(255, 255, 255, 0.4);
```

Styles:

- Dashed
- Dotted
- Double
- Groove
- Hidden
- Inherit
- Initial
- Inset
- None
- Outset
- Ridge
- Solid
- Unset

### 4. Margin

For margin are 4(four) properties: Top|Rigth|Bottom|Left
With long hand:

```sh
margin-top: 5px;
margin-right: 5px;
margin-bottom: 5px;
margin-left: 5px;
```

and in short hand:

> margin: top right bottom left

```sh
margin: 100px 250px 150px 300px;
```

If the right and left will be the same size use this:
margin: top right-left bottom

```sh
margin: 100px 250px 150px;
```

If the top and bottom will have the same size and the right and left have the same size use this:

> margin: top-bottom right-left

```sh
margin: 100px 150px;
```

To move responsively to right:

```sh
margin-right: auto
```

To center responsively the container:

```sh
margin: 0 auto
```
