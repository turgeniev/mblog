# Selectors

##### Tag selector

    div {
        background-color: black;
    }
    
##### Multiple tags selector

    div , p {
        background-color: black;
    }

Selects all ```div``` tags **and** all ```p``` tags.

##### Descendant selector
 
    div p {
        font-size: 1em;
    }
    
Finds all ```div```-s and selects all ```p```-s inside each ```div``` found, no matter how deeply ```p``` is nested inside the ```div```.

##### Child selector

    h2 > p {
        font-size: 0.8em;
    }
    
Selects immediate child. Finds all ```h2``` headings and selects first ```p``` that follows ```h2```.

##### Attribute selector

    img[alt=special] {
        padding: 0;
    }
    
Selects all images having ```alt="special"``` attribute.

##### Class selector

    .blue {
        color: blue;
    }

> !!! TODO: check this:
 
Consider other ways:

    p[class=blue] {
    }
    
    p.blue {
    }
    
##### ID selector
    
    #container {
        margin: 0 auto;l
    }
    
##### Pseudo class selector

    a:visited {
        color: magenta;
    }
    a:hover {
        background-color: black;
    }