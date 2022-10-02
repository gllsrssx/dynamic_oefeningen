export function citiesFromPersons(persons) {
    const allCities = [...new Set(persons.map(p => p.city))];
    return allCities.map(cityname => ({name:cityname,numberOfPersons:0}))
}