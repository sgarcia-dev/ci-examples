function homeDirective() {
	return {
		restrict: 'E',
		link: function(el) {
			el.on('click', () => alert('clicked me!'));
		}
	}
}

export default homeDirective;