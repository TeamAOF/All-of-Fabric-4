////////////////////////
/// Made by Team AOF ///
////////////////////////

//////////////////////////////////////////////
// AOF 4 unification script - MIT licensed. //
//////////////////////////////////////////////

// Set to true to generate the client script for REI unification.
const GENERATE_REI_SCRIPT = true;
// List of part tags to unify.
const PARTS = [
    "c:{}_blocks",
    "c:{}_dusts",
    "c:{}_ingots",
    "c:{}_nuggets",
    "c:{}_plates",
    "c:raw_{}_ores",
    "c:raw_{}_blocks"
];
// List of materials to unify.
const MATERIALS = [
    "aluminum",
    "bauxite",
    "bronze",
    "chrome",
    "coal",
    "copper",
    "diamond",
    "electrum",
    "emerald",
    "gold",
    "invar",
    "iridium",
    "iron",
    "lapis",
    "lead",
    "manganese",
    "nickel",
    "platinum",
    "quartz",
    "ruby",
    "silicon",
    "silver",
    "steel",
    "sulfur",
    "tin",
    "titanium",
    "tungsten",
];
// Order of mods to unify
const UNIFICATION_ORDER = [
    "modern_industrialization",
    "minecraft",
    "indrev",
    "techreborn",
    "charm",
    "appliedenergistics2"
];
// List of tags NOT to unify
const UNIFICATION_BLACKLIST = [
    "c:quartz_blocks"
];
// Map of removed item -> unified variant.
const itemIdToUnified = {};
// List of all unification tags.
const unifiedTagList = [];

