

async function getParking() {
    const headers = {
        Accept: "application/json",
    };
    try {
        const response = await fetch("https://data.orleans-metropole.fr/api/explore/v2.1/catalog/datasets/mobilite-places-disponibles-parkings-en-temps-reel/records?limit=100", {
            method: "GET",
            headers: headers,
        });
        return await response.json();
    } catch (error) {
        return error;
    }
}