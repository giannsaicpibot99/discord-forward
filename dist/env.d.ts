export interface Env {
    DISCORD_TOKEN: string;
    TELEGRAM_TOKEN: string;
    TELEGRAM_CHAT_ID: string | number;
}
export declare function getEnv(): Env;
