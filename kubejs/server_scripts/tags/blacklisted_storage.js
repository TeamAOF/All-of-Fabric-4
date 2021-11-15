////////////////////////
/// Made by Team AOF ///
////////////////////////

settings.useOriginalRecipeForFilters = true
events.listen('item.tags', function (event) {

  // Dank Storage
  event.get("dankstorage:blacklisted_storage").remove("minecraft:stone")
});
