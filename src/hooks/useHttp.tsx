import { useCallback, useReducer } from "react";

/**
 * Hook for sending HTTP requests
 */

interface HttpStateInterface {
  loading: boolean;
  error: string | boolean;
  responseData: any | null;
  reqId: string | null;
  reqExtra: any | null;
}

interface HttpActionInterface {
  type: string;
  payload: {
    loading?: boolean;
    error?: string | boolean;
    responseData?: any | null;
    reqId?: string | null;
    reqExtra?: any | null;
  };
}

const initialState: HttpStateInterface = {
  loading: false,
  error: false,
  responseData: null,
  reqId: null,
  reqExtra: null,
};

const SEND = "SEND";
const RESPONSE = "RESPONSE";
const ERROR = "ERROR";
const CLEAR = "CLEAR";

const httpReducer = (
  currentHttpState: HttpStateInterface,
  action: HttpActionInterface
): HttpStateInterface => {
  switch (action.type) {
    case SEND:
      return {
        ...currentHttpState,
        loading: true,
        error: false,
        responseData: null,
        reqId: action.payload.reqId || null,
        reqExtra: null,
      };
    case RESPONSE:
      return {
        ...currentHttpState,
        loading: false,
        responseData: action.payload.responseData || null,
        reqExtra: action.payload.reqExtra || null,
      };
    case ERROR:
      return {
        ...currentHttpState,
        loading: false,
        error: action.payload.error || "Unknown Error",
      };
    case CLEAR:
      return initialState;
    default:
      return initialState;
  }
};

const useHttp = () => {
  /**
   * Http state and update
   */
  const [httpState, dispatchHttpState] = useReducer(httpReducer, initialState);

  /**
   * Clear Data
   */
  const clear = () => {
    dispatchHttpState({ type: CLEAR, payload: {} });
  };

  /**
   * Handle sending a HTTP request
   */
  const sendRequest = useCallback(
    (url, method, headers, body, reqId, reqExtra) => {
      dispatchHttpState({ type: SEND, payload: { reqId: reqId } });

      fetch(url, {
        method,
        body: body ? JSON.stringify(body) : null,
        headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network error");
          }
        })
        .then((res) =>
          dispatchHttpState({
            type: RESPONSE,
            payload: {
              responseData: res,
              reqExtra: reqExtra,
            },
          })
        )
        .catch((err) =>
          dispatchHttpState({
            type: ERROR,
            payload: {
              error: err.message,
            },
          })
        );
    },
    []
  );

  return {
    httpIsLoading: httpState.loading,
    httpResponseData: httpState.responseData,
    httpError: httpState.error,
    httpReqId: httpState.reqId,
    httpReqExtra: httpState.reqExtra,
    httpSendRequest: sendRequest,
    httpClear: clear,
  };
};

export default useHttp;
