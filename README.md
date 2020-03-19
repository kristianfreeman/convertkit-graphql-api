graphql api for convertkit (very very wip)

what is it
===

a serverless graphql api for convertkit via cloudflare workers - build apps for managing/querying your convertkit data using a simple graphql interface!

usage
===

1. fill in your workers account id in `wrangler.toml` (https://developers.cloudflare.com/workers/quickstart#account-id-and-zone-id)
2. find your convertkit api secret (https://app.convertkit.com/account/edit), which can be sent as `X-ConvertKit-Secret` in your requests to the api
3. deploy (see below)
4. explore and test queries using the graphql playground (by default at `/___graphql`) - make sure to fill in your auth header
5. make authenticated requests using curl:

```
curl deployed-convertkit-graphql-api.com/ -H 'X-ConvertKit-Secret: $CONVERTKIT_SECRET'
```

deploying
===

with your account id replaced in `wrangler.toml`:

```bash
$ wrangler publish -e dev   # will deploy to convertkit-graphql-api-dev.youraccount.workers.dev
$ wrangler publish -e prod  # will deploy to convertkit-graphql-api.youraccount.workers.dev
```

development
===

set up a 

```bash
$ brew install ngrok
$ ngrok http 8787 # save this url
$ wrangler dev -h $NGROK_URL
```

making requests and testing in the explorer from the ngrok url will correctly resolve the host in the playground to your local `wrangler dev` instance - neat!
