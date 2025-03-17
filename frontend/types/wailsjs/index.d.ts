// frontend/types/wailsjs/index.d.ts
declare module "wailsjs/go/main/App" {
  export function Greet(name: string): Promise<string>;
  // Add other Go functions you want to call from the frontend
}

declare module "wailsjs/runtime" {
  export function EventsOn(
    eventName: string,
    callback: (...args: any[]) => void
  ): () => void;
  export function EventsEmit(eventName: string, ...data: any[]): void;
  // Other runtime APIs you need
}
