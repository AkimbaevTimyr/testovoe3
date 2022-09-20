export function useCities() {
    const cities = [
        { "id": 1, "name": "Алматы" },
        { "id": 2, "name": "Актобе" },
        { "id": 3, "name": "Астана" },
        { "id": 4, "name": "Караганда" },
        { "id": 5, "name": "Актау" },
    ]
    const pricesTable = [
        { id: 0, price: 0, city: ''},
        { id: 1, price: 0, city: "Алматы" },
        { id: 2, price: 0, city: "Актобе" },
        { id: 3, price: 0, city: "Астана" },
        { id: 4, price: 0, city: "Караганда" },
        { id: 5, price: 0, city: "Актау" },
    ]
    return {
        cities,
        pricesTable
    }
}