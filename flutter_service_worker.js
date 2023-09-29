'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c3a166c4e04014f9bbabbe18bfde93de",
"index.html": "c6692654b845033265e1d6d59b5ad1d3",
"/": "c6692654b845033265e1d6d59b5ad1d3",
"main.dart.js": "d5b768aeccebfb64b7412e60a50e1cd4",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "92fb160611389921c2061658d704fa7d",
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
