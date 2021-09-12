////////////////////////
/// Made by Team AOF ///
////////////////////////
settings.useOriginalRecipeForFilters = true
events.listen("recipes", function (event) {

   // Charm Barrel
   event.remove({ output: "minecraft:barrel" });

   event.shapeless('charm:spruce_barrel', ['minecraft:barrel'])
   event.shapeless('minecraft:barrel', ['charm:spruce_barrel'])

  // Gunpowder Block
  event.remove({ output: "blast:gunpowder_block" });

  event.shaped(item.of("blast:gunpowder_block"), [
    ["minecraft:gunpowder", "minecraft:gunpowder", "minecraft:gunpowder"],
    ["minecraft:gunpowder", "minecraft:coal_block", "minecraft:gunpowder"],
    ["minecraft:gunpowder", "minecraft:gunpowder", "minecraft:gunpowder"],
  ]);

  // Ender Binding
  event.remove({ output: "goml:ender_binding" });
  event.shaped(item.of("goml:ender_binding"), [
    ["minecraft:obsidian", "minecraft:crying_obsidian", "minecraft:obsidian"],
    ["minecraft:crying_obsidian", "minecraft:ender_eye", "minecraft:crying_obsidian"],
    ["minecraft:obsidian", "minecraft:crying_obsidian", "minecraft:obsidian"],
  ]);

  // Wooden Bucket / Small Logs
  event.remove({ output: "blockus:oak_small_logs" });
  event.remove({ output: "blockus:spruce_small_logs" });
  event.remove({ output: "blockus:birch_small_logs" });
  event.remove({ output: "blockus:jungle_small_logs" });
  event.remove({ output: "blockus:acacia_small_logs" });
  event.remove({ output: "blockus:dark_oak_small_logs" });
  event.remove({ output: "blockus:white_oak_small_logs" });

  event.shaped(item.of("blockus:oak_small_logs", 3), [
    ["minecraft:oak_log", "minecraft:oak_log", "minecraft:oak_log"],
  ]);
  event.shaped(item.of("blockus:spruce_small_logs", 3), [
    ["minecraft:spruce_log", "minecraft:spruce_log", "minecraft:spruce_log"],
  ]);
  event.shaped(item.of("blockus:birch_small_logs", 3), [
    ["minecraft:birch_log", "minecraft:birch_log", "minecraft:birch_log"],
  ]);
  event.shaped(item.of("blockus:jungle_small_logs", 3), [
    ["minecraft:jungle_log", "minecraft:jungle_log", "minecraft:jungle_log"],
  ]);
  event.shaped(item.of("blockus:acacia_small_logs", 3), [
    ["minecraft:acacia_log", "minecraft:acacia_log", "minecraft:acacia_log"],
  ]);
  event.shaped(item.of("blockus:dark_oak_small_logs", 3), [
    [
      "minecraft:dark_oak_log",
      "minecraft:dark_oak_log",
      "minecraft:dark_oak_log",
    ],
  ]);
  event.shaped(item.of("blockus:white_oak_small_logs", 3), [
    ["blockus:white_oak_log", "blockus:white_oak_log", "blockus:white_oak_log"],
  ]);

  // Chests
  event.replaceInput({}, "#c:wooden_chests", "#charm:chests/normal");

  // Barrels
  event.replaceInput(
    { type: "minecraft:crafting_shaped" },
    "minecraft:barrel",
    "#charm:barrels"
  );
 
  
  //Blockus Golden bars
  event.remove({ output: "blockus:golden_bars" });

  event.shapeless('blockus:golden_bars', ['charm:gold_bars'])
  event.shapeless('charm:gold_bars', ['blockus:golden_bars'])

  // Barrels
  var blockus_barrels = [
    "oak",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "crimson",
    "warped",
  ];

  blockus_barrels.forEach(function (item, index) {
    event.remove({
      type: "crafting_shaped",
      output: "blockus:" + item + "_barrel",
    });
  });
});