function findTagUnification(event, tagName) {
    if (UNIFICATION_BLACKLIST.includes(tagName)) return;

    const tagItems = event.get(tagName).kjsextras_getAllIds();

    // Check if unification is OK
    let doUnify = true;
    tagItems.forEach(id => {
        const namespace = id.split(":")[0];
        // Don't unify if it contains the MC namespace
        if (namespace === "minecraft") {
            doUnify = true;
            return;
        }
    });
    if (!doUnify) return;

    let unifyTargetId = undefined;
    UNIFICATION_ORDER.forEach(unificationNamespace => {
        // Do tag unification
        tagItems.forEach(id => {
            // Skip deepslate!
            if (id.includes("deepslate")) return;

            const namespace = id.split(":")[0];
            // If a namespace is not in the order list, crash
            if (!UNIFICATION_ORDER.includes(namespace)) {
                throw new Error(`Missing namespace ${namespace} in the unification order: ${UNIFICATION_ORDER}. Required by item ${id} in tag ${tagName}.`);
            }
            // Otherwise pick the best in the list
            if (namespace === unificationNamespace) {
                if (unifyTargetId === undefined) {
                    unifyTargetId = id;
                }
            }
        });
    });

    if (unifyTargetId === undefined || doUnify === false) return undefined;
    else return "" + unifyTargetId; // Convert to string
}
// Unify common tags
events.listen("items.tags", event => {
    // Regular parts
    MATERIALS.forEach(material => {
        PARTS.forEach(partTagTemplate => {
            const tagName = partTagTemplate.replace("{}", material);

            // Pick unification target
            let unifyTargetId = findTagUnification(event, tagName);
            if (unifyTargetId === undefined) return;
            unifiedTagList.push(tagName);

            // Collect other items for item unification.
            event.get(tagName).kjsextras_getAllIds().forEach(id => {
                if (id in itemIdToUnified) {
                    throw new Error("Item id " + tagStack.id + " already has a unification mapping! " + itemIdToUnified[id]);
                } else if (id !== unifyTargetId) {
                    itemIdToUnified[id] = unifyTargetId;
                    // Remove from tag.
                    event.remove(tagName, id);
                }
            });
        });
    });
    // Ore parts
    MATERIALS.forEach(material => {
        const oreTagName = `c:${material}_ores`;
        const oreItemId = findTagUnification(event, oreTagName);

        if (oreItemId === undefined) return; // No ore found!
        unifiedTagList.push(oreTagName);

        const oreItemIdParts = oreItemId.split(":");
        // Convert ore to deepslate variant.
        const deepslateOreItemId = oreItemIdParts[0] + ":deepslate_" + oreItemIdParts[1];

        // Collect ores, unify deepslate to deepslate and regular to regular.
        event.get(oreTagName).kjsextras_getAllIds().forEach(id => {
            if (id in itemIdToUnified) {
                throw new Error("Item id " + id + " already has a unification mapping! " + itemIdToUnified[id]);
            } else if (id !== oreItemId && id !== deepslateOreItemId) {
                if (id.includes("deepslate")) {
                    itemIdToUnified[id] = deepslateOreItemId;
                } else {
                    itemIdToUnified[id] = oreItemId;
                }
                // Remove from tag.
                event.remove(oreTagName, id);
            }
        });
    });
})
events.listen("recipes", event => {
    // Replace inputs and outputs with unified items.
    for (let id in itemIdToUnified) {
        let unified = itemIdToUnified[id];
        event.replaceInput({}, id, unified);
        event.replaceOutput({}, id, unified);
    }
    // Force inputs to use the tag.
    unifiedTagList.forEach(tag => {
        event.replaceInput({}, tag, tag);
    });
    // Add fallback recipes (output is hidden from REI by KJS Extras)
    for (let id in itemIdToUnified) {
        let unified = itemIdToUnified[id];
        event.recipes.minecraft.crafting_shapeless(unified, id).id("kjsextras_output_hidden:" + id.replace(":", "_"));
    }
    // Remove duplicate recipes
    function autoremove(itemPattern, recipePattern) {
        MATERIALS.forEach(material => {
            let ok = true;
            if (recipePattern === undefined) {
                recipePattern = itemPattern;
            } else {
                ok = itemPattern.replace("{}", material) in itemIdToUnified;
            }
            if (ok) {
                event.remove({ id: recipePattern.replace("{}", material) });
            }
        });
    }
    
    // TR recipes
    autoremove("techreborn:{}_storage_block", "techreborn:crafting_table/storage_block/{}_storage_block");
    autoremove("techreborn:{}_block", "techreborn:crafting_table/ingot/{}_ingot_from_block");
    autoremove("techreborn:{}_block", "techreborn:crafting_table/ingot/{}_ingot_from_storage_block");
    autoremove("techreborn:{}_ingot", "techreborn:crafting_table/ingot/{}_ingot_from_block");
    autoremove("techreborn:{}_ingot", "techreborn:crafting_table/ingot/{}_ingot_from_nugget");
    autoremove("techreborn:{}_ingot", "techreborn:crafting_table/ingot/{}_nugget_from_nugget");
    autoremove("techreborn:{}_dust", "techreborn:crafting_table/small_dust/{}_small_dust");
    autoremove("techreborn:{}_dust", "techreborn:crafting_table/dust/{}_dust");
    autoremove("techreborn:{}_nugget", "techreborn:crafting_table/nugget/{}_nugget");
    autoremove("techreborn:{}_ore", "techreborn:smelting/{}_ingot_from_ore");
    autoremove("techreborn:{}_ingot", "techreborn:smelting/{}_ingot_from_raw");
    autoremove("techreborn:{}_ingot", "techreborn:smelting/{}_ingot_from_raw_exported_mi_furnace");
    autoremove("techreborn:{}_ingot", "techreborn:smelting/{}_ingot_from_dust");
    autoremove("techreborn:{}_ore", "techreborn:blasting/{}_ingot_from_ore");
    autoremove("techreborn:{}_ingot", "techreborn:blasting/{}_ingot_from_dust");

    // Some duplicate MI recipes (normally untagged).
    autoremove("modern_industrialization:generated/materials/{}/smelting/ore_deepslate_to_ingot_smelting");
    autoremove("modern_industrialization:generated/materials/{}/smelting/ore_deepslate_to_ingot_blasting");

    // Indrev recipes
    autoremove("indrev:{}_block", "indrev:shaped/{}_block");
    autoremove("indrev:{}_block", "indrev:shapeless/{}_ingot_from_block");
    autoremove("indrev:{}_block", "indrev:shaped/{}_ingot_from_nugget");
    autoremove("indrev:{}_block", "indrev:shapeless/{}_nugget");
    autoremove("indrev:{}_block", "indrev:shaped/raw_{}_block");
    autoremove("indrev:{}_block", "indrev:shapeless/raw_{}");
    autoremove("indrev:{}_ingot", "indrev:smelting/{}_ingot");
    autoremove("indrev:{}_ingot", "indrev:blasting/{}_ingot_from_ore");
    autoremove("indrev:{}_ingot", "indrev:shapeless/{}_ingot_from_block");
    autoremove("indrev:{}_ingot", "indrev:shapeless/{}_ingot_from_nugget");
    autoremove("indrev:raw_{}", "indrev:smelting/{}_ingot_from_raw_ores");
    autoremove("indrev:{}_ore", "indrev:smelting/{}_ingot_from_ore");
    autoremove("indrev:{}_dust", "indrev:smelting/{}_ingot_from_smelting");
    autoremove("indrev:raw_{}", "indrev:blasting/{}_ingot_from_raw_ores");
    autoremove("indrev:{}_ore", "indrev:blasting/{}_ingot_from_ore");
    autoremove("indrev:{}_dust", "indrev:blasting/{}_ingot_from_smelting");
    
    // Charm
    autoremove("charm:extra_nuggets/{}_ingot_from_nuggets");
    autoremove("charm:extra_nuggets/{}_nuggets_from_ingot");

    if (GENERATE_REI_SCRIPT) {
        generateReiScript(itemIdToUnified);
    }
});

function generateReiScript(itemIdToUnified) {
    script = `
//////////////////////////////////////////////////////////////////////////
// AOF 4 REI unification script.                                        //
// Generated by the unification script with GENERATE_REI_SCRIPT = true. //
//////////////////////////////////////////////////////////////////////////
const DELETED_ITEMS = ${JSON.stringify(Object.keys(itemIdToUnified))};
events.listen("kjsextras_rei", event => {
    DELETED_ITEMS.forEach(id => event.remove(id));
});
    `;
    console.log("Generated REI unification script. Disable by setting GENERATE_REI_SCRIPT to false.");
    console.log(script);
}

events.listen("recipes.serializer.special.flag", event => {
    // Fix indrev recipe types
    ["compress", "pulverize", "infuse"].forEach(id => event.ignoreSpecialFlag("indrev:" + id));
});