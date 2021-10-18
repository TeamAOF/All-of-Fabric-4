////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen("recipes", function (event) {

  //easier makeshift anchor
  event.remove({ output: "goml:makeshift_claim_anchor" });
  event.shaped(item.of("goml:makeshift_claim_anchor"), [
    ["#minecraft:logs", "minecraft:stone", "#minecraft:logs"],
    ["minecraft:stone", "minecraft:gold_ingot", "minecraft:stone"],
    ["#minecraft:logs", "minecraft:stone", "#minecraft:logs"],
  ]);	

  // Sticks
  event.shaped(item.of("minecraft:stick", 16), [
    ["#minecraft:logs"],
    ["#minecraft:logs"],
  ]);


  // Hopper
  event.remove({ id: "charm:variant_chests/hopper" });
    event.shaped(item.of("minecraft:hopper"), [
      ["minecraft:iron_ingot", "#minecraft:logs",     "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "#minecraft:logs",     "minecraft:iron_ingot"],
      [null,                   "minecraft:iron_ingot", null],
    ]);
});
