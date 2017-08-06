# CSS Box Model

## Important to note

Height of container is defined by height of its content _if no explicit container height is set_.

Inline boxes don't accept height.

## Dimensions in percentage

Percentage can be used for setting paddings and margins.

The percentage is calculated with respect to the ```width``` of the generated box's **containing block**, even for ```*-top``` and ```*-bottom```. 

If the **containing block's** width depends on this element, then the resulting layout is undefined in CSS 2.1.

## Margin
 
Margin backgrounds are **always transparent** (difference from padding).

If container has explicit height, then margin of a child don't work as expected.
 
 Top of the child goes to the top of the container.
 After that child push itself away from the top of parent of the container.

**Vertical margins** of adjacent elements **collapse**.

Vertical margins will not have any effect on non-replaced **inline elements**.
("Non-replaced element" is just an element that is rendered as such, instead of causing some external content to appear in its place.)

**Horizontal margins** never collapse.

Margin values can be negative, but there may be implementation-specific limits.

## Padding

If container has explicit height, then big padding of a child can push it out of container.

Padding of inline boxes go out of container.

Unlike margin properties, values for padding cannot be negative.

## Border

The border could be set as transparent
 
    border-color: transparent;
    
though it may have ```width```.