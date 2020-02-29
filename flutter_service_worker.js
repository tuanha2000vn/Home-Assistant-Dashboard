'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "6538ec0c8123a628d7b11f5e2aaed196",
"/assets\assets\audio\388046__paep3nguin__beep-up.mp3": "b9baee1459bf4aa428f970a17eba91c9",
"/assets\assets\audio\465072__schoggimousse__futuristic-clicking-noise.mp3": "1f8f1dc3525292612d0096f5c7db2957",
"/assets\assets\audio\467951__benzix2__ui-button-click.mp3": "ad7f58c8742a321c30d326f910d70d22",
"/assets\assets\audio\493551__original-sound__user-interface-clicks-and-buttons-1.mp3": "9c5d49e46e93ae288aefcb46184d1bd7",
"/assets\assets\audio\beep-3.wav": "a4268c8e6eb4ad2159a4b9a6d814f35d",
"/assets\assets\audio\beep-6.wav": "2cbd97b1c96dface5720a45feb92c896",
"/assets\assets\audio\beep_1.mp3": "40d89eb952a60cc024320fddf6bd0311",
"/assets\assets\audio\beep_1.wav": "a6cf09bbefd247ce2c5a482156ba200c",
"/assets\assets\audio\beep_2.mp3": "a78925fb739c162e41728b95c46ade00",
"/assets\assets\audio\beep_2.wav": "a6e14c0859792d25e85a43a026f29923",
"/assets\assets\audio\beep_3.mp3": "13ecb2f317a4ac43d94be112dd081314",
"/assets\assets\background_images\background_00.jpg": "d767e5ce9a3e59526dfcfd0541737b0a",
"/assets\assets\background_images\background_01.jpg": "929840adb7cb20e359d7b0bff3691296",
"/assets\assets\background_images\background_02.jpg": "cb4163c4cf6a249a36bf7c878d9b8de6",
"/assets\assets\background_images\background_03.jpg": "2e6271a988e12c6cf9bfb0cde953d72a",
"/assets\assets\background_images\background_04.jpg": "294c1cb8d19449f47447e175d668b439",
"/assets\assets\background_images\background_05.jpg": "76387265870be19bd6214c813c49692a",
"/assets\assets\background_images\background_06.jpg": "bd8410e0e48efb19b83360b333f645f8",
"/assets\assets\background_images\background_07.jpg": "79e06d182341bb4c84db8d46226bccb4",
"/assets\assets\background_images\background_08.jpg": "f1bc3b82ca205cc7ca13be9c96eda804",
"/assets\assets\background_images\background_09.jpg": "4d7a922e77b7b2bd4e2c84af5e4204ea",
"/assets\assets\background_images\background_10.jpg": "79d71842f8e43b450006395213695bdf",
"/assets\assets\background_images\background_11.jpg": "c2df423dedbf18418d60aa709d14ea0e",
"/assets\assets\background_images\background_12.jpg": "f30fa8c56d7ee75e17ffeed8a413aa8c",
"/assets\assets\background_images\background_13.jpg": "f98c2cb39cb2e926dc6979f6b000e7ff",
"/assets\assets\background_images\background_14.jpg": "a8234e7bd486714262ae447154f8564c",
"/assets\assets\background_images\background_15.jpg": "c551dbfe18fd5d022dcd534f99af31f2",
"/assets\assets\background_images\background_16.jpg": "640315ee3d4b02a44e0f12e851b9485a",
"/assets\assets\background_images\background_17.jpg": "0ba7562020744989dac864b28d7588cf",
"/assets\assets\background_images\background_18.jpg": "3f61be62404a8065783a39b259c37f35",
"/assets\assets\background_images\background_19.jpg": "aa7a2e73ee45e8dba89a4f4494a279c5",
"/assets\assets\background_images\background_20.jpg": "fcbfe7f2208717d44a445c7689706f48",
"/assets\assets\background_images\background_21.jpg": "a7d74f8a1240924627f3db8c0d74c7e9",
"/assets\assets\background_images\background_22.jpg": "e82bd73d0158a707130a48b1210210b7",
"/assets\assets\background_images\background_23.jpg": "47c7f2b6fa7b20474f9a7d53f7ce6570",
"/assets\assets\background_images\background_24.jpg": "c5c9b9598c4f54dbdd3fc2c71dd59e7f",
"/assets\assets\background_images\background_25.jpg": "dc64b70bf16f55bfcd339655e26ba5bd",
"/assets\assets\background_images\background_26.jpg": "7a4e0a3aa2d68d5f1f2f61cd4e217ec3",
"/assets\assets\background_images\background_27.jpg": "8324eb9e910f00a68c5b7df37a05a3a4",
"/assets\assets\background_images\background_28.jpg": "b0180021ee0a999a08274c2740b13862",
"/assets\assets\background_images\background_29.jpg": "322370468df4f1c72e9ced43475c0644",
"/assets\assets\background_images\background_30.jpg": "ed5756661997411ceb6c05c6853b6ec7",
"/assets\assets\background_images\background_31.jpg": "880ebcc25573ca435e33a36cb81283cb",
"/assets\assets\background_images\background_32.jpg": "8ba36a6a7f68aa4d90dabe7c2097a7b5",
"/assets\assets\background_images\background_33.jpg": "d3d7740ca971241d023cda00f71d4bcd",
"/assets\assets\background_images\tn_background_00.jpg": "df28035f5fbfb71d3d7583725b114ae0",
"/assets\assets\background_images\tn_background_01.jpg": "21a000a6789816d67b800e41f5b407ac",
"/assets\assets\background_images\tn_background_02.jpg": "98d8d935c08a341f88c32173b40266ad",
"/assets\assets\background_images\tn_background_03.jpg": "eb36c657df47dc82ce8f3da03356d2c4",
"/assets\assets\background_images\tn_background_04.jpg": "b99020185490d3d50d9937576a4b9f22",
"/assets\assets\background_images\tn_background_05.jpg": "f4c32034abe7d2e884dad3160c7eed0b",
"/assets\assets\background_images\tn_background_06.jpg": "764cc2e6e381cd1306301c5f1e680f07",
"/assets\assets\background_images\tn_background_07.jpg": "4c740a3d327d6559302c6158e1a26a40",
"/assets\assets\background_images\tn_background_08.jpg": "ad102ecf78bea7122cf5ff4e06ee9a67",
"/assets\assets\background_images\tn_background_09.jpg": "665357588105399bfa8c911ae0493993",
"/assets\assets\background_images\tn_background_10.jpg": "0c2178763006bf3870cd11afd23f3d18",
"/assets\assets\background_images\tn_background_11.jpg": "79bc7b0294f16c911c7e5749a95d8bed",
"/assets\assets\background_images\tn_background_12.jpg": "2911ea5602755956b7ed2ee1741f473e",
"/assets\assets\background_images\tn_background_13.jpg": "fd8b2242c94e84d53e136188c3a97af3",
"/assets\assets\background_images\tn_background_14.jpg": "8915d59a4b8695fe3de8b46af392cbfa",
"/assets\assets\background_images\tn_background_15.jpg": "ddb5a5adc785ba86279eefb36426e75b",
"/assets\assets\background_images\tn_background_16.jpg": "1ae72fc1320e05a98266fac18042ab71",
"/assets\assets\background_images\tn_background_17.jpg": "debfc30faedfb0c4a14ac30d8b437e41",
"/assets\assets\background_images\tn_background_18.jpg": "9e4d185e416ba6e65f885dd40b958b91",
"/assets\assets\background_images\tn_background_19.jpg": "dde0c87bf71082b94b66e50b4ea1cf5f",
"/assets\assets\background_images\tn_background_20.jpg": "158b1c736ad412d151097d02125daef8",
"/assets\assets\background_images\tn_background_21.jpg": "b6fc12ee40461aeaaecb379098af20fa",
"/assets\assets\background_images\tn_background_22.jpg": "fbdf3fb66782f65c88b9497fa323e44b",
"/assets\assets\background_images\tn_background_23.jpg": "0b76a9a513b68bd18f9e12948bff7367",
"/assets\assets\background_images\tn_background_24.jpg": "c3e422954267ed31f4fc9a7dc0e8b751",
"/assets\assets\background_images\tn_background_25.jpg": "0ada66bda48f790f460b2d02328f8491",
"/assets\assets\background_images\tn_background_26.jpg": "6527e80603e028de1cabe44a8d60809c",
"/assets\assets\background_images\tn_background_27.jpg": "f677c6ded1fae00cc842fde9f8d10ec4",
"/assets\assets\background_images\tn_background_28.jpg": "7d0e15cd1585377c68bcf9ef8b333234",
"/assets\assets\background_images\tn_background_29.jpg": "c4e52f759074e4f11f1cf9070a1eeb78",
"/assets\assets\background_images\tn_background_30.jpg": "028a46cf260648d10c407dca3d576864",
"/assets\assets\background_images\tn_background_31.jpg": "2df9b7fd860adef22d5f4207fa749827",
"/assets\assets\background_images\tn_background_32.jpg": "4ed650f310951d5a6463cab7ee907dc8",
"/assets\assets\background_images\tn_background_33.jpg": "f5919f4f892bd7a95174c1fc8b39d6ab",
"/assets\assets\fonts\materialdesignicons-webfont-4-5-95.ttf": "9bfeb985a91e5545d78b906676d8e6fb",
"/assets\assets\fonts\Roboto-Black.ttf": "5ebb24ee1112dd9562629375c387879a",
"/assets\assets\fonts\Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"/assets\assets\fonts\Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"/assets\assets\fonts\Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"/assets\assets\fonts\Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"/assets\assets\fonts\Roboto-Thin.ttf": "321de678e592d0b8f44f1a82d7ca4b62",
"/assets\assets\fonts\SFUIDisplay-Black.ttf": "419d8838ed6c4a885f23a30886f2b37e",
"/assets\assets\fonts\SFUIDisplay-Bold.ttf": "8757032d40754a09b1e71408b0864466",
"/assets\assets\fonts\SFUIDisplay-Heavy.ttf": "7d09850b4f3b5ee99057c8b0bebf199c",
"/assets\assets\fonts\SFUIDisplay-Light.ttf": "fc3320a8973437046d4d9e05d5d11016",
"/assets\assets\fonts\SFUIDisplay-Medium.ttf": "40370a7cad4d4503bdf3c88617a8a2ec",
"/assets\assets\fonts\SFUIDisplay-Regular.ttf": "432aa8843aff19ea55b55d7e9812f549",
"/assets\assets\fonts\SFUIDisplay-Semibold.ttf": "610e95e2324b067230ad8856394aae27",
"/assets\assets\fonts\SFUIDisplay-Thin.ttf": "2fab2159df5838d904efe6bb4ec08b59",
"/assets\assets\fonts\SFUIDisplay-Ultralight.ttf": "fb9dea434f7cb0cbb34c072496f3c3f3",
"/assets\assets\images\icon.png": "a68dfba557ac1289e013356f4eb9f5c1",
"/assets\assets\images\icon_transparence.png": "bc57adb087bdb825ed6e10d321d0bba6",
"/assets\FontManifest.json": "7772a6471898f4192f280288a571d55f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "5d7ad35f2bb21b3ed58cfb1b7e730a35",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets\packages\flutter_inappwebview\t_rex_runner\t-rex.css": "a55f81d64486cd9da0f09dafc6be6b57",
"/assets\packages\flutter_inappwebview\t_rex_runner\t-rex.html": "bca1fb292ea1f1df3af6d25d450afea8",
"/assets\packages\weather_icons\lib\fonts\weathericons-regular-webfont.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "8d278c8b96b9f446b08654e1493d3a6e",
"/main.dart.js": "081840222d437d2a3ce8ac97f1e54d44",
"/manifest.json": "4aab1e5f7eb96e52e16b1891b94a8d5d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
