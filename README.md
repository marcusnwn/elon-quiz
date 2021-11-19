# React app for a quiz about Elon Musk

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Host in AWS S3

![image](https://user-images.githubusercontent.com/9261163/142579941-0d6ad51a-1105-4b4e-9def-e47d9e4ab49b.png)

Create a S3 bucket, disable block public access.

In Permissions tab, update the Bucket Policy
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicReadAccess",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    }
  ]
}
```

In local environment, build and copy the files to S3 bucket
```
$ npm run build
$ aws s3 sync build/ s3://react-s3-demo --acl public-read
```

<<<<<<< HEAD
#Enable Cloudfront for speed up web content across the globe
=======
# Enable Cloudfront for speed up web content across the globe
>>>>>>> 8f007b1a44eb04d6cc0f7710626a8e3375477af7

CloudFront Origin domain set to the url of the S3 Bucket website endpoint

Outcome:

[https://d2b8lwy3qr5q2i.cloudfront.net/](https://d2b8lwy3qr5q2i.cloudfront.net/)
