'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c3a166c4e04014f9bbabbe18bfde93de",
"index.html": "258fc1a2a27ff4d07b7087ea44de9bea",
"/": "258fc1a2a27ff4d07b7087ea44de9bea",
"main.dart.js": "e1788e0e484c303620feadbb4784035d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "92fb160611389921c2061658d704fa7d",
".git/config": "1072baf42d5358027de3dfc2741ab266",
".git/objects/59/d285e82c67f84d5fef3019c605821b56b13286": "b4632a736c1ee55400df0a651ce19afa",
".git/objects/59/e7c2c7728f05a9ce4bbbc88d38d9b0146c171b": "1ecb5cf5889d64525bb4133ff5fe71ae",
".git/objects/9b/658e27547441814cce5e484caa65cdba9d0714": "86b1995f209368a7429496405d71b50e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/6a8de32b02fef6c3bdc8da106f48fb85c121a2": "5e0e52047b9283bed02e669692b56430",
".git/objects/3d/fd5d25f1286951ac6c5bd7f8527fcedc7d3ac1": "2b7e2a54654f6f754a9b8584f95e4214",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/34/8eed65f16fc993b4863ffeb09ca802781a6383": "f720b7606b876ed2c111e7e63624fa03",
".git/objects/05/871a0c97879005c4fefcedd59aa7d613b2ebfd": "a3b3500750af808f47f2449b7ebfc0a5",
".git/objects/a3/fd4f051ce606716f81bf961d16e04e3014c113": "85e68ef474fe75ca0173f39b699b1633",
".git/objects/ac/edb7c5e67fa8a1b51e81218ef1130597dbeca0": "456bce0c3f55a49b578b6a3423e25364",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/5de67bb3e2768cd90c41b6cfc36ce33eea31c3": "71d51d79d1c5d1299aba3446c4c240dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/d150702b121522c66c05bcb670a74bcde4bb4d": "4fd71c1ba67ba1724e9887592fecd5d4",
".git/objects/ae/691aeaa252142053e25233285055221c56935d": "cf30eb52fc902bd411ba0514ed7d05d9",
".git/objects/d8/44b8c6e109b3bbdb1ad7489537be40bbd54fec": "3d58cd5fbc7d93de32c206f90ac4157a",
".git/objects/f3/010c2d3b8e12337410e7adee3d1a23e320b3e5": "c08478d3b2fa850ffc27ed7ccdb1c608",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/77ac970d453f65c37399269c0ae4f2afb58869": "80e8aa567bf4769f08f132b06b317f8f",
".git/objects/c0/01612689772772eef90d4ccaf85b7f7a2e508b": "7d49bd4521a0776a434e10e34d3a5efc",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f5/0c8432632e30291e41d7157deb5334a9ef497a": "3628e43165f483d949a54169ce11019b",
".git/objects/e4/a398d48f3e78be918c938e54c592388231429c": "d08ac087834426588c588a4e6ad818f4",
".git/objects/20/f36f4d4521494f8de713879e9ad1c948dad5e0": "1fc8c3ab3b5c972c82bd359f248cc28b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/73/ce684609120cc00c2b9a08a92586a69555f725": "3f8e4973ff8ffe8b69eedf91133b50e3",
".git/objects/28/c602174ea5e2f507e525ba9ce889ae6bc7cdcf": "5ea0e889572027f400e5d6672a5c862b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/5283111d84022865ae3bb2df930ac36663a7f0": "a187a31a6b0e821bd52bde8fe4e8bd62",
".git/objects/86/666835e358823cb100a3ae3e02bc225ab7865e": "34de84eddf35807f23ab57369ce01269",
".git/objects/44/42e95d690936f5bff31e095628d39a827d525a": "04b9109570999e3d75a8798ef4062b96",
".git/objects/2a/989cadf110d581ab1c78e11039ff7890d69535": "80ea44a53b98e31d11e9a1e3a21798cb",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/083a5994315d2966b36e1b762f2b80605e7d32": "69e7456b1b82c6d4973c2a9a96d3f3a9",
".git/objects/31/6994c6879745bb56db143813467dbc9c0e21cf": "50b91ee7b3a19385b2604c288fa990b1",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/3a/3eae4d77d8ccf6b11a892c365aebe8c72ba18c": "65b55f0b00ddf06b4def1472610beb0e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/58784f8dbeb9b45048a18fdf7474491d1712ea": "99622c21a2a198317782e5e666d7db3c",
".git/objects/08/7585bf99ab278063d8fb6e48b63321fb49b27a": "16a50fab2378b1cf4ce066dd3f4672a1",
".git/objects/6c/3b3cd14aece03ce138e53c6e8ecc4954b17e8a": "c8d87d423261aba8bb07177d139d8f1b",
".git/objects/63/3264bad389f45562da5e072daa53d93d2e1858": "ad009d12584228b2ac759469bcff05a8",
".git/objects/64/124e060d33bbe4fd2595a937f3ae7d9729c40d": "a89b0839ae31e134c4bd6f3728fd75b1",
".git/objects/bf/1d83cd60170835f38cad8dab0a5cdb98426541": "bd0d2ac747826b4c8e27a941adf145bd",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/1b8b6792daf6fc5e3319c263e1a03694cc5758": "e452dc34f5ddb07cf84761063ea58128",
".git/objects/b1/ca70a35475e4e08e675c222799627416d18b19": "71c65e87c2e441c7eccd6d498095febb",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/5fd39408a9569de28b79c0717fde1f6679b70e": "05a6b008eaa4a2b25312a7f0ba01a029",
".git/objects/de/8f6929bc573490f81c3da566345703db6d57b2": "4074776e5cefa11c1d21445385af410e",
".git/objects/b0/a57bb70eb66969a7e20af05bac282cafaf3939": "845c7c76655909febf8c73421665665b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/425ad0f45127dc73c502ac326fb9b9b587fede": "74b7ddebac037eee868aa7f79140d6d8",
".git/objects/a1/da3daa4c853878e571c532d449451909bd33ea": "709ef2e6abdaa81d4d92c4ff0c524146",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/e8/f31623d79b123e5c807faea8b0537690193903": "356233cf06d4d9cf83dcc01e453e7e98",
".git/objects/c5/d8a20ed2976817e5e9ace115b823228fb9deb1": "4399abdce4f3f62359974735abc29183",
".git/objects/f8/eb9eb1f44ae3813fa4c43e5af00c34e60803e5": "492b0a950feb48229dc3bd00def44d4d",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/b35a63a856d18ffd20a77294f04ead47fd23aa": "435246ca32e72ba4a8bed02a49686041",
".git/objects/4f/9e66e0c3040b1505a2ca2a85a76e76f6954d90": "07f4f9f171e8c581b84dd2da1fed0d52",
".git/objects/85/72dbf2a7f86b023cad92b15b0c395d7658c006": "a774060b3b57486bdbfa874870a8d80a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "10af6f83f1062c219415ff941e78f05b",
".git/logs/refs/heads/main": "06b467e036e967cb195d954076a79afa",
".git/logs/refs/remotes/origin/main": "5f2a5cab56342266362350613c3af438",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "156d920244b3ff8f8474dd896e3111ed",
".git/refs/remotes/origin/main": "156d920244b3ff8f8474dd896e3111ed",
".git/index": "a3713576bc642261867c8617449f2f02",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/images/projects/cricbuzz.png": "6cd9db1d48e0a42ee89dc6c1adff6a7c",
"assets/images/projects/portfolio_ss.png": "782fda40ff2fafe97696b8da3d1eb491",
"assets/images/projects/grocery_app_2.png": "faf6b2022767f4fd611e3f63b72a5d6a",
"assets/images/projects/interactify_t.png": "b96d00c192e85708b7dd22fa2bc2f12a",
"assets/images/projects/book_bucket.png": "2a34e3b0cf94576e55ce8443ea8c8c55",
"assets/images/projects/interactify_2.png": "b7b48a20bb5b37ad675b042d5096a0a8",
"assets/images/projects/attendagram.png": "78991299f6c0f64471c4b499ef979a6c",
"assets/images/projects/grocery_app.png": "ff2c76f67489695d4246b39971c78c0c",
"assets/images/projects/attendagram_2.png": "50c2b9d18f986a83d898019c9b35ed96",
"assets/images/projects/cricbuzz_2.png": "86a871e5697546c40a98e1b020db5d39",
"assets/images/projects/book_bucket_2.png": "48ad2b358c4cba4b79571295d71e7678",
"assets/images/socials/leetcode_icon.png": "3cc8ef02a7a0362b19ac5d2af3ef3601",
"assets/images/socials/dp.png": "d2407f70bc0e366dd2b47e9216981ed5",
"assets/images/socials/profilephoto.png": "a394379d5c52f53cd15ac082398aea1b",
"assets/images/socials/github_icon.png": "89c2c0674bdba3d61daf6b1b1e5e82b5",
"assets/images/socials/twitter_icon.png": "b62b3565d3564af8bb75ff35bf1194fa",
"assets/images/socials/linked_in.png": "36a8f3a386e0777a7eacf8f6c3d7ebe6",
"assets/images/tech_stack/dart_icon.png": "5aef4d57692fdd6b2aa2937bae76f5a6",
"assets/images/tech_stack/vscode_icon.png": "11c4184e0e255d6cfce3deb95142bc59",
"assets/images/tech_stack/firebase_icon.png": "3602dbeac7b595e78e75ceda8f0e9002",
"assets/images/tech_stack/bloc_icon.png": "977fbfba561065f9a68c4b47f9774531",
"assets/images/tech_stack/java_icon.png": "1e1ba20cfa4a4c86d66437632e35df2f",
"assets/images/tech_stack/cpp_icon.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/images/tech_stack/android_studio.png": "b13dee92cd947f03f066271be5e2298e",
"assets/images/tech_stack/flutter_icon.png": "3c2c6c115979778e16d1c02b6ffb9176",
"assets/images/tech_stack/python_logo.png": "0785b26f1f578724752c1e194c4d093f",
"assets/AssetManifest.json": "0056e52c80860e607272acea31c1f2b4",
"assets/NOTICES": "84828260d90788677769f70261495de7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "8923eb5dde0db3ad945d03dea7daed78",
"assets/fonts/MaterialIcons-Regular.otf": "9c7c688015e06c8faf4651cff49ba135",
"assets/animations/astronaut.json": "056f203c1fc9b2061d57663a31ab7644",
"assets/animations/hi.json": "42d46ccb5470f35f1f73544deacbfa07",
"assets/animations/bg_laptop.json": "908e53b483cd68d074669c9f29847114",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
