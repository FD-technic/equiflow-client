import type { PositionDTO } from "./PositionDTO";

export interface PortfolioDTO {
    id: number;
    name: string;
    type: string;
    ownerId: number;
    ownerName: string;
    positions: PositionDTO[];
}

