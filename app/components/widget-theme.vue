<template>

    <div class="uk-form-horizontal">

        <div class="uk-form-row">
            <label for="form-theme-panel" class="uk-form-label">{{ 'Panel Style' | trans }}</label>
            <div class="uk-form-controls">
                <select id="form-theme-panel" class="uk-form-width-large" v-model="widget.theme.panel">
                    <option value="">{{ 'None' | trans }}</option>
                    <option value="uk-panel-box">{{ 'Box' | trans }}</option>
                    <option value="uk-panel-box uk-panel-box-primary">{{ 'Box Primary' | trans }}</option>
                    <option value="uk-panel-box uk-panel-box-secondary">{{ 'Box Secondary' | trans }}</option>
                    <option value="uk-panel-header">{{ 'Header' | trans }}</option>
                </select>
            </div>
        </div>

    </div>
    
<hr />
	
	<div class="uk-form-horizontal">

        <div class="uk-form-row">
            <label for="form-widget-headline-hide" class="uk-form-label">{{ 'Headline' | trans }}</label>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input type="checkbox" class="uk-form-width-large" v-model="widget.theme.hide_headline"> {{'Hide Headline'|trans}}</label>
            </div>
        </div>

    </div>
    
<hr />
	
	<div class="uk-form-horizontal">

        <div class="uk-form-row">
            <label for="form-widget-mobile-hide" class="uk-form-label">{{ 'Mobile' | trans }}</label>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input type="checkbox" class="uk-form-width-large" v-model="widget.theme.hide_mobile"> {{'Hide Widget on Mobile'|trans}}</label>
            </div>
        </div>

    </div>
    
<hr />
	
	<div class="uk-form-horizontal">

        <div class="uk-form-row">
            <label for="form-widget-color-invert" class="uk-form-label">{{ 'Color' | trans }}</label>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input type="checkbox" class="uk-form-width-large" v-model="widget.theme.color_invert"> {{'Invert Text Color'|trans}}</label>
            </div>
        </div>

    </div>
<hr />
    <div class="uk-form-horizontal">

        <div class="uk-form-row">
            <label for="form-widget-size" class="uk-form-label">{{ 'Widget Size' | trans }} <a class="" data-uk-toggle="{target:'#widget-size'}"><i class="uk-icon-info-circle"></i></a></label>
            <div class="uk-form-controls">
				<label><input type="text" v-model="widget.theme.widget_size"></label>
            </div>
        </div>
        <div id="widget-size" class="uk-form-row uk-hidden">
			<div class="uk-alert uk-alert-warning">
	        	<p>{{'Note: This only works if "Widget Auto Size" is disabled in the theme settings!'|trans}}</p>
			</div>
	        <div class="uk-alert">
	        	<p>{{'The grid supports 1, 2, 3, 4, 5, 6 and 10 unit divisions. This table gives you an overview of the classes that can be applied to units.'|trans}}</p>
				<div class="uk-overflow-container">
				<table class="uk-table uk-text-nowrap">
				<thead>
				<tr>
				<th>Class</th>
				<th>Description</th>
				</tr>
				</thead>
				<tbody>
				<tr>
				<td>
				<code>1-1</code>
				</td>
				<td>Fills 100% of the available width.</td>
				</tr>
				<tr>
				<td>
				<code>1-2</code>
				</td>
				<td>Divides the grid into halves.</td>
				</tr>
				<tr>
				<td>
				<code>1-3</code>
				to
				<code>2-3</code>
				</td>
				<td>Divides the grid into thirds.</td>
				</tr>
				<tr>
				<td>
				<code>1-4</code>
				to
				<code>3-4</code>
				</td>
				<td>Divides the grid into fourths.</td>
				</tr>
				<tr>
				<td>
				<code>1-5</code>
				to
				<code>4-5</code>
				</td>
				<td>Divides the grid into fifths.</td>
				</tr>
				<tr>
				<td>
				<code>1-6</code>
				to
				<code>5-6</code>
				</td>
				<td>Divides the grid into sixths.</td>
				</tr>
				<tr>
				<td>
				<code>1-10</code>
				to
				<code>9-10</code>
				</td>
				<td>Divides the grid into tenths.</td>
				</tr>
				</tbody>
				</table>
				</div>
	        </div>
	    </div>
    </div>
    
    <div class="uk-form-horizontal">

        <div class="uk-form-row">
            <label for="form-widget-push-left" class="uk-form-label">{{ 'Widget Push Left' | trans }} <a class="" data-uk-toggle="{target:'#widget-push-left'}"><i class="uk-icon-info-circle"></i></a></label>
            <div class="uk-form-controls">
				<label><input type="text" v-model="widget.theme.widget_push"></label>
            </div>
        </div>
        <div id="widget-push-left" class="uk-form-row uk-hidden">
			<div class="uk-alert uk-alert-warning">
	        	<p>{{'Note: This only works if "Widget Auto Size" is disabled in the theme settings!'|trans}}</p>
			</div>
	        <div class="uk-alert">
	        	<p>{{‘The grid supports 1, 2, 3, 4, 5, 6 and 10 unit divisions. This table gives you an overview of the classes that can be applied to units.'|trans}}</p>
				<div class="uk-overflow-container">
				<table class="uk-table uk-text-nowrap">
				<thead>
				<tr>
				<th>Class</th>
				<th>Description</th>
				</tr>
				</thead>
				<tbody>
				<tr>
				<td>
				<code>1-1</code>
				</td>
				<td>Fills 100% of the available width.</td>
				</tr>
				<tr>
				<td>
				<code>1-2</code>
				</td>
				<td>Divides the grid into halves.</td>
				</tr>
				<tr>
				<td>
				<code>1-3</code>
				to
				<code>2-3</code>
				</td>
				<td>Divides the grid into thirds.</td>
				</tr>
				<tr>
				<td>
				<code>1-4</code>
				to
				<code>3-4</code>
				</td>
				<td>Divides the grid into fourths.</td>
				</tr>
				<tr>
				<td>
				<code>1-5</code>
				to
				<code>4-5</code>
				</td>
				<td>Divides the grid into fifths.</td>
				</tr>
				<tr>
				<td>
				<code>1-6</code>
				to
				<code>5-6</code>
				</td>
				<td>Divides the grid into sixths.</td>
				</tr>
				<tr>
				<td>
				<code>1-10</code>
				to
				<code>9-10</code>
				</td>
				<td>Divides the grid into tenths.</td>
				</tr>
				</tbody>
				</table>
				</div>
	        </div>
	    </div>
    
    </div>

</template>
<script>

    module.exports = {

        section: {
            label: 'Theme',
            priority: 90
        },

        props: ['widget', 'config']

    };

    window.Widgets.components['theme'] = module.exports;

</script>
