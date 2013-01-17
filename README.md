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

modalOptions has also been extended to allow events callbacks to be set and destory to be set

destroy: true //default to remove the view from DOM and call .remove on the backbone view so when you hide the modal the view cleans up after it self

You can also still send options when calling modal on the view

view.modal({show:false});

##Bootstrap.modal() events

events are able to be set from modalOptions

modalOptions{
  shown:function(){
    alert("shown");
  }
}

allowing you to listen to modal events from bootstrap.modal from the view


Hope you all enjoy!
