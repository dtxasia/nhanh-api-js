export class NhanhApi {
    apiUsername = ""
    apiKey = ""
    constructor(apiUsername: string, apiKey: string) {
        if (!apiUsername || !apiKey) {
            throw Error("Can't create client: invalid or missing credentials.")

        }
        this.apiKey = apiKey
        this.apiUsername = apiUsername
    }
    version() {
        return "1.0"
    }
}