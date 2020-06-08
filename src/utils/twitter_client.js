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
        this.enQuery = [
            'gender',
            'gender ?',
            '#haiku',
            'identity',
            'poetry',
            '#sonet',
        ],
        this.esQuery = [
            'genero',
            'genero ?',
            '#haiku',
            'identidad',
            '#decima OR # décima',
            'poesía OR poesia',
        ]
        this.queryMap = {
            es: this.esQuery,
            en: this.enQuery,
        }
    }


    getTwits (lang) {
        const _lang = (lang) ? lang : 'es'
        const query = this.queryMap[lang]
        const i = Math.floor(Math.random() * this.queryMap[lang].length)
        const params = {
            q: query[i] + ' +exclude:retweets',
            lang: _lang,
            include_entities: false,
            count: 14,
            result_type: 'recent',
            tweet_mode: 'extended',
        }
        return this.client.get("search/tweets", params)
    }
}
