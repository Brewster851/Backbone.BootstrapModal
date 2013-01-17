Backbone.BootstrapModal
=======================

Extend Backbone.View to render in Bootstrap.modal()

A lightweight (I think so anyway) extension to Backbone.View to add a wrapper function to add Bootstrap.modal() functionality.

##Useage
Not too much different to rendering a normal view

window.ModalView = Backbone.BootstrapModal.extend({
    modalOptions:{
        //set default options for bootstrap.modal with extended paramaters.
    }
});

var view = new window.ModalView();

view.modal(); //wrapper for bootstrap modal

##Bootstrap.modal( options )

Setting modalOptions on the view will be directly passed through to Bootstrap.Modal(options)

You can also still send options when calling modal on the view

view.modal({show:false});

##Bootstrap.modal() events

Events are able to be set from modalOptions

modalOptions{
  shown:function(){
    alert("shown");
  }
}

Allowing you to listen to modal events from bootstrap.modal from the view

##Defaults

I like to have fade turned on for modal windows and also like the backdrop to be static so I set these to be default.

A default event is called on hidden to cleanup the DOM and strip all backbone and bootstrap event handlers, I am quite new to backbone so don't know if this a good thing to do. I would love feedback on this.

##Documentation

This is a first draft of the documentation, I wrote this extension for a project I am currently working on that makes great use of modal windows. 

I will add more documentation after I have finished this project. In the mean time if you would like to contribute to the project please fork me!

Hope you all enjoy!
