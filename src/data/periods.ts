export type DataPeriod = {
    label: string;
    value: string;
};

export const DATAPERIODS: DataPeriod[] = [
    {
        label: "Daily",
        value: "DAY",
    },
    {
        label: "Weekly",
        value: "WEEK",
    },
    {
        label: "Monthly",
        value: "MONTH",
    },   
];

export type Period = {
    label: string;
    value: string;
    days: number;
    period: DataPeriod["value"];
};

export const PERIODS: Period[] = [
    {
        label: "Week",
        value: "WEEK",
        days: 5,
        period: DATAPERIODS[0].value,
    },
    {
        label: "Month",
        value: "MONTH",
        days: 20,
        period: DATAPERIODS[0].value,
    },
    {
        label: "Quarter",
        value: "QUARTER",
        days: 60,
        period: DATAPERIODS[0].value,
    },
    {
        label: "Year",
        value: "Year",
        days: 52,
        period: DATAPERIODS[1].value,
    },
    {
        label: "thre Years",
        value: "THRE_YEARS",
        days: 36,
        period: DATAPERIODS[2].value,
    },
    {
        label: "All time",
        value: "ALL",
        days: 1000,
        period: DATAPERIODS[2].value,
    },
];