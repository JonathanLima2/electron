module.exports = {
  "packagerConfig": {
    "icon": "./static/icon@2x"
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "electron_quick_start",
      "setupIcon": "./static/favicon.ico",
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "platforms": ["darwin", "linux"],
      "config": {},
    },
    {
      "name": "@electron-forge/maker-deb",
      "config": {
        "options": {
          "icon":"./static/icon@2x.png",
        }
      }
    }
  ]
};