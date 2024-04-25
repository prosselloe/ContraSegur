echo https://www.outsystems.com/forums/discussion/20893/problem-with-error-fetching-cordova-plugin/#
call cordova platform rm android
call cordova platform add android@10.0.1
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-dialogs.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-globalization.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-media.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-file-transfer.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-file.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-media-capture.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-device-orientation.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-device.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-battery-status.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-camera.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-contacts.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-device-motion.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-geolocation.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-vibration.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-network-information.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-splashscreen.git
call cordova.cmd -d plugin add https://github.com/apache/cordova-plugin-console.git
npm audit fix