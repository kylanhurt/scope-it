
export interface VideoReducer {
  recommended: any[]
}

export type Account = {
  username: string,
  edge_username?: string,
  type: string,
  bearer: string
} | null


export interface EdgeAccount {
  id: string,
  keys: any,
  username: string,
  currencyConfig: any,
  activeWalltIds: string[],
  currencyWallets: {
      [key: string]: {
      fiatCurrencyCode: string,
      balances: { [currencyCode: string]: string },
      blockHeight: number,
      syncRatio: number
    }
  },
  currencyTools: {
    [pluginName: string]: {
      currencyInfo: {
        currencyCode: string,
        displayName: string,
        pluginName: string,
        walletType: string,
        addressExplorer: string,
        transactionExplorer: string,
        denominations: any[],
        symbolImage: string,
        symbolImageDarkMono: string,
        metaTokens: any[]
      }
    }
  }
}

export interface AuthReducer {
  isLoggingIn: boolean,
  isRegistering: boolean,
  account: Account,
  edgeAccount: any
}
