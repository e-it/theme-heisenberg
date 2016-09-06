<template>
	<div class="uk-form-horizontal">
	
	    <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
	        <div data-uk-margin>
	            <h2 class="uk-margin-remove">{{ 'Theme' | trans }}</h2>
	        </div>
	        <div data-uk-margin>
	            <button class="uk-button uk-button-primary" type="submit">{{ 'Save' | trans }}</button>
	        </div>
	    </div>
	
	        <div class="uk-form-row">
	            <label for="form-theme-color" class="uk-form-label">{{ 'Theme Color' | trans }}</label>
	            <div class="uk-form-controls uk-form-width-large">
					<label>
						<select id="form-theme-color" class="uk-form-width-large" v-model="config.theme_color">
							<option value="yellow">{{ 'Yellow' | trans }}</option>
							<option value="blue">{{ 'Blue' | trans }}</option>
							<option value="green">{{ 'Green' | trans }}</option>
							<option value="red">{{ 'Red' | trans }}</option>
							<option value="pink">{{ 'Pink' | trans }}</option>
						</select>
					</label>
	            </div>
	        </div>
	
<hr />
	
	        <div class="uk-form-row">
	            <label for="form-google-font" class="uk-form-label">{{ 'Google Font and Weights' | trans }}</label>
	            <div class="uk-form-controls">
					<label><input type="text" v-model="config.google_font"><input type="text" v-model="config.google_font_weight"></label>
	            </div>
	            <div class="uk-alert">
	            	<p>Example: Roboto and 300,400,700</p>
	            </div>
	        </div>
	        
<hr />
	
	        <div class="uk-form-row">
	            <label for="form-navbar-mode" class="uk-form-label">{{ 'Navbar Mode' | trans }}</label>
	            <div class="uk-form-controls uk-form-width-large uk-form-controls-text">
	                <label><input type="checkbox" v-model="config.navbar_sticky"> {{ 'Sticky Navigation' | trans }}</label>
	            </div>
	        </div>
	
<hr />
	
	        <div class="uk-form-row">
	            <label for="form-widget-auto-size" class="uk-form-label">{{ 'Widget Auto Size' | trans }}</label>
	            <div class="uk-form-controls uk-form-controls-text">
	                <label><input class="uk-form-width-large" type="checkbox" v-model="config.widget_auto_size"> {{ 'Widget Auto Size' | trans }}</label>
	            </div>
				<div class="uk-alert uk-alert-warning">
					<p>Note: If you unset this option you have to set the size of each widget manually in the widget options!</p>
				</div>
	        </div>
<hr />
	
	        <div class="uk-form-row">
	            <label for="form-widget-copyright" class="uk-form-label">{{ 'Copyright' | trans }}</label>
	            <div class="uk-form-controls uk-form-width-large uk-form-controls-text">
	                <label><input type="text" v-model="config.copyright"></label>
	            </div>
	        </div>
<hr />
		
	    <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
	        <div data-uk-margin>
	            <h2 class="uk-margin-remove">{{ 'Top Positions' | trans }}</h2>
	        </div>
	    </div>
	    
<hr />
	
	        <div class="uk-form-row">
	            <label for="form-pos-top-bg" class="uk-form-label">{{ 'Background Image' | trans }}</label>
	            <div class="uk-form-controls uk-form-width-small">
					<label><input-image :source.sync="config.pos_top_bg"></input-image></label>
	            </div>
	        </div>
		
<hr />
		
		        <div class="uk-form-row">
		            <label for="form-pos-top-bg-clr" class="uk-form-label">{{ 'Background Color' | trans }}</label>
		            <div class="uk-form-controls uk-form-width-large">
						<label><input type="color" v-model="config.pos_top_bg_clr"></input>{{Choose Your Color | trans}}</label>
		            </div>
		        </div>
			
<hr />
		
	    <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
	        <div data-uk-margin>
	            <h2 class="uk-margin-remove">{{ 'Bottom Positions' | trans }}</h2>
	        </div>
	    </div>
<hr />
	
	        <div class="uk-form-row">
	            <label for="form-pos-btm-bg" class="uk-form-label">{{ 'Background Image' | trans }}</label>
	            <div class="uk-form-controls uk-form-width-small">
					<label><input-image :source.sync="config.pos_btm_bg"></input-image></label>
	            </div>
	        </div>
	
		<hr />
	
	        <div class="uk-form-row">
	            <label for="form-pos-btm-bg-clr" class="uk-form-label">{{ 'Background Color' | trans }}</label>
	            <div class="uk-form-controls uk-form-width-large">
					<label><input type="color" v-model="config.pos_btm_bg_clr"></input>{{Choose Your Color | trans}}</label>
	            </div>
	        </div>
	
	</div>
</template>
<script>

    module.exports = {

        section: {
            label: 'Theme',
            icon: 'pk-icon-large-brush',
            priority: 15
        },

        data: function () {
            return _.extend({config: {}}, window.$theme);
        },

        events: {

            save: function() {

                this.$http.post('admin/system/settings/config', {name: this.name, config: this.config}).catch(function (res) {
                    this.$notify(res.data, 'danger');
                });

            }

        }

    };

    window.Site.components['site-theme'] = module.exports;

</script>













