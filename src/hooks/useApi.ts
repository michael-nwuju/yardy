import { useState } from "react";
import { ApiResponse } from "apisauce";

export interface UseApiProps {
  api: (...args: any[]) => Promise<ApiResponse<any, any>>;
}

export default function useApi({ api }: UseApiProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>(null);

  const request = async (...args: any[]) => {
    setError(false);

    setLoading(true);

    const { data, ok } = await api(...args);

    setError(!ok);

    setLoading(false);

    setData(data);

    return data;
  };

  return { request, loading, data, error };
}
