import { Options } from "../Option";
export interface AgentFactory {
  new (options?: Options): Agent;
}
export interface Agent {
  resolve(url: string, method: string): Promise<string | false>;
}