const API_URL = import.meta.env.VITE_API_URL;

export const getApi = async (endpoint: string) => {
    
    const response = await fetch(`${API_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error("API request failed");
    }

    return response.json();
}