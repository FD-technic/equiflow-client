import { getApi } from "./getApi";

export async function getPortfolios() {
    return ("/api/portfolios");
}

export async function getPortfolio(id: number) {
    return getApi(`/api/portfolios(${id}`);
} 