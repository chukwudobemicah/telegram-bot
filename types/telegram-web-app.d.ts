// src/types/telegram-web-app.d.ts
interface TelegramWebApp {
  ready: () => void;
  // Add other methods and properties of Telegram.WebApp as needed
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
