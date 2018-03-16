<?php
require_once(__DIR__."/config.inc.php");
/**
 * Returns an authorized API client.
 * @return Google_Client the authorized client object
 */
function getClient() {
  $client = new Google_Client();
  $client->setApplicationName(GOOGLE_APP_NAME);
  $client->setAuthConfig(GOOGLE_CLIENT_SECRET_PATH);
  $client->addScope(Google_Service_Drive::DRIVE);
  $client->setAccessType('offline');

  if (file_exists(GOOGLE_CLIENT_CREDENTIALS_PATH)) {
    $accessToken = json_decode(file_get_contents(GOOGLE_CLIENT_CREDENTIALS_PATH), true);
  } else {
    // Request authorization from the user.
    $authUrl = $client->createAuthUrl();
    printf("Open the following link in your browser:\n%s\n", $authUrl);
    print 'Enter verification code: ';
    $authCode = trim(fgets(STDIN));

    // Exchange authorization code for an access token.
    $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);

    // Store the credentials to disk.
    if(!file_exists(dirname(GOOGLE_CLIENT_CREDENTIALS_PATH))) {
      mkdir(dirname(GOOGLE_CLIENT_CREDENTIALS_PATH), 0700, true);
    }
    file_put_contents(GOOGLE_CLIENT_CREDENTIALS_PATH, json_encode($accessToken));
    printf("Credentials saved to %s\n", GOOGLE_CLIENT_CREDENTIALS_PATH);
  }
  $client->setAccessToken($accessToken);

  // Refresh the token if it's expired.
  if ($client->isAccessTokenExpired()) {
    $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
    file_put_contents(GOOGLE_CLIENT_CREDENTIALS_PATH, json_encode($client->getAccessToken()));
  }
  return $client;
}
