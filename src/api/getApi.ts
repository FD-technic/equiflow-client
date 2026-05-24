const BASE_URL = "http://localhost:8080";

export const getApi = async (endpoint: string) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error("API request failed");
    }
    console.log("GET: ", response);
    return response.json();
}