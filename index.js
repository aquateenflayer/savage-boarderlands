$(document).ready(() => {
	$('#lootButton').click(() => {

		var weapon = Loot.generate();
		console.log(weapon);

		$('#category').html(weapon.category);
	});
});
