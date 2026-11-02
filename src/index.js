import { KVDockStore } from "kvdock";
import { MemoryAdapter } from "kvdock/adapters/memory";

export const store = new KVDockStore({
  adapter: new MemoryAdapter(),
  prefix: "kvdock-cloudflare-worker:",
});

console.log("Initialized kvdock-cloudflare-worker with kvdock runtime engine.");
