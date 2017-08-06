# Using ::first-letter selector

I stumbled upon interesting behavior when using ```::first-letter``` selector with ```line-height``` property.

Valuable observations:

- ```::first-letter``` works only for block elements, for inline elements change their ```display``` property to ```block``` or ```inline-block```
- to make first letter stand out use ```float: left;``` and then style it as desired
- if you use ```line-height``` property for paragraph you need also use ```line-height``` for first letter then <em>(if size of first letter differs from paragraph letters size)</em>

That's all.