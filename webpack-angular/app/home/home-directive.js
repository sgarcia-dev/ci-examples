function homeDirective() {
	return {
		restrict: 'E',
		link: function(scope, el) {
			el.on('click', () => alert('clicked me!'));
		}
	}
}

export default homeDirective;