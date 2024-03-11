
/**
 * Validates and converts Zod data into app data
 */
export function apiDataConverter<
    RawData extends Record<string, unknown>,
    ParsedData,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends Record<string, any>,
>(parser: (d: RawData) => ParsedData, transformation: (d: ParsedData) => T) {
    function dataConverter(data: RawData): T;
    function dataConverter(data: RawData[]): T[];
    function dataConverter(data: RawData | RawData[]) {
        const parsedData = Array.isArray(data) ? data.map(parser) : parser(data);

        return Array.isArray(parsedData)
            ? parsedData.map(transformation)
            : transformation(parsedData);
    }

    return dataConverter;
}