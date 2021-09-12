

////////////////////////
/// Made by Team AOF ///
////////////////////////


events.listen("recipes", function (event) {


  // Heart of the Sky
  event.remove({ output: "winged:heart_of_the_sky" });


  // Angel Ring
  event.remove({ output: "kibe:angel_ring" });
  event.shaped(item.of("kibe:angel_ring"), [
    ['dml-refabricated:glitch_ingot',  'minecraft:elytra',                        'dml-refabricated:glitch_ingot'],
    ['techreborn:interdimensional_su', 'modern_industrialization:diesel_jetpack', 'modern_industrialization:highly_advanced_upgrade'],
    ['minecraft:end_crystal',          'conjuring:stabilized_conjuring_focus',    'minecraft:dragon_breath'],
  ]);

  // Light Ring
  event.remove({ output: "kibe:light_ring" });
  event.shaped(item.of("kibe:light_ring"), [
   ['modern_industrialization:advanced_pump',            "modern_industrialization:bucket_light_fuel", 'modern_industrialization:advanced_pump'],
   ["modern_industrialization:bucket_light_fuel", "kibe:diamond_ring",                             "modern_industrialization:bucket_light_fuel"],
   ['modern_industrialization:piston',            "modern_industrialization:bucket_light_fuel", 'modern_industrialization:piston'],
 ]);

  // Quantum Suit
  event.remove({ output: "techreborn:quantum_chestplate" });
  event.shaped(item.of("techreborn:quantum_chestplate"), [
    ["techreborn:tungstensteel_plate",  null,                                   "techreborn:tungstensteel_plate"],
    ["techreborn:superconductor_cable", "kibe:angel_ring",                      "techreborn:superconductor_cable"],
    ["techreborn:data_storage_chip",    "techreborn:iridium_neutron_reflector", "techreborn:data_storage_chip"],
  ]);

  // Cobweb
  event.shaped(item.of("minecraft:cobweb"), [
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
  ]);

  // Compressor (Tech Reborn)
  event.remove({ output: "techreborn:compressor" });
  event.shaped(item.of("techreborn:compressor"), [
    ["modern_industrialization:iron_plate", "modern_industrialization:iron_plate",          "modern_industrialization:iron_plate"],
    ["minecraft:stone",                     "techreborn:electronic_circuit",  "minecraft:stone"],
    ["minecraft:stone",                     "techreborn:basic_machine_frame", "minecraft:stone"],
  ]);

  // Heaven Wings (Creative Flight)
  event.remove({ output: 'goml:heaven_wings' });

  // Solar Panels
  event.remove({ id: "techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/industrial_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });

  // Metals
  event.remove({ id: "indrev:shapeless/steel_dust" });

  // Obsidian Tools
  event.remove({ id: "vanilla-hammers:obsidian_hammer" });
  event.remove({ id: "vanilla-excavators:obsidian_excavator" });

    // Minecart in Rolling Machine
    event.remove({ id: "techreborn:rolling_machine/minecart" });
});
