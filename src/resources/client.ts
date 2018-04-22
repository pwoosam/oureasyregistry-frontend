﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.17.2.0 (NJsonSchema v9.10.45.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { inject } from 'aurelia-framework';
import { HttpClient, RequestInit } from 'aurelia-fetch-client';

@inject(String, HttpClient)
export class GetClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "/";
    }

    /**
     * Get all items
     * @x_Fields (optional) An optional fields mask
     * @return Success
     */
    db(x_Fields: string): Promise<ItemModel[]> {
        let url_ = this.baseUrl + "/db/item";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "X-Fields": x_Fields !== undefined && x_Fields !== null ? "" + x_Fields : "", 
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDb(_response);
        });
    }

    protected processDb(response: Response): Promise<ItemModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(ItemModel.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ItemModel[]>(<any>null);
    }
}

@inject(String, HttpClient)
export class PostClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "/";
    }

    /**
     * Create a new item
     * @return Success
     */
    db(payload: CreateItemModel): Promise<void> {
        let url_ = this.baseUrl + "/db/item";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(payload);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDb(_response);
        });
    }

    protected processDb(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * Send a text message
     * @return Success
     */
    sms(payload: PhoneMessageModel): Promise<void> {
        let url_ = this.baseUrl + "/sms/";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(payload);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSms(_response);
        });
    }

    protected processSms(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }
}

@inject(String, HttpClient)
export class PutClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "/";
    }

    /**
     * Update an existing item
     * @return Success
     */
    db(payload: InsertRowModel): Promise<void> {
        let url_ = this.baseUrl + "/db/item";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(payload);

        let options_ = <RequestInit>{
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDb(_response);
        });
    }

    protected processDb(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }
}

@inject(String, HttpClient)
export class DbClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "/";
    }

    /**
     * Gets a single item by name
     * @x_Fields (optional) An optional fields mask
     * @return Success
     */
    get(x_Fields: string, name: string): Promise<ItemModel> {
        let url_ = this.baseUrl + "/db/{name}";
        if (name === undefined || name === null)
            throw new Error("The parameter 'name' must be defined.");
        url_ = url_.replace("{name}", encodeURIComponent("" + name)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "X-Fields": x_Fields !== undefined && x_Fields !== null ? "" + x_Fields : "", 
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<ItemModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ItemModel.fromJS(resultData200) : new ItemModel();
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ItemModel>(<any>null);
    }
}

export class PhoneMessageModel implements IPhoneMessageModel {
    /** A phone number including country code */
    phone_number: number;
    /** The message to send to the number */
    message: string;

    constructor(data?: IPhoneMessageModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.phone_number = data["phone_number"];
            this.message = data["message"];
        }
    }

    static fromJS(data: any): PhoneMessageModel {
        data = typeof data === 'object' ? data : {};
        let result = new PhoneMessageModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["phone_number"] = this.phone_number;
        data["message"] = this.message;
        return data; 
    }
}

export interface IPhoneMessageModel {
    /** A phone number including country code */
    phone_number: number;
    /** The message to send to the number */
    message: string;
}

export class CreateItemModel implements ICreateItemModel {
    name: string;
    price: number;
    url: string;

    constructor(data?: ICreateItemModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.price = data["price"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): CreateItemModel {
        data = typeof data === 'object' ? data : {};
        let result = new CreateItemModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["price"] = this.price;
        data["url"] = this.url;
        return data; 
    }
}

export interface ICreateItemModel {
    name: string;
    price: number;
    url: string;
}

export class InsertRowModel implements IInsertRowModel {
    name: string;
    is_purchased: boolean;

    constructor(data?: IInsertRowModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.is_purchased = data["is_purchased"];
        }
    }

    static fromJS(data: any): InsertRowModel {
        data = typeof data === 'object' ? data : {};
        let result = new InsertRowModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["is_purchased"] = this.is_purchased;
        return data; 
    }
}

export interface IInsertRowModel {
    name: string;
    is_purchased: boolean;
}

export class ItemModel implements IItemModel {
    name: string;
    price: number;
    url: string;
    is_purchased: boolean;

    constructor(data?: IItemModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.price = data["price"];
            this.url = data["url"];
            this.is_purchased = data["is_purchased"];
        }
    }

    static fromJS(data: any): ItemModel {
        data = typeof data === 'object' ? data : {};
        let result = new ItemModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["price"] = this.price;
        data["url"] = this.url;
        data["is_purchased"] = this.is_purchased;
        return data; 
    }
}

export interface IItemModel {
    name: string;
    price: number;
    url: string;
    is_purchased: boolean;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if(result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}