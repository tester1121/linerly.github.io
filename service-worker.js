if (!self.define) {
    const s = s => {
            "require" !== s && (s += ".js");
            let e = Promise.resolve();
            return a[s] || (e = new Promise((async e => {
                if ("document" in self) {
                    const a = document.createElement("script");
                    a.src = s, document.head.appendChild(a), a.onload = e
                } else importScripts(s), e()
            }))), e.then((() => {
                if (!a[s]) throw new Error(`Module ${s} didn’t register its module`);
                return a[s]
            }))
        },
        e = (e, a) => {
            Promise.all(e.map(s)).then((s => a(1 === s.length ? s[0] : s)))
        },
        a = {
            require: Promise.resolve(e)
        };
    self.define = (e, i, c) => {
        a[e] || (a[e] = Promise.resolve().then((() => {
            let a = {};
            const r = {
                uri: location.origin + e.slice(1)
            };
            return Promise.all(i.map((e => {
                switch (e) {
                    case "exports":
                        return a;
                    case "module":
                        return r;
                    default:
                        return s(e)
                }
            }))).then((s => {
                const e = c(...s);
                return a.default || (a.default = e), a
            }))
        })))
    }
}
define("./service-worker.js", ["./workbox/workbox-4d718be7"], (function (s) {
    "use strict";
    self.addEventListener("message", (s => {
        s.data && "SKIP_WAITING" === s.data.type && self.skipWaiting()
    })), s.precacheAndRoute([{
        url: "404.html",
        revision: "ab6874424136f17f1ef5ca72789a9ead"
    }, {
        url: "assets/background-christmas.png",
        revision: "09e276dfea25c55aad9665371e6f9d7d"
    }, {
        url: "assets/background-normal.png",
        revision: "454aee5b3aacfd275ddccd69b727dada"
    }, {
        url: "assets/background.png",
        revision: "cc4acf085b4ee297eaf8fe01c756ac59"
    }, {
        url: "assets/creations/bedroom-old.jpg",
        revision: "e7137cbe8050b63191c45e10d49f721b"
    }, {
        url: "assets/creations/falling-cubes.png",
        revision: "99986f1c5ea5e6efe0ee257093669309"
    }, {
        url: "assets/creations/oc-motion-blur.png",
        revision: "8ee4a2f304c31a7cba5a79eccd11f1d2"
    }, {
        url: "assets/creations/reflection-roblox-gfx.jpg",
        revision: "c38971306d0bd2915b215c6a07af8fee"
    }, {
        url: "assets/creations/roblox-gfx-edited.png",
        revision: "c019ff7a16badd187bee8863e0b2407d"
    }, {
        url: "assets/creations/roblox-gfx.jpg",
        revision: "b2ca8d42b948d89d13af1632290b4a84"
    }, {
        url: "assets/favicon.ico",
        revision: "71336671c5de59aaabf60c95fbd01cc2"
    }, {
        url: "assets/icons/apple-icon-180.png",
        revision: "ca4ac740884347862cb981b182ff0b4f"
    }, {
        url: "assets/icons/apple-splash-1125-2436.jpg",
        revision: "bfd92ecfdcd66ad8f14975e38b8d05cd"
    }, {
        url: "assets/icons/apple-splash-1136-640.jpg",
        revision: "46ad7693ea41bcc0805dfddfe00d498b"
    }, {
        url: "assets/icons/apple-splash-1170-2532.jpg",
        revision: "a1230b03bc635e1c6c13634b78338791"
    }, {
        url: "assets/icons/apple-splash-1242-2208.jpg",
        revision: "bdc5eed71907deba2fc21109e370c250"
    }, {
        url: "assets/icons/apple-splash-1242-2688.jpg",
        revision: "d1435231a98c4f3722660b912d69dcd1"
    }, {
        url: "assets/icons/apple-splash-1284-2778.jpg",
        revision: "935da828f00a7adbd9986ab9ce337233"
    }, {
        url: "assets/icons/apple-splash-1334-750.jpg",
        revision: "5ea62ef6f9f9161ffb6f417fad3732d2"
    }, {
        url: "assets/icons/apple-splash-1536-2048.jpg",
        revision: "b59580914a1e156c575b9284cfe3af95"
    }, {
        url: "assets/icons/apple-splash-1620-2160.jpg",
        revision: "4386a958bb578e36c566329a35097235"
    }, {
        url: "assets/icons/apple-splash-1668-2224.jpg",
        revision: "69cb08239e60bea87618575b307a6328"
    }, {
        url: "assets/icons/apple-splash-1668-2388.jpg",
        revision: "6609e6a844770c54f6ab0ef68fac2029"
    }, {
        url: "assets/icons/apple-splash-1792-828.jpg",
        revision: "d7aba98c5bc392626ec9c5445aa2f918"
    }, {
        url: "assets/icons/apple-splash-2048-1536.jpg",
        revision: "09ac8172b5a604be9c9f92df89175196"
    }, {
        url: "assets/icons/apple-splash-2048-2732.jpg",
        revision: "53167bb63b7dd11c940de9dfc7645c5f"
    }, {
        url: "assets/icons/apple-splash-2160-1620.jpg",
        revision: "a97dd39014f5f9c841f0624aaea23fd1"
    }, {
        url: "assets/icons/apple-splash-2208-1242.jpg",
        revision: "eef095c6a80dae15fdea31946b37245c"
    }, {
        url: "assets/icons/apple-splash-2224-1668.jpg",
        revision: "9b60a19f87b1b9370bf68dc33065d8ad"
    }, {
        url: "assets/icons/apple-splash-2388-1668.jpg",
        revision: "473199adfa8523316fd0263683e73383"
    }, {
        url: "assets/icons/apple-splash-2436-1125.jpg",
        revision: "d49275258980d322e024ba304fee435a"
    }, {
        url: "assets/icons/apple-splash-2532-1170.jpg",
        revision: "a1686ba4ef7032d92b6c11c870d482a7"
    }, {
        url: "assets/icons/apple-splash-2688-1242.jpg",
        revision: "20efb3961becfdcc32ac0fad091e7cbb"
    }, {
        url: "assets/icons/apple-splash-2732-2048.jpg",
        revision: "5a996aba574306e4ec191ce7448cdb9f"
    }, {
        url: "assets/icons/apple-splash-2778-1284.jpg",
        revision: "c2b347f4fd44347435dd42c7a3df0cf1"
    }, {
        url: "assets/icons/apple-splash-640-1136.jpg",
        revision: "8231c889f56683982a922147a0e09e37"
    }, {
        url: "assets/icons/apple-splash-750-1334.jpg",
        revision: "631782ed51a80cb5caa53e5b57c8651c"
    }, {
        url: "assets/icons/apple-splash-828-1792.jpg",
        revision: "9b80aff6b268214813107148b813a8a3"
    }, {
        url: "assets/icons/manifest-icon-192.png",
        revision: "62f476789e2887835724fa8ed699267e"
    }, {
        url: "assets/icons/manifest-icon-512.png",
        revision: "fa1e50f8cdcffd7daf28d49e824abde7"
    }, {
        url: "assets/linerlybot/linerlybot-rewritten.jpg",
        revision: "ac040f1feb2722ac88f0ba8c915f0910"
    }, {
        url: "assets/linerlybot/linerlybot.jpg",
        revision: "51599b057deafa9ed1fc8f9fdedbeda7"
    }, {
        url: "assets/new-logo-full.png",
        revision: "a93b7da6a30f32669e3b651ec0f1f2ed"
    }, {
        url: "assets/new-logo.ico",
        revision: "5e90ce3b12934850cc3674911486e655"
    }, {
        url: "assets/new-logo.png",
        revision: "64d6cbcceca34718e6d23a29f08a8147"
    }, {
        url: "assets/new-logo.svg",
        revision: "96f3b6234c4aa8f4b43d44d3d0d87c57"
    }, {
        url: "assets/old-favicon.ico",
        revision: "02557f4fd0cbe75a8aab2b0c0f17859c"
    }, {
        url: "assets/old-logo.png",
        revision: "898c70191c32fb9d4f1c8136be0f0289"
    }, {
        url: "creations.html",
        revision: "68e4a50331b0c3d7cd261b6f6289d3c3"
    }, {
        url: "css/scrollBar.css",
        revision: "0668cb3582601624c366266f96d38d7a"
    }, {
        url: "googlee68d914ab31c66fc.html",
        revision: "8f831b89609383addbdebe6c2a2aad37"
    }, {
        url: "index.html",
        revision: "35fc0998c70c1d95ace471640f7dae1c"
    }, {
        url: "keybase.txt",
        revision: "de8ec560c6acbabc415b2b7e30dc2844"
    }, {
        url: "linerlybot.html",
        revision: "34a1e49d76c14431416f12e5f700931b"
    }, {
        url: "linerlycraft.html",
        revision: "8a4fe8131a37189689d73422d888105c"
    }, {
        url: "maintenance-page.html",
        revision: "d05ffc7d47a711170f0e4652b0f72b96"
    }, {
        url: "manifest.json",
        revision: "4c876986fcce370a48b4029ad43faf93"
    }, {
        url: "notes.html",
        revision: "ca02804c2d4a7aa2e54218a58076d1b6"
    }, {
        url: "README.md",
        revision: "64a659918f2c83060a854771ddbedaa3"
    }, {
        url: "social-media.html",
        revision: "1dec6b1ca0b18019ef255269eb842915"
    }], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
    })
}));
//# sourceMappingURL=service-worker.js.map