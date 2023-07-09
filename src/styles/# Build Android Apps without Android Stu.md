# Build Android Apps without Android Studio

I'm back to trying to learn how to build android apps without Android Studio

[How can i build android app on my server?](https://stackoverflow.com/questions/62726813/how-can-i-build-android-app-on-my-server)

### <code><pre style='border: solid 1px ;'> Q | Abdelrahman Ashref </pre></code>



Good Morning,

I have an android application and I sell it on a third-party website so, my customers need to configure it. My question is, can they build my app online without the need to open android studio also, they will only change one line like (SECRET_API_KEY) and that. Can I upload my app source code on my website and build it online? I see that websites like appyet.com use the online build for apps! As I said, I just need to change one line and change package-name online that's my issue


<div style='display: block; width: auto; height: 20px;'></div>

### <code><pre style='border: solid 1px;'> A | Michiel</pre></code>

<strong style='color: #ffbf00'>You certainly can.</strong> You don't actually need Android Studio to build your app: under the hood, Android Studio uses gradle scripts to build it. All you need is a server with Java and the Android SDK installed, so you can build the app from command line.

The solution is a CI/CD solution like Gitlab or Jenkins. Both can be installed on your own server, or you can subscribe to their website and pay a small fee. When the app is bought, the build can be triggered with a webhook by your server.

```js
stackOverflowUserOrginalPoster = {
    userName: '',
    answerDate: 'answered Jul 4, 2020 at 9:02',
    postUrl: 'https://stackoverflow.com/questions/62726813/,how-can-i-build-android-app-on-my-server',
    question: `Good Morning,

I have an android application and I sell it on a third-party website so, my customers need to configure it. My question is, can they build my app online without the need to open android studio also, they will only change one line like (SECRET_API_KEY) and that. Can I upload my app source code on my website and build it online? I see that websites like appyet.com use the online build for apps! As I said, I just need to change one line and change package-name online that's my issue
`

}
stackOverflowUserResponder = {
    userName: 'Michiel',
    answerDate: 'answered Jul 4, 2020 at 9:02',
    postUrl: 'https://stackoverflow.com/questions/62726813/how-can-i-build-android-app-on-my-server',
    answer: `You certainly can. You don't actually need Android Studio to build your app: under the hood, Android Studio uses gradle scripts to build it. All you need is a server with Java and the Android SDK installed, so you can build the app from command line.

The solution is a CI/CD solution like Gitlab or Jenkins. Both can be installed on your own server, or you can subscribe to their website and pay a small fee. When the app is bought, the build can be triggered with a webhook by your server.`

}


```

[Android SDK tutorial for beginners](https://www.androidauthority.com/android-sdk-tutorial-beginners-634376/)

ou can download the SDK independently however if that is your preference.
""

So, all you really need to know is that you need the Android SDK. Getting set up with the SDK should be the first Android development tutorial you go through (note that you’ll also need the Java Development Kit). But there is a little more to it than that, and <code>using all of the development tools to their fullest and knowing precisely how the SDK works will result in better apps.</code>


### Anatomy of the Android SDK

The Android SDK can be broken down into several components.

- Platform tools
- Build tools
- SDK tools
- The Adnroid Debug Bridge (ADB)
- <strike>Android Emulator</strike> // I'm not using this


Arguably the most important parts of this package are in the SDKtools. You will need these tools regardless of which version of Android you are targeting. These are what will actually create the APK – turning your Java program into an Android app that can be launched on a phone. These include a number of build tools, debugging tools, and image tools. An example is DDMS, which is what lets us use the Android Device Monitor to check the status of an Android device.

### Related Content

https://www.androidauthority.com/how-to-use-android-studio-860903/
https://www.androidauthority.com/android-game-development-1128058/
https://www.androidauthority.com/develop-android-apps-languages-learn-391008/
https://www.androidauthority.com/android-studio-tutorial-beginners-637572/
https://www.androidauthority.com/how-to-make-android-game-967934/
https://www.androidauthority.com/first-project-for-android-development-826846/
https://www.androidauthority.com/kotlin-for-android-development-1132127/


## [Create a Basic Android App without an IDE](https://developer.okta.com/blog/2018/08/10/basic-android-without-an-ide)

I didn't see anything in here about which version your targeting, but I think I had enough for today.