export interface IGetAuthTokenResult {
  accesstoken: string;
  expirytime: number;
  refreshtoken: string;
}
export interface ITokenObj {
  access_token: string;
  expiry_time?: number;
  refresh_token: string;
  user_identifier: string;
}

export interface IStorage {
  saveOAuthTokens: (token_obj: ITokenObj) => Promise<void>;
  updateOAuthTokens: (token_obj: Partial<ITokenObj>) => Promise<void>;
  getOAuthTokens(user_identifier: string): Promise<IGetAuthTokenResult[]>;
}

export function init(): IStorage {
  let iGetAuthTokenResult: IGetAuthTokenResult;
  return {
    saveOAuthTokens: function saveOAuthTokens(
      token_obj: ITokenObj
    ): Promise<void> {
      return new Promise(function(resolve, reject) {
        //iGetAuthTokenResult = accessTokenHack(token_obj);
        iGetAuthTokenResult = {
          accesstoken: token_obj.access_token,
          expirytime: token_obj.expiry_time,
          refreshtoken: token_obj.refresh_token,
        };
        resolve();
      });
    },
    updateOAuthTokens: function updateOAuthTokens(
      token_obj: ITokenObj
    ): Promise<void> {
      return new Promise(function(resolve, reject) {
        //iGetAuthTokenResult = accessTokenHack(token_obj);
        iGetAuthTokenResult = {
          accesstoken: token_obj.access_token,
          expirytime: token_obj.expiry_time,
          refreshtoken: token_obj.refresh_token,
        };
        resolve();
      });
    },
    getOAuthTokens: function getOAuthTokens(
      user_identifier
    ): Promise<IGetAuthTokenResult[]> {
      return new Promise(function(resolve, reject) {
        const result: IGetAuthTokenResult = { ...iGetAuthTokenResult };
        var result_array: IGetAuthTokenResult[] = [result];
        resolve(result_array);
      });
    },
  };
}
