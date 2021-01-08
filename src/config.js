const config = {
    STRIPE_KEY: "pk_test_51I73sXGQsdkSfPfwgataI6yLzMp8nr5lZWpZkJDoZytMKJfBzgYTaYjwJuDDJk5DLiVGULjEo1jtOXcJT7YqlVsl002L3a9RTy",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-paulg",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://mlahztibwl.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_JfZd5prxJ",
      APP_CLIENT_ID: "2orjeovg8ahit7269il36et9h2",
      IDENTITY_POOL_ID: "us-east-1:99d377f8-1568-4281-8f46-49cf90df36a1",
    },
    MAX_ATTACHMENT_SIZE: 5000000
  };
  
export default config;