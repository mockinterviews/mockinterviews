document.addEventListener('DOMContentLoaded', function () {
	resetSelectBox();
});

function resetSelectBox() {
	const serviceSelect = document.getElementById('serviceSelect');
	serviceSelect.selectedIndex = 0; // Reset to the first option (assuming it's the default)

	const buttons = document.querySelectorAll('.button');
	const helpText = document.getElementById('helpText');
	helpText.style.display = 'none'; // Hide help text
	buttons.forEach((button) => {
		button.style.display = 'none'; // Hide all buttons
	});
}

function showButton() {
	const serviceSelect = document.getElementById('serviceSelect');
	const buttons = document.querySelectorAll('.button');

	buttons.forEach((button) => {
		button.style.display = 'none';
		button.style.opacity = 0;
		button.style.transform = 'translateY(20px)';
	});

	if (serviceSelect.value) {
		const selectedButton = document.getElementById(serviceSelect.value);
		selectedButton.style.display = 'block';
		selectedButton.style.opacity = 1;
		selectedButton.style.transform = 'translateY(0)';
		selectedButton.animate(
			[
				{ transform: 'translateY(20px)', opacity: 0 },
				{ transform: 'translateY(0)', opacity: 1 },
			],
			{
				duration: 500,
				easing: 'ease-out',
			}
		);
	}
}
