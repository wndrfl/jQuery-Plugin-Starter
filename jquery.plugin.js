/**
 * PluginName - jQuery Plugin
 * version 1.0.0
 * 
 * Copyright 2013 Wonderful Co.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 **/

;(function($) {
	
	var PluginName = function(el,options) {
		
		var $pluginName = this;
		
		var settings = $.extend({}, $.fn.pluginName.defaults, options);
		var vars = {
			/* internal plugin vars */
		};
		
		// define main elements
		var $parent = $(el);
		
		var setup = function() {
			/* initial setup actions */
		}
		
        var trace = function(msg){
			if(settings.debug) {
            	if(this.console && typeof console.log !== 'undefined') { console.log(msg); }
			}
        }

		setup();
	}
	
	// plug it in
	$.fn.pluginName = function(options) {
        return this.each(function(key, value){
            var element = $(this);
            // Return early if this element already has a plugin instance
            if (element.data('pluginName')) { return element.data('pluginName'); }
            // Pass options to plugin constructor
            var pluginName = new PluginName(this, options);
            // Store plugin object in this element's data
            element.data('pluginName', pluginName);
        });
    };

	$.fn.pluginName.defaults = {
		/* plugin settings */
    };
	
}(jQuery));