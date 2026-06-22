import type { PositionDetailDTO } from "./PositionDetailDTO";

export interface PortfolioDetailDTO {
    id: number;
    name: string;
    type: string;
    ownerId: number;
    ownerName: string;
    positions: PositionDetailDTO[];
}

