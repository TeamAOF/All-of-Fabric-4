

////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {
  // Fix conflict with rswires
  event.shaped(item.of("iron-jetpacks:basic_coil"), [
    ["minecraft:redstone", null, "minecraft:redstone"],
    [null, "minecraft:iron_ingot", null],
    ["minecraft:redstone", null, "minecraft:redstone"],
  ]);  

});
