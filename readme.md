form.cheats
===========

Manage easily your forms style and behaviors :)

This browser module is under MIT License.


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
```
global['form.cheats'].use(function(form, next) {
  form.addEventListener('submit', function() {
    console.log('submitted');
  });
  
  next();
});
```

Middlewares
-----------
[form.cheats.editable](https://github.com/Lcfvs/form.cheats.editable)
