
////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  // Quantum Suit
  event.shaped(item.of("techreborn:quantum_chestplate"), [
    ["techreborn:tungstensteel_plate",  null,                                   "techreborn:tungstensteel_plate"],
    ["techreborn:superconductor_cable", "kibe:angel_ring",                      "techreborn:superconductor_cable"],
    ["techreborn:data_storage_chip",    "techreborn:iridium_neutron_reflector", "techreborn:data_storage_chip"],
  ]);

  // Compressor (Tech Reborn)
  event.shaped(item.of("techreborn:compressor"), [
    ["modern_industrialization:iron_plate", "modern_industrialization:iron_plate",          "modern_industrialization:iron_plate"],
    ["minecraft:stone",                     "techreborn:electronic_circuit",  "minecraft:stone"],
    ["minecraft:stone",                     "techreborn:basic_machine_frame", "minecraft:stone"],
  ]);
});
