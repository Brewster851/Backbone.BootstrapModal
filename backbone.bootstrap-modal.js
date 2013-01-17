/*

(c) 2013 Karl Mikkelsen.
Backbone.BootstrapModal may be freely distributed under the MIT license.
For all details and documentation:
https://github.com/KingKarl85/Backbone.BootstrapModal

*/

(function(_, Backbone){
	Backbone.BootstrapModal = Backbone.View.extend({
		modalTemplate:"<div class='modal'></div>",
		modal:function(options){
			this.$modal = Backbone.$(this.modalTemplate);
			this.$modal.html(this.el);

			this.options = _.extend({
				backdrop: 'static',
				hidden: function(){
					this.remove();
				}
			}, this.options, opts);

			options = this.options;
			
			var self = this;
			this.$modal.modal(options).on('shown', function(){
				if(options.shown && options.shown.call){
					options.shown.call(self);
				}
			}).on("hidden", function(){
				if(options.hidden && options.hidden.call){
					options.hidden.call(self);
				}
			}).on("show", function(){
				if(options.show && options.show.call){
					options.show.call(self);
				}
			}).on("hide", function(){
				if(options.hide && options.hide.call){
					options.hide.call(self);
				}
			});

			return this.$modal;
		},
		hide:function(){
			if(this.$modal){
				this.$modal.modal('hide');
			}
		},
		show:function(){
			if(!this.$modal){
				this.modal({show:false});
			}
			this.$modal.modal("show");
		},
		toggle:function(){
			if(this.$modal){
				this.$modal.modal('toggle');
			}
		},
		remove:function(){
			if(this.$modal){
				this.$modal.remove();
			}
		}
	});
})(_, Backbone);
