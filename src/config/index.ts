// WS 10001 API 10002 CHAT 10008 CONFIG 10009

// export const WS_URL = "wss://web.rentsoft.cn/msg_gateway";
// export const API_URL = "https://web.rentsoft.cn/api";
// export const USER_URL = "https://web.rentsoft.cn/chat";

export const OPENIM_IP = "192.168.101.103";
// export const OPENIM_IP = "66.110.45.47";
// export const OPENIM_IP = "66.107.0.204"; //生产环境
// export const OPENIM_IP = "66.75.0.11"; //生产环境

export const WS_URL = `ws://${OPENIM_IP}:10001`;
export const API_URL = `http://${OPENIM_IP}:10002`;
export const CHAT_URL = `http://${OPENIM_IP}:10008`;

export const getWsUrl = () => localStorage.getItem("wsUrl") || WS_URL;
export const getApiUrl = () => localStorage.getItem("apiUrl") || API_URL;
export const getChatUrl = () => localStorage.getItem("chatUrl") || CHAT_URL;
