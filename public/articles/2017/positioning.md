# Terms

_Element_ - html tag used in a document (page).

_Document flow_ - default rules by which browser allocates space for elements of a document. By default element takes all the space it needs. From top to bottom and from left to right. There are several types elements. Each type of element has its own default behaviour.

_Inline elements_ - placed in a single line. Subsequent inline elements are positioned from left to right on the line. They:
 
 - ignore ```width```, ```height``` properties taking all the space they need, ```img``` is an exception
 - ignore ```margin-top```, ```margin-bottom```
 - ignore ```border```
 - accept ```margin-left``` and ```margin-right``` properties
 - accept ```padding``` properties
 
 You can make inline element accept size properties (```width```, ```height``` and the rest of properties) by turning it into block element by setting ```display: block;```.

_Block element_ - occupies a single line (greedy, don't share the line), several block elements that go one after another positioned from top to bottom, one on top of the other.

You must not put block elements inside inline elements (validation error).

You can change the type of element using ```display``` property. To make two block elements share the same line you must set ```display: block;``` for both of them.

_Inline block_ - ```display: inline-block;``` adds inline behavior to block elements (several block elements can be put in one line) and block behavior to inline element (inline element accepts size properties). Usually it make sense to set ```width``` of inline-block elements to to make them fit in one line.

_Container_ - element that contains other elements.

_Position_ of element is set using properties:

- ```position```

and location

- ```top``` or ```bottom``` (not both at the same time)
- ```left``` or ```right``` (not both at the same time)

For container without explicit size:

taking container's nested elements out of normal flow (out of container) reduces its size; if all nested elements are taken out, then container size becomes 0.

# Nesting rules

Usually block elements allowed to contain inline elements but not other block elements.

Useful: <a href="https://www.cs.tut.fi/~jkorpela/html/nesting.html">html elements nesting</a>

# Position: static

```static``` (or no position) - default positioning, element is positioned according to normal flow.

```top```, ```bottom```, ```left```, ```right``` don't work.

Container has size of its content if it has no ```width``` and ```height```.

Nested elements positioned inside container using container's ```width``` and ```height``. 

# Position: fixed

Takes element out of normal flow: **YES**

Positions element relative to: **browser window**

Scrolls with the page: **NO**

<table>
    <tr>
        <th>Container position</td>
        <th>Nested element position</td>
        <th>Nested element behaviour</td>
    </tr>
    <tr>
        <td>static or not set</td>
        <td>fixed</td>
        <td>out of container, doesn't move and scroll with container</td>
    </tr>
    <tr>
        <td>fixed</td>
        <td>fixed</td>
        <td>positions with container if does't define own location explicitly, doesn't move with container (moves with container only if does't define own location), does't scroll</td>
    </tr>
</table> 

If container has ```position: fixed;``` then it (with all nested elements) is taken out of the normal flow.

# Position: absolute

Takes element out of normal flow: **YES**

Positions element relative to: **container**[1]

Scrolls with the page: **YES**

[1] Container is:

- top level container with set position 
- *browser window* - for elements having top level containers with no position set and for top level elements (whose container is ```body```)

<table>
    <tr>
        <th>Container position</th>
        <th>Nested element position</th>
        <th>Nested element behaviour</th>
    </tr>
    <tr>
        <td>static or not set</td>
        <td>absolute</td>
        <td>positions relative to container, moves and scrolls with container</td>
    </tr>
    <tr>
        <td>fixed</td>
        <td>absolute</td>
        <td>positions relative to container, moves with container, does't scroll as a container</td>
    </tr>
    <tr>
        <td>absolute</td>
        <td>absolute</td>
        <td>positions relative to container, moves and scrolls with container</td>
    </tr>
</table>

# Position: relative

Takes element out of normal flow: **NO**

Positions element relative to: **self** (location of element in normal flow)

Scrolls with the page: **YES**

Element is not taken out of normal flow, page allocates space according to element's dimentions and along with this element can be moved relative to its location.

<table>
    <tr>
        <th>Container position</th>
        <th>Nested element position</th>
        <th>Nested element behaviour</th>
    </tr>
    <tr>
        <td>static or not set</td>
        <td>relative</td>
        <td>positions relative to self-location inside the container, moves and scrolls with container</td>
    </tr>
    <tr>
        <td>fixed</td>
        <td>relative</td>
        <td>positions relative to self-location inside the container, moves with container, does't scroll as a container</td>
    </tr>
    <tr>
        <td>absolute</td>
        <td>relative</td>
        <td>positions relative to self-location inside the container, moves and scrolls with container</td>
    </tr>    
    <tr>
        <td>relative</td>
        <td>relative</td>
        <td>positions relative to self-location inside the container, moves and scrolls with container</td>
    </tr>
</table>

# Position: inherit

Inherits the position of container. All elements have ```static``` position if no position is specified, use ```inherit``` to make element inherit container's position.

# Float

Takes element out of normal flow: **YES**

Positions element relative to: **previous element and floats**[2]

Scrolls with the page: **YES**

Location of element is controlled by specifying ```float: left;``` or ```float: right;```. Element floats from its normal location to the far left or right as possible. Element float to the previous element in the normal flow respecting ```float``` specified for previous elements.

Floated element affects behavior of elements following after it in the normal flow.
Elements following a ```float``` element moves up as far as possible and flows around floated element residing on the same line as floated and using all available space.

Each floated element attracts following elements to its line like a magnet.

Floated element can overlap block-level elements adjacent to it in the normal flow.

Inline elements with ```float``` property set behave as block elements (respect size).

Useful: <a href="https://stackoverflow.com/questions/24196773/why-is-this-non-float-margin-collapsing-with-a-float">why-is-this-non-float-margin-collapsing-with-a-float</a>

# Centering

## Center horizontally

Element must have a set ```width``` otherwise it will be stretched to the full width of the container. 

    margin: 0 auto;

It's important to set both left and right to ```auto```, top and bottom margins could be any, for example:

    margin: 10px auto 5px auto;
    
Left and right margins will push content to the center from both sides.

To center inline elements use:

    text-align: center;

## Center vertically (1)

First we need to specify position other than static (or none) to take control over vertical position of element in our hand (in contrast to normal flow controlled by browser):

    position: relative;
    // or
    position: absolute;

Second we need to specify ```width``` to use ```auto``` for left and right margin:

    // need explicit width (and height)
    width: 100px;
    hight: 100px;
    // move upper edge of element in the center of container
    top: 50%;
    // go up half of the with - center of element goes to the center of container
    margin-top: -50px;
    // push element equally from left and right to center horizontally
    margin-left: auto;
    margin-right: auto;

## Center vertically (2)

Container should not have explicit size for margin-top and margin-bottom to work.

    // explicit with required to push box from left and right
    width: 10em;
    // use equal value for margin-top & margin-bottom to center vertically
    margin: 5em auto;
    
As for container height it will be: margin-top + margin-bottom + element height.