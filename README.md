# grunt-marko
> a simple (marko)[https://github.com/raptorjs/marko] grunt integration
## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-marko --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-marko');
```

## The "marko" task

### Overview
In your project's Gruntfile, add a section named `marko` to the data object passed into `grunt.initConfig()`. 

```js
grunt.initConfig({
  marko: {
    index:{
      template:'./template/layout.html',
      dest:'./dist/index.html',
      data:{
        title:'sample'
      }
    }
  },
});
```

### Options

#### task.template
Type: `String`
Default value: required

The path to marko template file.

#### task.dest
Type: `String`
Default value: required

The destination where the rendered template should be.

#### task.data
Type: `Object`
Default value: empty Object

The data wich should passed to the template.

#important
For all other features like Custom Tags visit the (marko repository)[https://github.com/raptorjs/marko].

## Release History
_(Nothing yet)_
