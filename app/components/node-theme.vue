<template>
<div class="uk-form-horizontal">

        <div class="uk-form-row">
            <label for="form-pos-title-hide" class="uk-form-label">{{ 'Headline' | trans }}</label>
            <div class="uk-form-controls uk-form-width-large uk-form-controls-text">
                <label><input type="checkbox" v-model="node.theme.title_hide"> {{'Hide headline'|trans}}</label>
            </div>
        </div>
        
        <div class="uk-form-row">
            <label for="form-pos-title-transform" class="uk-form-label"></label>
            <div class="uk-form-controls uk-form-width-large uk-form-controls-text">
                <label><input type="checkbox" v-model="node.theme.title_transform"> {{'Transform headline to h3 style'|trans}}</label>
            </div>
        </div>

<hr />

        <div class="uk-form-row">
            <label for="form-alignment" class="uk-form-label">{{ 'Inhalt' | trans }}</label>
            <div class="uk-form-controls uk-form-width-large uk-form-controls-text">
                <label><input type="checkbox" v-model="node.theme.alignment"> {{ 'Centered content' | trans}}</label>
            </div>
        </div>

<hr />
		
	    <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
	        <div data-uk-margin>
	            <h3 class="uk-margin-remove">{{ 'Top Widgets' | trans }}</h3>
	        </div>
	    </div>
<hr />

        <div class="uk-form-row">
            <label for="form-pos-top-bg-overrite" class="uk-form-label">{{ 'Background Image' | trans }}</label>
            <div class="uk-form-controls uk-form-width-small">
				<label><input-image :source.sync="node.theme.pos_top_bg_overrite"></input-image></label>
            </div>
        </div>

<hr />
		
	    <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
	        <div data-uk-margin>
	            <h3 class="uk-margin-remove">{{ 'Bottom Widgets' | trans }}</h3>
	        </div>
	    </div>
<hr />

        <div class="uk-form-row">
            <label for="form-pos-btm-bg-overrite" class="uk-form-label">{{ 'Background Image' | trans }}</label>
            <div class="uk-form-controls uk-form-width-small">
				<label><input-image :source.sync="node.theme.pos_btm_bg_overrite"></input-image></label>
            </div>
        </div>

<hr />
		
	    <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
	        <div data-uk-margin>
	            <h3 class="uk-margin-remove">{{ 'Header Options' | trans }}</h3>
	        </div>
	    </div>

<hr />

        <div class="uk-form-row">
            <label for="form-header-area" class="uk-form-label"></label>
            <div class="uk-form-controls">
                <label><input type="checkbox" v-model="node.theme.header_area"> {{ 'Activate Header Area' | trans}}</label>
            </div>
        </div>

<hr />

        <div class="uk-form-row">
            <label for="form-header-img" class="uk-form-label">{{ 'Background Image' | trans }}</label>
            <div class="uk-form-controls uk-form-width-small">
				<label><input-image :source.sync="node.theme.header_img"></input-image></label>
            </div>
        </div>

        <div class="uk-form-row">
            <label for="form-header-parallex" class="uk-form-label"></label>
            <div class="uk-form-controls">
                <label><input type="checkbox" v-model="node.theme.header_parallex"> {{ 'Parallex effect' | trans}}</label>
            </div>
        </div>

<hr />

        <div class="uk-form-row">
            <label for="form-clr-overlay" class="uk-form-label">{{ 'Color Overlay' | trans }}</label>
            <div class="uk-form-controls">
                <label><input type="color" v-model="node.theme.header_clr_overlay"> {{ 'Choose your color' | trans}}</label>
            </div>
        </div>
	
        <div class="uk-form-row">
            <label for="form-theme-clr-overlay-trans" class="uk-form-label"></label>
            <div class="uk-form-controls uk-form-width-large">
				<label>
					<select id="form-theme-clr-overlay-trans" v-model="node.theme.header_clr_overlay_trans">
						<option value="1">{{ '1' }}</option>
						<option value="0.9">{{ '0.9' }}</option>
						<option value="0.8">{{ '0.8' }}</option>
						<option value="0.7">{{ '0.7' }}</option>
						<option value="0.6">{{ '0.6' }}</option>
						<option value="0.5">{{ '0.5' }}</option>
						<option value="0.4">{{ '0.4' }}</option>
						<option value="0.3">{{ '0.3' }}</option>
						<option value="0.2">{{ '0.2' }}</option>
						<option value="0.1">{{ '0.1' }}</option>
						<option value="0">{{ '0' }}</option>
					</select>
					{{ 'Transparency' | trans }}
				</label>
            </div>
        </div>

<hr />
        
        <div class="uk-form-row">
            <label for="form-header-full-height" class="uk-form-label">{{'Header Height'|trans}}</label>
            <div class="uk-form-controls uk-form-width-large uk-form-controls-text">
                <label><input type="checkbox" v-model="node.theme.header_full_height"> {{'Full Height'|trans}}</label>
            </div>
        </div>
        
        <div class="uk-form-row">
            <label for="form-header-height" class="uk-form-label"></label>
            <div class="uk-form-controls uk-form-width-large uk-form-controls-text">
                <label><input type="text" v-model="node.theme.header_height"> {{ 'Header height (px)' | trans}}</label>
            </div>
        </div>

<hr />
        
        <div class="uk-form-row">
            <label for="form-header-headline-1" class="uk-form-label">{{'Headline'|trans}}</label>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input type="text" class="uk-form-width-large" v-model="node.theme.header_headline_1"> {{'Headline 1'|trans}}</label>
            </div>
        </div>
        
        <div class="uk-form-row">
            <label for="form-header-headline-2" class="uk-form-label"></label>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input type="text" class="uk-form-width-large" v-model="node.theme.header_headline_2"> {{ 'Headline 2' | trans}}</label>
            </div>
        </div>
	
        <div class="uk-form-row">
            <label for="form-theme-header-align" class="uk-form-label"></label>
            <div class="uk-form-controls uk-form-width-large">
				<label>
					<select id="form-theme-header-align" v-model="node.theme.header_headline_align">
						<option value="center">{{ 'Center' | trans }}</option>
						<option value="left">{{ 'Left' | trans }}</option>
						<option value="right">{{ 'Right' | trans }}</option>
					</select>
					{{ 'Ausrichtung' | trans }}
				</label>
            </div>
        </div>
        
<hr />

</div>
</template>
<script>

    module.exports = {

        section: {
            label: 'Theme',
            priority: 90
        },

        props: ['node']

    };

    window.Site.components['node-theme'] = module.exports;

</script>
<style>
	h3 {
		font-weight: bold;
	}
</style>