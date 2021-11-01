
////////////////////////
/// Made by Team AOF ///
////////////////////////


events.listen("recipes", function (event) {

  // Quantum Suit
  event.remove({ output: "techreborn:quantum_chestplate" });
  event.shaped(item.of("techreborn:quantum_chestplate"), [
    ["techreborn:tungstensteel_plate",  null,                                   "techreborn:tungstensteel_plate"],
    ["techreborn:superconductor_cable", "kibe:angel_ring",                      "techreborn:superconductor_cable"],
    ["techreborn:data_storage_chip",    "techreborn:iridium_neutron_reflector", "techreborn:data_storage_chip"],
  ]);

  // Compressor (Tech Reborn)
  event.remove({ output: "techreborn:compressor" });
  event.shaped(item.of("techreborn:compressor"), [
    ["modern_industrialization:iron_plate", "modern_industrialization:iron_plate",          "modern_industrialization:iron_plate"],
    ["minecraft:stone",                     "techreborn:electronic_circuit",  "minecraft:stone"],
    ["minecraft:stone",                     "techreborn:basic_machine_frame", "minecraft:stone"],
  ]);

  // Solar Panels
  event.remove({ id: "techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/industrial_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });

    // Minecart in Rolling Machine
    event.remove({ id: "techreborn:rolling_machine/minecart" });
});
