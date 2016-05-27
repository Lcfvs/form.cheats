void function(global) {
    'use strict';
    
    // onSubmit middleware
    
    var
    cheats,
    onSubmit;
    
    cheats = global['form.cheats'];
    
    onSubmit = function(event) {
        var
        form;
        
        form = this;
        
        if (!form.classList.contains('cheats')) {
            return true;
        }
        
        event.preventDefault();
        
        return false;
    };
    
    cheats.use(function(form, next) {
        form.addEventListener('submit', onSubmit);
        
        next();
    });
    
	cheats.observe(global.document);
}(this);