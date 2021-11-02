////////////////////////
/// Made by Team AOF ///
////////////////////////

settings.useOriginalRecipeForFilters = true
events.listen("recipes", function (event) {

  // Gunpowder Block
  event.shaped(item.of("blast:gunpowder_block"), [
    ["minecraft:gunpowder", "minecraft:gunpowder", "minecraft:gunpowder"],
    ["minecraft:gunpowder", "minecraft:coal_block", "minecraft:gunpowder"],
    ["minecraft:gunpowder", "minecraft:gunpowder", "minecraft:gunpowder"],
  ]);

});
