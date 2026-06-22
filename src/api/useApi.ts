import { useEffect, useState } from "react";
import { getApi } from "./getApi";

export function useApi<T>(request: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const response = await getApi(request);
        setData(response);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [request]);

  return { data, loading, error };
}
