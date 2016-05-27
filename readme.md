form.cheats
===========

Manage easily your forms style and behaviors :)

This browser module is under MIT License.


Demo
----

http://lcfvs.github.io/form.cheats

Install
-------

In your HTML head :

```html
  <link rel="stylesheet" href="./lib/form.cheats/css/style.min.css" media="all" />
  <link rel="stylesheet" href="./css/style.css" media="all" />
```

In your HTML body end :

```html
  <script src="./lib/form.cheats/js/script.js"></script>
  <script src="./js/main.js"></script>
```

Register a middleware
---------------------
```JS
void function(global) {
  'use strict';

  global['form.cheats'].use(function(form, next) {
    // the middleware code

    // tests if the form matches a class name, to detect if it need to be treated
    if (!form.classList.contains('middlewareName')) {
      // if not, jump to the next middleware
      return next();
    }

    form.addEventListener('submit', function() {
      console.log('submitted');
    });

    next();
  });
}(this);
```

Middlewares
-----------
[form.cheats.editable](https://github.com/Lcfvs/form.cheats.editable)
