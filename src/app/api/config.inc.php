<?php
require_once(__DIR__."/vendor/autoload.php");
date_default_timezone_set('US/Eastern');
ini_set("display_errors", "On");
error_reporting(E_ALL);
define("ENV", "WEST");
//google
define("GOOGLE_CLIENT_SECRET_PATH", __DIR__."/User/Private/client_secret.json");
define("GOOGLE_CLIENT_CREDENTIALS_PATH", __DIR__."/User/Private/credentials.json");
define("GOOGLE_APP_NAME", "animatic");
define("GDRIVE_UPLOAD_DIR", "ClientUploads");
define("GDRIVE_EVENT_ASSET_DIR", "Events");
define("GDRIVE_CREATIVE_ASSET_DIR", "Creative");

//basic settings
define("SITE_NAME", "Animatic Uploads");
define("SITE_EMAIL", "uploads@animatic.com");
define("OWNER_EMAIL", "scott@animatic.com");
// database
if ( ENV == "PROD" ) {
  define("DB_SERVER", "mysqlcluster18.registeredsite.com");
  define("DB_USER", "animatic516");
  define("DB_PASS", "Amedia97");
  define("DB_NAME", "animatic");
} elseif ( ENV == "LOCAL" ) {
  define("DB_SERVER", "localhost");
  define("DB_USER", "animatic");
  define("DB_PASS", "animatic_901");
  define("DB_NAME", "animatic");
} else if ( ENV == "WEST" ) {
  define("DB_SERVER", "127.0.0.1");
  define("DB_USER", "root");
  define("DB_PASS", "root");
  define("DB_NAME", "animatic");
}





