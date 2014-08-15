<?php

	Class Extension_Autocomplete_Tags extends Extension {

		public function getSubscribedDelegates() {
			return array(
				array(
					'page' => '/backend/',
					'delegate' => 'AdminPagePreGenerate',
					'callback' => '__appendAssets'
				),
			);
		}

		public function __appendAssets(&$context) {
			if(class_exists('Administration')
				&& Administration::instance() instanceof Administration
				&& Administration::instance()->Page instanceof HTMLPage
			) {
				$callback = Administration::instance()->getPageCallback();

				// Let the jQuery magic flow 
				if($context['oPage'] instanceof contentPublish) {
					Administration::instance()->Page->addStylesheetToHead(URL . '/extensions/autocomplete_tags/assets/autocomplete_tags.jquery-ui.css', 'screen', 100, false);
					Administration::instance()->Page->addStylesheetToHead(URL . '/extensions/autocomplete_tags/assets/autocomplete_tags.jquery-ui.structure.css', 'screen', 100, false);
					Administration::instance()->Page->addStylesheetToHead(URL . '/extensions/autocomplete_tags/assets/autocomplete_tags.jquery-ui.theme.css', 'screen', 100, false);
					Administration::instance()->Page->addScriptToHead(URL . '/extensions/autocomplete_tags/assets/autocomplete_tags.jquery-ui-custom.min.js', 100, false);
					Administration::instance()->Page->addScriptToHead(URL . '/extensions/autocomplete_tags/assets/autocomplete_tags.publish.js', 200, false);
				}
			}
		}
	}