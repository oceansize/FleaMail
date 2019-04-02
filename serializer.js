document.addEventListener("DOMContentLoaded", function() {

  let appData = {};

  function buildEntries() {
    let entryData = [];
    document.querySelectorAll('.year').forEach(year => {

      let entriesForThisYear = {}

      entriesForThisYear.year = year.querySelector('h1').textContent;
      entriesForThisYear.entries = [];

    	year.querySelectorAll('.entry').forEach(entry => {
        let currentEntry = { meta: {} };

        currentEntry.meta.date = extractProperty(entry, '.date');
        currentEntry.meta.subject = extractProperty(entry, '.subject');
        currentEntry.meta.to = extractProperty(entry, '.to');
        currentEntry.meta.from = extractProperty(entry, '.from');
        currentEntry.meta.location = extractProperty(entry, '.location');

        currentEntry.copy = extractProperty(entry, '.copy');

        entriesForThisYear.entries.push(currentEntry);
    	});
      entryData.push(entriesForThisYear);
    });
    return entryData;
  }

  function extractProperty(object, property) {
      let element = object.querySelector(property);

      if (element && element.textContent) {
        return element.textContent;
      }
      return "";
  };

  appData.fleamails = buildEntries();
  console.log(appData.fleamails);
  publico = appData.fleamails;
});


