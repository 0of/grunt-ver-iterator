# grunt-ver-iterator
a grunt plugin for version iterations

```grunt >= 0.4.5```

# Installation
```shell
npm install --save-dev grunt-ver-iterator
```

# Usage Guidelines
```javascript
verIterator: {
  test: {
    options: {
        name: 'grunt',
        range: '>=0.4.0',
        task: runGruntfile
    },
    src: ['./test/gruntfile.js']
  }
}

require('load-grunt-tasks')(grunt);
```

# Options
- **<u>task</u>**: { _Function_ } *Mandatory*
> The task going to run and the passing context(i.e. `this`) of the task is grunt task object

- **<u>name</u>**: { _String_ } *Mandatory*
> Published package name

- **<u>range</u>**: { _String_ } *Optional* | "*" 
> The iterating version ranges in semver format

- **<u>dir</u>**: { _String_ } *Optional* | "." 
> The installing package directory

# License
  MIT License
