# Autocomplete Tags

Replaces the default tag list interface in Symphony's backend with a [jQuery Autocomplete widget](http://jqueryui.com/demos/autocomplete/). This should also be compatible with Craig Zheng's [enhanced tag list](https://github.com/czheng/enhancedtaglist/) field.

- Version: 0.1
- Author: Ben Babcock <ben@tachyondecay.net>
- Updated: 
- GitHub Repository: 

## Installation

- Make sure that the extension is in a folder named `autocomplete_tags`. Upload this to your Symphony `extensions` folder.
- Enable the extension from the **Extensions** page in the Symphony backend.

## Credits

Thanks to brendo (Brendan Abbott), who recommended I look at his [Custom Field Captions](https://github.com/brendo/customfieldcaptions) extension to learn how to add scripts and stylesheets to the backend.

At its core, this extension just bundles part of the [jQuery UI](http://jqueryui.com) javascript/css. All I've done is added the necessary hooks to get the autocomplete widget working with Symphony's tag list field. The real evil masterminds are the jQuery UI developers.