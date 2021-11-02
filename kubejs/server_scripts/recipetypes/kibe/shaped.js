

////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  // Angel Ring
  event.shaped(item.of("kibe:angel_ring"), [
    ['dml-refabricated:glitch_ingot',  'minecraft:elytra',                        'dml-refabricated:glitch_ingot'],
    ['techreborn:interdimensional_su', 'modern_industrialization:diesel_jetpack', 'modern_industrialization:highly_advanced_upgrade'],
    ['minecraft:end_crystal',          'conjuring:stabilized_conjuring_focus',    'minecraft:dragon_breath'],
  ]);

  // Light Ring
  event.shaped(item.of("kibe:light_ring"), [
   ['modern_industrialization:advanced_pump',            "modern_industrialization:bucket_light_fuel", 'modern_industrialization:advanced_pump'],
   ["modern_industrialization:bucket_light_fuel", "kibe:diamond_ring",                             "modern_industrialization:bucket_light_fuel"],
   ['modern_industrialization:piston',            "modern_industrialization:bucket_light_fuel", 'modern_industrialization:piston'],
 ]);

});
