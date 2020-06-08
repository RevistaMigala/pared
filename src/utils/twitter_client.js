const Twitter = require('twitter-lite')


module.exports.TwitterClient = class TwitterClient {
    constructor() {
        this.client = new Twitter({
            subdomain: "api",
            version: "1.1",
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        })
    }


    getTwits (lang) {
        const _lang = (lang) ? lang : 'es'
        const params = {
            q: '#haiku',
            lang: _lang,
            include_entities: false,
            count: 14,
            result_type: 'mixed',
        }
        return this.client.get("search/tweets", params)
    }
}
