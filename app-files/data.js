var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -2.641225875036543,
        "pitch": 0.5446778006473956,
        "fov": 1.4156058138662186
      },
      "linkHotspots": [
        {
          "yaw": -2.1729387720326123,
          "pitch": 0.3771593911433815,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7242428718486345,
          "pitch": 0.5727500821801321,
          "title": "Title",
          "text": "Desc"
        },
        {
          "yaw": -2.60165658506002,
          "pitch": 0.19923694771202172,
          "title": "Title",
          "text": "Desc"
        }
      ]
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1746,
      "initialViewParameters": {
        "yaw": 0.2576438419610625,
        "pitch": 0.05306152983701651,
        "fov": 1.4156058138662186
      },
      "linkHotspots": [
        {
          "yaw": 0.2576438419610625,
          "pitch": 0.05306152983701651,
          "rotation": 6.283185307179586,
          "target": "2-ue"
        },
        {
          "yaw": 1.423802926330465,
          "pitch": 0.07438870670500108,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ue",
      "name": "ue",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -1.4298626007326618,
        "pitch": -0.1442111405022679,
        "fov": 1.4156058138662186
      },
      "linkHotspots": [
        {
          "yaw": -1.4298626007326618,
          "pitch": -0.1442111405022679,
          "rotation": 0,
          "target": "1-2"
        },
        {
          "yaw": -0.7811784305573344,
          "pitch": -0.15760711941611305,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Manresa360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
