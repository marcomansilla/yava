YAVA - Yet Another Vue App
==========================

This is a sample app to test java script modules in the browser with Web2py Framework.

Since 2017 ECMAScript modules in the browser are supported with the following syntax:

``<script type="module" src="foo.js"></script>``

after reading some docs about VueJS and this feature this is a very simple test to check how it works.

How it works
------------

- Just clone this repo inside your Web2py applications folder
- browse http://localhost:8000/yava and that should work

Details
-------

This demo uses Grunt and uglify-es for ES6 code minification, so for edition you should:

- Go to yava/dev and run npm install for dependencies
- inside yava/dev run grunt

The grunt task by default watches updates, deletions and new files, main vue files should be stored in dev/src and components in /dev/src/components they will be minified with .min.js extension in yava/static/vue and yava/static/vue/components respectively.

See the simple example files for more details about importing and exporting data.

Support
-------

ECMAScript modules are supported by the following browsers

- Safari 10.1.
- Chrome 61.
- Firefox 54 – behind the dom.moduleScripts.enabled setting in about:config.
- Edge 16.
