(self.webpackChunk = self.webpackChunk || []).push([
    ["397"], {
        8109: function() {
            function e() {
                let e = Webflow.require("ix3");
                e.ready().then(() => {
                    let a = e.getInstance();
                    a && (a.register([{
                        id: "i-191cdacc",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:class", ["video-overlay_bg"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-c7cc1590"],
                        deleted: !1
                    }, {
                        id: "i-1e6610f5",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:class", ["banner_close-button"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-8c0007c5"],
                        deleted: !1
                    }, {
                        id: "i-299a5a54",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:attribute", '[overlay-open="caramel"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:attribute", '[move-to="caramel"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-00a4ccdf"],
                        deleted: !1
                    }, {
                        id: "i-408d8c37",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:attribute", '[move-to="strawberry"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-0ec686e2"],
                        deleted: !1
                    }, {
                        id: "i-5c40e943",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:attribute", '[move-to="chocolate"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-23842939"],
                        deleted: !1
                    }, {
                        id: "i-832949c5",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:class", ["modal_close-wrap.is-video"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-9c7beb7f"],
                        deleted: !1
                    }, {
                        id: "i-9132e50e",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:attribute", '[move-to="caramel"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-e00e1a33"],
                        deleted: !1
                    }, {
                        id: "i-d8cd10bb",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:attribute", '[overlay="open"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-082cbba6"],
                        deleted: !1
                    }, {
                        id: "i-dda9dfc2",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:attribute", '[overlay-open="chocolate"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:attribute", '[move-to="chocolate"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-afdf746c"],
                        deleted: !1
                    }, {
                        id: "i-df990fdd",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:class", ["plyr_play"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-0e65575c"],
                        deleted: !1
                    }, {
                        id: "i-e40be62d",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:scroll", {
                                    controlType: "scroll",
                                    scrollTriggerConfig: {
                                        clamp: !0,
                                        start: "top 70%",
                                        end: "bottom top",
                                        scrub: null,
                                        enter: "play",
                                        leave: "none",
                                        enterBack: "none",
                                        leaveBack: "none"
                                    }
                                },
                                ["wf:attribute", '[move="eyebrow"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-29f9a84c"],
                        deleted: !1
                    }, {
                        id: "i-ef8d568d",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:load", {
                                delay: .05,
                                controlType: "load"
                            }]
                        ],
                        timelineIds: ["t-13af15ae"],
                        deleted: !1
                    }, {
                        id: "i-f18a7a39",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:attribute", '[overlay="close"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-84ff2cf7"],
                        deleted: !1
                    }, {
                        id: "i-f43f0234",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:scroll", {
                                    controlType: "scroll",
                                    scrollTriggerConfig: {
                                        clamp: !0,
                                        start: "top 68%",
                                        end: "bottom top",
                                        scrub: null,
                                        enter: "play",
                                        leave: "none",
                                        enterBack: "none",
                                        leaveBack: "none"
                                    }
                                },
                                ["wf:attribute", '[move="text"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-7e4375d3"],
                        deleted: !1
                    }, {
                        id: "i-fd29dc35",
                        scope: {
                            type: "site"
                        },
                        triggers: [
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:attribute", '[overlay-open="strawberry"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            ["wf:click", {
                                    controlType: "standard",
                                    pluginConfig: {
                                        click: "each"
                                    }
                                },
                                ["wf:attribute", '[move-to="strawberry"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-78039559"],
                        deleted: !1
                    }], [{
                        id: "t-c7cc1590",
                        deleted: !1,
                        actions: [{
                            id: "ta-c28f98f1",
                            targets: [
                                ["wf:class", ["video-overlay"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .25,
                                position: 0,
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-79904579",
                            targets: [
                                ["wf:class", ["video-overlay"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: .25
                            },
                            properties: {
                                "wf:transform": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["show"], operation: "removeClass"
                                    }
                                }
                            }
                        }]
                    }, {
                        id: "t-8c0007c5",
                        deleted: !1,
                        actions: [{
                            id: "ta-d20a9d01",
                            targets: [
                                ["wf:class", ["banner_component.show"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:class", ["hero_spacer"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            tt: 0,
                            properties: {
                                "wf:transform": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["show"], operation: "removeClass"
                                    }
                                }
                            }
                        }]
                    }, {
                        id: "t-00a4ccdf",
                        deleted: !1,
                        actions: [{
                            id: "ta-a8bfdb7e",
                            targets: [
                                ["wf:attribute", '[component="caramel"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:trigger-only", "", {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                ease: 8
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {},
                                "wf:style": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["comp-active"], operation: "addClass"
                                    }
                                }
                            }
                        }, {
                            id: "ta-85a5a863",
                            targets: [
                                ["wf:attribute", '[component="strawberry"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["comp-active"], operation: "removeClass"
                                    }
                                }
                            }
                        }, {
                            id: "ta-9b6dc39e",
                            targets: [
                                ["wf:attribute", '[component="chocolate"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["comp-active"], operation: "removeClass"
                                    }
                                }
                            }
                        }]
                    }, {
                        id: "t-0ec686e2",
                        deleted: !1,
                        actions: [{
                            id: "ta-40a5529e",
                            targets: [
                                ["wf:attribute", '[contents="strawberry"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: 0,
                                ease: 9
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-23842939",
                        deleted: !1,
                        actions: [{
                            id: "ta-efa37f8f",
                            targets: [
                                ["wf:attribute", '[contents="chocolate"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                position: 0,
                                ease: 9
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-9c7beb7f",
                        deleted: !1,
                        actions: [{
                            id: "ta-27ce1c42",
                            targets: [
                                ["wf:class", ["video-overlay"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .25,
                                position: 0,
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-173cdecd",
                            targets: [
                                ["wf:class", ["video-overlay"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: .25
                            },
                            properties: {
                                "wf:transform": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["show"], operation: "removeClass"
                                    }
                                }
                            }
                        }]
                    }, {
                        id: "t-e00e1a33",
                        deleted: !1,
                        actions: [{
                            id: "ta-416cb96c",
                            targets: [
                                ["wf:attribute", '[contents="caramel"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .4,
                                ease: 9
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-082cbba6",
                        deleted: !1,
                        actions: [{
                            id: "ta-c79cf45d",
                            targets: [
                                ["wf:class", ["flavors_image"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .6,
                                position: .3,
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    scale: [.2, 1],
                                    transformOrigin: "50% 100%"
                                }
                            }
                        }, {
                            id: "ta-6b2eeb93",
                            targets: [
                                ["wf:class", ["flavor_content-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .8,
                                position: 0,
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                }
                            }
                        }, {
                            id: "ta-312fc5be",
                            targets: [
                                ["wf:class", ["flavors_image"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .8,
                                position: 0,
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                }
                            }
                        }, {
                            id: "ta-f65a2d16",
                            targets: [
                                ["wf:attribute", '[this-is="overlay"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .3,
                                position: 0,
                                ease: 4
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                },
                                "wf:style": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["is-active"], operation: "addClass"
                                    }
                                }
                            }
                        }, {
                            id: "ta-f3641803",
                            targets: [
                                ["wf:attribute", '[contents="chocolate"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:attribute", '[contents="strawberry"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:attribute", '[contents="caramel"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: .3
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", null]
                                }
                            }
                        }]
                    }, {
                        id: "t-afdf746c",
                        deleted: !1,
                        actions: [{
                            id: "ta-7332d583",
                            targets: [
                                ["wf:attribute", '[component="chocolate"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {},
                                "wf:style": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["comp-active"], operation: "addClass"
                                    }
                                }
                            }
                        }, {
                            id: "ta-1f581623",
                            targets: [
                                ["wf:attribute", '[component="caramel"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            tt: 0,
                            properties: {
                                "wf:transform": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["comp-active"], operation: "removeClass"
                                    }
                                }
                            }
                        }, {
                            id: "ta-04abad1e",
                            targets: [
                                ["wf:attribute", '[component="strawberry"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            tt: 0,
                            properties: {
                                "wf:transform": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["comp-active"], operation: "removeClass"
                                    }
                                }
                            }
                        }]
                    }, {
                        id: "t-0e65575c",
                        deleted: !1,
                        actions: [{
                            id: "ta-d92e9983",
                            targets: [
                                ["wf:class", ["video-overlay"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .3,
                                position: 0,
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                },
                                "wf:class": {
                                    class: {
                                        selectors: ["show"], operation: "addClass"
                                    }
                                }
                            }
                        }]
                    }, {
                        id: "t-29f9a84c",
                        deleted: !1,
                        actions: [{
                            id: "ta-f241967c",
                            targets: [
                                ["wf:trigger-only", "", {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .8,
                                position: 0,
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["50%", "0%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-13af15ae",
                        deleted: !1,
                        actions: [{
                            id: "ta-3f1ea4fd",
                            targets: [
                                ["wf:attribute", '[hero-title="words"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .8,
                                position: 0,
                                stagger: {
                                    each: .08
                                },
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["100%", "0%"]
                                }
                            },
                            splitText: {
                                type: "words",
                                mask: "words"
                            }
                        }, {
                            id: "ta-ea9d9351",
                            targets: [
                                ["wf:attribute", '[hero-mover="text"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .6,
                                position: .2,
                                stagger: {
                                    each: .16
                                },
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["100%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-726b3352",
                            targets: [
                                ["wf:attribute", '[hero-grow="center"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .8,
                                position: .2,
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [0, 1]
                                }
                            }
                        }, {
                            id: "ta-3e37ce5c",
                            targets: [
                                ["wf:attribute", '[hero-grow="bottom"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .8,
                                position: 0,
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [0, 1],
                                    transformOrigin: "50% 100%"
                                }
                            }
                        }, {
                            id: "ta-49a21290",
                            targets: [
                                ["wf:class", ["loader"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {},
                                "wf:style": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["hide"], operation: "addClass"
                                    }
                                }
                            }
                        }]
                    }, {
                        id: "t-84ff2cf7",
                        deleted: !1,
                        actions: [{
                            id: "ta-de424aa6",
                            targets: [
                                ["wf:attribute", '[this-is="overlay"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: .6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {},
                                "wf:style": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["is-active"], operation: "removeClass"
                                    }
                                }
                            }
                        }, {
                            id: "ta-cfdcb71a",
                            targets: [
                                ["wf:attribute", '[this-is="overlay"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .25,
                                position: .5,
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", "0%"]
                                },
                                "wf:style": {},
                                "wf:class": {}
                            }
                        }, {
                            id: "ta-4bcaa643",
                            targets: [
                                ["wf:class", ["flavors_image"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                ease: 7
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", "0%"],
                                    scale: [1, .2],
                                    transformOrigin: "50% 100%"
                                }
                            }
                        }, {
                            id: "ta-cdc94f3e",
                            targets: [
                                ["wf:class", ["flavor_content-wrap"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .7,
                                position: 0,
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-db47a80a",
                            targets: [
                                ["wf:attribute", '[component="chocolate"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:attribute", '[component="caramel"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }],
                                ["wf:attribute", '[component="strawberry"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: .7
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["comp-active"], operation: "removeClass"
                                    }
                                }
                            }
                        }]
                    }, {
                        id: "t-7e4375d3",
                        deleted: !1,
                        actions: [{
                            id: "ta-ba1dc56c",
                            targets: [
                                ["wf:trigger-only", "", {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                duration: .8,
                                position: 0,
                                stagger: {
                                    each: .08
                                },
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["100%", "0%"]
                                }
                            },
                            splitText: {
                                type: "words",
                                mask: "words"
                            }
                        }]
                    }, {
                        id: "t-78039559",
                        deleted: !1,
                        actions: [{
                            id: "ta-260b4526",
                            targets: [
                                ["wf:attribute", '[component="strawberry"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                ease: 8
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {},
                                "wf:style": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["comp-active"], operation: "addClass"
                                    }
                                }
                            }
                        }, {
                            id: "ta-1197e5fd",
                            targets: [
                                ["wf:attribute", '[component="chocolate"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["comp-active"], operation: "removeClass"
                                    }
                                }
                            }
                        }, {
                            id: "ta-9f5555b9",
                            targets: [
                                ["wf:attribute", '[component="caramel"]', {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0
                            },
                            tt: 0,
                            properties: {
                                "wf:transform": {},
                                "wf:class": {
                                    class: {
                                        selectors: ["comp-active"], operation: "removeClass"
                                    }
                                }
                            }
                        }]
                    }]), window.dispatchEvent(new CustomEvent("__wf_ix3_ready")), document.documentElement.classList.add("w-mod-ix3"))
                })
            }
            Webflow.require("ix2").init({
                events: {
                    e: {
                        id: "e",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".button-2.is-primary",
                            originalId: "67bc4489e556c19f5ef6ba4d|5e52fc50-b6e5-6b27-5567-e91c8e666d78",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button-2.is-primary",
                            originalId: "67bc4489e556c19f5ef6ba4d|5e52fc50-b6e5-6b27-5567-e91c8e666d78",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193cf54f075
                    },
                    "e-2": {
                        id: "e-2",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".button-2.is-primary",
                            originalId: "67bc4489e556c19f5ef6ba4d|5e52fc50-b6e5-6b27-5567-e91c8e666d78",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button-2.is-primary",
                            originalId: "67bc4489e556c19f5ef6ba4d|5e52fc50-b6e5-6b27-5567-e91c8e666d78",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193cf54f076
                    },
                    "e-5": {
                        id: "e-5",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-6"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2df|742e3347-9025-6cd6-c73a-1904786bbe16",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2df|742e3347-9025-6cd6-c73a-1904786bbe16",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d0da4c6a
                    },
                    "e-6": {
                        id: "e-6",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-5"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2df|742e3347-9025-6cd6-c73a-1904786bbe16",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2df|742e3347-9025-6cd6-c73a-1904786bbe16",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d0da4c6a
                    },
                    "e-7": {
                        id: "e-7",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-48"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2df|52865059-7788-35f5-424e-b95a87182abf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2df|52865059-7788-35f5-424e-b95a87182abf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d0dbe749
                    },
                    "e-8": {
                        id: "e-8",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-47"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2df|52865059-7788-35f5-424e-b95a87182abf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2df|52865059-7788-35f5-424e-b95a87182abf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d0dbe749
                    },
                    "e-9": {
                        id: "e-9",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-10"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2df|3ac89d1b-cbb4-f258-08d3-c56a3e7265be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2df|3ac89d1b-cbb4-f258-08d3-c56a3e7265be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d0dcc7a6
                    },
                    "e-10": {
                        id: "e-10",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-9"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2df|3ac89d1b-cbb4-f258-08d3-c56a3e7265be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2df|3ac89d1b-cbb4-f258-08d3-c56a3e7265be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d0dcc7a6
                    },
                    "e-11": {
                        id: "e-11",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-50"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2df|1f447ff1-ad03-8d51-10a2-c350d1994926",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2df|1f447ff1-ad03-8d51-10a2-c350d1994926",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d0e0ab55
                    },
                    "e-12": {
                        id: "e-12",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-49"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2df|1f447ff1-ad03-8d51-10a2-c350d1994926",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2df|1f447ff1-ad03-8d51-10a2-c350d1994926",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d0e0ab55
                    },
                    "e-17": {
                        id: "e-17",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-3",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-18"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".dropdown-top",
                            originalId: "660a9e8b370febbdb15de600|f1731f17-e3a6-242e-6a15-5a5c0b8972cb",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".dropdown-top",
                            originalId: "660a9e8b370febbdb15de600|f1731f17-e3a6-242e-6a15-5a5c0b8972cb",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18ea88335ad
                    },
                    "e-18": {
                        id: "e-18",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-26",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-17"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".dropdown-top",
                            originalId: "660a9e8b370febbdb15de600|f1731f17-e3a6-242e-6a15-5a5c0b8972cb",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".dropdown-top",
                            originalId: "660a9e8b370febbdb15de600|f1731f17-e3a6-242e-6a15-5a5c0b8972cb",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18ea88335ad
                    },
                    "e-31": {
                        id: "e-31",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-32"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|7db50be0-ddca-9ae4-09d8-7305ccaae60c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|7db50be0-ddca-9ae4-09d8-7305ccaae60c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e4a4cc4e
                    },
                    "e-32": {
                        id: "e-32",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-31"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|7db50be0-ddca-9ae4-09d8-7305ccaae60c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|7db50be0-ddca-9ae4-09d8-7305ccaae60c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e4a4cc4e
                    },
                    "e-60": {
                        id: "e-60",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-23",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".is-decoration",
                            originalId: "68667e5f63276a67a260c2dc|2dbc4dfe-05c0-6b08-d894-1b8174f6ad93",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".is-decoration",
                            originalId: "68667e5f63276a67a260c2dc|2dbc4dfe-05c0-6b08-d894-1b8174f6ad93",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-23-p",
                            smoothing: 98,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197f373d7e5
                    },
                    "e-73": {
                        id: "e-73",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-75"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "c72516fc-e5fc-4391-3d51-3d8f9d301541",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "c72516fc-e5fc-4391-3d51-3d8f9d301541",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197fa04c569
                    },
                    "e-75": {
                        id: "e-75",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-73"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "c72516fc-e5fc-4391-3d51-3d8f9d301541",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "c72516fc-e5fc-4391-3d51-3d8f9d301541",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197fa04c569
                    },
                    "e-83": {
                        id: "e-83",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-84"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|92fc4241-3ca8-e81a-080f-4c48ef8b9d90",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|92fc4241-3ca8-e81a-080f-4c48ef8b9d90",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19808ccc238
                    },
                    "e-94": {
                        id: "e-94",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-95"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|9a9447c2-ae27-6f80-f241-65d46b2906fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|9a9447c2-ae27-6f80-f241-65d46b2906fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198142593ac
                    },
                    "e-112": {
                        id: "e-112",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-196"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            selector: ".button",
                            originalId: "68667e5f63276a67a260c2dc|f35cf8c7-b3dc-d02d-ef85-d7cc92cf8c1c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button",
                            originalId: "68667e5f63276a67a260c2dc|f35cf8c7-b3dc-d02d-ef85-d7cc92cf8c1c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1981cc6b1a4
                    },
                    "e-113": {
                        id: "e-113",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-195"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            selector: ".button",
                            originalId: "68667e5f63276a67a260c2dc|f35cf8c7-b3dc-d02d-ef85-d7cc92cf8c1c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button",
                            originalId: "68667e5f63276a67a260c2dc|f35cf8c7-b3dc-d02d-ef85-d7cc92cf8c1c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1981cc6b1a4
                    },
                    "e-145": {
                        id: "e-145",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-41",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-146"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".flavors_amazon",
                            originalId: "68667e5f63276a67a260c2dc|26acefd9-c24c-c1da-734b-71f105e836f1",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".flavors_amazon",
                            originalId: "68667e5f63276a67a260c2dc|26acefd9-c24c-c1da-734b-71f105e836f1",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1981d4cfb8e
                    },
                    "e-147": {
                        id: "e-147",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-148"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2df|f7b55352-7dba-def8-1fe0-5645b3a2422b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2df|f7b55352-7dba-def8-1fe0-5645b3a2422b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1982c250934
                    },
                    "e-148": {
                        id: "e-148",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-147"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68667e5f63276a67a260c2df|f7b55352-7dba-def8-1fe0-5645b3a2422b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2df|f7b55352-7dba-def8-1fe0-5645b3a2422b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1982c250934
                    },
                    "e-149": {
                        id: "e-149",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-150"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".is-decoration",
                            originalId: "68667e5f63276a67a260c2dc|264556fb-3b09-a468-e312-002c575f09c4",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".is-decoration",
                            originalId: "68667e5f63276a67a260c2dc|264556fb-3b09-a468-e312-002c575f09c4",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 30,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1982cf3e9ea
                    },
                    "e-151": {
                        id: "e-151",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-152"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".flavors_dropdown-top",
                            originalId: "68667e5f63276a67a260c2dc|df2d153a-7f05-62df-20de-a42ae386893a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".flavors_dropdown-top",
                            originalId: "68667e5f63276a67a260c2dc|df2d153a-7f05-62df-20de-a42ae386893a",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19837380863
                    },
                    "e-152": {
                        id: "e-152",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-40",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-151"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".flavors_dropdown-top",
                            originalId: "68667e5f63276a67a260c2dc|df2d153a-7f05-62df-20de-a42ae386893a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".flavors_dropdown-top",
                            originalId: "68667e5f63276a67a260c2dc|df2d153a-7f05-62df-20de-a42ae386893a",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19837380864
                    },
                    "e-153": {
                        id: "e-153",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-42",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-154"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".flavor_close-btn",
                            originalId: "68667e5f63276a67a260c2dc|192bacfa-d3c6-67e4-d34a-de8867fe6f9a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".flavor_close-btn",
                            originalId: "68667e5f63276a67a260c2dc|192bacfa-d3c6-67e4-d34a-de8867fe6f9a",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19837388b94
                    },
                    "e-154": {
                        id: "e-154",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-42",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-153"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".flavor_close-btn",
                            originalId: "68667e5f63276a67a260c2dc|192bacfa-d3c6-67e4-d34a-de8867fe6f9a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".flavor_close-btn",
                            originalId: "68667e5f63276a67a260c2dc|192bacfa-d3c6-67e4-d34a-de8867fe6f9a",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19837388b95
                    },
                    "e-155": {
                        id: "e-155",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-156"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68810ecf865c864503ebd2a7|7db50be0-ddca-9ae4-09d8-7305ccaae60c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68810ecf865c864503ebd2a7|7db50be0-ddca-9ae4-09d8-7305ccaae60c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1983821e06d
                    },
                    "e-156": {
                        id: "e-156",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-155"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "68810ecf865c864503ebd2a7|7db50be0-ddca-9ae4-09d8-7305ccaae60c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68810ecf865c864503ebd2a7|7db50be0-ddca-9ae4-09d8-7305ccaae60c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1983821e06d
                    },
                    "e-159": {
                        id: "e-159",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-160"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68810ecf865c864503ebd2a7|92fc4241-3ca8-e81a-080f-4c48ef8b9d90",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68810ecf865c864503ebd2a7|92fc4241-3ca8-e81a-080f-4c48ef8b9d90",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1983821e06d
                    },
                    "e-161": {
                        id: "e-161",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-162"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68810ecf865c864503ebd2a7|9a9447c2-ae27-6f80-f241-65d46b2906fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68810ecf865c864503ebd2a7|9a9447c2-ae27-6f80-f241-65d46b2906fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1983821e06d
                    },
                    "e-163": {
                        id: "e-163",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-164"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68810ecf865c864503ebd2a7|02d458d5-62c0-e669-40a6-a2bfbe2e7ecc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68810ecf865c864503ebd2a7|02d458d5-62c0-e669-40a6-a2bfbe2e7ecc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1983821e06d
                    },
                    "e-165": {
                        id: "e-165",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-166"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68810ecf865c864503ebd2a7|07fd039f-064e-9350-6a5d-586803f18ffe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68810ecf865c864503ebd2a7|07fd039f-064e-9350-6a5d-586803f18ffe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1983821e06d
                    },
                    "e-167": {
                        id: "e-167",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-168"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68810ecf865c864503ebd2a7|3d60942a-6a4e-fe3c-04d6-5ed1f6fecdb5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68810ecf865c864503ebd2a7|3d60942a-6a4e-fe3c-04d6-5ed1f6fecdb5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1983821e06d
                    },
                    "e-169": {
                        id: "e-169",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-43",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-170"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198387094ed
                    },
                    "e-170": {
                        id: "e-170",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-44",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-169"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198387094ee
                    },
                    "e-171": {
                        id: "e-171",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-172"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|8ca6d36a-e644-348a-aa69-054798bcc154",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|8ca6d36a-e644-348a-aa69-054798bcc154",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1985156c8dd
                    },
                    "e-177": {
                        id: "e-177",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-45",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-178"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "688b5da0f1d0a686a8fe731c|fde9cf80-3acc-60fc-c6b2-677c64618278",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "688b5da0f1d0a686a8fe731c|fde9cf80-3acc-60fc-c6b2-677c64618278",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1986065bbf2
                    },
                    "e-179": {
                        id: "e-179",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-180"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "688b5da0f1d0a686a8fe731c|92fc4241-3ca8-e81a-080f-4c48ef8b9d90",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "688b5da0f1d0a686a8fe731c|92fc4241-3ca8-e81a-080f-4c48ef8b9d90",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1986065bbf2
                    },
                    "e-189": {
                        id: "e-189",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-43",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-190"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "688b5da0f1d0a686a8fe731c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "688b5da0f1d0a686a8fe731c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1986065bbf2
                    },
                    "e-190": {
                        id: "e-190",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-44",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-189"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "688b5da0f1d0a686a8fe731c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "688b5da0f1d0a686a8fe731c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1986065bbf2
                    },
                    "e-199": {
                        id: "e-199",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-200"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "688b5da0f1d0a686a8fe731c|ce75d9b2-b879-1c71-349f-1878514268c7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "688b5da0f1d0a686a8fe731c|ce75d9b2-b879-1c71-349f-1878514268c7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19864f88932
                    },
                    "e-201": {
                        id: "e-201",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-202"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|528d0d0e-6858-55c7-3cca-d13d204a8a9c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|528d0d0e-6858-55c7-3cca-d13d204a8a9c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198650e6aef
                    },
                    "e-203": {
                        id: "e-203",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-204"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|5504e7fa-d411-35d9-50a2-70656dde1b17",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|5504e7fa-d411-35d9-50a2-70656dde1b17",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc8977be4
                    },
                    "e-205": {
                        id: "e-205",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-206"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|b6f0c8cd-5e28-0101-d4f1-e8e4be0ecd43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|b6f0c8cd-5e28-0101-d4f1-e8e4be0ecd43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc899116a
                    },
                    "e-207": {
                        id: "e-207",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-208"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|60791c70-754d-f759-b8cc-42b3d14861ad",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|60791c70-754d-f759-b8cc-42b3d14861ad",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc89efdf8
                    },
                    "e-209": {
                        id: "e-209",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-210"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|2d68d7fa-d64d-11b3-85d6-6b5d7a159529",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|2d68d7fa-d64d-11b3-85d6-6b5d7a159529",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc8c0d18d
                    },
                    "e-211": {
                        id: "e-211",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-212"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|e66064e1-f88b-6608-e2b6-563f2620e1ea",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|e66064e1-f88b-6608-e2b6-563f2620e1ea",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc8c0e3f0
                    },
                    "e-213": {
                        id: "e-213",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-214"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|d2ac2454-00b0-8be2-1e4c-45393c8f400d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|d2ac2454-00b0-8be2-1e4c-45393c8f400d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc8c10635
                    },
                    "e-215": {
                        id: "e-215",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-216"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|dc2cb0d0-3e4d-807a-4320-8bdb581eaff7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|dc2cb0d0-3e4d-807a-4320-8bdb581eaff7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bc8c11015
                    },
                    "e-217": {
                        id: "e-217",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-218"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|f3dac7e3-d93e-ba85-ab08-4513cab2b3b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|f3dac7e3-d93e-ba85-ab08-4513cab2b3b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17ff2437652
                    },
                    "e-219": {
                        id: "e-219",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-52",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-220"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|f3dac7e3-d93e-ba85-ab08-4513cab2b3bf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|f3dac7e3-d93e-ba85-ab08-4513cab2b3bf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17ff2437652
                    },
                    "e-221": {
                        id: "e-221",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-52",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-222"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|f3dac7e3-d93e-ba85-ab08-4513cab2b3c1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|f3dac7e3-d93e-ba85-ab08-4513cab2b3c1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17ff2437652
                    },
                    "e-223": {
                        id: "e-223",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-224"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|4911f834-b455-c234-acf2-8669524462df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|4911f834-b455-c234-acf2-8669524462df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17ff2437652
                    },
                    "e-225": {
                        id: "e-225",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-226"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|4911f834-b455-c234-acf2-8669524462ec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|4911f834-b455-c234-acf2-8669524462ec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17ff2437652
                    },
                    "e-227": {
                        id: "e-227",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-228"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|4911f834-b455-c234-acf2-8669524462ee",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|4911f834-b455-c234-acf2-8669524462ee",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17ff2437652
                    },
                    "e-229": {
                        id: "e-229",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-55",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-230"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|ac807702-498b-66c2-9e30-43b4da7c1574",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|ac807702-498b-66c2-9e30-43b4da7c1574",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17ff23a0991
                    },
                    "e-231": {
                        id: "e-231",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-232"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|ac807702-498b-66c2-9e30-43b4da7c1581",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|ac807702-498b-66c2-9e30-43b4da7c1581",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18fba3db27e
                    },
                    "e-233": {
                        id: "e-233",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-234"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|ac807702-498b-66c2-9e30-43b4da7c1583",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68667e5f63276a67a260c2dc|ac807702-498b-66c2-9e30-43b4da7c1583",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17ff23a0991
                    },
                    "e-235": {
                        id: "e-235",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-236"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68667e5f63276a67a260c2dc|b3f3e806-9361-6dbf-3326-09ae1f72750e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19cd7e3105e
                    }
                },
                actionLists: {
                    a: {
                        id: "a",
                        title: "Button Arrow [Hover]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".icon-arrow",
                                        selectorGuids: ["f4b0efbb-fac9-0505-055d-b414ea5ebfae"]
                                    },
                                    xValue: 100,
                                    yValue: null,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "outQuart",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".icon-arrow-absolute",
                                        selectorGuids: ["0d3dbffb-818a-2486-e6d2-0fc4bbf5a348"]
                                    },
                                    xValue: 100,
                                    yValue: null,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x193cf550103
                    },
                    "a-2": {
                        id: "a-2",
                        title: "Button Arrow [Hover Out]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-2-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".icon-arrow-absolute",
                                        selectorGuids: ["0d3dbffb-818a-2486-e6d2-0fc4bbf5a348"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-2-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "outQuart",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".icon-arrow",
                                        selectorGuids: ["f4b0efbb-fac9-0505-055d-b414ea5ebfae"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x193cf550103
                    },
                    "a-3": {
                        id: "a-3",
                        title: "Dropdown Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-3-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".dropdown-bottom",
                                        selectorGuids: ["f1c48983-361c-1091-8ff4-e8aaad4a371c"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-3-n-9",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-circle.is-small",
                                        selectorGuids: ["eecf8969-46fc-433e-ab3c-78c1f18db309", "0ac6f979-784b-71bb-27df-163d9228c40f"]
                                    },
                                    globalSwatchId: "--base-color-brand--cinamon",
                                    rValue: 216,
                                    bValue: 38,
                                    gValue: 80,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-7",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".dropdown",
                                        selectorGuids: ["f1c48983-361c-1091-8ff4-e8aaad4a3717"]
                                    },
                                    globalSwatchId: "--text-color--text-primary",
                                    rValue: 35,
                                    bValue: 12,
                                    gValue: 16,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-6",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".dropdown",
                                        selectorGuids: ["f1c48983-361c-1091-8ff4-e8aaad4a3717"]
                                    },
                                    globalSwatchId: "--base-color-neutral--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-plus-vertical",
                                        selectorGuids: ["b9d55989-e8a6-3378-4717-8723a19f35cf"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-3-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".dropdown-bottom",
                                        selectorGuids: ["f1c48983-361c-1091-8ff4-e8aaad4a371c"]
                                    },
                                    widthUnit: "PX",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-3-n-12",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-plus-horizontal",
                                        selectorGuids: ["9e97aca1-834b-da02-b15b-37cc4aabe6e5"]
                                    },
                                    globalSwatchId: "--base-color-brand--cinamon",
                                    rValue: 216,
                                    bValue: 38,
                                    gValue: 80,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-11",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-plus-vertical",
                                        selectorGuids: ["b9d55989-e8a6-3378-4717-8723a19f35cf"]
                                    },
                                    globalSwatchId: "--base-color-brand--cinamon",
                                    rValue: 216,
                                    bValue: 38,
                                    gValue: 80,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-10",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-circle.is-small",
                                        selectorGuids: ["eecf8969-46fc-433e-ab3c-78c1f18db309", "0ac6f979-784b-71bb-27df-163d9228c40f"]
                                    },
                                    globalSwatchId: "--base-color-brand--shell",
                                    rValue: 255,
                                    bValue: 238,
                                    gValue: 246,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-5",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".dropdown",
                                        selectorGuids: ["f1c48983-361c-1091-8ff4-e8aaad4a3717"]
                                    },
                                    globalSwatchId: "--base-color-brand--cinamon",
                                    rValue: 216,
                                    bValue: 38,
                                    gValue: 80,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-plus-vertical",
                                        selectorGuids: ["b9d55989-e8a6-3378-4717-8723a19f35cf"]
                                    },
                                    zValue: 90,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-3-n-8",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".dropdown",
                                        selectorGuids: ["f1c48983-361c-1091-8ff4-e8aaad4a3717"]
                                    },
                                    globalSwatchId: "--text-color--text-tertiary",
                                    rValue: 255,
                                    bValue: 238,
                                    gValue: 246,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18ea8836abd
                    },
                    "a-26": {
                        id: "a-26",
                        title: "Dropdown Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-26-n-6",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".dropdown-bottom",
                                        selectorGuids: ["f1c48983-361c-1091-8ff4-e8aaad4a371c"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-26-n-7",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-plus-horizontal",
                                        selectorGuids: ["9e97aca1-834b-da02-b15b-37cc4aabe6e5"]
                                    },
                                    globalSwatchId: "--base-color-neutral--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-26-n-8",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-plus-vertical",
                                        selectorGuids: ["b9d55989-e8a6-3378-4717-8723a19f35cf"]
                                    },
                                    globalSwatchId: "--base-color-neutral--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-26-n-9",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-circle.is-small",
                                        selectorGuids: ["eecf8969-46fc-433e-ab3c-78c1f18db309", "0ac6f979-784b-71bb-27df-163d9228c40f"]
                                    },
                                    globalSwatchId: "--base-color-brand--cinamon",
                                    rValue: 216,
                                    bValue: 38,
                                    gValue: 80,
                                    aValue: 1
                                }
                            }, {
                                id: "a-26-n-10",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".dropdown",
                                        selectorGuids: ["f1c48983-361c-1091-8ff4-e8aaad4a3717"]
                                    },
                                    globalSwatchId: "--base-color-neutral--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-26-n-11",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-plus-vertical",
                                        selectorGuids: ["b9d55989-e8a6-3378-4717-8723a19f35cf"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-26-n-12",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".dropdown",
                                        selectorGuids: ["f1c48983-361c-1091-8ff4-e8aaad4a3717"]
                                    },
                                    globalSwatchId: "--text-color--text-primary",
                                    rValue: 35,
                                    bValue: 12,
                                    gValue: 16,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x18ea8836abd
                    },
                    "a-23": {
                        id: "a-23",
                        title: "Float",
                        continuousParameterGroups: [{
                            id: "a-23-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-23-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "68667e5f63276a67a260c2dc|0ca30ebd-432d-02a3-da78-29f726738e7c"
                                        },
                                        yValue: 50,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-23-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "68667e5f63276a67a260c2dc|0ca30ebd-432d-02a3-da78-29f726738e7c"
                                        },
                                        yValue: -50,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x197f370b175
                    },
                    "a-27": {
                        id: "a-27",
                        title: "Menu [Open]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-27-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu-bg",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c5d"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }, {
                                id: "a-27-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de107360"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-27-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu-socials",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c6d"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-27-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu-socials",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c6d"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-wrapper",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c64"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-27-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-wrapper",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c64"]
                                    },
                                    yValue: 10,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-27-n-22",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon_line-middle",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de10735b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-27-n-23",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".banner_component",
                                        selectorGuids: ["fcf57e7c-5f3c-65ff-cf5d-e75d59448d0f"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-27-n-21",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon_line-bottom",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de107358"]
                                    },
                                    yValue: null,
                                    zValue: 45,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-27-n-20",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon_line-bottom",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de107358"]
                                    },
                                    yValue: -7,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-19",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon_line-top",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de107361"]
                                    },
                                    zValue: -45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-27-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon_line-top",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de107361"]
                                    },
                                    yValue: 7,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-11",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 700,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu-bg",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c5d"]
                                    },
                                    heightValue: 100,
                                    widthUnit: "PX",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }, {
                                id: "a-27-n-12",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de107360"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-27-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "outCubic",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-wrapper",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c64"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 100,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-wrapper",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c64"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-27-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "easeIn",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu-socials",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c6d"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-27-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "outCubic",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu-socials",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c6d"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17aa29a5e06
                    },
                    "a-28": {
                        id: "a-28",
                        title: "Menu [Close]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-28-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu-socials",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c6d"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-28-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon_line-middle",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de10735b"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-28-n-14",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon_line-bottom",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de107358"]
                                    },
                                    yValue: null,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-28-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon_line-bottom",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de107358"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-28-n-12",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon_line-top",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de107361"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-28-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-icon_line-top",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de107361"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-28-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu-socials",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c6d"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-28-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-wrapper",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c64"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-28-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-wrapper",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c64"]
                                    },
                                    yValue: 10,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-28-n-6",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 100,
                                    easing: [.187, .504, .363, .995],
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu-bg",
                                        selectorGuids: ["f6118f3d-2735-29da-bb8f-0031b9d76c5d"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }, {
                                id: "a-28-n-16",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 450,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".banner_component",
                                        selectorGuids: ["fcf57e7c-5f3c-65ff-cf5d-e75d59448d0f"]
                                    },
                                    widthUnit: "PX",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-28-n-10",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_menu",
                                        selectorGuids: ["f30f0348-fd9b-f8d0-cc69-9819de107360"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17aa29a5e06
                    },
                    "a-35": {
                        id: "a-35",
                        title: "Banner Subscribe [Hide]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-35-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 1e3,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".banner_component",
                                        selectorGuids: ["fcf57e7c-5f3c-65ff-cf5d-e75d59448d0f"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19808a54321
                    },
                    "a-41": {
                        id: "a-41",
                        title: "Amazon",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-41-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".flavors_amazon-form",
                                        selectorGuids: ["323de85e-79b2-6992-0228-edeb07eaa82f"]
                                    },
                                    xValue: 90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-41-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inCubic",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".flavors_amazon",
                                        selectorGuids: ["f07c2cc5-1ec6-d2db-ed73-bb7af554f79b"]
                                    },
                                    xValue: 90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-41-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 600,
                                    easing: "outCubic",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".flavors_amazon-form",
                                        selectorGuids: ["323de85e-79b2-6992-0228-edeb07eaa82f"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19808a54321
                    },
                    "a-24": {
                        id: "a-24",
                        title: "Grow in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-24-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68667e5f63276a67a260c2dc|0ca30ebd-432d-02a3-da78-29f726738e7c"
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-24-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68667e5f63276a67a260c2dc|0ca30ebd-432d-02a3-da78-29f726738e7c"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197f3727e95
                    },
                    "a-39": {
                        id: "a-39",
                        title: "Flavors Dropdown [Open]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-39-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".flavors_dropdown-bottom",
                                        selectorGuids: ["5cffd952-0e78-d8cf-162a-691926972475"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-39-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".flavors_info-main",
                                        selectorGuids: ["16e4a773-254c-f3ca-96af-afe7577c943f"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-39-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 450,
                                    easing: "outCubic",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".flavors_dropdown-bottom",
                                        selectorGuids: ["5cffd952-0e78-d8cf-162a-691926972475"]
                                    },
                                    widthUnit: "PX",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-39-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 450,
                                    easing: "outCubic",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".flavors_dropdown-button",
                                        selectorGuids: ["af4bcc23-138b-d593-29a9-ecb0e257e2cc"]
                                    },
                                    zValue: 45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19817fdab94
                    },
                    "a-40": {
                        id: "a-40",
                        title: "Flavors Dropdown [Close]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-40-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".flavors_dropdown-bottom",
                                        selectorGuids: ["5cffd952-0e78-d8cf-162a-691926972475"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-40-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".flavors_dropdown-button",
                                        selectorGuids: ["af4bcc23-138b-d593-29a9-ecb0e257e2cc"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-40-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 500,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".flavors_info-main",
                                        selectorGuids: ["16e4a773-254c-f3ca-96af-afe7577c943f"]
                                    },
                                    widthUnit: "PX",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19817fdab94
                    },
                    "a-42": {
                        id: "a-42",
                        title: "Flavors Dropdown [Button - Close]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-42-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 600,
                                    easing: "outCubic",
                                    duration: 0,
                                    target: {
                                        selector: ".flavors_dropdown-bottom",
                                        selectorGuids: ["5cffd952-0e78-d8cf-162a-691926972475"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-42-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 600,
                                    easing: "outCubic",
                                    duration: 0,
                                    target: {
                                        selector: ".flavors_dropdown-button",
                                        selectorGuids: ["af4bcc23-138b-d593-29a9-ecb0e257e2cc"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-42-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 600,
                                    easing: "outCubic",
                                    duration: 0,
                                    target: {
                                        selector: ".flavors_info-main",
                                        selectorGuids: ["16e4a773-254c-f3ca-96af-afe7577c943f"]
                                    },
                                    widthUnit: "PX",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19817fdab94
                    },
                    "a-43": {
                        id: "a-43",
                        title: "Navbar [Down]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-43-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        selector: ".nav_fixed",
                                        selectorGuids: ["6f91a67f-793d-3c49-b9fd-ccca32f22e4a"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19837f8a520
                    },
                    "a-44": {
                        id: "a-44",
                        title: "Navbar [Up]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-44-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        selector: ".nav_fixed",
                                        selectorGuids: ["6f91a67f-793d-3c49-b9fd-ccca32f22e4a"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19837f8a520
                    },
                    "a-45": {
                        id: "a-45",
                        title: "Banner Subscribe [Show]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-45-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".banner_content",
                                        selectorGuids: ["014feb02-02e6-6e77-bd98-ed1aba76983d"]
                                    },
                                    xValue: 0,
                                    yValue: -150,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-45-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCubic",
                                    duration: 500,
                                    target: {
                                        selector: ".banner_content-subscribe",
                                        selectorGuids: ["88fc4623-2397-df58-6238-c47c5e176740"]
                                    },
                                    xValue: null,
                                    yValue: -110,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19808a54321
                    },
                    "a-51": {
                        id: "a-51",
                        title: "Modal 2 [Open]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-51-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "none"
                                }
                            }, {
                                id: "a-51-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    xValue: 100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-51-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-51-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "flex"
                                }
                            }, {
                                id: "a-51-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 500,
                                    target: {},
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-51-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17ed3336a36
                    },
                    "a-52": {
                        id: "a-52",
                        title: "Modal 2 [Close]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-52-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 500,
                                    target: {},
                                    xValue: 100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-52-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-52-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17ed3336a36
                    },
                    "a-53": {
                        id: "a-53",
                        title: "Modal 2 [Open] 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-53-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".modal2_component",
                                        selectorGuids: ["8410fe07-5043-c165-39fd-f4615dbfcbf3"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-53-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".modal2_content-wrapper",
                                        selectorGuids: ["8410fe07-5043-c165-39fd-f4615dbfcbf4"]
                                    },
                                    xValue: 100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-53-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".modal_background-overlay",
                                        selectorGuids: ["8410fe07-5043-c165-39fd-f4615dbfcbf7"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-53-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".modal2_component",
                                        selectorGuids: ["8410fe07-5043-c165-39fd-f4615dbfcbf3"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-53-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 500,
                                    target: {
                                        selector: ".modal2_content-wrapper",
                                        selectorGuids: ["8410fe07-5043-c165-39fd-f4615dbfcbf4"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-53-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        selector: ".modal_background-overlay",
                                        selectorGuids: ["8410fe07-5043-c165-39fd-f4615dbfcbf7"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17ed3336a36
                    },
                    "a-54": {
                        id: "a-54",
                        title: "Modal 2 [Close] 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-54-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 500,
                                    target: {
                                        selector: ".modal2_content-wrapper",
                                        selectorGuids: ["8410fe07-5043-c165-39fd-f4615dbfcbf4"]
                                    },
                                    xValue: 100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        selector: ".modal_background-overlay",
                                        selectorGuids: ["8410fe07-5043-c165-39fd-f4615dbfcbf7"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-54-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".modal2_component",
                                        selectorGuids: ["8410fe07-5043-c165-39fd-f4615dbfcbf3"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17ed3336a36
                    },
                    "a-55": {
                        id: "a-55",
                        title: "Modal 1 [Open]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-55-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".welcome-popup_component",
                                        selectorGuids: ["0c3c61e8-beb3-12c8-bf7a-57915d9ddf93"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-55-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".welcome-popup_component",
                                        selectorGuids: ["0c3c61e8-beb3-12c8-bf7a-57915d9ddf93"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-55-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".welcome-popup_content-wrapper",
                                        selectorGuids: ["0c3c61e8-beb3-12c8-bf7a-57915d9ddf94"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-55-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".welcome-popup_component",
                                        selectorGuids: ["0c3c61e8-beb3-12c8-bf7a-57915d9ddf93"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-55-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        selector: ".welcome-popup_component",
                                        selectorGuids: ["0c3c61e8-beb3-12c8-bf7a-57915d9ddf93"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-55-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        selector: ".welcome-popup_content-wrapper",
                                        selectorGuids: ["0c3c61e8-beb3-12c8-bf7a-57915d9ddf94"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17ed3336a36
                    },
                    "a-56": {
                        id: "a-56",
                        title: "Modal 1 [Close]",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-56-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {
                                        selector: ".welcome-popup_component",
                                        selectorGuids: ["0c3c61e8-beb3-12c8-bf7a-57915d9ddf93"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-56-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".welcome-popup_content-wrapper",
                                        selectorGuids: ["0c3c61e8-beb3-12c8-bf7a-57915d9ddf94"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-56-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".welcome-popup_component",
                                        selectorGuids: ["0c3c61e8-beb3-12c8-bf7a-57915d9ddf93"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17ed3336a36
                    },
                    fadeIn: {
                        id: "fadeIn",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            }), "complete" === document.readyState ? e() : document.addEventListener("readystatechange", () => {
                "complete" === document.readyState && e()
            })
        }
    }
]);