////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen("recipes", function (event) {
  
  // Oak Sign
  event.replaceInput(
    { id: "minecraft:oak_sign" },
    "minecraft:oak_planks",
    "#minecraft:planks"
  );

  // Pine Slab
  event.shaped(item.of("woods_and_mires:pine_slab", 6), [
    ["woods_and_mires:pine_planks", "woods_and_mires:pine_planks", "woods_and_mires:pine_planks"],
  ]);
});
