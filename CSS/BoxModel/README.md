# Box Model

Containers use display block and they have 4(four) "components".

If the box-sizing if change to box-sizing: border-box it will calculate the
diference to try mantain the container width and height setted.

### 1. Content

text, images, videos, etc...
Width: 100px;
Height: 100px;

### 2. Padding

For padding are 4(four) properties: Top|Rigth|Bottom|Left
With long hand:
padding-top: XX;
padding-right: XX;
padding-bottom: XX;
padding-left: XX;
and in short hand:
padding: top right bottom left
padding: 100px 250px 150px 300px;
If the right and left will be the same size use this:
padding: top right-left bottom
padding: 100px 250px 150px;
If the top and bottom will have the same size and the right and left have the same size use this:
padding: top-bottom right-left
padding: 100px 150px;

### 3. Border

For border are 4(four) properties: Top|Rigth|Bottom|Left
For which border:
border-top: XXpx Style Color;
border-right: XXpx Style Color;
border-bottom: XXpx Style Color;
border-left: XXpx Style Color;
For all border:
border: XXpx Style Color;
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
margin-top: XX;
margin-right: XX;
margin-bottom: XX;
margin-left: XX;
and in short hand:
margin: top right bottom left
margin: 100px 250px 150px 300px;
If the right and left will be the same size use this:
margin: top right-left bottom
margin: 100px 250px 150px;
If the top and bottom will have the same size and the right and left have the same size use this:
margin: top-bottom right-left
margin: 100px 150px;

To move responsively to right:
margin-right: auto
To center responsively the container:
margin: 0 auto
