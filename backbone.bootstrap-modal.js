(function(_, Backbone){
	Backbone.BootstrapModal = Backbone.View.extend({
		modal:function(opts){
			var self = this;
			this.$modal = Backbone.$("<div class='modal fade'></div>");
			this.$modal.html(this.el);

			this.modalOptions = _.extend({
				backdrop: 'static',
				hidden: function(){
					if(this.modalOptions.destroy){
						self.remove();
						self.removeModal();
					}
				},
				destroy: true
			}, this.modalOptions, opts);

			options = this.modalOptions;

			if(typeof this.modalOptions.fade == "boolean" && !options.fade){
				this.$modal.removeClass("fade");
			}

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
		hideModal:function(){
			if(this.$modal){
				this.$modal.modal('hide');
			}
		},
		showModal:function(){
			if(!this.$modal){
				this.modal({show:false});
			}
			this.$modal.modal("show");
		},
		showModal:function(){
			if(this.$modal){
				this.$modal.modal('toggle');
			}
		},
		removeModal:function(){
			if(this.$modal){
				this.$modal.remove();
			}
		}
	});
})(_, Backbone);