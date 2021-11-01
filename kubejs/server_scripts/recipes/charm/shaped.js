

////////////////////////
/// Made by Team AOF ///
////////////////////////


events.listen("recipes", function (event) {

  // Allow Charm chests in any recipes using chests tag
  event.replaceInput({}, "#c:wooden_chests", "#charm:chests/normal");

  // Barrels
  event.replaceInput(
    { type: "minecraft:crafting_shaped" },
    "minecraft:barrel",
    "#charm:barrels"
  );

   event.remove({ output: "minecraft:barrel" });

   event.shapeless('charm:spruce_barrel', ['minecraft:barrel'])
   event.shapeless('minecraft:barrel', ['charm:spruce_barrel'])
  
});
