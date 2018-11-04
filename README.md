# Vélo-Vanier bike sharing management system

## Getting Started

- clone the repo
- `yarn`
- `yarn start`
- serves locally on `http://localhost:3000`

### API

This app uses an API which is you can install locally: [vv-api](https://github.com/velo-vanier/vv-api)
Make sure you set the `REACT_APP_API_BASE_URL` environment variable in `.env` to point to the correct base url for the API.

## Deployment

The front end is deployed on AWS. In order to deploy, you'll need to do the following steps:
- get credentials for AWS (from Brett?)
- install the [awscli](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
- on your local machine, in the vv-ui repo run `yarn build`
- `aws s3 sync build s3://velo-vanier`
