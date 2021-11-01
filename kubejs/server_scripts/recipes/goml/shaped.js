

////////////////////////
/// Made by Team AOF ///
////////////////////////


events.listen("recipes", function (event) {

  // Heaven Wings (Creative Flight)
  event.remove({ output: 'goml:heaven_wings' });

  // Ender Binding
  event.remove({ output: "goml:ender_binding" });
  event.shaped(item.of("goml:ender_binding"), [
    ["minecraft:obsidian", "minecraft:crying_obsidian", "minecraft:obsidian"],
    ["minecraft:crying_obsidian", "minecraft:ender_eye", "minecraft:crying_obsidian"],
    ["minecraft:obsidian", "minecraft:crying_obsidian", "minecraft:obsidian"],
  ]);

  // Easier Claim anchor, also less crashy
  event.remove({ output: "goml:makeshift_claim_anchor" });
  event.shaped(item.of("goml:makeshift_claim_anchor"), [
    ["#minecraft:planks", "minecraft:stone", "#minecraft:planks"],
    ["minecraft:stone", "#minecraft:wooden_doors", "minecraft:stone"],
    ["#minecraft:planks", "minecraft:stone", "#minecraft:planks"],
  ]);  

});
