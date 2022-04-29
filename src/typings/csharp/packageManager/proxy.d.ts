/// <reference types="node" />
import { Url } from 'url';
import { Agent } from 'http';
export declare function getProxyAgent(requestURL: Url, proxy: string, strictSSL: boolean): Agent;
