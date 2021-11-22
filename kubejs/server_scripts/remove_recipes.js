onEvent('recipes', (event) => {

    const id = [
    'indrev:shapeless/steel_dust',
    'charm:variant_chests/hopper',
    'techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/industrial_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
    'techreborn:rolling_machine/minecart',
    'vanilla-excavators:obsidian_excavator',
    'vanilla-hammers:obsidian_hammer'

    ];

    const output = [
    'minecraft:barrel',
    'blast:gunpowder_block',
    'blockus:white_oak_small_logs',
    'blockus:dark_oak_small_logs',
    'blockus:acacia_small_logs',
    'blockus:jungle_small_logs',
    'blockus:birch_small_logs',
    'blockus:spruce_small_logs',
    'blockus:oak_small_logs',
    'blockus:golden_bars',
    'campanion:cracker',
    'goml:heaven_wings',
    'goml:ender_binding',
    'goml:makeshift_claim_anchor',
    'kibe:angel_ring',
    'kibe:light_ring',
    'techreborn:quantum_chestplate',
    'techreborn:compressor',
    'winged:heart_of_the_sky',
	'rswires:red_alloy_compound'
    ];

    id.forEach((id) => {
        event.remove({ id: id });
    });

    output.forEach((output) => {
        event.remove({ output: output });
    });
});