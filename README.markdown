# Autocomplete Tags

Replaces the default tag list interface in Symphony's backend with a [jQuery Autocomplete widget](http://jqueryui.com/demos/autocomplete/). This is also compatible with Craig Zheng's [enhanced tag list](https://github.com/czheng/enhancedtaglist/) field provided you use a comma as the delimiter.

- Version: 1.0.1
- Author: Ben Babcock <ben@tachyondecay.net>
- Updated: August 14, 2014
- GitHub Repository: https://github.com/tachyondecay/autocomplete_tags

## Installation

You can always install the latest version through git: `git clone git://github.com/tachyondecay/autocomplete_tags.git`

- Make sure that the extension is in a folder named `autocomplete_tags`. Upload this to your Symphony `extensions` folder.
- Enable the extension from the **Extensions** page in the Symphony backend.

## Credits

Thanks to [brendo](https://github.com/brendo) (Brendan Abbott), who recommended I look at his [Custom Field Captions](https://github.com/brendo/customfieldcaptions) extension to learn how to add scripts and stylesheets to the backend.

At its core, this extension just bundles part of the [jQuery UI](http://jqueryui.com) library. All I've done is added the necessary hooks to get the autocomplete widget working with Symphony's tag list field. The real evil masterminds are the jQuery UI developers.

## Changelog

### 1.0.1 (August 14, 2014)

- Update jQuery UI library to make the styling compatible with Symphony 2.4.