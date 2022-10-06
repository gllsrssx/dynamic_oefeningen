export function citiesFromPersons(persons) {
    const allCities = [...new Set(persons.map(p => p.city))];
    return allCities.map(cityName => ({ name: cityName, numberOfPersons: persons.reduce((n, p) => (p.city===cityName ? n+1 : n), 0)}));
}