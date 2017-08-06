
# HTML5 tags 

- new and obsolete 
- with description and examples
- logically grouped by usage

https://developer.mozilla.org/en-US/docs/Web/HTML/Element

ChromeVox - screen reader, free google chrome extension

# Elements

We should pay attention how we use elements - logically or presentationaly.

## Semantic structure elements (outline) 

It is useful to create logical outline for the page and start building a page after - looking on the outline.

header - heading elements, navigation or logo (header of the page), group together heading elements demonstrating logical structure

nav* - navigation, usually contains li 

footer - footer of the page

address - address information in context

main - only one per page - main content of the page

section* - used for grouping related things together, more for styling

article* - a single article, blog post

aside* - not in main content flow

h1-h6 - used for conveying structure, logical structure of section and subsections, must not be used for subheadings (see newspapers). There should be no gaps between h1 and following headings.

\* - used for creating outline 

Some contents could be added only for screen readers and hided from the readers.

## Text level semantic elements

a - link
em - emphasis on content, when you want to stress part of a text (for example, by you voice)
strong - strong emphasis
small - side comments, disclaimers, caveats, legal restrictions, copyrights, attributions; short runs of text
cite - title of the work, name of the author or URL reference
dfn
abbr - abbreviation or acronym, use ```title``` attribute for full description
time - date or time
span
b - bold
i - italic

## Forms

    <input type=" ">

Types:
- checkbox
- color
- date
- datetime
- month
- file
- image
- number
- range
- email
- password
- tel
- url

Auto-fill can understand it, different keyboard can be shown

fieldset - logical group of fields
legend - caption for a fieldset